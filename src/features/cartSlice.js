import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

const initialState = {
  cart:   getInitialCart() ,
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

     
    },
    
    // ✅ REMOVE PRODUCT COMPLETELY
    removeCart: (state, action) => {
      const { id } = action.payload;

      state.cart = state.cart.filter(item => item.id !== id);


    },

    // ✅ INCREASE QUANTITY
    increaseCartProduct: (state, action) => {
      const { id } = action.payload;

      const product = state.cart.find(item => item.id === id);

      if (product) {
        product.quantity += 1;
      }


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

    }
    ,
    removeAllcart:(state )=>{
     
       state.cart = []
    }

  }
});

export const {
  addCart,
  removeCart,
  increaseCartProduct,
  decreaseProductCart,
  removeAllcart
} = cartSlice.actions;

export default cartSlice.reducer;
