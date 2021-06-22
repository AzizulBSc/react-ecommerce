import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import AddProduct from './components/Product/AddProduct';
import UpdateProduct from './components/Product/UpdateProduct';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Route path= "/login"><Login/></Route>
      <Route path= "/register"><Register/></Route>
      <Route path= "/add"><AddProduct/></Route>
      <Route path= "/update"><UpdateProduct/></Route>
    </Router>
      </div>
  );
}

export default App;
