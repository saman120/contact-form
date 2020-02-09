import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TARGET_EMAIL = 'samanacharya@gmail.com';
const SUBJECT = 'User Detail [Test Demo]';

const sendEmail = (userDetail) => {
  const mailBody = `
  <div>
    <label>Full Name: </label> ${userDetail.fullName}
    <label>Email Address: </label> ${userDetail.email}
    <label>Gender: </label> ${userDetail.gender}
  </div>
  `;

  if (window.confirm("Send Mail?")) {
    window.open(`mailto:${TARGET_EMAIL}?subject=${SUBJECT}&body=${mailBody}`);
  }
}

const ContactForm = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    sendEmail({
      fullName: event.target.fullName,
      email: event.target.email,
      gender: event.target.gender,
    })
  }

  return <div className='container'>
    <h1>Contact Form</h1>
    <Form onSubmit={onFormSubmit}>
      <Form.Group controlId="userFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" name="fullName" />
      </Form.Group>
      <Form.Group controlId="userEmailAddress">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group controlId="userGender">
        <Form.Label>Gender</Form.Label>
        <div key='inline-radio' className="mb-3">
          <Form.Check inline label="Male" type='radio' id='inline-radio-1' name="gender" />
          <Form.Check inline label="Female" type='radio' id='inline-radio-2' name="gender" />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  </div>
}

export default ContactForm;
