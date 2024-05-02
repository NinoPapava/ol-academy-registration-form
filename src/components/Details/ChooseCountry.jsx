import React from 'react'
import { Col, FormText, Input, Label } from 'reactstrap';

const ChooseCountry = ({ value, onChange }) => {
  return (
    <Col sm={{ offset: 1, size: 4 }}>
      <Label for="exampleSelect">
        <FormText>Country</FormText>
      </Label>
      <Input
        id="exampleSelect"
        name="country"
        type="select"
        value={value}
        onChange={onChange}
      >
        <option >
          Choose a country
        </option>
      </Input>
    </Col>
  )
}

export { ChooseCountry }