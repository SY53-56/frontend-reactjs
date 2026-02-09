import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, signupThunk } from "./authThunk"
const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  users: JSON.parse(localStorage.getItem("users")) || [],
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
     logout(state){
        state.user = null
      state.loading = true
      sessionStorage.removeItem("user")
    }
  }
  ,
  extraReducers:  builder =>{
    builder.addCase(loginThunk.pending,(state)=>{
     state.loading =  true
   
    })
    .addCase(loginThunk.fulfilled,(state,action)=>{
      state.loading =false
      state.user= action.payload
      state.error = null
    })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(signupThunk.pending , (state)=>{
        state.loading = true
      })
      .addCase(signupThunk.fulfilled , (state ,action)=>{
        state.loading = false
        state.user = action.payload
        state.error = null
      })
       .addCase(signupThunk.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload
      })

  }
    
})

export const { authLogin, authLogout, authSign } = authSlice.actions
export default authSlice.reducer
