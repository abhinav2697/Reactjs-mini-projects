import {render,screen} from "@testing-library/react";
import GetByTitle from "./GetByTitle";

test("",()=>{
    render(<GetByTitle/>);
    const btn=screen.getByTitle("click");
    expect(btn).toBeInTheDocument();


})


test("span testing with title attribute ",()=>{
    render(<GetByTitle/>);
    const btn=screen.getAllByTitle("black spade suit");
    for(let i=0;i<btn.length;i++){
    expect(btn[i]).toBeInTheDocument();
    }

})