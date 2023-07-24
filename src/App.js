import React, { lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import RestaurantMenu from "./component/RestaurantMenu";
import Grocery from "./component/Grocery";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./component/Cart";


const Grocery=lazy(()=>import("./component/Grocery"));

 
const AppLayout=()=>{
     return( 
     <Provider store={appStore}>
     <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
     </div> 
     </Provider>)
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
         path:"/grocery",
         element:(<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>),
      },
      {
         path:"/restaurant/:id",
         element:<RestaurantMenu/>
      },{
         path:"/cart",
         element:<Cart/>
      }
   ]
}

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);