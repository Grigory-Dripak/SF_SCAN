import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth: false,
    // ava: '/defAva.svg',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuth = action.payload.isAuth;
        },
        removeUser(state) {
            state.isAuth = false;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;