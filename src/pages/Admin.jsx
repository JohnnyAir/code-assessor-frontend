import React from "react";
import "../styles/admin.css";
import { Icon, Header, Dropdown } from "semantic-ui-react";
import logo from "../assets/images/logo2.png";
import { Switch, Route } from "react-router-dom";
import Home from "./Admin/Home"
import CreateTest from "./Admin/CreateTest"

function Admin() {
  return (
    <div className="dash_admin teal-theme">
      <div className="dash-side-bar">
        <div className="app-icoon">
          <img src={logo} alt="d" />
        </div>
        <div className="sidebar-action">
          <ul className="sidebar-items">
            <li className="sidebar-item active">
              <Icon name="home" />
              <span> Home </span>
            </li>
            <li className="sidebar-item">
              <Icon name="edit outline" />
              <span> Create Test</span>
            </li>
            <li className="sidebar-item">
              <Icon name="list alternate outline" />
              <span> All Tests</span>
            </li>
            <li className="sidebar-item">
              <Icon name="pie chart" />
              <span>Test Results</span>
            </li>
          </ul>
        </div>
      </div>
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
              pointing="top center"
              icon={null}
            />
          </div>
        </div>
            <Switch>
              <Route exact to="/admin" component={ Home } />
              <Route exact to="/admin/create-test" component={ CreateTest } />
            </Switch>
      </div>
    </div>
  );
}

export default Admin;
