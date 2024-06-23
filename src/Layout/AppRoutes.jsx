/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../pages/Login.jsx";
import RegisterForm from "../pages/Register.jsx";
import Layout from "../Layout/Layout.jsx";
import MyPosts from "../pages/MyPosts.jsx";
import Profile from "../pages/Profile.jsx";
import Home from "../pages/Home.jsx";

const ProtectedRoute = ({element}) => {
 
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  if(isLoggedIn){
    return element;
  }
  return(
    <Navigate to="/login" />
  )
}

const AppRouter = () => {
    return(
          <BrowserRouter>
          <Routes> 
            <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
            <Route index  element={<Home />} />
            <Route path="my-posts" element={<MyPosts />} />
            <Route path="profile"  element={<Profile />} />
            </Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register"  element={<RegisterForm />} />
          </Routes>
          </BrowserRouter>
    )
}

export default AppRouter;