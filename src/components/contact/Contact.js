import React, { Component } from "react";
import Heading from "../layout/Heading"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Contact.css";

export default class Login extends Component {

    handleSubmit = event => {
        this.props.history.push(`/`)
    }
 
    render() {
        return (
            <div className="Contact">
                <Heading title="Contact Us" />
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Full name"
    
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="phone"
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Your question?"
                      style={{ height: 100 }}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                  >
                    Send
                  </Button>
                </Form>
            </div>
        );
    }

}

