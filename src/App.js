import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Me from "./images/me.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={Me}></img>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
