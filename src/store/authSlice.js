import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
    success: false,
    isLoggedIn: false,
    userData:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        Login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userData = action.payload.userData;
        },
        Logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        },
        isSuccess: (state,action) => {
            state.success = action.payload.success;
        }
    }
})

export const { Login, Logout, isSuccess } = authSlice.actions;
// export const selectSuccess = (state) => state?.auth?.success;
// export const selectLogin = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;