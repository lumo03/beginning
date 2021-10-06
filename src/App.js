import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Rechnen from "./pages/Rechnen";
import Clonen from "./pages/Clonen";
import Doppeln from "./pages/Doppeln";
import Buttons from "./pages/Buttons";
import Temperature from "./pages/Temperature";
import { useSelector } from "react-redux";

// HOST=0.0.0.0 npm run start

function App() {
  const name = useSelector((state) => state.name);
  let name2 = name == undefined ? "home" : name;
  let thisPage = name2.charAt(0).toUpperCase() +  name2.slice(1);

  document.title = "Beginning - " + thisPage;

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path={["/", "/home"]} exact={true} component={Home} />
        <Route path="/rechnen" component={Rechnen} />
        <Route path="/clonen" component={Clonen} />
        <Route path="/doppeln" component={Doppeln} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/temperature" component={Temperature} />
      </BrowserRouter>
    </div>
  );
}

export default App;
