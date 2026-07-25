// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../config/cloudinary");

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "serina/banners",
//     allowed_formats: ["jpg", "jpeg", "png", "webp"],
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;
//------------------------------------------------------------------------

// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const cloudinary = require("../config/cloudinary");


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: "serina/banners",
//         allowed_formats: [
//             "jpg",
//             "jpeg",
//             "png",
//             "webp"
//         ],
//     },
// });


// const upload = multer({
//     storage: storage,
// });


// module.exports = upload;

//-------------------------------------------------------------------------------
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");


const createUpload = (folder) => {


    const storage = new CloudinaryStorage({

        cloudinary,

        params: {

            folder,

            allowed_formats:[
                "jpg",
                "jpeg",
                "png",
                "webp"
            ],

        },

    });



    return multer({

        storage,

        limits:{
            fileSize:5 * 1024 * 1024
        }

    });


};


module.exports = createUpload;