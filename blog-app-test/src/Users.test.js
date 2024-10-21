import Users from "./Users";

import renderer from 'react-test-renderer';
test("class component testing",()=>{
const componentData=renderer.create(<Users/>).getInstance();
let a="test";
expect(componentData.getUserList(a)).toMatch(a+"extratext");
})