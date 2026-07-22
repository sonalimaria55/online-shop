// import { useState, useEffect } from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Stack,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import {
//   createCategory,
//   updateCategory,
// } from "../../features/categories/CategoriesThunk";

// const CategoryDialog = ({
//   open,
//   onClose,
//   category,
// }) => {

//   const dispatch = useDispatch();

//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {

//     if (category) {

//       setCategoryName(category.categoryName);

//     } else {

//       setCategoryName("");

//     }

//   }, [category, open]);



//   const handleSubmit = () => {

//     if (!categoryName.trim()) return;

//     if (category) {

//       dispatch(
//         updateCategory({
//           id: category._id,
//           data: {
//             categoryName,
//           },
//         })
//       );

//     } else {

//       dispatch(
//         createCategory({
//           categoryName,
//         })
//       );

//     }

//     setCategoryName("");

//     onClose();

//   };



//   return (

//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="sm"
//     >

//       <DialogTitle>

//         {category
//           ? "Edit Category"
//           : "Add Category"}

//       </DialogTitle>

//       <DialogContent>

//         <Stack
//           spacing={2}
//           mt={2}
//         >

//           <TextField
//             label="Category Name"
//             value={categoryName}
//             onChange={(e) =>
//               setCategoryName(e.target.value)
//             }
//             fullWidth
//           />

//         </Stack>

//       </DialogContent>

//       <DialogActions>

//         <Button onClick={onClose}>
//           Cancel
//         </Button>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//         >
//           {category ? "Update" : "Save"}
//         </Button>

//       </DialogActions>

//     </Dialog>

//   );

// };

// export default CategoryDialog;
// // ---------------------------------------------------------------------------------
// // import { useEffect, useState } from "react";

// // import {
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Button,
// //   TextField,
// //   Stack,
// //   Box,
// //   Typography,
// // } from "@mui/material";

// // import { useDispatch } from "react-redux";

// // import {
// //   createCategory,
// //   updateCategory,
// // } from "../../features/categories/CategoriesThunk";

// // const initialForm = {
// //   categoryName: "",
// //   image: null,
// // };

// // const CategoryDialog = ({
// //   open,
// //   onClose,
// //   category,
// // }) => {

// //   const dispatch = useDispatch();

// //   const [form, setForm] = useState(initialForm);

// //   const [preview, setPreview] = useState(null);

// //   useEffect(() => {

// //     if (category) {

// //       setForm({
// //         categoryName: category.categoryName || "",
// //         image: null,
// //       });

// //       setPreview(category.image);

// //     } else {

// //       setForm(initialForm);

// //       setPreview(null);

// //     }

// //   }, [category, open]);



// //   const handleChange = (e) => {

// //     setForm({

// //       ...form,

// //       [e.target.name]: e.target.value,

// //     });

// //   };



// //   const handleImage = (e) => {

// //     const file = e.target.files[0];

// //     if (file) {

// //       setForm({

// //         ...form,

// //         image: file,

// //       });

// //       setPreview(URL.createObjectURL(file));

// //     }

// //   };



// //   const handleSubmit = () => {

// //     const data = new FormData();

// //     data.append("categoryName", form.categoryName);

// //     if (form.image) {

// //       data.append("image", form.image);

// //     }

// //     if (category) {

// //       dispatch(
// //         updateCategory({
// //           id: category._id,
// //           data,
// //         })
// //       );

// //     } else {

// //       dispatch(createCategory(data));

// //     }

// //     onClose();

// //   };



// //   return (

// //     <Dialog
// //       open={open}
// //       onClose={onClose}
// //       fullWidth
// //       maxWidth="sm"
// //     >

// //       <DialogTitle>
// //         {category ? "Edit Category" : "Add Category"}
// //       </DialogTitle>

// //       <DialogContent>

// //         <Stack spacing={2} mt={2}>

// //           <TextField
// //             label="Category Name"
// //             name="categoryName"
// //             value={form.categoryName}
// //             onChange={handleChange}
// //             fullWidth
// //           />

// //           <Button
// //             variant="outlined"
// //             component="label"
// //           >
// //             Upload Category Image

// //             <input
// //               hidden
// //               type="file"
// //               accept="image/*"
// //               onChange={handleImage}
// //             />

// //           </Button>

// //           {preview && (

// //             <Box>

// //               <Typography mb={1}>
// //                 Image Preview
// //               </Typography>

// //               <img
// //                 src={preview}
// //                 alt="preview"
// //                 width="120"
// //                 style={{
// //                   borderRadius: 8,
// //                 }}
// //               />

// //             </Box>

// //           )}

// //         </Stack>

// //       </DialogContent>

// //       <DialogActions>

// //         <Button onClick={onClose}>
// //           Cancel
// //         </Button>

// //         <Button
// //           variant="contained"
// //           onClick={handleSubmit}
// //         >
// //           Save
// //         </Button>

// //       </DialogActions>

// //     </Dialog>

// //   );

// // };

// // export default CategoryDialog;
// //--------------------------------

// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
//     Button
// } from "@mui/material";

// import { useEffect, useState } from "react";

// import { useDispatch } from "react-redux";

