import React from 'react'
import { Col, FormText, Input, Label } from 'reactstrap';

const Email = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <Label for="email">
        <FormText>Email</FormText>
      </Label>
      <Input
        id="email"
        name="email"
        placeholder="email"
        type="email"
        value={value}
        onChange={onChange}
      />
    </Col>
  )
}

export { Email }