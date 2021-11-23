import Home from "./Homepage"
import Home2 from "./Home2";
import Home3 from "./Home3";
import Header from "../content-page/component/header/header";
import Home4 from "./Home4";
import {

  Switch,
  Route,
  BrowserRouter

} from "react-router-dom";

function App() {
  return (
    <>

      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/coding" component={Home2} />
          <Route path="/iot" component={Home3} />
          <Route path="/rubix" component={Home4} />
          <Route path="/" component={Home} />

        </Switch>
      </BrowserRouter>
    </>
  );
}


export default App;
