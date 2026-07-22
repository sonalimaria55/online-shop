import { createTheme } from "@mui/material/styles";


const theme = createTheme({

palette: {

mode: "light",

primary: {
    main:"#C9A227",
},

secondary:{
    main:"#2F2F2F",
},

background:{

    default:"#FAF8F3",

    paper:"#FFFFFF",

},

text:{

    primary:"#1C1C1C",

    secondary:"#7A7A7A",

}

},


typography:{

fontFamily:
'"Poppins","Roboto",sans-serif',

h1:{
    fontWeight:700,
},

h2:{
    fontWeight:600,
},

}

});


export default theme;

