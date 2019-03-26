import React, { Component } from 'react';
import './Login.css';
import { Form,FormGroup, Label, Input, Button,Container, Col } from 'reactstrap';
// import PropTypes from 'prop-types';



export default class Login extends Component {
    constructor(state){
        super(state);
        this.state = {
                userName:"", 
                userPass:"",            
        }



    this.onDoneName = this.onDoneName.bind(this);    
    this.onDonePass = this.onDonePass.bind(this);   
    }

    
    

    render () {
        const {name} = this.props;

       
        return(
             <Container>
                <Col sm={{offset:4 }}>
                    <Form>

                        <div className = "Login">

                            <FormGroup>

                                <Label>User Name: </Label>
                                <Input type = "text" placeholder= "User Name" onKeyUp = {this.onDoneName} autoFocus/>

                            </FormGroup>

                            <FormGroup>

                                <Label>Password: </Label>
                                <Input type = "password" placeholder="Password" onKeyUp ={this.onDonePass} />

                            </FormGroup>

                            <Button outline color="success" size="lg" block  onClick = {() => this.checkLogin(name)}>Login </Button>
                        </div>
                   
                    </Form>
                </Col>    
             </Container>
                

            
            
        )
    }
   
    onDoneName(event){
        
        let text="";
        text = event.target.value;
        text =text.trim();
        this.setState({
            userName:text, 
            ...this.state.userPass, 
        })
        
    }


    onDonePass(event){
        
        let pass="";
        pass = event.target.value;
        pass =pass.trim();
        this.setState({
            ...this.state.userPass, 
            userPass:pass, 
            
        })
        
    }



    checkLogin(name){
       if(this.state.userName === ""){
           alert("please enter username")
       }
       else if(this.state.userName !== "" && this.state.userPass ===""){
           alert("please enter password")
       }


        else if(this.state.userName !== "" && this.state.userPass !== ""){
        
            for (var i=0 ; i< name.length; i++){           
                if(this.state.userName === name[i].loginName && this.state.userPass === name[i].passWord  ){
                    
                    alert("success")
                    this.setState({
                        userName: "",
                        userPass: "",
                    })
                    break;
                }
            
                else if(this.state.userName !== name[i].loginName && i === (name.length - 1)){
                    alert("faild")
                    this.setState({
                        userName: "",
                        userPass: "",
                    })
                }


                else if(this.state.userName === name[i].loginName && this.state.userPass !== name[i].passWord && i ===(name.length -1) ){
                    alert ("faild")
                    this.setState({
                        userName: "",
                        userPass: "",
                    })
                }
            }
        }    
    }

}
