import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AddProduct from './components/Product/AddProduct';
import UpdateProduct from './components/Product/UpdateProduct';
import Protected from './components/ProtectedRoutes';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
       <Route path= "/login"><Login/></Route>
       <Route path= "/register"><Register/></Route>
       <Route path= "/add"> <Protected Cmp ={AddProduct}/></Route>
       <Route path= "/update"><Protected Cmp ={UpdateProduct}/></Route>
     </Router>
      </div>
  );
}

export default App;
