import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import HeroPage from './components/HeroPage/heropage'
import Footer from './components/Footer/footer'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/HomePage/HomePage'
import subHeader from './components/subHeader/subHeader'
import onlineStore from './components/OnlineStorePage/onlineStore'
import ProductsPage from './components/OnlineStorePage/products'
import FormLogin, {PrivateRoute} from './components/Forms/Forms'
import RegisterUser from './components/Forms/Register'
import LoginForm from './components/login.component'
import RegisterForm from './components/register.component';
import Profile from './components/profile.component';
import Admin from './user';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/onlineStore" exact={true} component={onlineStore} />
        <Route path="/products" exact={true} component={ProductsPage} />
        <Route path="/login" exact={true} component={FormLogin} />
        <Route path="/register" exact={true} component={RegisterUser} />
        <Route path="/logintest" exact={true} component={LoginForm} />
        <Route path="/registertest" exact={true} component={RegisterForm} />
        <Route path="/profile" exact={true} component={Profile} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
