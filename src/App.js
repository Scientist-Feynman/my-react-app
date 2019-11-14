import React, { Component } from 'react';

import './assets/css/App.css';

//import Home from './components/Home.js';
//import C1 from './components/C1.js';
//import List from './components/List.js';
import ToDoList from './components/ToDoList.js';
//import ReactForm from './components/ReactForm.js';
import C2 from './components/C2.js';

import LifeCycleFun from './components/LifeCycleFun.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: true
    }
  }
  render() {
    const changes = this.state.showComponent ? <LifeCycleFun /> : <C2 />
    console.log(changes)
    return (
      <div className="sqart">
        {changes}              
        {/*<C1 />*/}
        {/*<ToDoList />*/}
        {/*注释...*/}
      </div>     
    );
  }
}

export default App;
