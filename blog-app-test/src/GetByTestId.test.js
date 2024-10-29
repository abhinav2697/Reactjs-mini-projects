import {render,screen} from "@testing-library/react"
import GetByTestId from "./GetByTestId"

test("testing with test id",()=>{
    render(<GetByTestId/>);
    const divId=screen.getByTestId("div-test-id");
    expect(divId).toBeInTheDocument(); 
})


test("testing h2 with test id",()=>{
    render(<GetByTestId/>);
    const divId=screen.getByTestId("h2-test-id");
    expect(divId).toBeInTheDocument(); 
})