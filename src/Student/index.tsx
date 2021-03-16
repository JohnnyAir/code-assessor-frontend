import React from "react";
import { Switch, Route } from "react-router-dom";
import StudentActiveTests from "./StudentActiveTests";
import TakeTest from "./TakeTest";

interface Props {}

function Index(props: Props) {
  console.log(props)
  return (
    <Switch>
      <Route path="/tests/active" component={StudentActiveTests} />
      <Route path="/test/attempt/:id" component={TakeTest} />
    </Switch>
  );
}

export default Index;