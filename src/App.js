import "./App.scss";
import Catalog from "./pages/catalog/Catalog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App__wrapper">
          <Switch>
            <Route path="/" exact={true}>
              <Catalog />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
