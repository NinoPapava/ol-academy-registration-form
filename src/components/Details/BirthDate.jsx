import React from 'react'
import { Col, FormText, Input, Label } from 'reactstrap';

const BirthDate = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <Label for="date">
        <FormText>Birth Date</FormText>
      </Label>
      <Input
        id="date"
        name="date"
        placeholder="date"
        type="date"
        value={value}
        onChange={onChange}
      />
    </Col>
  )
}

export { BirthDate }