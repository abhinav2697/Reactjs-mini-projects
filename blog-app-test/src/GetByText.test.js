import { render,screen } from "@testing-library/react";
import GetByText from "./GetByText";

test("single button testing",()=>{
    render(<GetByText/>);
    const btn=screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})

test("single p tag testing",()=>{
    render(<GetByText/>);
    const ptag=screen.getByText("P tag testing");
    expect(ptag).toBeInTheDocument();
    expect(ptag).toHaveClass('para');
    expect(ptag).toHaveAttribute('id')

})

// test("single h1 tag testing",()=>{
//     render(<GetByText/>);
//     const head=screen.getByText("h1 test");
//     expect(head).toBeInTheDocument();

// })

test("multiple h1 tag testing",()=>{
    render(<GetByText/>);
    const head=screen.getAllByText("h1 test");
    // expect(head[1]).toBeInTheDocument();
    for(let i=0;i<head.length;i++){
        expect(head[i]).toBeInTheDocument();
    }

})