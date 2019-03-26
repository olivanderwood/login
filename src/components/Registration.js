import React, { Component } from 'react';
import './Registration.css';
import { Form,FormGroup, Label, Input, Button,Container, Col } from 'reactstrap';




export default class Registration extends Component{
    render (){
      return (

        <Container>
            <Col sm={{offset: 4}}>
            <Form>


                <div className="Registration">
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" placeholder="Enter Your Username" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Password: </Label>
                        <Input type="password" placeholder="Enter Your Password" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Confirm Password: </Label>
                        <Input type="password" placeholder="Confirm Your Password" />
                    </FormGroup>

                    <Button outline color="primary" size="lg" block >Submit</Button>
                
                </div>


            </Form>
            
            </Col>
        </Container>
        

      ); 
    }
}


