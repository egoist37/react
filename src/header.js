import React from 'react';
// import logo from './logo.svg';


export class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS: ', props);
    
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>{this.props.name || 'Header name'} | {this.props.email || 'email@email.com'}</h1>
        </header>
      </div>
    );
  }
}
