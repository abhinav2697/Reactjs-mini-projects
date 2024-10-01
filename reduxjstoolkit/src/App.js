
import './App.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
 <Route index element={<Dashboard/>}> </Route>
 <Route element={<Cart/>}></Route>
    </Route>
     
  
  ))
  return (
    <div className="App">
  <Products/>
    </div>
  );
}

export default App;
