import React from "react";
import "../styles/admin.css";
import { Icon, Header, Dropdown } from "semantic-ui-react";
import logo from "../assets/images/logo2.png";
import { Switch, Route } from "react-router-dom";
import NavItem from "../components/NavItem";
import PageTransition from "../components/PageTransition";
import { Scrollbars } from "react-custom-scrollbars";

import Home from "./Admin/Home";
import CreateTest from "./Admin/CreateTest";
import QuestionPool from "./Admin/QuestionPool";
import CreateQuestion from "./Admin/CreateQuestion";

function Admin() {
  return (
    <div className="dash_admin teal-theme">
      <SideBar />
      <div className="dash-main">
        <div className="dash-main-header">
          <div className="page-descr">
            <Header as="h3">
              <Icon name="home" />
              <Header.Content>
                Home
                <Header.Subheader>Manage your preferences</Header.Subheader>
              </Header.Content>
            </Header>
          </div>
          <div className="profile">
            <Dropdown
              trigger={
                <Header as="h3">
                  <Icon name="user circle" />
                  <Header.Content>Sokunbi Adebayo</Header.Content>
                </Header>
              }
              options={[
                { key: "user", text: "Account", icon: "user" },
                { key: "settings", text: "Settings", icon: "settings" },
                { key: "sign-out", text: "Sign Out", icon: "sign out" },
              ]}
              pointing="top left"
              icon={null}
            />
          </div>
        </div>
        <Scrollbars className="dash-content">
          <PageTransition>
            {(location) => (
              <Switch location={location}>
                <Route exact path="/admin" component={Home} />
                <Route exact path="/admin/test/new" component={CreateTest} />
                <Route
                  exact
                  path="/admin/pool/questions"
                  component={QuestionPool}
                />
                <Route
                  exact
                  path="/admin/pool/question/new"
                  component={CreateQuestion}
                />
              </Switch>
            )}
          </PageTransition>
        </Scrollbars>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="dash-side-bar">
      <div className="app-icoon">
        <img src={logo} alt="d" />
      </div>
      <div className="sidebar-action">
        <ul className="sidebar-items">
          <NavItem exact to="/admin" className="sidebar-item">
            <Icon name="home" />
            <span> Home </span>
          </NavItem>
          <NavItem exact to="/admin/tests" className="sidebar-item">
            <Icon name="list alternate outline" />
            <span> Tests</span>
          </NavItem>
          <NavItem exact to="/admin/test/new" className="sidebar-item">
            <Icon name="edit outline" />
            <span> Create Test</span>
          </NavItem>
          <NavItem exact to="/admin/pool/questions" className="sidebar-item">
            <Icon name="pie chart" />
            <span>Question Pool</span>
          </NavItem>
        </ul>
      </div>
    </div>
  );
}

export default Admin;
