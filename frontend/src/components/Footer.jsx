// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   IconButton
// } from "@mui/material";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import EmailIcon from "@mui/icons-material/Email";


// const Footer = () => {

// return (

// <Box
// sx={{
// background:"#222",
// color:"#fff",
// py:8
// }}
// >

// <Container maxWidth="lg">

// <Grid
// container
// spacing={5}
// >


// {/* Brand */}

// <Grid item xs={12} md={4}>

// <Typography
// sx={{
// fontSize:"32px",
// letterSpacing:8,
// fontWeight:500,
// mb:2
// }}
// >
// SERINA
// </Typography>


// <Typography
// sx={{
// color:"#ccc",
// lineHeight:1.8
// }}
// >
// Where elegance meets timeless style.
// A boutique experience crafted for modern fashion lovers.
// </Typography>


// <Box sx={{mt:3}}>

// <IconButton sx={{color:"#B08D57"}}>
// <InstagramIcon/>
// </IconButton>


// <IconButton sx={{color:"#B08D57"}}>
// <FacebookIcon/>
// </IconButton>


// <IconButton sx={{color:"#B08D57"}}>
// <EmailIcon/>
// </IconButton>

// </Box>


// </Grid>




// {/* Collections */}

// <Grid item xs={12} md={4}>

// <Typography
// fontWeight={600}
// mb={2}
// >
// Collections
// </Typography>


// <Typography color="#ccc">
// Designer Sarees
// </Typography>

// <Typography color="#ccc">
// Luxury Dresses
// </Typography>

// <Typography color="#ccc">
// Bridal Wear
// </Typography>

// <Typography color="#ccc">
// Jewellery
// </Typography>


// </Grid>




// {/* Contact */}

// <Grid item xs={12} md={4}>


// <Typography
// fontWeight={600}
// mb={2}
// >
// Contact
// </Typography>


// <Typography color="#ccc">
// Email: info@serina.com
// </Typography>


// <Typography color="#ccc">
// Phone: +91 XXXXX XXXXX
// </Typography>


// <Typography color="#ccc">
// Location: Boutique Studio
// </Typography>


// </Grid>



// </Grid>



// <Box
// sx={{
// borderTop:"1px solid #444",
// mt:6,
// pt:3,
// textAlign:"center"
// }}
// >


// <Typography
// color="#aaa"
// fontSize="14px"
// >
// © 2026 SERINA. All Rights Reserved.
// </Typography>


// </Box>


// </Container>


// </Box>

// )

// }


// export default Footer;

import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";


const Footer = () => {

  return (

    <Box
      sx={{
        background:"#222",
        color:"#fff",
        py:6
      }}
    >

      <Container maxWidth="lg">


        <Grid
          container
          spacing={5}
        >


          {/* Brand Section */}

          <Grid item xs={12} md={4}>

            <Typography
              sx={{
                fontSize:"32px",
                fontWeight:500,
                letterSpacing:8,
                mb:2
              }}
            >
              SERINA
            </Typography>


            <Typography
              sx={{
                color:"#ccc",
                lineHeight:1.8
              }}
            >
              Where elegance meets everyday style.
              Crafted for every fashion story.
            </Typography>


            <Typography
              sx={{
                mt:3,
                color:"#ccc"
              }}
            >
              Instagram &nbsp; | &nbsp;
              Facebook &nbsp; | &nbsp;
              Email
            </Typography>


          </Grid>





          {/* Collections */}

          <Grid item xs={12} md={4}>


            <Typography
              sx={{
                fontSize:"20px",
                mb:2,
                letterSpacing:1
              }}
            >
              Collections
            </Typography>



            <Typography
              sx={{
                color:"#ccc",
                mb:1
              }}
            >
              Designer Sarees
            </Typography>


            <Typography
              sx={{
                color:"#ccc",
                mb:1
              }}
            >
              Luxury Dresses
            </Typography>


            <Typography
              sx={{
                color:"#ccc",
                mb:1
              }}
            >
              Bridal Wear
            </Typography>


            <Typography
              sx={{
                color:"#ccc"
              }}
            >
              Accessories
            </Typography>



          </Grid>






          {/* Contact */}

          <Grid item xs={12} md={4}>


            <Typography
              sx={{
                fontSize:"20px",
                mb:2,
                letterSpacing:1
              }}
            >
              Contact
            </Typography>



            <Typography
              sx={{
                color:"#ccc",
                mb:1
              }}
            >
              Email: info@serina.com
            </Typography>


            <Typography
              sx={{
                color:"#ccc",
                mb:1
              }}
            >
              Phone: +91 XXXXX XXXXX
            </Typography>


            <Typography
              sx={{
                color:"#ccc"
              }}
            >
              Location: Boutique Studio
            </Typography>



          </Grid>


        </Grid>





        {/* Bottom Copyright */}


        <Box
          sx={{
            mt:5,
            pt:3,
            borderTop:"1px solid #444",
            textAlign:"center"
          }}
        >

          <Typography
            sx={{
              color:"#aaa",
              fontSize:"14px"
            }}
          >
            © 2026 SERINA. All Rights Reserved.
          </Typography>


        </Box>



      </Container>


    </Box>

  );

};


export default Footer;