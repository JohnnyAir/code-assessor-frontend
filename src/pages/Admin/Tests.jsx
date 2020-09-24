import React from "react";
import { Label, Input, Button, Header, Icon } from "semantic-ui-react";
import "./styles/test.css";

const data = [
  {
    id: "1",
    courseCode: "COM 412",
    title: "Introduction to Object Oriented Programming in JAVA",
    date: "12/09/2020 - 12/09/202",
  },
  {
    id: "2",
    courseCode: "COM 412",
    title: "Intro to JAVA Test",
    date: "12/09/2020 - 12/09/202",
  },
  {
    id: "3",
    courseCode: "COM 311",
    title: "Data Structure and Algorithms in C++",
    date: "12/09/2020 - 12/09/202",
  },
];

function Card(props) {
  return (
    <div className="test-card" tabIndex="0">
      <div className="card-header"></div>
      <div className="c-card-icon">
        <Icon size="big" name="tasks" />
      </div>
      <span className="c-code">{props.courseCode}</span>
      <h5 className="c-title">{props.title}</h5>
      <div className="c-card-additional-info">
        <div className="c-test--detail">
          <Header as="h6">
            <Icon name="calendar alternate outline" />
            <Header.Content>
              Test Date
              <Header.Subheader>{props.date}</Header.Subheader>
            </Header.Content>
          </Header>
        </div>
        <div className="c-test--detail">
          <Header as="h6">
            <Icon name="time" />
            <Header.Content>
              Duration
              <Header.Subheader>3 hours</Header.Subheader>
            </Header.Content>
          </Header>
        </div>
      </div>
      {/* <div className="c-test--dtsm">
        <Header as="h6">
          <Icon name="cube" />
          <Header.Content>
            <Label color="blue" size="mini">Java</Label>
          </Header.Content>
        </Header>
      </div> */}
    </div>
  );
}

function Tests() {
  return (
    <div className="test-page">
      <div className="page-header">
        <div className="sub-title-sect">
          <Header as="h3">All tests</Header>
          <Button color="green" size="tiny" icon labelPosition="left">
            <Icon name="plus" />
            New Test
          </Button>
        </div>
        <div className="filter-sect">
          <Input size="mini" icon="search" placeholder="Search..." />
        </div>
      </div>
      <div className="flex-card-list">
        {data.map((test) => (
          <Card key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
}

export default Tests;
