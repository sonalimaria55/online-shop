import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

let user = null;

try {
    user = storedUser
        ? JSON.parse(storedUser)
        : null;
} catch {
    user = null;
}

const initialState = {
    user,
    token,
    isAuthenticated: !!token && !!user,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {

        loginSuccess: (state, action) => {

            const {
                token,
                user,
            } = action.payload;

            state.token = token;
            state.user = user;
            state.isAuthenticated = true;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
        },

        logoutSuccess: (state) => {

            state.token = null;
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },

        setUser: (state, action) => {

            state.user = action.payload;
            state.isAuthenticated =
                !!state.token && !!action.payload;

            localStorage.setItem(
                "user",
                JSON.stringify(action.payload)
            );
        },

    },
});

export const {
    loginSuccess,
    logoutSuccess,
    setUser,
} = authSlice.actions;

export default authSlice.reducer;