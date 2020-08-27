import React from "react";
import { Icon, Header } from "semantic-ui-react";

function Home() {
  return (
    <div className="content home-content">
      <div className="home-actions">
        <div className="action-item" tabIndex="0">
          <Icon name="edit outline" />
          <h5>Create Test</h5>
        </div>
        <div className="action-item" tabIndex="0">
          <Icon name="list alternate outline" />
          <h5>All Test</h5>
        </div>
        <div className="action-item" tabIndex="0">
          <Icon name="pie chart" />
          <h5>Test Results</h5>
        </div>
        <div className="action-item" tabIndex="0">
          <Icon name="edit outline" />
          <h5>Question Pool</h5>
        </div>
        <div className="action-item" tabIndex="0">
          <Icon name="edit outline" />
          <h5>Create Test</h5>
        </div>
        <div className="action-item" tabIndex="0">
          <Icon name="edit outline" />
          <h5>Create Test</h5>
        </div>
      </div>
      <div className="active-tests">
        <Header as="h5">
          <Icon name="stopwatch" />
          <Header.Content>Ongoing Tests</Header.Content>
        </Header>
      </div>
    </div>
  );
}

export default Home;
