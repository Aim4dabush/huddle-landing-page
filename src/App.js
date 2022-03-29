import "./App.css";
import Advertisements from "./components/Advertisements/Advertisements";
import Background from "./components/Background/Background";
import Huddle from "./components/Huddle/Huddle";
import Mockups from "./components/Mockups/Mockups";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Background />
      <div id="top-row">
        <Huddle />
      </div>
      <div id="middle-row">
        <div id="left-column">
          <Mockups />
        </div>
        <div id="right-column">
          <Advertisements />
        </div>
      </div>
      <div id="bottom-row">
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
