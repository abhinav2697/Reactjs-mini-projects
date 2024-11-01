import {render,screen} from "@testing-library/react";
import Regex from "./Regex";

// test("text match with string",()=>{
//     render(<Regex/>)
//     const div=screen.getByText("Hello",{exact:false});
//     expect(div).toBeInTheDocument();
// })


test("text match with string1",()=>{
    render(<Regex/>)
    // const div=screen.getByText(/Hello/);
    // const div=screen.getByText(/lo World/);
    expect(div).toBeInTheDocument();
})