import React from 'react'
import { Col, FormText, Input, Label, FormGroup } from 'reactstrap';

const Zip = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 1 }}>
      <FormGroup>
        <Label for="exampleZip">
          <FormText>Zip</FormText>
        </Label>
        <Input
          id="exampleZip"
          name="zip"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Col>
  )
}

export { Zip }