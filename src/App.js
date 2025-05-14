import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>
            · <span className="e">E</span>nglish · <span className="d">D</span>
            ictionary · <br />
            <span className="secondLine"> for the curious traveler </span>
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
          Photos provided by
          <a href="https://www.shecodes.io"> SheCodes</a> and
          <a href="https://www.pexels.com"> Pexels</a>
          <div className="pexels">
            <a href="https://www.pexels.com">
              <img src="https://images.pexels.com/lib/api/pexels-white.png" />
            </a>
            <a href="https://www.pexels.com">
              <img src="https://images.pexels.com/lib/api/pexels.png" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
