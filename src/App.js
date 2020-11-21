import React, { Component } from 'react';
import GitHub from './GitHub';
// import Products from './Products';
// import JumboTron from './JumboTron';
// import UserForm from './UserForm';
;

class App extends Component {

  // formatName(user){ return user.firstName + ' ' + user.lastName; }

  render() {

    return (
      <div className="App">
        <h1>
          <GitHub />
        </h1>
      </div>
    )
  }
}

export default App;
