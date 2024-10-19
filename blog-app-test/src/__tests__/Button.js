import {fireEvent, render,screen} from "@testing-library/react"
import Button from "../Button"


// beforeAll(()=>{
//     console.log("**********before All hook*************");
//   })

// beforeEach(()=>{
//     console.log("**********before Each hook*************");
//   })

afterEach(()=>{
    console.log("**********After Each hook*************");
  })



test('click event test case 1', () => 
    {
        console.log("1");
        render(<Button/>);
        const btn=screen.getByRole("button");
        fireEvent.click(btn);
        expect(screen.getByText('updated data')).toBeInTheDocument();
    })

    test('click event test case 2', () => 
        {
            console.log("2");
            render(<Button/>);
            const btn=screen.getByRole("button");
            fireEvent.click(btn);
            expect(screen.getByText('updated data')).toBeInTheDocument();
        })
    

        test('click event test case 3', () => 
            {
                console.log("3");
                render(<Button/>);
                const btn=screen.getByRole("button");
                fireEvent.click(btn);
                expect(screen.getByText('updated data')).toBeInTheDocument();
            })
            test('click event test case 4', () => 
                {
                    console.log("4")
                    render(<Button/>);
                    const btn=screen.getByRole("button");
                    fireEvent.click(btn);
                    expect(screen.getByText('updated data')).toBeInTheDocument();
                })
                    
    