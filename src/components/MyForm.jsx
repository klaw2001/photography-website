import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function MyForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-3 mt-md-0">
      <Row className="mb-4">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control required type="text" placeholder="Name"  className="border-0 border-bottom rounded-0"/>
          <Form.Control.Feedback type="invalid">
            Please Enter Your Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control required type="email" placeholder="Email"  className="border-0 border-bottom rounded-0"/>
          <Form.Control.Feedback type="invalid">
            Please Enter Your Email
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control required type="number" placeholder="Phone Number" className="border-0 border-bottom rounded-0" />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Phone Number
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            as="textarea"
            required
            type="number"
            placeholder="Message" className="border-0 border-bottom rounded-0"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Message
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <button type="submit" className="body-btn text-uppercase">
        Submit now
      </button>
    </Form>
  );
}

export default MyForm;
