import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TARGET_EMAIL = 'samanacharya@gmail.com';
const SUBJECT = 'User Detail [Test Demo]';

const sendEmail = (userDetail) => {
  console.log(userDetail)
  const mailBody = `
  <div>
    <label>Full Name: </label> ${userDetail.fullName}
    <label>Email Address: </label> ${userDetail.email}
    <label>Message: </label> ${userDetail.message}
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
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    })
  }

  return <div className='container'>
    <h1>Contact Us Form</h1>
    <Form onSubmit={onFormSubmit}>
      <Form.Group controlId="userFullName">
        <Form.Label>Full Name*</Form.Label>
        <Form.Control type="text" placeholder="Full Name" name="fullName" required />
      </Form.Group>
      <Form.Group controlId="userEmailAddress">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" required />
      </Form.Group>
      <Form.Group controlId="userMessage">
        <Form.Label>Message*</Form.Label>
        <Form.Control as="textarea" placeholder="Message" name="message" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
  </div>
}

export default ContactForm;
