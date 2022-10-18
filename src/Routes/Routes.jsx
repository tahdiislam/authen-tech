import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Profile from "../Component/Profile";
import Register from "../Component/Register";
import Wallet from "../Component/Wallet";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '/profile', element: <Profile/>},
    {path: '/wallet', element: <Wallet/>},
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
  ]}
])