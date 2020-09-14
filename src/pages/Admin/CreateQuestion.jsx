import React, { useState } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import ModalAddTestGuide from "./ModalAddTestGuide";
import {
  Form,
  Dropdown,
  Message,
  Header,
  Divider,
  Button,
  Icon,
} from "semantic-ui-react";

import './styles/create-question.css'
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

function CreateQuestion() {
  const mdEditor = React.useRef(null);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleEditorChange = ({ html, text }) => {
    setValue(text);
  };

  return (
    <div className="content add-question">
      <Form>
        <Form.Group>
          <Form.Input
            label="Question Title"
            placeholder="Question Title"
            width={12}
            required
          />
          <Form.Field
            required
            label="Language"
            control={Dropdown}
            fluid
            selection
            options={[
              { key: "Java", text: "Java", value: "Java" },
              { key: "C++", text: "C++", value: "C++" },
            ]}
            placeholder="Select programing language"
            width={4}
          />
        </Form.Group>
      </Form>
      <MarkdownEditor
        ref={mdEditor}
        value={value}
        onChange={handleEditorChange}
        renderHTML={(text) => mdParser.render(text)}
        className="my-markdown"
      />
      <div className="criteria-header">
        <Divider hidden />
        <Button
          className="add-guide"
          content="Add Guide"
          color="blue"
          icon="plus"
          labelPosition="left"
          onClick={() => setOpen(true)}
        />
        <Header as="h3">
          <Icon name="tasks" />
          <Header.Content>
            Score Guide
            <Header.Subheader>
              create grading guide for this question
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Divider />
      </div>
      <div className="guides">
        <Message>
          <Message.Header>
            create grading guide for this question
          </Message.Header>
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
      <ModalAddTestGuide open={open} setOpen={setOpen} />
    </div>
  );
}

export default CreateQuestion;