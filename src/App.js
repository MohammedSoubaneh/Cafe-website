import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import HeroPage from './components/HeroPage/heropage'
import Footer from './components/Footer/footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/HomePage/HomePage'
import subHeader from './components/subHeader/subHeader'
import onlineStore from './components/OnlineStorePage/onlineStore'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/onlineStore" exact={true} component={onlineStore} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
