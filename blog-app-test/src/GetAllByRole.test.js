import GetAllByRole from "./GetAllByRole"
import {render,screen} from '@testing-library/react';

test("getAllByRole",()=>{
    render(<GetAllByRole/>)
    const btns=screen.getAllByRole("button");
    const select=screen.getAllByRole("option");
    expect(btns[1]).toBeInTheDocument();
    for(let  i=0;i<btns.length;i++){
        expect(btns[i]).toBeInTheDocument();
    }

    for(let i=0;i<select.length;i++){
        expect(select[i]).toBeInTheDocument();
    }

    

})