import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // realizar alguna acción con los datos del formulario, enviarlos a  una API 
    // reiniciar el estado del formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Formulario de Contacto</Accordion.Header>
          <Accordion.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type='text' name="name" placeholder='Ingrese su nombre' value={formData.name} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} value={formData.message} onChange={handleChange} required/>
                </Form.Group>
                <Button variant="outline-primary" type='submit'>Primary</Button>
              </Form>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AboutUs;