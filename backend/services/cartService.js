const Cart = require("../models/Cart");


// Find cart by customer or guest
// const findCart = async (owner) => {

//     let cart;


//     if (owner.customer) {

//         cart = await Cart.findOne({
//             customer: owner.customer
//         });

//     }
//     else if (owner.guestId) {

//         cart = await Cart.findOne({
//             guestId: owner.guestId
//         });

//     }


//     return cart.populate(
//         "items.product",
//         "productName sellingPrice image sku"
//     );

// };

const findCart = async (owner) => {

    let cart;


    if (owner.customer) {

        cart = await Cart.findOne({
            customer: owner.customer
        });

    } else if (owner.guestId) {

        cart = await Cart.findOne({
            guestId: owner.guestId
        });

    }


    if (!cart) {
        return null;
    }


    await cart.populate(
        "items.product",
        "productName sellingPrice image sku"
    );


    return cart;

};


// ===============================
// Add To Cart
// ===============================
const addToCart = async (owner, productId, quantity = 1) => {

    let cart = await findCart(owner);

    if (!cart) {

        cart = await Cart.create({
            customer: owner.customer || null,
            guestId: owner.guestId || null,
            items: [
                {
                    product: productId,
                    quantity: Number(quantity)
                }
            ]
        });

        await cart.populate(
            "items.product",
            "productName sellingPrice image sku"
        );

        return cart;
    }

    console.log("=========== CART ITEMS ===========");

    cart.items.forEach((item, index) => {
        console.log("ITEM", index);
        console.log("item.product =", item.product);
        console.log(
            "product id =",
            item.product._id
                ? item.product._id.toString()
                : item.product.toString()
        );
        console.log("quantity =", item.quantity);
    });

    console.log("Incoming Product:", productId);

    const itemIndex = cart.items.findIndex((item) => {

        const existingId = item.product._id
            ? item.product._id.toString()
            : item.product.toString();

        console.log("COMPARE", existingId, "==", productId);

        return existingId === productId;
    });

    console.log("FOUND INDEX:", itemIndex);

    if (itemIndex > -1) {

        console.log("Increasing quantity...");

        cart.items[itemIndex].quantity += Number(quantity);

    } else {

        console.log("Adding new product...");

        cart.items.push({
            product: productId,
            quantity: Number(quantity)
        });

    }

    await cart.save();

    await cart.populate(
        "items.product",
        "productName sellingPrice image sku"
    );

    console.log("FINAL CART:", cart.items);

    return cart;
};


// ===============================
// Get Cart
// ===============================
const getCart = async (owner) => {

    const cart = await findCart(owner);


    if (!cart) {

        return {
            items: []
        };

    }


    return cart.populate(
        "items.product",
        "productName sellingPrice image sku"
    );

};



// ===============================
// Update Quantity
// ===============================
// const updateCartQuantity = async (
//     owner,
//     productId,
//     quantity
// ) => {


//     const cart = await findCart(owner);


//     if (!cart) {

//         throw new Error("Cart not found");

//     }



//     const item = cart.items.find(
//         item =>
//             item.product.toString() === productId
//     );


//     if (!item) {

//         throw new Error("Product not in cart");

//     }


//     item.quantity = quantity;


//     await cart.save();


//     return cart;

// };
const updateCartQuantity = async (
    owner,
    productId,
    quantity
) => {


    const cart = await findCart(owner);


    if (!cart) {

        throw new Error("Cart not found");

    }


const item = cart.items.find((item) => {
    const id = item.product._id
        ? item.product._id.toString()
        : item.product.toString();

    return id === productId;
});


    if (!item) {

        throw new Error("Product not in cart");

    }


    item.quantity = quantity;


    await cart.save();


    return cart;

};



// ===============================
// Remove Item
// ===============================
const removeFromCart = async (
    owner,
    productId
) => {


    const cart = await findCart(owner);


    if (!cart) {

        throw new Error("Cart not found");

    }


cart.items = cart.items.filter((item) => {
    const id = item.product._id
        ? item.product._id.toString()
        : item.product.toString();

    return id !== productId;
});


    await cart.save();


    return cart.populate(
        "items.product",
        "productName sellingPrice image sku"
    );

};



// ===============================
// Clear Cart
// ===============================
const clearCart = async (owner) => {


    const cart = await findCart(owner);


    if (cart) {

        cart.items = [];

        await cart.save();

    }


    return cart;

}
// ===============================
// Merge Guest Cart
// ===============================
const mergeGuestCart = async (
    guestId,
    customerId
) => {


    const guestCart = await Cart.findOne({
        guestId
    });


    if (!guestCart) {
        return null;
    }



    let customerCart = await Cart.findOne({
        customer: customerId
    });



    if (!customerCart) {

        customerCart = await Cart.create({

            customer: customerId,
            guestId: null,
            items: guestCart.items

        });


    }
else {

    guestCart.items.forEach((guestItem) => {

        const existing = customerCart.items.find((item) => {

            const customerProductId = item.product._id
                ? item.product._id.toString()
                : item.product.toString();

            const guestProductId = guestItem.product._id
                ? guestItem.product._id.toString()
                : guestItem.product.toString();

            return customerProductId === guestProductId;
        });

        if (existing) {

            existing.quantity += guestItem.quantity;

        } else {

            customerCart.items.push({
                product: guestItem.product,
                quantity: guestItem.quantity,
            });

        }

    });

    await customerCart.save();
}


// Delete guest cart
await Cart.deleteOne({
    guestId,
});


// Populate products
await customerCart.populate(
    "items.product",
    "productName sellingPrice image sku"
);


return customerCart;

};

module.exports = {

    addToCart,
    getCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    mergeGuestCart

};