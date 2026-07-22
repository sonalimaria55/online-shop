// import {
//   Box,
//   Container,
//   Typography,
//   Button
// } from "@mui/material";


// const About =()=>{

// return(

// <Box
// sx={{
// background:"#FAF8F3",
// py:12
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
// mb:8
// }}
// >
// About SERINA
// </Typography>



// <Box
// sx={{
// display:"grid",
// gridTemplateColumns:{
// xs:"1fr",
// md:"1fr 1fr"
// },
// gap:6,
// alignItems:"center"
// }}
// >



// {/* Image */}

// <Box
// component="img"
// src="/images/about.jpg"
// sx={{
// width:"100%",
// height:"500px",
// objectFit:"cover",
// borderRadius:3
// }}
// />




// {/* Content */}

// <Box>

// <Typography
// sx={{
// fontSize:"28px",
// fontWeight:500,
// mb:3
// }}
// >
// Where Fashion Meets Elegance
// </Typography>



// <Typography
// color="text.secondary"
// sx={{
// lineHeight:2,
// fontSize:"17px"
// }}
// >
// SERINA is a modern boutique created for those
// who appreciate timeless fashion and refined
// craftsmanship.

// Every collection is carefully curated to bring
// together elegance, confidence and individuality.
// </Typography>



// <Button
// variant="outlined"
// sx={{
// mt:4,
// borderColor:"#B08D57",
// color:"#B08D57",
// borderRadius:"30px",
// px:4
// }}
// >
// Discover More
// </Button>


// </Box>


// </Box>


// </Container>


// </Box>

// )

// }


// export default About;

import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";

import aboutImage from "../assets/hero.jpg";


const About =()=>{

return(

<Box
sx={{
background:"#FAF8F3",
py:12
}}
>


<Container maxWidth="lg">


<Typography
textAlign="center"
sx={{
fontSize:{
xs:"32px",
md:"42px"
},
fontWeight:500,
letterSpacing:2,
mb:8
}}
>
About SERINA
</Typography>



<Box
sx={{
display:"grid",
gridTemplateColumns:{
xs:"1fr",
md:"1fr 1fr"
},
gap:6,
alignItems:"center"
}}
>


{/* Image */}

<Box
component="img"
src={aboutImage}
alt="SERINA Boutique"
sx={{
width:"100%",
height:"500px",
objectFit:"cover",
borderRadius:3
}}
/>



{/* Content */}

<Box>

<Typography
sx={{
  fontSize:"28px",
  fontWeight:500,
  mb:3,
  letterSpacing:1
}}
>
  Crafted for Every Style Story
</Typography>


<Typography
color="text.secondary"
sx={{
  lineHeight:2,
  fontSize:"17px"
}}
>
  SERINA brings together contemporary fashion and
  timeless elegance through thoughtfully selected
  collections designed for everyday confidence.

  From classic silhouettes to modern trends, every
  piece reflects simplicity, comfort and individuality.
</Typography>



<Typography
color="text.secondary"
sx={{
lineHeight:2,
fontSize:"17px"
}}
>
SERINA is a modern boutique created for those
who appreciate timeless fashion and refined
craftsmanship.

Every collection is carefully curated to bring
together elegance, confidence and individuality.
</Typography>


<Button
variant="outlined"
sx={{
mt:4,
borderColor:"#B08D57",
color:"#B08D57",
borderRadius:"30px",
px:5,
py:1.2,
letterSpacing:1,
"&:hover":{
 borderColor:"#8C6A3D",
 background:"#B08D57",
 color:"#fff"
}
}}
>
Explore Collection
</Button>


</Box>


</Box>


</Container>


</Box>

)

}


export default About;