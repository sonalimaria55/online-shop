// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Card,
//   CardMedia,
//   IconButton,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";

// import {
//   getCart,
//   updateCart,
//   removeCartItem,
// } from "../../features/cart/CartThunk";


// const Cart = () => {

//   const dispatch = useDispatch();


//   const {
//     items,
//     loading,
//   } = useSelector((state) => state.cart);



//   useEffect(() => {

//     dispatch(getCart());

//   }, [dispatch]);



//   const handleIncrease = (item) => {

//     dispatch(
//       updateCart({
//         productId: item.product,
//         quantity: item.quantity + 1,
//       })
//     );

//   };



//   const handleDecrease = (item) => {

//     if(item.quantity <= 1) return;


//     dispatch(
//       updateCart({
//         productId: item.product,
//         quantity: item.quantity - 1,
//       })
//     );

//   };



//   const handleRemove = (productId)=>{

//     dispatch(removeCartItem(productId));

//   };



//   if(loading){

//     return (
//       <Typography>
//         Loading Cart...
//       </Typography>
//     );

//   }



//   return (

//     <Container sx={{py:5}}>

//       <Typography
//         variant="h4"
//         sx={{
//           mb:4,
//           fontWeight:600
//         }}
//       >
//         Shopping Cart
//       </Typography>



//       {
//         items.length === 0 ? (

//           <Typography>
//             Your cart is empty
//           </Typography>

//         ) : (


//           items.map((item)=>(


//             <Card
//               key={item.product}
//               sx={{
//                 display:"flex",
//                 alignItems:"center",
//                 mb:2,
//                 p:2
//               }}
//             >


//               <CardMedia
//                 component="img"
//                 sx={{
//                   width:100,
//                   height:100,
//                   objectFit:"cover"
//                 }}
//           image={item.product?.image}
//               />



//               <Box sx={{flex:1,ml:3}}>

//                 <Typography>
//                  {item.product?.productName}
//                 </Typography>


//                 <Typography>
//                 ₹ {item.product?.sellingPrice}
//                 </Typography>


//                 <Box
//                   sx={{
//                     display:"flex",
//                     alignItems:"center"
//                   }}
//                 >

//                   <IconButton
//                     onClick={()=>handleDecrease(item)}
//                   >
//                     <RemoveIcon/>
//                   </IconButton>


//                   <Typography>
//                     {item.quantity}
//                   </Typography>


//                   <IconButton
//                     onClick={()=>handleIncrease(item)}
//                   >
//                     <AddIcon/>
//                   </IconButton>


//                 </Box>


//               </Box>



//               <IconButton
//                 onClick={()=>handleRemove(item.product)}
//               >
//                 <DeleteIcon/>
//               </IconButton>


//             </Card>


//           ))

//         )
//       }


//       <Button
//         variant="contained"
//         sx={{
//           mt:3
//         }}
//       >
//         Proceed To Checkout
//       </Button>


//     </Container>

//   );

// };


// export default Cart;
import { useEffect } from "react";

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";

import {
  getCart,
  updateCart,
  removeCartItem,
} from "../../features/cart/CartThunk";


const Cart = () => {

  const dispatch = useDispatch();


  const {
    items = [],
    loading,
  } = useSelector(
    (state) => state.cart
  );



  useEffect(() => {

    dispatch(getCart());

  }, [dispatch]);




  const handleIncrease = (item) => {

    dispatch(
      updateCart({
        productId: item.product._id,
        quantity: item.quantity + 1,
      })
    );

  };




  const handleDecrease = (item) => {

    if (item.quantity <= 1) return;


    dispatch(
      updateCart({
        productId: item.product._id,
        quantity: item.quantity - 1,
      })
    );

  };




  const handleRemove = (productId) => {

    dispatch(
      removeCartItem(productId)
    );

  };





  if (loading) {

    return (

      <Typography
        textAlign="center"
        mt={10}
      >
        Loading Cart...
      </Typography>

    );

  }




  return (

    <Box
      sx={{
        background:"#FAF8F3",
        minHeight:"100vh",
        py:8
      }}
    >

      <Container maxWidth="lg">


        <Typography
          variant="h4"
          sx={{
            mb:5,
            fontWeight:600,
            letterSpacing:2
          }}
        >
          Shopping Cart
        </Typography>





        {
          items.length === 0 ? (

            <Typography>
              Your cart is empty
            </Typography>

          ) : (


            items.map((item)=>(


              <Card

                key={item.product._id}

                sx={{
                  display:"flex",
                  alignItems:"center",
                  mb:3,
                  p:2,
                  borderRadius:2
                }}

              >



                {/* IMAGE */}

                <CardMedia

                  component="img"

                  image={
                    item.product.image ||
                    "/placeholder.jpg"
                  }

                  alt={
                    item.product.productName
                  }


                  sx={{
                    width:120,
                    height:120,
                    objectFit:"cover",
                    borderRadius:2
                  }}

                />





                {/* DETAILS */}


                <Box
                  sx={{
                    flex:1,
                    ml:3
                  }}
                >


                  <Typography
                    fontWeight={600}
                    fontSize={18}
                  >

                    {
                      item.product.productName
                    }

                  </Typography>




                  <Typography
                    color="text.secondary"
                    mt={1}
                  >

                    ₹ {item.product.sellingPrice}

                  </Typography>





                  {/* QUANTITY */}

                  <Box
                    sx={{
                      display:"flex",
                      alignItems:"center",
                      mt:2
                    }}
                  >


                    <IconButton
                      onClick={() =>
                        handleDecrease(item)
                      }
                    >

                      <RemoveIcon/>

                    </IconButton>




                    <Typography
                      sx={{
                        mx:2,
                        fontSize:18
                      }}
                    >

                      {item.quantity}

                    </Typography>





                    <IconButton
                      onClick={() =>
                        handleIncrease(item)
                      }
                    >

                      <AddIcon/>

                    </IconButton>


                  </Box>



                </Box>





                {/* REMOVE */}


                <IconButton

                  onClick={() =>
                    handleRemove(
                      item.product._id
                    )
                  }

                  sx={{
                    color:"red"
                  }}

                >

                  <DeleteIcon/>

                </IconButton>




              </Card>


            ))

          )
        }





        {
          items.length > 0 && (

            <Button

              variant="contained"

              sx={{
                mt:4,
                background:"#B08D57",
                px:5,

                "&:hover":{
                  background:"#967344"
                }

              }}

            >

              Proceed To Checkout

            </Button>

          )
        }



      </Container>


    </Box>

  );

};


export default Cart;