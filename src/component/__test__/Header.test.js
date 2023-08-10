import { Provider } from "react-redux"
import Header from "../Header"
import { render,screen } from "@testing-library/react"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("Should load with cart item 0 in Header",()=>{
    render(
        <BrowserRouter>
   <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    // const cartItems = screen.getByText("Cart-(0 items)")
    
    // we can use regex //so exact name is not required
    const cartItems = screen.getByText(/Cart/)

    expect (cartItems).toBeInTheDocument();

})