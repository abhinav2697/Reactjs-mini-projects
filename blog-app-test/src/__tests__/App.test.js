// snapshot testing

import {render} from "@testing-library/react";
import Button from "../Button";

test("snapshot for app component",()=>{
  const container=render(<Button/>);
  expect(container).toMatchSnapshot();
})