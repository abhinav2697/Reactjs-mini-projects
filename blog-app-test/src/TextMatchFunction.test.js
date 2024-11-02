import { render,screen } from "@testing-library/react";
import TextMatchFunction from "./TextMatchFunction";
test("test match with function",()=>{
    render(<TextMatchFunction/>);
    const dv=screen.getByText((content,element)=>content.startsWith("Hello"))
    expect(dv).toBeInTheDocument();
        
    })

