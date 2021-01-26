import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SelectTest from "./pages/SelectTest";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/my-tests" component={SelectTest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
