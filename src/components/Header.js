import React, { Component } from 'react';

class Header extends Component {
  render() {
    const text = 'Sistema Solar';
    return (
      <header>
        <h1>
          { text }
        </h1>
      </header>
    );
  }
}

export default Header;
