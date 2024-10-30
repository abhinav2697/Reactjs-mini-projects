import {render,screen} from "@testing-library/react";
import GetDisplayValue from "./GetDisplayValue";
// test("test case for dislay value",()=>{
//     render(<GetDisplayValue/>)
//     const input=screen.getByDisplayValue("abhi");
//     expect(input).toBeInTheDocument();
// })

test("test case for dislay value",()=>{
    render(<GetDisplayValue/>)
    const input=screen.getAllByDisplayValue("abhi");
    for(let i=0; i<input.length; i++){
    expect(input[i]).toBeInTheDocument();
    }
})

test("text area case for dislay value",()=>{
    render(<GetDisplayValue/>)
    const textarea=screen.getByDisplayValue("abhinav");
    expect(textarea).toBeInTheDocument();
})

test("radio test case for dislay value",()=>{
    render(<GetDisplayValue/>)
    const radio=screen.getByDisplayValue("mail");
    expect(radio).toBeInTheDocument();
})