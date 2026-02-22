

import { Router , Route, Routes} from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Home from './pages/Home'
import Layouts from './layouts'
import Products from './pages/Products'
import ShowProducts from './pages/ShowProducts'
import Cart from './pages/Cart'
import Login from './pages/login'
import Signup from './pages/signup'
import CategoryProduct from './pages/CategoryProduct'
import DashBoard from './pages/DashBoard'
import SaveProduct from './pages/SaveProduct'
import { ScrollTop } from './components/ScrollTop'

function App() {
  
  return (
    <>
     <ScrollTop/>
    <Routes>
     
      <Route element={<Layouts/>}>
      <Route path='/' element={<Home/>}/>
      <Route path={`/product`}  element={<Products/>}/>
      <Route path={`/user/:id`}  element={<Cart/>}/>
      <Route  path={`/product/:id`} element={<ShowProducts/>}/>
      <Route path={`/products/:category`}  element={<CategoryProduct/>}/>
      <Route path={"/user/dashboard"}  element={<DashBoard/>}/>
      <Route  path="/users/saveproduct/:id" element={<SaveProduct/>}/>
    </Route>

     <Route path='/login' element={<Login/>} />
     <Route  path='/signup' element={<Signup/>}/>
     </Routes>
    
    </>
  )
}

export default App
