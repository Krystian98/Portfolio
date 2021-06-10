import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import SpecificProject from "./components/specificProject";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Work} path="/work" />
        <Route component={SpecificProject} path="/project/:id" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
