import React from 'react';
import { Col, FormText, Input, Label } from 'reactstrap';

const FirstName = ({ value, onChange }) => (
  <Col sm={{ offset: 1, size: 4 }}>
    <Label for="firstName">
      <FormText>Firstname</FormText>
    </Label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="Enter your firstName"
      type="firstName"
      value={value}
      onChange={onChange}
    />
  </Col>
);

export { FirstName };
