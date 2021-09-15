import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainPage from "./pages/MainPage"
import ColorAnimation from "./pages/ColorAnimation"
import About from "./pages/About"
import FarmNameGenerator from "./pages/FarmNameGenerator";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} /> 
      <Route exact path="/colors" component={ColorAnimation} />
      <Route exact path="/about" component={About} />
      <Route exact path="/generator" component={FarmNameGenerator} />
    </Router>
  );
}

export default App;
