

import { Router , Route, Routes} from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import { lazy } from "react"
import Layouts from './layouts'
import { ScrollTop } from './components/ScrollTop'
import CustomerService from './pages/CustomerService'
import { Toaster } from 'react-hot-toast'
const Home = lazy(() => import("./pages/Home"))
const CategoryProduct = lazy(()=> import("./pages/CategoryProduct"))
const Login = lazy(()=> import("./pages/login"))
const Signup = lazy(()=> import("./pages/signup"))
const Cart = lazy(()=> import("./pages/Cart"))
const SaveProduct = lazy(()=> import("./pages/SaveProduct"))
const SearchPage = lazy(()=> import("./pages/SearchPage"))
const DashBoard = lazy(()=> import("./pages/DashBoard"))
const Products= lazy(()=> import("./pages/Products"))
const ShowProducts = lazy(()=> import("./pages/ShowProducts"))
function App() {
  
  return (
    <>
    <Toaster  position="top-right" reverseOrder={false}/>
     <ScrollTop/>
    <Routes>
     
      <Route element={<Layouts/>}>
      <Route path='/' element={<Home/>}/>
      <Route path={`/product`}  element={<Products/>}/>
      <Route path={`/user/:id`}  element={<Cart/>}/>
      <Route  path={`/product/:id`} element={<ShowProducts/>}/>
      <Route path={`/products/:category`}  element={<CategoryProduct/>}/>
      <Route path={"/user/dashboard/:id"}  element={<DashBoard/>}/>
      <Route  path="/users/saveproduct/:id" element={<SaveProduct/>}/>
      <Route path={`/product/search/:search`} element={<SearchPage/>}/>
      <Route path={`/customerService/:id`} element={<CustomerService/>}/>
    </Route>

     <Route path='/login' element={<Login/>} />
     <Route  path='/signup' element={<Signup/>}/>
     </Routes>
    
    </>
  )
}

export default App
