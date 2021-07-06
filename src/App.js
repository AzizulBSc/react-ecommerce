import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AddProduct from './components/Product/AddProduct';
import ProductList from './components/Product/ProductList';
import UpdateProduct from './components/Product/UpdateProduct';
import Protected from './components/ProtectedRoutes';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
       <Route path= "/login"><Login/></Route>
       <Route path= "/register"><Register/></Route>
       <Route path= "/add"> <Protected Cmp ={AddProduct}/></Route>
       <Route path= "/update/:id"><Protected Cmp ={UpdateProduct}/></Route>
       <Route path= "/"> <Protected Cmp ={ProductList}/></Route>
       </Switch>
     </Router>
      </div>
  );
}

export default App;
