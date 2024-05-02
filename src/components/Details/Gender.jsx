import React from 'react'
import { Col, FormText, Input, Label, Row, FormGroup } from 'reactstrap';

const Gender = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 2, size: 2 }}>
      <Row>
        <Col>
          <FormText>Gender</FormText>
          <FormGroup check>
            <Input
              name="gender"
              type="radio"
              value="Male"
              checked={value === "Male"}
              onChange={onChange}
            />
            {' '}
            <Label check>
              Male
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup check>
            <Input
              name="gender"
              type="radio"
              value="Female"
              checked={value === "Female"}
              onChange={onChange}
            />
            {' '}
            <Label check>
              Female
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Col>
        <FormGroup check>
          <Input
            name="gender"
            type="radio"
            value="Other"
            checked={value === "Other"}
            onChange={onChange}
          />
          {' '}
          <Label check>
            Other
          </Label>
        </FormGroup>
      </Col>
    </Col>
  )
}

export { Gender }