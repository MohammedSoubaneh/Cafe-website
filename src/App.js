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
import LoggedIn from './components/Forms/LoggedIn'




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
        <Route path="/loggedin" exact={true} component={LoggedIn} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
