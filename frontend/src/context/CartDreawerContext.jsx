import {
    createContext,
    useContext,
    useState,
} from "react";


const CartDrawerContext = createContext(null);


// ============================================
// PROVIDER
// ============================================

export const CartDrawerProvider = ({
    children,
}) => {

    const [
        cartOpen,
        setCartOpen,
    ] = useState(false);


    const openCart = () => {

        setCartOpen(true);

    };


    const closeCart = () => {

        setCartOpen(false);

    };


    return (

        <CartDrawerContext.Provider
            value={{
                cartOpen,
                openCart,
                closeCart,
            }}
        >

            {children}

        </CartDrawerContext.Provider>

    );
};


// ============================================
// HOOK
// ============================================

export const useCartDrawer = () => {

    const context =
        useContext(CartDrawerContext);


    if (!context) {

        throw new Error(
            "useCartDrawer must be used inside CartDrawerProvider"
        );

    }


    return context;
};