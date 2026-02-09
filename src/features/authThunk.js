import { createAsyncThunk } from "@reduxjs/toolkit"
import bcrypt from "bcryptjs"

// SIGNUP
export const signupThunk = createAsyncThunk(
  "auth/signup",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      if (!email || !password) {
        return rejectWithValue("Email and password are required")
      }

      const users = JSON.parse(localStorage.getItem("users")) || []

      const existEmail = users.find(user => user.email === email)
      if (existEmail) {
        return rejectWithValue("Email already exists")
      }

      const hashPassword = bcrypt.hashSync(password, 10)

      const newUser = {
        id: Date.now(),
        username,
        email,
        password: hashPassword
      }

      users.push(newUser)

      localStorage.setItem("users", JSON.stringify(users))
      sessionStorage.setItem("user", JSON.stringify(newUser))

      return newUser
    } catch (e) {
      return rejectWithValue("Signup failed")
    }
  }
)

// LOGIN
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || []

      const user = users.find(u => u.email === email)
      if (!user) {
        return rejectWithValue("Invalid email or password")
      }

      const isMatch = bcrypt.compareSync(password, user.password)
      if (!isMatch) {
        return rejectWithValue("Invalid email or password")
      }

      sessionStorage.setItem("user", JSON.stringify(user))
      return user
    } catch (e) {
      return rejectWithValue("Login failed")
    }
  }
)
