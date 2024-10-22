import {fireEvent, render,screen} from "@testing-library/react";
import Fc from "./Fc";
test('method testing case 1',()=>{
render(<Fc/>);
const btn=screen.getByTestId("btn1");
fireEvent.click(btn);
expect(screen.getByText("hello")).toBeInTheDocument();
})