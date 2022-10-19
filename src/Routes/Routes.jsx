import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Profile from "../Component/Profile";
import Register from "../Component/Register";
import Wallet from "../Component/Wallet";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    { path: '*', element: <ErrorPage />, },
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '/profile', element: <PrivateRoute><Profile/></PrivateRoute>},
    {path: '/wallet', element: <PrivateRoute><Wallet/></PrivateRoute>},
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
  ]}
])