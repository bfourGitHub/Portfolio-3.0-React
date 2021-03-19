/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// import logo from './logo.svg';
import './App.css';

// import adventue from './assets/adventue.jpg';
// import coding from './assets/coding.jpg';
// import DailyPlannerSS from './assets/DailyPlannerSS.png';
// import FoodDadABaseSS from './assets/FoodDadABaseSS.png';
// import HeroPhotoNEW from './assets/HeroPhotoNEW.png';
// import macbook from './assets/macbook.jpg';
// import typewriter from './assets/typewriter.jpg';

// import ProjectCards from './components/ProjectCards';
// import CardTwoLinks from './components/CardTwoLinks';
import NavBar from './components/NavBar';
import CardCluster from './components/CardCluster';




function App() {
  return (

    <div className="App">

      {/* <nav className="sticky-top">

        <div className="container nav-container">

          <div className="sectionLinks col">

            <div className="pageLinks">
              <a href="#aboutMe">about.</a>
              <a href="#trailChasers">featured.</a>
              <a href="#trailChasers">portfolio.</a>
            </div>

          </div>

        </div>
      </nav>
      <div className="collapse" id="navigateOpts">
                <div className="card card-body">
                  <a className="dropdown-item" >About</a>
                  <a className="dropdown-item" >Featured</a>
                  <a className="dropdown-item" >Portfolio</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" >Contact</a>
                </div>
              </div> */}
      <NavBar />

      <br />

      <CardCluster />



    </div>
  );
}

export default App;
