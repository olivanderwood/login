import React, { Component } from 'react';
import './Login.css';



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
            <div className = "Login">
            
                <input type = "text" placeholder= "User Name" onKeyUp = {this.onDoneName} />
                <input type = "password" placeholder="password" onKeyUp ={this.onDonePass} />
                <button  onClick = {() => this.checkLogin(name)}>Login </button>
            </div>
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
                    break;
                }
            
                else if(this.state.userName !== name[i].loginName && i === (name.length - 1)){
                    alert("faild")
                }


                else if(this.state.userName === name[i].loginName && this.state.userPass !== name[i].passWord && i ===(name.length -1) ){
                    alert ("faild")
                }
            }
        }    
    }
    
    }
