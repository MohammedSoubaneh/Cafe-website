
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/HomePage/HomePage'
import onlineStore from './components/OnlineStorePage/onlineStore'
import ProductsPage from './components/OnlineStorePage/products'
import Profile from './components/profile.component';
import Admin from './user';
import Forms from './components/Forms/FormPage'
import Dashboard from './components/Admin/dashboard';
import AddProduct from './components/Admin/addProduct';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/onlineStore" exact={true} component={onlineStore} />
        <Route path="/products" exact={true} component={ProductsPage} />
        <Route path="/profile" exact={true} component={Profile} />
        <Route path="/forms" exact={true} component={Forms} />
        <Route path="/admin" exact={true} component={Admin} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route path="/addProducts" exact={true} component={AddProduct} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
