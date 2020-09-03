import React from "react";
import { Step, Form, Button, Message, Dropdown } from "semantic-ui-react";

function SetupTestForm() {
  return (
    <div className="form-area">
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Course Code" placeholder="e.g. COM111" />
          <Form.Input
            fluid
            label="Course Title"
            placeholder="e.g. Intro to Java Test"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Department"
            options={[{ key: "m", text: "Computer Science", value: "CS" }]}
            placeholder="Department"
          />
          <Form.Select
            fluid
            label="Level"
            options={[{ key: "m", text: "ND 1", value: "ND 1" }]}
            placeholder="Level"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            label="Language"
            control={Dropdown}
            fluid
            multiple
            selection
            options={[
              { key: "Java", text: "Java", value: "Java" },
              { key: "C++", text: "C++", value: "C++" },
            ]}
            placeholder="Select programing language"
          />
          <Form.Field
            label="Minimun Question to be answered"
            placeholder="e.g. 1"
            control="input"
            type="number"
            max={10}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Start Date"
            type="date"
            placeholder="Course Code"
          />
          <Form.Input
            fluid
            label="End Date"
            type="date"
            placeholder="Course Title"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

function TestQuestioList() {
  return (
    <div className="form-area">
      <div className="text-right">
        <Button
          content="Pick from Pool"
          color="teal"
          icon="database"
          labelPosition="left"
        />
        <Button
          content="New Question"
          color="blue"
          icon="plus"
          labelPosition="left"
        />
      </div>
      <div className="empty-question-list">
        <Message>
          <Message.Header>Please add questions to continue</Message.Header>
          <Message.List
            items={[
              <li className="content">
                You can add questions from question pool by clicking
                <b> Import Questions</b> at the top right corner
              </li>,
              <li className="content">
                You can create new question by clicking <b>New Question</b> at
                the top right corner
              </li>,
            ]}
          />
        </Message>
      </div>
    </div>
  );
}

function CreateTest() {
  return (
    <div className="content create-test">
      <div className="stepper">
        <Step.Group widths={3} ordered>
          <Step link active>
            <Step.Content>
              <Step.Title>Test Setup</Step.Title>
              <Step.Description>Enter test setup information</Step.Description>
            </Step.Content>
          </Step>

          <Step link>
            <Step.Content>
              <Step.Title>Add Question</Step.Title>
              <Step.Description>Add questions to the test</Step.Description>
            </Step.Content>
          </Step>

          <Step link>
            <Step.Content>
              <Step.Title>Save</Step.Title>
              <Step.Description>Preview and save</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
      <SetupTestForm />
      {/* <TestQuestioList /> */}
      <div className="step-direction-btn">
        <Button
          content="Previous"
          disabled
          icon="left arrow"
          labelPosition="left"
        />
        <Button
          content="Continue"
          color="blue"
          icon="right arrow"
          labelPosition="right"
        />
      </div>
    </div>
  );
}

export default CreateTest;
