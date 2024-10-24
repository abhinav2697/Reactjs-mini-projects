import GetAllByRole from "./GetAllByRole"
import {render,screen} from '@testing-library/react';

test("getAllByRole",()=>{
    render(<GetAllByRole/>)
    const btns=screen.getAllByRole("button");
    expect(btns[1]).toBeInTheDocument();

})