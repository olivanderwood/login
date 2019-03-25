import React, { Component } from 'react';
import './App.css';


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


    return (
      <div className="App">
        <Login name = {userList} />
      </div>
    );
  }
}

export default App;
