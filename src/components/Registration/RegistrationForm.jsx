import { FirstName } from '../Details/FirstName'
import { LastName } from '../Details/LastName'
import { useState } from 'react'
import { Form, Button, Row, Col, FormGroup } from 'reactstrap'

const RegistrationForm = () => {
  const [formSubmit, setFormSubmit] = useState({
    firstName: '',
    lastName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === 'checkbox' ? checked : value;
    setFormSubmit({ ...formSubmit, [name]: newVal });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Row>
          <Col sm={{ offset: 2, size: 6 }}>
            <h2>Registration Form</h2>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <FirstName value={formSubmit.firstName} onChange={handleChange} />
          <LastName value={formSubmit.lastName} onChange={handleChange} />
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm={{ offset: 4, size: 6 }}>
            <Button >
              Remember My Info
            </Button>
          </Col>
        </Row>
      </FormGroup>
      {submitted && (
        <div className="submitted-information">
          <h2>Submitted Information:</h2>
          <p>First Name: {formSubmit.firstName}</p>
          <p>Last Name: {formSubmit.lastName}</p>
        </div>
      )}
    </Form>
  )

}

export { RegistrationForm }

