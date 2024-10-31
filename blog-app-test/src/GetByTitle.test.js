import {render,screen} from "@testing-library/react";
import GetByTitle from "./GetByTitle";

test("",()=>{
    render(<GetByTitle/>);
    const btn=screen.getByTitle("click");
    expect(btn).toBeInTheDocument();


})