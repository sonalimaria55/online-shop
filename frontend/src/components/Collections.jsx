// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent
// } from "@mui/material";


// const collections = [
//   {
//     title:"Sarees",
//     image:"/images/saree.jpg"
//   },
//   {
//     title:" Dresses",
//     image:"/images/dresses.jpg"
//   },
//   {
//     title:"Bridal Collection",
//     image:"/images/bridal.jpg"
//   },
//   {
//     title:"Jewellery",
//     image:"/images/jewellery.jpg"
//   },
//   {
//     title:"Accessories",
//     image:"/images/accessories.jpg"
//   },
//   {
//     title:"Festival Wear+",
//     image:"/images/festive.jpg"
//   }
// ];


// const Collections =()=>{

// return(

// <Box
// sx={{
// background:"#FFFFFF",
// py:10
// }}
// >


// <Container maxWidth="lg">


// <Typography
// textAlign="center"
// sx={{
// fontSize:{
// xs:"32px",
// md:"42px"
// },
// fontWeight:500,
// letterSpacing:2,
// mb:6
// }}
// >
// Our Collections
// </Typography>



// <Box
// sx={{
// display:"grid",
// gridTemplateColumns:{
// xs:"1fr",
// sm:"repeat(2,1fr)",
// md:"repeat(3,1fr)"
// },
// gap:4
// }}
// >


// {
// collections.map((item,index)=>(

// <Card
// key={index}
// sx={{
// borderRadius:3,
// boxShadow:"0 10px 30px rgba(0,0,0,0.08)",
// overflow:"hidden",

// "&:hover":{
// transform:"translateY(-8px)",
// transition:"0.3s"
// }

// }}
// >


// <CardMedia
// component="img"
// height="300"
// image={item.image}
// alt={item.title}
// />


// <CardContent
// sx={{
// textAlign:"center",
// py:3
// }}
// >

// <Typography
// fontWeight={600}
// fontSize="18px"
// >
// {item.title}
// </Typography>


// </CardContent>


// </Card>


// ))
// }


// </Box>


// </Container>


// </Box>

// )

// }


// export default Collections;
//----------------------------------------------

// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
// } from "@mui/material";


// const collections = [
//   {
//     name: "Sarees",
//     image: "/collections/saree.jpg",
//   },
//   {
//     name: "Dresses",
//     image: "/collections/dress.jpg",
//   },
//   {
//     name: "Bridal Collection",
//     image: "/collections/bridal.jpg",
//   },
//   {
//     name: "Jewellery",
//     image: "/collections/jewellery.jpg",
//   },
//   {
//     name: "Accessories",
//     image: "/collections/accessories.jpg",
//   },
//   {
//     name: "Festive Wear",
//     image: "/collections/festive.jpg",
//   },
// ];


// const Collections = () => {

//   return (

//     <Box
//       sx={{
//         py:10,
//         background:"#faf8f3"
//       }}
//     >

//       <Container maxWidth="lg">

//         <Typography
//           textAlign="center"
//           sx={{
//             fontSize:{
//               xs:"32px",
//               md:"45px"
//             },
//             letterSpacing:5,
//             fontWeight:500,
//             mb:6
//           }}
//         >
//           OUR COLLECTIONS
//         </Typography>


//         <Box
//           sx={{
//             display:"grid",
//             gridTemplateColumns:{
//               xs:"1fr",
//               sm:"repeat(2,1fr)",
//               md:"repeat(3,1fr)"
//             },
//             gap:3
//           }}
//         >

//           {
//             collections.map((item)=>(

//               <Card
//                 key={item.name}

//                 sx={{
//                   borderRadius:0,
//                   boxShadow:"none",
//                   overflow:"hidden",
//                   cursor:"pointer",

//                   "&:hover img":{
//                     transform:"scale(1.05)"
//                   }
//                 }}
//               >

//                 <CardMedia
//                   component="img"
//                   image={item.image}
//                   alt={item.name}

//                   sx={{
//                     height:280,
//                     transition:"0.5s"
//                   }}
//                 />


//                 <Typography
//                   textAlign="center"

//                   sx={{
//                     py:2,
//                     fontSize:"20px",
//                     letterSpacing:2
//                   }}
//                 >
//                   {item.name}
//                 </Typography>


//               </Card>

//             ))
//           }


//         </Box>


//       </Container>


//     </Box>

//   );

// };


// export default Collections;


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
} from "@mui/material";

import { getCategories } from "../features/categories/CategoriesThunk";

const Collections = () => {
  const dispatch = useDispatch();

  const { categories = [] } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box
      sx={{
        py: 10,
        background: "#faf8f3",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          sx={{
            fontSize: {
              xs: "32px",
              md: "45px",
            },
            letterSpacing: 5,
            fontWeight: 500,
            mb: 6,
          }}
        >
          OUR COLLECTIONS
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            },
            gap: 3,
          }}
        >
          {categories.map((item) => (
            <Card
              key={item._id}
              sx={{
                borderRadius: 0,
                boxShadow: "none",
                overflow: "hidden",
                cursor: "pointer",

                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.categoryName}
                sx={{
                  height: 280,
                  objectFit: "cover",
                  transition: "0.5s",
                }}
              />

              <Typography
                textAlign="center"
                sx={{
                  py: 2,
                  fontSize: "20px",
                  letterSpacing: 2,
                }}
              >
                {item.categoryName}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Collections;