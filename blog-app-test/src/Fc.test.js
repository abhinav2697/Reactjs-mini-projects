import {fireEvent, render,screen} from "@testing-library/react";
import Fc from "./Fc";
import handleOtherMethod from "./helper";
test('method testing case 1',()=>{
render(<Fc/>);
const btn=screen.getByTestId("btn1");
fireEvent.click(btn);
expect(screen.getByText("hello")).toBeInTheDocument();
})

test("method testing case 2",()=>{
    expect(handleOtherMethod()).toMatch("hi");
})