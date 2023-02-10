import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export default function IpForm({ handleInputChange, handleIpSubmit }) {
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Enter IP Address
          </Label>
          <Col sm={8}>
            <Input
              id="ipAddress"
              name="ipAddress"
              placeholder="with a placeholder"
              type="input"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </Col>

          <Col sm={2}>
            <Button onClick={handleIpSubmit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}
