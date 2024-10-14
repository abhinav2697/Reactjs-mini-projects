import {render,screen} from '@testing-library/react';
import App from './App';

test("Test First React App case",()=>{
  render(<App/>);
  const text=screen.getByText(/First React Test Case/i);
  const title=screen.getByTitle('MY Desk')
  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
})