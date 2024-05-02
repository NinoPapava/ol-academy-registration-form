import React from 'react'
import { Col, FormText, Input, Label, FormGroup } from 'reactstrap';

const About = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <FormGroup>
        <Label for="exampleText">
          <FormText>About yourself</FormText>
        </Label>
        <Input
          id="exampleText"
          name="about"
          type="textarea"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Col>
  )
}

export { About }