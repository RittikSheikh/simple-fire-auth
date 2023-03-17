import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main';
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import AboutUs from './AboutUs';



export const router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<div>something went wrong !</div>, children:[
        {path:'/',element:<Home/>},
        {path:'/home',element:<Home/>},
        {path:'/login',element:<LogIn/>},
        {path:'signup',element:<SignUp/>},
        {path:'about-us',element:<AboutUs/>}
    ]}
]);