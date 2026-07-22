const bannerService = require("../services/bannerService");
// Create Banner
const createBanner = async (req, res) => {
    try {

        console.log("BODY:", req.body);
        console.log("FILE:", req.file);
        const bannerData = {
            ...req.body,
            image: req.file.path,
            publicId: req.file.filename
        };


        const banner = await bannerService.createBanner(bannerData);
        res.status(201).json({
            success: true,
            message: "Banner created successfully",
            data: banner
        });


    } catch (error) {
        console.error("Banner Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
            error,
        });
    }
};

module.exports = {
    createBanner
};
// Get All Banners (Admin)
const getAllBanners = async (req, res, next) => {
    try {
        const banners = await bannerService.getAllBanners();

        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        next(error);
    }
};

// Get Banner By Id
const getBannerById = async (req, res, next) => {
    try {
        const banner = await bannerService.getBannerById(req.params.id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: banner,
        });
    } catch (error) {
        next(error);
    }
};

// Update Banner
const updateBanner = async (req, res, next) => {
    try {
        const bannerData = {
            ...req.body,
        };

        if (req.file) {
            bannerData.image = req.file.path;
            bannerData.publicId = req.file.filename;
        }

        const banner = await bannerService.updateBanner(
            req.params.id,
            bannerData
        );

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Banner updated successfully.",
            data: banner,
        });
    } catch (error) {
        next(error);
    }
};

// Delete Banner
const deleteBanner = async (req, res, next) => {
    try {
        const banner = await bannerService.deleteBanner(req.params.id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Banner deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

// Change Visibility
const changeVisibility = async (req, res, next) => {
    try {
        const { visibility } = req.body;

        const banner = await bannerService.changeVisibility(
            req.params.id,
            visibility
        );

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Visibility updated successfully.",
            data: banner,
        });
    } catch (error) {
        next(error);
    }
};

// Public Home Banners
const getHomeBanners = async (req, res, next) => {
    try {
        const banners = await bannerService.getHomeBanners();

        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        next(error);
    }
};

// Customer Banners
const getCustomerBanners = async (req, res, next) => {
    try {
        const banners = await bannerService.getCustomerBanners();

        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBanner,
    getAllBanners,
    getBannerById,
    updateBanner,
    deleteBanner,
    changeVisibility,
    getHomeBanners,
    getCustomerBanners,
};