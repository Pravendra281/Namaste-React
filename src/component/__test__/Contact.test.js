import {render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
// we can write either test or it ,no differnce 
test("Should load heading inside contact component",()=>{
    render(<Contact/>);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    //for multilpe item we will use all
     //Quering
    //  const heading = screen.getAllByRole("heading");
    //Assertion 
    expect(button).toBeInTheDocument()

});


