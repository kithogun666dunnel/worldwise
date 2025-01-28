import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />} >
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
