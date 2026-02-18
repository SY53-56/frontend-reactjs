import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  error: null
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {

    // ✅ ADD PRODUCT
    addCart: (state, action) => {
      const item = action.payload;

      const existingProduct = state.cart.find(
        product => product.id === item.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // ✅ REMOVE PRODUCT COMPLETELY
    removeCart: (state, action) => {
      const { id } = action.payload;

      state.cart = state.cart.filter(item => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // ✅ INCREASE QUANTITY
    increaseCartProduct: (state, action) => {
      const { id } = action.payload;

      const product = state.cart.find(item => item.id === id);

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // ✅ DECREASE QUANTITY
    decreaseProductCart: (state, action) => {
      const { id } = action.payload;

      const product = state.cart.find(item => item.id === id);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    }

  }
});

export const {
  addCart,
  removeCart,
  increaseCartProduct,
  decreaseProductCart
} = cartSlice.actions;

export default cartSlice.reducer;
