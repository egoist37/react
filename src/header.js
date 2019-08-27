import React from 'react';
import logo from './logo.svg';


export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>{this.props.name} | {this.props.email}</h1>
        </header>
      </div>
    );
  }
}
