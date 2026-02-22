import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, saveProductsThunk, signupThunk } from "./authThunk"

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  saveProducts: JSON.parse(localStorage.getItem("saveProduct")) || [],
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.error = null
      state.loading = false
      sessionStorage.removeItem("user")
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(signupThunk.pending, state => {
        state.loading = true
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(saveProductsThunk.pending, (state)=>{
        state.loading= true
      })
      .addCase(saveProductsThunk.fulfilled, (state,action)=>{
        state.loading = false
        state.saveProducts = action.payload
        state.error= null
      })
      .addCase(saveProductsThunk.rejected, (state,action)=>{
          state.loading = false
        state.error = action.payload
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
