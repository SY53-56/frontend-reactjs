import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const productsThunk = createAsyncThunk( "product/data",async(_,{rejectWithValue})=>{
    try{
        const res = await axios.get(`https://dummyjson.com/products?limit=${10}`)
        console.log("data new ",res.data.products)
        console.time("API");
        console.timeEnd("API");
        return res.data.products
        
    }catch(e){
        return rejectWithValue(e)
    }
})

export const singleProduct = createAsyncThunk("product/single", async(id,{rejectWithValue})=>{
   try{
   const res= await axios.get(`https://dummyjson.com/products/${id}`)
    return res.data
   }catch(e){
    return rejectWithValue(e)
   }
})
export const categoryProduct = createAsyncThunk("products/category",async(product,{rejectWithValue})=>{
    try{
   const res = await axios.get(`https://dummyjson.com/products/category/${product}`)
     return res.data.products
    }catch(e){
    return rejectWithValue(e)
    }
})