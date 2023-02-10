import React from "react";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";

export default function SunInfo({ sunRiseData }) {
  return (
    <>
      {sunRiseData && (
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  SunRise At : {sunRiseData?.sunrise}
                </Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Sunset At : {sunRiseData?.sunset}
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}
