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
         Please provide your login details to log in to the platform
        </p>

        <div>
          <DataForm/>
        </div>
          {
              this.state.data.map(function (field, index) {
              return (
                  <span>

                      {"value: " + index + " iScore: " + field.integratedScore}
                      <br/>
                  </span>
              )
            })
          }
          {/*<span>{DataForm.getName()}</span>*/}
      </div>

    );
  }
}

export default App;
