import { Route, Switch } from "wouter";
import Pages from "./Pages";
import Projects from "./Projects";

const App = () => {
  return (
    <Switch>
      <Route path={"/"} component={Pages} />
      <Route path={"/projects"} component={Projects} />
    </Switch>
  );
};

export default App;
