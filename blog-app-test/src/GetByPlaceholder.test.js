import {render,screen} from '@testing-library/react';
import GetByPlaceholderText from './GetByPlaceholderText';

// test('test case for single input field',()=>{
// render(<GetByPlaceholderText/>);
// const input=screen.getByPlaceholderText("enter username");
// expect(input).toBeInTheDocument();
// expect(input).toHaveValue("anil");
// })

test("test case for multiple input fields",()=>{
    render(<GetByPlaceholderText/>);
    const input=screen.getByPlaceholderText("enter username");
    for(let i=0;i<input.length;i++){
        expect(input[i]).toBeInTheDocument();
        expect(input[0]).toBeInTheDocument("abhinav");
    }
})