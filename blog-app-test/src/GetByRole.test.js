import {render,screen} from '@testing-library/react';
import GetByRole from './GetByRole';

test("get by Role",()=>{
   
    render(<GetByRole/>)
    // const inputField=screen.getByRole("textbox");
    const btn1=screen.getByRole("button",{name:'Click 1'});
    const btn2=screen.getByRole("button",{name:'Click 2'});
    // expect(inputField).toBeInTheDocument();
    // expect(inputField).toHaveValue("hello");
    // expect(inputField).toBeDisabled();
    // expect(btn).toBeDisabled();
    const input1=screen.getByRole("textbox",{name:"User Name"});
    const div1=screen.getByRole("dummy");
    expect(input1).toBeInTheDocument();
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(div1).toBeInTheDocument();
})

