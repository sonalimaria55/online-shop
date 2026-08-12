const verifyPayment = async (
    customerId,
    paymentData
) => {

    const {
        orderId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
    } = paymentData;

    // ==================================================
    // VALIDATION
    // ==================================================

    if (!customerId) {
        throw new Error(
            "Customer ID is required"
        );
    }

    if (!orderId) {
        throw new Error(
            "Order ID is required"
        );
    }

    if (!razorpayOrderId) {
        throw new Error(
            "Razorpay order ID is required"
        );
    }

    if (!razorpayPaymentId) {
        throw new Error(
            "Razorpay payment ID is required"
        );
    }

    if (!razorpaySignature) {
        throw new Error(
            "Razorpay signature is required"
        );
    }

    // ==================================================
    // FIND ORDER
    // ==================================================

    const order =
        await Order.findOne({
            _id: orderId,
            customer: customerId,
        });

    if (!order) {
        throw new Error(
            "Order not found"
        );
    }

    // ==================================================
    // ALREADY PAID
    // ==================================================

    if (
        order.paymentStatus === "paid"
    ) {
        return order;
    }

    // ==================================================
    // CHECK RAZORPAY ORDER
    // ==================================================

    if (
        order.razorpayOrderId !==
        razorpayOrderId
    ) {
        throw new Error(
            "Razorpay order does not match"
        );
    }

    // ==================================================
    // SECRET
    // ==================================================

    const secret =
        process.env.RAZORPAY_SECRET;

    if (!secret) {
        throw new Error(
            "Razorpay key secret is not configured"
        );
    }

    // ==================================================
    // GENERATE SIGNATURE
    // ==================================================

    const generatedSignature =
        crypto
            .createHmac(
                "sha256",
                secret
            )
            .update(
                `${razorpayOrderId}|${razorpayPaymentId}`
            )
            .digest("hex");

    // ==================================================
    // COMPARE SIGNATURE
    // ==================================================

    const generatedBuffer =
        Buffer.from(
            generatedSignature,
            "utf8"
        );

    const receivedBuffer =
        Buffer.from(
            razorpaySignature,
            "utf8"
        );

    const isValid =
        generatedBuffer.length ===
            receivedBuffer.length &&
        crypto.timingSafeEqual(
            generatedBuffer,
            receivedBuffer
        );

    // ==================================================
    // INVALID PAYMENT
    // ==================================================

    if (!isValid) {

        order.paymentStatus =
            "failed";

        await order.save();

        throw new Error(
            "Payment verification failed"
        );
    }

    // ==================================================
    // PAYMENT SUCCESS
    // ==================================================

    order.paymentStatus =
        "paid";

    order.razorpayPaymentId =
        razorpayPaymentId;

    order.razorpaySignature =
        razorpaySignature;

    order.orderStatus =
        "confirmed";

    await order.save();

    // ==================================================
    // CLEAR CUSTOMER CART
    // ==================================================

    await Cart.findOneAndUpdate(
        {
            customer: customerId,
        },
        {
            $set: {
                items: [],
            },
        }
    );

    // ==================================================
    // RETURN ORDER
    // ==================================================

    return order;
};