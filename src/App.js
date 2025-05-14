import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>English Dictionary</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="red" />
        </main>
        <footer className="footer">
          <small>coded by Stephanie Anderson</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
