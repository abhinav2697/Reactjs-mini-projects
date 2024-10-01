
import './App.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
 <Route  element={<Dashboard/>}> </Route>
 <Route path="/cart" element={<Cart/>}></Route>
    </Route>
     
  
  ))
  return (
    <div className="App">
  <RouterProvider router={router}/>
    </div>
  );
}

export default App;
