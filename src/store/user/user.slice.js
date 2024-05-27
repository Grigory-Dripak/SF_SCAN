import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    user: {},
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})