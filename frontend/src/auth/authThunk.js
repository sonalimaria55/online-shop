import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api/axiosInstance";

import {
    loginSuccess,
    logoutSuccess,
    setUser,
} from "./AuthSlice";


// ======================================================
// LOGIN
// ======================================================

export const loginUser = createAsyncThunk(
    "auth/login",

    async (
        credentials,
        { dispatch, rejectWithValue }
    ) => {

        try {

            const response =
                await axiosInstance.post(
                    "/auth/login",
                    credentials
                );

            const data = response.data;

            if (!data.success) {

                return rejectWithValue(
                    data.message ||
                    "Login failed"
                );

            }

            dispatch(
                loginSuccess({
                    token: data.token,
                    user: data.user,
                })
            );

            return data;

        } catch (error) {

            console.error(
                "LOGIN ERROR:",
                error
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    }
);


// ======================================================
// GET PROFILE
// ======================================================

export const getProfile = createAsyncThunk(
    "auth/profile",

    async (
        _,
        { dispatch, rejectWithValue }
    ) => {

        try {

            const response =
                await axiosInstance.get(
                    "/auth/profile"
                );

            const data = response.data;

            if (!data.success) {

                return rejectWithValue(
                    data.message ||
                    "Failed to get profile"
                );
            }

            dispatch(
                setUser(data.user)
            );

            return data.user;

        } catch (error) {

            console.error(
                "PROFILE ERROR:",
                error
            );

            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to get profile"
            );
        }
    }
);


// ======================================================
// LOGOUT
// ======================================================

export const logoutUser = createAsyncThunk(
    "auth/logout",

    async (_, { dispatch }) => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch(
            logoutSuccess()
        );

        return true;
    }
);