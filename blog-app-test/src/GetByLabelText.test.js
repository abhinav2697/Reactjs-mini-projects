import {render,screen} from '@testing-library/react'
import GetByLabelText from './GetByLabelText'

test("getByLabelText",()=>{
render(<GetByLabelText/>)
const input=screen.getByLabelText("Username");
expect(input).toBeInTheDocument();
expect(input).toBeInTheDocument();
expect(input).toHaveValue("abhinav");
})

test("getByLabelText test case 2",()=>{
    render(<GetByLabelText/>)
    const checkbox=screen.getByLabelText("Skills");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
   
    })