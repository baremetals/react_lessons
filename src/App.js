import React, { Component } from 'react';
import Products from './Products';

class App extends Component {

  formatName(user){ return user.firstName + ' ' + user.lastName; }

  render() {

    const user ={ firstName:'Greg', lastName:'Lim' };

    return (
      <div>
        <h1>
          Hello, {this.formatName(user)}
          <Products />
        </h1>
      </div>
    )
  }
}

export default App;
