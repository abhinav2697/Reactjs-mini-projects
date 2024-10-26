import {render,screen} from '@testing-library/react'
import GetByLabelText from './GetByLabelText'

test("getByLabelText",()=>{
render(<GetByLabelText/>)
const input=screen.getByLabelText("username");
expect(input).toBeInTheDocument();
})