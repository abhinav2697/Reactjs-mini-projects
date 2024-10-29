import { render,screen,configure } from "@testing-library/react";
import Overriding from "./Overriding";
configure({testIdAttribute:'element-id'})

test("test div with data test id",()=>{
    render(<Overriding/>)
    const divElement = screen.getByTestId("test-div");
    expect(divElement).toBeInTheDocument();
})