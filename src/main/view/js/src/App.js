import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DataForm from './DataForm.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        // fetch('http://localhost:3001/getRes').then((body) => {
        //     return body.json();
        // }).then((data) => {
        //     console.log(data);
        //     this.setState({data: data.data});
        // })
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Learn Investment</h1>
        </header>
        <p className="App-intro">
         Please provide a search term to see recommendation
        </p>

        <div>
          <DataForm/>
        </div>
          {
          }
          {/*<span>{DataForm.getName()}</span>*/}
      </div>

    );
  }
}

export default App;
