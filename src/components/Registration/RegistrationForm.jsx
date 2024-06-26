import { FirstName } from '../Details/FirstName'
import { LastName } from '../Details/LastName'
import { useState } from 'react'
import { Form, Button, Row, Col, FormGroup } from 'reactstrap'
import { BirthDate } from '../Details/BirthDate'
import { ChooseCountry } from '../Details/ChooseCountry'
import { City } from '../Details/City'
import { State } from '../Details/State'
import { Zip } from '../Details/Zip'
import { About } from '../Details/About'
import { Email } from '../Details/Email'
import { Gender } from '../Details/Gender'
import '../style/style.css'

const RegistrationForm = () => {
  const [formSubmit, setFormSubmit] = useState({
    firstName: '',
    lastName: '',
    date: '',
    country: '',
    city: '',
    state: '',
    zip: '',
    about: '',
    email: '',
    gender: ''
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
          <BirthDate value={formSubmit.date} onChange={handleChange} />
          <ChooseCountry value={formSubmit.country} onChange={handleChange} />
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <City value={formSubmit.city} onChange={handleChange} />
          <State value={formSubmit.state} onChange={handleChange} />
          <Zip value={formSubmit.zip} onChange={handleChange} />
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <About value={formSubmit.about} onChange={handleChange} />
          <Email value={formSubmit.email} onChange={handleChange} />
          <Gender value={formSubmit.gender} onChange={handleChange} />
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
          <p>Birth Date: {formSubmit.date}</p>
          <p>Country: {formSubmit.country}</p>
          <p>City: {formSubmit.city}</p>
          <p>State: {formSubmit.state}</p>
          <p>Zip: {formSubmit.zip}</p>
          <p>About: {formSubmit.about}</p>
          <p>Email: {formSubmit.email}</p>
          <p>Gender: {formSubmit.gender}</p>
        </div>
      )}
    </Form>
  )

}

export { RegistrationForm }

