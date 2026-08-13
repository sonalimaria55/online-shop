


// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Collections from "../components/Collections";
// import FeaturedProducts from "../components/FeaturedProducts";


// import BannerCard from "../components/banner/BannerCard";
// import About from "../components/About";
// import Footer from "../components/Footer";

// const Landing = () => {
//   return (
//     <>
//       <Navbar />

//       <Hero />

//       <Collections />

//       <FeaturedProducts />

//     <BannerCard />

//       <About />

//       <Footer />
//     </>
//   );
// };

// export default Landing;
//-----------------------------------------------------------------

// import { useState } from "react";
// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import Hero from "../components/Hero";
// import Collections from "../components/Collections";
// import FeaturedProducts from "../components/FeaturedProducts";
// import BannerCard from "../components/banner/BannerCard";
// import About from "../components/About";
// import Footer from "../components/Footer";

// import CartDrawer from "../components/cart/CartDrawer";

// const Landing = () => {
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <>
//      <VisitorNavbar onCartClick={() => setCartOpen(true)} />

//       <Hero />

//       <Collections />

//       <FeaturedProducts />

//       <BannerCard />

//       <About />

//       <Footer />

//       <CartDrawer
//         open={cartOpen}
//         onClose={() => setCartOpen(false)}
//       />
//     </>
//   );
// };

// export default Landing;

//----------------------------------------------------------------------

// import Hero from "../components/Hero";
// import Collections from "../components/Collections";
// import FeaturedProducts from "../components/FeaturedProducts";
// import BannerCard from "../components/banner/BannerCard";
// import About from "../components/About";
// import Footer from "../components/Footer";

// const Landing = () => {
//     return (
//         <>
//             <Hero />

//             <Collections />

//             <FeaturedProducts />

//             <BannerCard />

//             <About />

//             <Footer />
//         </>
//     );
// };

// export default Landing;
//---------------------------------------
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import FeaturedProducts from "../components/FeaturedProducts";
import BannerCard from "../components/banner/BannerCard";
import About from "../components/About";

const Landing = () => {
    return (
        <>
            <Hero />

            <Collections />

            <FeaturedProducts />

            <BannerCard />

            <About />
        </>
    );
};

export default Landing;