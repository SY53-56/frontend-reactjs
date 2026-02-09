import { createAsyncThunk,  } from "@reduxjs/toolkit";

import bcrypt from "bcryptjs"
export const signupThunk = createAsyncThunk('/signup', async({ email, password, username }, {rejectWithValue})=>{
    try{
            const users = JSON.parse(localStorage.getItem("users")) || []
         
            const existEmail = await users.find(user=>user.email ===email)
            if(existEmail){
                    return rejectWithValue("Email already exists")
            }
            const hashPassword = await bcrypt.hashSync(password,10)
            let newUSer= {
                id: new Date(),
                username,
                email,
                password:hashPassword
            }
            users.push(newUSer)
            sessionStorage.setItem("user", JSON.stringify(newUSer))
            localStorage.setItem("users",JSON.stringify(newUSer))
            return newUSer
    }catch(e){
        return rejectWithValue(e)
    }
})

export const loginThunk = createAsyncThunk("/login",async({email,password},{rejectWithValue})=>{
    try{
       const users = JSON.parse(localStorage.getItem("users")) || []
       const user = await users.find(u=>u.email ===email)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return rejectWithValue("Invalid email or password")
        sessionStorage("user",JSON.stringify(user))
     return user
    }catch(e){
        return rejectWithValue(e)
    }
})