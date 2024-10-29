import {render,screen} from "@testing-library/react"
import GetByTestId from "./GetByTestId"

test("testing with test id",()=>{
    render(<GetByTestId/>);
    const divId=screen.getAllByTestId("div-test-id");
    for(let i=0;i<divId.length;i++){
        expect(divId[i]).toBeInTheDocument(); 
    }
   
})


test("testing h2 with test id",()=>{
    render(<GetByTestId/>);
    const divId=screen.getByTestId("h2-test-id");
    expect(divId).toBeInTheDocument(); 
})