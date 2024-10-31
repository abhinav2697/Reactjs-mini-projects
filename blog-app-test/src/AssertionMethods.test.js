import {render,screen} from "@testing-library/react";
import AssertionMethods from "./AssertionMethods";

test("",()=>{
    render(<AssertionMethods/>);
    const input=screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue();
    expect(input).toHaveValue("abhinav");
    expect(input).toBeEnabled();
    // expect(input).toBeDisabled();
    expect(input).toHaveAttribute("id");
    expect(input).toHaveAttribute("data-test")
    expect(input).toHaveClass("test-style")
    expect(input).toHaveClass("dummy")
})

test("testing negative cases",()=>{
    render(<AssertionMethods/>);
    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).not.toHaveClass('btn');
    expect(btn).not.toHaveAttribute('id');
})