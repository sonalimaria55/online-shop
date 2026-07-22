

import {
  Box,
  Typography,
  Container,
} from "@mui/material";

import VisitorNavbar from "../components/navbar/VisitorNavbar";
import Footer from "../components/Footer";


const About = () => {

  return (
    <>
      <VisitorNavbar/>


      <Box
        sx={{
          py: 10,
          background: "#faf8f3"
        }}
      >

        <Container>

          <Typography
            textAlign="center"
            sx={{
              fontSize: "45px",
              letterSpacing: 5
            }}
          >
            ABOUT SERINA
          </Typography>


          <Typography
            sx={{
              mt: 4,
              lineHeight: 2
            }}
          >
            SERINA brings together contemporary fashion
            and timeless elegance. Every collection is
            crafted with attention to detail and style.
          </Typography>


        </Container>

      </Box>


      <Footer />

    </>
  )

}


export default About;