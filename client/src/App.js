/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import CardCluster from './components/CardCluster';
import About from './pages/About/index';
import Projects from './pages/Projects/index';
import Design from './pages/Design/index';
import Jetway from './pages/Jetway/index';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Router>

        <NavBar />
        <br />
        <Switch>
          <Route exact strict path="/" component={About} />
          <Route exact strict path="/develop" component={Projects} />
          <Route exact strict path="/design" component={Design} />
          <Route exact strict path="/jetway" component={Jetway} />
          <Route exact path="*" component={About} />
        </Switch>
        <br />
        <Footer />

      </Router>

    </div>
  );
}

export default App;
