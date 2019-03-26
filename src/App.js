import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    const Index = () =>  <Login name = {userList} />
    return (
     
      <Router>
        <div className="App">
          <Route path="/" exact component = {Index}/>
        </div>
      </Router>
        
    );
  }
}

export default App;
