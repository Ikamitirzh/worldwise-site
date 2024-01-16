import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {CitiesProvider} from "./context/CitiesContex"
import {AuthProvider} from "./context/FakeAuthContext"
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City"
import Form from "./components/Form"
import SpinnerFullPage from "./components/SpinnerFullPage"

import { Suspense, lazy } from "react";

// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import Pagenotfound from './pages/Pagenotfound';

const Homepage = lazy(() => import("./pages/Homepage"))
const Product = lazy(() => import("./pages/Product"))
const Pricing = lazy(() => import("./pages/Pricing"))
const Login = lazy(() => import("./pages/Login"))
const AppLayout = lazy(() => import("./pages/Homepage"))
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"))








function App() {


  return (
    <AuthProvider>
    <CitiesProvider>
    <BrowserRouter>
    <Suspense fallback={<SpinnerFullPage />} >
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />

      
        <Route path="/Login" element={<Login />} />
      
      
      <Route path="app" element={
        <ProtectedRoute>
        <AppLayout />
        </ProtectedRoute>
      } >
        <Route index element={<Navigate replace to="cities" />} />
        <Route path="cities" element={<CityList />}/>
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList />}/>
        <Route path="form" element={<Form />}/>
      </Route>
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </CitiesProvider>
    </AuthProvider>
  )
}

export default App

// 5173/app