import {render,screen} from "@testing-library/react";
import GetDisplayValue from "./GetDisplayValue";
test("test case for dislay value",()=>{
    render(<GetDisplayValue/>)
    const input=screen.getByDisplayValue("abhi");
    expect(input).toBeInTheDocument();
})


test("text area case for dislay value",()=>{
    render(<GetDisplayValue/>)
    const textarea=screen.getByDisplayValue("abhinav");
    expect(textarea).toBeInTheDocument();
})