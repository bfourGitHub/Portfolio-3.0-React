// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <nav className="sticky-top">

        <div className="container nav-container">

          <div className="sectionLinks col">

            <div className="pageLinks">
              <a href="#aboutMe">about.</a>
              <a href="#featuredProjects">featured.</a>
              <a href="#featuredProjects">portfolio.</a>
            </div>

          </div>

        </div>
      </nav>
      <br />
      <img src="./assets/heroSelfie.png" className="img-fluid col-12" alt="..." />

      <div className="cardCluster" id="aboutMe">

        <div className="card col-9 aboutMeCard">
          <div className="card-body">
            <h5 className="card-title">bryan moreno</h5>
            <h6 className="card-subtitle mb-2 text-muted">full stack developer</h6>
            <p className="card-text">Student. UW Coding Bootcamp 2021. Bartender with a love of coding & all things
            tech.</p>
            <link href="https://linkedin.com/in/bryan-moreno-360877128" alt="LinkedIn Profile" className="card-link fab fa-linkedin"/>
            <link href="https://drive.google.com/file/d/12-DtfiCD9neXaYTvRGocvRiiZqTtc2_0/view?usp=sharing"
              className="card-link fas fa-portrait" alt="Resume PDF"/>
            <link href="https://github.com/bfourGitHub" className="card-link fab fa-github-square"
              alt="GitHub Profile"/>

          </div>
        </div>

        <div className="card" id="featuredProjects">
          <div className="card-body">
            <img src="./assets/adventue.jpg" className="card-img-top" alt="..."/>
              <h5 className="card-title">Trail Chasers</h5>
              <p className="card-text">Your new hiking buddy! An easy to use application that helps you find your next
            hike.</p>
          </div>

            <div className="card-body">
              <link href="https://github.com/TaaniBravo/Trail-Chaser-Hiking-App" className="card-link fab fa-github"/>
              <link href="https://taanibravo.github.io/Trail-Chaser-Hiking-App/"
                className="card-link fas fa-external-link-alt"/>
            </div>
        </div>

          <div className="card" id="featuredProjects">
            <div className="card-body">
              <img src="./assets/FoodDadABase SS.png" className="card-img-top" alt="..."/>
                <h5 className="card-title">Food Dad-A-Base</h5>
                <p className="card-text">Easy to use app to test your cooking skills (no studying required) while also
            having a laugh!</p>
            </div>

              <div className="card-body">
                <link href="https://github.com/goantonioUW/food-dadabase" className="card-link fab fa-github"/>
                <link href="https://food-dad-a-base.herokuapp.com/login" className="card-link fas fa-external-link-alt"/>
              </div>
          </div>

            <div className="card" id="featuredProjects">
              <div className="card-body">
                <img src="./assets/macbook-2617705_1920.jpg" className="card-img-top" alt="..."/>
                  <h5 className="card-title">ReadME Generator</h5>
                  <p className="card-text">A user friendly CLI that creates a readME.md file.</p>
              </div>

                <div className="card-body">
                  <link href="https://github.com/bfourGitHub/Easy-Readme-Generator" className="card-link fab fa-github"/>
                  
                </div>
            </div>

              <div className="card" id="featuredProjects">
                <div className="card-body">
                  <img src="./assets/coding-924920_1920.jpg" className="card-img-top" alt="..."/>
                    <h5 className="card-title">Team Generator CLI</h5>
                    <p className="card-text">A simple CLI to create & manage your team.</p>
                </div>

                  <div className="card-body">
                    <link href="https://github.com/bfourGitHub/10-HW-Template-Engine-Employee-Summary"
                      className="card-link fab fa-github"/>
                    
                  </div>
              </div>

                <div className="card" id="featuredProjects">
                  <div className="card-body">
                    <img src="./assets/Daily Planner SS.png" className="card-img-top" alt="..."/>
                      <h5 className="card-title">Daily Planner</h5>
                      <p className="card-text">A simple calendar application to keep you on track throughout your day.</p>
                  </div>

                    <div className="card-body">
                      <link href="https://github.com/bfourGitHub/Daily-Planner" className="card-link fab fa-github"/>
                      <link href="https://bfourgithub.github.io/Daily-Planner/" className="card-link fas fa-external-link-alt"/>
                    </div>
                </div>

                  <div className="card" id="featuredProjects">
                    <div className="card-body">
                      <img src="./assets/typewriter.jpg" className="card-img-top" alt="..."/>
                        <h5 className="card-title">Andy Meets the Neighbors</h5>
                        <p className="card-text">A short story about an unassuming old building, its eccentric residents & the new
                          guy in #304.</p>
                    </div>

                      <div className="card-body">
                        <p>Coming Soon...</p>
                        {/* <link href="" className="card-link fas fa-external-link-alt"> Coming Soon...</link> */}
                      </div>

                  </div>


                  </div>


                </div>
  );
}

export default App;
