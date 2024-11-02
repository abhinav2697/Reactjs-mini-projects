import { render,screen } from "@testing-library/react";
import TextMatchFunction from "./TextMatchFunction";
test("test match with function",()=>{
    render(<TextMatchFunction/>);
    // const dv=screen.getByText((content,element)=>content.startsWith("Hello"))
    //  const dv=screen.getByText((content,element)=>content.endsWith("World"))
    // const dv=screen.getByText((content,element)=>content.endsWith("ld"))
    // const dv=screen.getByText((content,element)=>content.includes("ld"))
    // expect(dv).toBeInTheDocument();

    const dv=screen.getByText((content,element)=>{
        return content.length==11
    })
    expect(dv).toBeInTheDocument();
    })

