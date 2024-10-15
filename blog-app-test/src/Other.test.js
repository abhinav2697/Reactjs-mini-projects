import {render,screen} from '@testing-library/react';
import App from './App';

test("Test First React App case",()=>{
  render(<App/>);
  const text=screen.getByText(/First React Test Case/i);
  const title=screen.getByTitle('MY Desk')
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})

test("Testing Input button",()=>{
  render(<App/>)
  let checkInput=screen.getByRole("textbox");
  let checkPlaceholder=screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userId");
  expect(checkInput).toHaveAttribute("type","text");
  expect(checkInput).toHaveAttribute("value","abhinav");
})