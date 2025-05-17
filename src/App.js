import "./App.css";
import Dictionary from "./Dictionary";
import AnimationHotAirBalloon from "./AnimationHotAirBalloon.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <AnimationHotAirBalloon />

        <header className="App-header">
          <h2>
            · <span className="e">E</span>nglish · <span className="d">D</span>
            ictionary · <br />
            <span className="secondLine">
              {" "}
              for the <span className="c">c</span>urious{" "}
              <span className="t"> t</span>raveler
            </span>
          </h2>
        </header>
        <main>
          <Dictionary defaultKeyword="adventure" />
        </main>
        <footer>
          English Dictionary for the curious traveler
          <br /> was coded by{" "}
          <a
            href="https://www.linkedin.com/in/stephanie-anderson-rn-bsn-4658b336/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stephanie Anderson
          </a>
          <br /> is open sourced on{" "}
          <a
            href="https://github.com/IslaAdventura/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br /> and hosted on{" "}
          <a
            href="https://subtle-froyo-698809.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          <br />
          <br />
          Photos provided by:{" "}
          <div>
            <div className="sheCodesLogo">
              <a
                href="https://www.shecodes.io"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
                  alt="SheCodes logo for footer"
                />
              </a>{" "}
            </div>
            <div className="pexels">
              <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
                <img
                  src="https://images.pexels.com/lib/api/pexels.png"
                  alt="dark logo for pexels"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
