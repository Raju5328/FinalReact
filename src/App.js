import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurentCard from "./Components/RestaurentCard";
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Contact from "./Components/Contact";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurentMenu from "./Components/RestaurentMenu";

const App = () =>{
    return(
        <div>
             <Header/>
             <Outlet/>
        </div>
       
    )

}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element :<RestaurentMenu/>
            }
        ]
        
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