// import {
//     createCategory,
//     updateCategory
// } from "../../../features/categories/CategoriesThunk";


// const CategoryDialog = ({
//     open,
//     handleClose,
//     editCategory
// }) => {


//     const dispatch = useDispatch();


//     const initialState = {

//         categoryCode:"",
//         name:"",
//         description:""

//     };


//     const [formData,setFormData] =
//         useState(initialState);



//     useEffect(()=>{


//         if(editCategory){

//             setFormData({

//                 categoryCode:
//                     editCategory.categoryCode,

//                 name:
//                     editCategory.name,

//                 description:
//                     editCategory.description || ""

//             });

//         }
//         else{

//             setFormData(initialState);

//         }


//     },[editCategory,open]);




//     const handleChange=(e)=>{

//         setFormData({

//             ...formData,

//             [e.target.name]:
//                 e.target.value

//         });

//     };




//     const handleSubmit=()=>{


//         if(editCategory){


//             dispatch(

//                 updateCategory({

//                     id:editCategory._id,

//                     data:formData

//                 })

//             );


//         }
//         else{


//             dispatch(

//                 createCategory(formData)

//             );


//         }



//         handleClose();


//     };




//     return (

//         <Dialog
//             open={open}
//             onClose={handleClose}
//             fullWidth
//         >


//             <DialogTitle>

//                 {
//                     editCategory
//                     ?
//                     "Edit Category"
//                     :
//                     "Add Category"
//                 }

//             </DialogTitle>



//             <DialogContent>


//                 <TextField

//                     margin="normal"

//                     label="Category Code"

//                     name="categoryCode"

//                     value={
//                         formData.categoryCode
//                     }

//                     onChange={
//                         handleChange
//                     }

//                     fullWidth

//                 />



//                 <TextField

//                     margin="normal"

//                     label="Category Name"

//                     name="name"

//                     value={
//                         formData.name
//                     }

//                     onChange={
//                         handleChange
//                     }

//                     fullWidth

//                 />



//                 <TextField

//                     margin="normal"

//                     label="Description"

//                     name="description"

//                     value={
//                         formData.description
//                     }

//                     onChange={
//                         handleChange
//                     }

//                     multiline

//                     rows={3}

//                     fullWidth

//                 />



//             </DialogContent>




//             <DialogActions>


//                 <Button
//                     onClick={handleClose}
//                 >
//                     Cancel
//                 </Button>


//                 <Button
//                     variant="contained"
//                     onClick={handleSubmit}
//                 >

//                     Save

//                 </Button>



//             </DialogActions>


//         </Dialog>

//     );

// };


// export default CategoryDialog;

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Box,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";

import {
  createCategory,
  updateCategory,
} from "../../features/categories/CategoriesThunk";


const initialForm = {
  categoryName: "",
  image: null,
};


const CategoryDialog = ({
  open,
  onClose,
  category,
}) => {


  const dispatch = useDispatch();


  const [form,setForm] =
      useState(initialForm);


  const [preview,setPreview] =
      useState(null);



  useEffect(()=>{


    if(category){

      setForm({

        categoryName:
          category.categoryName || "",

        image:null

      });


      setPreview(
        category.image || null
      );


    }
    else{

      setForm(initialForm);

      setPreview(null);

    }


  },[category,open]);




  const handleChange=(e)=>{

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });

  };




 const handleImage=(e)=>{

    const file = e.target.files[0];

    console.log("Selected image:", file);

    if(file){

        setForm({
            ...form,
            image:file
        });

        setPreview(
            URL.createObjectURL(file)
        );

    }

};




  const handleSubmit=()=>{


    const data = new FormData();


    data.append(
      "categoryName",
      form.categoryName
    );


    if(form.image){

      data.append(
        "image",
        form.image
      );

    }



    if(category){


      dispatch(

        updateCategory({

          id:category._id,

          data

        })

      );


    }
    else{


      dispatch(
        createCategory(data)
      );


    }



    onClose();


  };




  return (

    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >


      <DialogTitle>

        {
          category
          ?
          "Edit Category"
          :
          "Add Category"
        }

      </DialogTitle>



      <DialogContent>


        <Stack
          spacing={2}
          mt={2}
        >


          <TextField

            label="Category Name"

            name="categoryName"

            value={
              form.categoryName
            }

            onChange={
              handleChange
            }

            fullWidth

          />



          <Button

            variant="outlined"

            component="label"

          >

            Upload Category Image


            <input

              hidden

              type="file"

              accept="image/*"

              onChange={handleImage}

            />

          </Button>



          {
            preview && (

              <Box>

                <Typography>
                  Image Preview
                </Typography>


                <img

                  src={preview}

                  alt="category"

                  width="120"

                  style={{
                    borderRadius:"8px"
                  }}

                />


              </Box>

            )
          }


        </Stack>


      </DialogContent>



      <DialogActions>


        <Button onClick={onClose}>
          Cancel
        </Button>


        <Button

          variant="contained"

          onClick={handleSubmit}

        >

          {
            category
            ?
            "Update"
            :
            "Save"
          }

        </Button>


      </DialogActions>


    </Dialog>

  );

};


export default CategoryDialog;