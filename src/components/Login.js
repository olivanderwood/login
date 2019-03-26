import React, { Component } from 'react';
import './Login.css';
import { Form,FormGroup, Label, Input, Button,Container, Col, Fade } from 'reactstrap';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Login extends Component {
    constructor(state){
        super(state);
        this.state = {
                userName:"", 
                userPass:"",
                isFade: true,          
        }



    this.onDoneName = this.onDoneName.bind(this);    
    this.onDonePass = this.onDonePass.bind(this);   
    }

    
    

    render () {
        
        const {name, link} = this.props;

       
        return(
            
            <Router>

                <Fade in = {this.state.isFade}>
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
                                    
                                    <Link to ="/Register" onClick={this.toggle}>Create new account</Link>

                                    <Button outline color="success" size="lg" block  onClick = {() => this.checkLogin(name)}>Login </Button>
                                </div>
                        
                            </Form>
                        </Col>    
                    </Container>
                </Fade>
                

                <Route path="/Register" exact component = {link}/>
            </Router>
            
            
        )
    }
   

    toggle(){
        debugger;
        this.setState({
            ...this.state.userName,
            ...this.state.userPass,
            isFade: !this.state.isFade
        })
    }

   
    onDoneName(event){
        
        let text="";
        text = event.target.value;
        text =text.trim();
        this.setState({
            userName:text, 
            ...this.state.userPass,
            ...this.state.isFade, 
        })
        
    }


    onDonePass(event){
        
        let pass="";
        pass = event.target.value;
        pass =pass.trim();
        this.setState({
            ...this.state.userName, 
            userPass:pass, 
            ...this.state.isFade,
            
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
                        ...this.state.isFade
                    })
                    break;
                }
            
                else if(this.state.userName !== name[i].loginName && i === (name.length - 1)){
                    alert("faild")
                    this.setState({
                        userName: "",
                        userPass: "",
                        ...this.state.isFade
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


    componentDidMount(){
        this.setState({
            ...this.state.userName,
            ...this.state.userPass,
            isFade: true,
        })
    }

}
