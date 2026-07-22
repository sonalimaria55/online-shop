// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import App from "./App";
import theme from "./theme/theme.js"  
import store  from "./app/store";
ReactDOM.createRoot(
document.getElementById("root")
)
.render(
<React.StrictMode>
<Provider store={store}>
<ThemeProvider theme={theme}>
<CssBaseline />
<App />
</ThemeProvider>
</Provider>

</React.StrictMode>

);
