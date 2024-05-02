import React from 'react'
import { Col, FormText, Input, Label, FormGroup } from 'reactstrap';

const State = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <FormGroup>
        <Label for="exampleState">
          <FormText>State</FormText>
        </Label>
        <Input
          id="exampleState"
          name="state"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Col>
  )
}

export { State }