// import { useEffect, useState } from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import {
//   createProduct,
//   updateProduct,
// } from "../../../features/products/ProductsThunk";

// import ProductForm from "./ProductForm";

// const ProductDialog = ({ open, onClose, product, refreshProducts }) => {
//   const dispatch = useDispatch();

//   const initialState = {
//     productCode: "",

//     productName: "",

//     // category
//     category: "",

//     brand: "",

//     description: "",

//     // unit selection
//     unit: "Piece",

//     // variant system
//     selectedVariantTypes: [],

//     productVariants: [],

//     purchasePrice: "",

//     sellingPrice: "",

//     gst: 0,

//     discount: 0,

//     reorderLevel: 5,

//     isFeatured: false,

//     isActive: true,

//     // multiple images
//     images: [],
//   };

//   const [formData, setFormData] = useState(initialState);

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         ...initialState,

//         ...product,

//         category: product.category?._id || product.category || "",

//         productVariants: product.productVariants || [],

//         selectedVariantTypes: product.selectedVariantTypes || [],

//         images: [],
//       });
//     } else {
//       setFormData(initialState);
//     }
//   }, [product]);

//   const handleSubmit = async () => {
//     const data = new FormData();

//     Object.keys(formData).forEach((key) => {
//       if (
//         key !== "images" &&
//         key !== "productVariants" &&
//         key !== "selectedVariantTypes"
//       ) {
//         data.append(
//           key,

//           formData[key],
//         );
//       }
//     });

//     data.append(
//       "selectedVariantTypes",

//       JSON.stringify(formData.selectedVariantTypes),
//     );

//     data.append(
//       "productVariants",

//       JSON.stringify(formData.productVariants),
//     );

//     // Multiple images upload

//     formData.images.forEach((image) => {
//       data.append(
//         "images",

//         image,
//       );
//     });

//     if (product) {
//       await dispatch(
//         updateProduct({
//           id: product._id,

//           data,
//         }),
//       );
//     } else {
//       await dispatch(createProduct(data));
//     }

//     refreshProducts();

//     onClose();
//   };

//   return (
//     <Dialog
//       open={open}

//       onClose={onClose}

//       maxWidth="md"

//       fullWidth
//     >
//       <DialogTitle>{product ? "Edit Product" : "Add Product"}</DialogTitle>

//       <DialogContent>
//         <ProductForm
//           formData={formData}

//           setFormData={setFormData}
//         />
//       </DialogContent>

//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>

//         <Button
//           variant="contained"

//           onClick={handleSubmit}
//         >
//           {product ? "Update" : "Save"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default ProductDialog;
//------------------------------------------------------------------------------------------
// import { useEffect, useState } from "react";

// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Button,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import {
//     createProduct,
//     updateProduct,
// } from "../../../features/products/ProductsThunk";

// import ProductForm from "./ProductForm";


// const ProductDialog = ({
//     open,
//     onClose,
//     product,
//     refreshProducts,
// }) => {


//     const dispatch = useDispatch();



//     const initialState = {

//         productCode: "",

//         productName: "",

//         category: "",

//         brand: "",

//         description: "",


//         purchasePrice: "",

//         sellingPrice: "",


//         gst: 0,

//         discount: 0,


//         reorderLevel: 5,


//         // generated combinations
//         productVariants: [],


//         images: [],


//         isFeatured:false,

//         isActive:true,

//     };



//     const [formData,setFormData] =
//         useState(initialState);





//     useEffect(()=>{


//         if(product){


//             setFormData({

//                 ...initialState,


//                 ...product,


//                 category:
//                     product.category?._id ||
//                     product.category ||
//                     "",



//                 productVariants:
//                     product.productVariants ||
//                     [],



//                 images:[],


//             });


//         }
//         else{


//             setFormData(initialState);


//         }


//     },[product]);









// //     const handleSubmit = async()=>{
// //     console.log("DATA BEFORE SUBMIT:", formData);

// //     useEffect(() => {
// //     console.log("EDIT FORM DATA", formData);
// // }, [formData]);

// //         try{


// //             const data = new FormData();



// //             Object.keys(formData).forEach((key)=>{


// //                 if(
// //                     key !== "images" &&
// //                     key !== "productVariants"
// //                 ){

// //                     data.append(
// //                         key,
// //                         formData[key]
// //                     );

// //                 }


// //             });





// //             // send variants as JSON

// //             data.append(

// //                 "productVariants",

