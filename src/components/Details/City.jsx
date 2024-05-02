import React from 'react'
import { Col, FormText, Input, Label, FormGroup } from 'reactstrap';

const City = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 2 }}>
      <FormGroup>
        <Label for="exampleCity">
          <FormText>City</FormText>
        </Label>
        <Input
          id="exampleCity"
          name="city"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Col>
  )
}

export { City }