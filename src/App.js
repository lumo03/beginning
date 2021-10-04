import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Rechnen from "./pages/Rechnen";
import Clonen from "./pages/Clonen";
import Doppeln from "./pages/Doppeln";
import Buttons from "./pages/Buttons";
import { useSelector } from "react-redux";

// HOST=0.0.0.0 npm run start

function App() {
  const { page } = useSelector((state) => state.page);

  let thisPage = page.charAt(0).toUpperCase() + page.slice(1);

  document.title = "Beginning - " + thisPage;

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path={["/", "/home"]} exact={true} component={Home} />
        <Route path="/rechnen" component={Rechnen} />
        <Route path="/clonen" component={Clonen} />
        <Route path="/doppeln" component={Doppeln} />
        <Route path="/Buttons" component={Buttons} />
      </BrowserRouter>
    </div>
  );
}

export default App;
