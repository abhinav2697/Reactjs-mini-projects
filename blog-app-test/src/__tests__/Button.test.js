import {fireEvent, render,screen} from "@testing-library/react"
import Button from "../Button"
test('click event test case', () => 
    {
        render(<Button/>);
        const btn=screen.getByRole("button");
        fireEvent.click(btn);
        expect(screen.getByText('updated data')).toBeInTheDocument();
    })