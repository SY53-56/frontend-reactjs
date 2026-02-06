import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  users: JSON.parse(localStorage.getItem("users")) || [],
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    authLogin(state, action) {
      state.loading = true
      const users = JSON.parse(localStorage.getItem("users")) || []
      const { email, password } = action.payload

      const matchUser = users.find(
        item => item.email === email && item.password === password
      )

      if (matchUser) {
        state.user = matchUser
        state.error = null
        sessionStorage.setItem("user", JSON.stringify(matchUser))
      } else {
        state.user = null
        state.error = "Invalid email or password"
      }
      state.loading = false
    },

    // SIGNUP
    authSign(state, action) {
      state.loading = true
      const users = JSON.parse(localStorage.getItem("users")) || []
      const { email } = action.payload

      const existEmail = users.find(item => item.email === email)

      if (existEmail) {
        state.error = "Email has already been registered"
        state.loading = false
      } else {
        // Add unique ID
        const newUser = { id: Date.now(), ...action.payload }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        state.user = newUser
        sessionStorage.setItem("user", JSON.stringify(newUser))

        state.error = null
        state.loading = false
      }
    },

    // LOGOUT
    authLogout(state) {
      state.user = null
      sessionStorage.removeItem("user")
      state.loading = false
    }
  }
})

export const { authLogin, authLogout, authSign } = authSlice.actions
export default authSlice.reducer
