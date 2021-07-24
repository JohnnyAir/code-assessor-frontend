import React from "react";
import { Switch, Route } from "react-router-dom";
import StudentActiveTests from "./StudentActiveTests";
import TakeTest from "./TakeTest";
import TestInstructions from "./TestInstructions";

interface Props {}

function Index(props: Props) {
  console.log(props)
  return (
    <Switch>
      <Route exact path="/" component={StudentActiveTests} />
      <Route exact path="/test/:id/instructions" component={TestInstructions} />
      <Route exact path="/test/:id" component={TakeTest} />
    </Switch>
  );
}

export default Index;