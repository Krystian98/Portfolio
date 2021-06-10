import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./portfolio/home";
import About from "./portfolio/about"
import Work from "./portfolio/work";
import Navbar from "./portfolio/navbar";

function App() {
  return ( 
    <BrowserRouter>
    <Navbar />
     <Switch>
       <Route component={Home} path='/' exact/>
       <Route component={About} path='/about' />
       <Route component={Work} path='/work' />
     </Switch>
    </BrowserRouter>
 )
}

export default App;
