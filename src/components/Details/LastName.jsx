import React from 'react'
import { Col, FormText, Input, Label } from 'reactstrap';

const LastName = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <Label for="lastName">
        <FormText>Lastname</FormText>
      </Label>
      <Input
        id="lastName"
        name="lastName"
        placeholder="Enter your lastName"
        type="lastName"
        value={value}
        onChange={onChange}
      />
    </Col>
  )
}

export { LastName }