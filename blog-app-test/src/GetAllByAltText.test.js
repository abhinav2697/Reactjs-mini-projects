import { render,screen } from "@testing-library/react";
import GetAllByAltText from "./GetAllByAltText";
test("test image element with allt text",()=>{
    render(<GetAllByAltText/>)
    const img = screen.getByAltText("dummy image");
    expect(img).toBeInTheDocument();

})


test("test multi image element with allt text",()=>{
    render(<GetAllByAltText/>)
    const img = screen.getAllByAltText("dummy image1");
    for(let i=0;i<img.length;i++){
        expect(img[i]).toBeInTheDocument();
    }
   

})