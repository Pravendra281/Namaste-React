import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import RestaurantMenu from "./component/RestaurantMenu";

 
const AppLayout=()=>{
     return <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
     </div> 
}
 
const appRouter=createBrowserRouter([
{
   path:"/",
   element:<AppLayout/>,
   errorElement:<Error/>,
   children:[
      {
         path:"/",
         element:<Body/>
      },
      {
         path:"/about",
         element:<About/>
      },
      {
         path:"/contact",
         element:<Contact/>
      },
      {
         path:"/restaurant/:id",
         element:<RestaurantMenu/>
      }
   ]
}

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);