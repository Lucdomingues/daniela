import Home from "./Pages/Home";
import { Route, Switch, HashRouter } from 'react-router-dom';
import Products from "./Pages/Products";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