// //                 JSON.stringify(
// //                     formData.productVariants || []
// //                 )

// //             );







// //             // multiple images

// //             if(formData.images?.length){


// //                 formData.images.forEach((image)=>{


// //                     data.append(
// //                         "images",
// //                         image
// //                     );


// //                 });


// //             }






// //             if(product){


// //                 await dispatch(

// //                     updateProduct({

// //                         id:product._id,

// //                         data,

// //                     })

// //                 );


// //             }
// //             else{


// //                 await dispatch(

// //                     createProduct(data)

// //                 );


// //             }





// //             refreshProducts();

// //             onClose();



// //         }
// //         catch(error){

// //             console.log(
// //                 "Product Save Error",
// //                 error
// //             );

// //         }



// //     };

// const handleSubmit = async () => {
//     console.log("DATA BEFORE SUBMIT:", formData);

//     try {

//         const data = new FormData();

//         Object.keys(formData).forEach((key) => {

//             if (
//                 key !== "images" &&
//                 key !== "productVariants"
//             ) {
//                 data.append(key, formData[key]);
//             }

//         });

//         data.append(
//             "productVariants",
//             JSON.stringify(formData.productVariants || [])
//         );

//         if (formData.images?.length) {
//             formData.images.forEach((image) => {
//                 data.append("images", image);
//             });
//         }

//         if (product) {
//             await dispatch(updateProduct({
//                 id: product._id,
//                 data,
//             }));
//         } else {
//             await dispatch(createProduct(data));
//         }

//         refreshProducts();
//         onClose();

//     } catch (error) {
//         console.log("Product Save Error", error);
//     }
// };





//     return (

//         <Dialog

//             open={open}

//             onClose={onClose}

//             maxWidth="md"

//             fullWidth

//         >


//             <DialogTitle>

//                 {
//                     product
//                     ?
//                     "Edit Product"
//                     :
//                     "Add Product"
//                 }

//             </DialogTitle>





//             <DialogContent>


//                 <ProductForm

//                     formData={formData}

//                     setFormData={setFormData}

//                 />


//             </DialogContent>





//             <DialogActions>


//                 <Button

//                     onClick={onClose}

//                 >

//                     Cancel

//                 </Button>





//                 <Button

//                     variant="contained"

//                     onClick={handleSubmit}

//                 >

//                     {
//                         product
//                         ?
//                         "Update"
//                         :
//                         "Save"
//                     }

//                 </Button>


//             </DialogActions>



//         </Dialog>

//     );


// };


// export default ProductDialog;


import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";

import {
  createProduct,
  updateProduct,
} from "../../../features/products/ProductsThunk";

import ProductForm from "./ProductForm";

const initialState = {
  productCode: "",
  productName: "",
  category: "",
  brand: "",
  description: "",
  purchasePrice: "",
  sellingPrice: "",
  gst: 0,
  discount: 0,
  reorderLevel: 0,
  productVariants: [],
  images: [],
  isFeatured: false,
  isActive: true,
};

const ProductDialog = ({
  open,
  onClose,
  product,
  refreshProducts,
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  // Debug
  useEffect(() => {
    console.log("FORM DATA:", formData);
  }, [formData]);

  // Load product or reset form
  useEffect(() => {
    if (!open) return;

    if (product) {
      setFormData({
        ...initialState,
        ...product,
        category: product.category?._id || product.category || "",
        productVariants: product.productVariants || [],
        images: [],
      });
    } else {
      setFormData({
        ...initialState,
      });
    }
  }, [open, product]);

  const handleSubmit = async () => {
    console.log("DATA BEFORE SUBMIT:", formData);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (
          key !== "images" &&
          key !== "productVariants"
        ) {
          data.append(key, value);
        }
      });

      data.append(
        "productVariants",
        JSON.stringify(formData.productVariants || [])
      );

      if (formData.images.length) {
        formData.images.forEach((image) => {
          data.append("images", image);
        });
      }

      let result;

      if (product) {
        result = await dispatch(
          updateProduct({
            id: product._id,
            data,
          })
        );
      } else {
        result = await dispatch(createProduct(data));
      }

      if (result.meta.requestStatus === "fulfilled") {
        refreshProducts();

        onClose();

        setFormData(initialState);
      }
    } catch (error) {
      console.log("Product Save Error:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {product ? "Edit Product" : "Add Product"}
      </DialogTitle>

      <DialogContent>
        <ProductForm
          formData={formData}
          setFormData={setFormData}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {product ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
