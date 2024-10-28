import { render,screen } from "@testing-library/react";
import GetAllByLabelText from "./GetAllByLabelText";

test("input test case",()=>{
    render(<GetAllByLabelText/>)
    const label=screen.getAllByLabelText("UserName");
    // expect(label[1]).toBeInTheDocument();

    for(let i=0;i<label.length;i++){
        expect(label[i]).toBeInTheDocument();
        expect(label[i]).toHaveValue("abhinav");
    }
})

test("checkbox input test case",()=>{
    render(<GetAllByLabelText/>)
    const checkbox=screen.getAllByLabelText("Skills");
    for(let i=0;i<checkbox.length;i++){
        expect(checkbox[i]).toBeInTheDocument();
        expect(checkbox[i]).toBeChecked();
    }
    
})