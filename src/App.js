import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Registration from './components/Registration';
import Login from './components/Login';





class App extends Component {
  constructor(){
    super();
    this.state = {
      userList :[
        {loginName: 'tom' , passWord:'asdada'},
        {loginName: 'jerry', passWord:'dadadad'},
      ]
    }
  }
  


  render() {
    const {userList} = this.state;
    const Index = () =>  <Login name = {userList} link = {Register} />
    const Register = () => <Registration/>
    return (
      
      
      <Router>
        <div className="App">



          <Route path="/" exact component = {Index}/>
          <Route path="/Register" exact component = {Register}/>
        </div>
      </Router>
        
    );
  }
}




export default App;
