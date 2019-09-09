import React from 'react';
// import logo from './logo.svg';


export class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS in Header constructor: ', props);
    
  }

  componentDidMount () {
    const params = this.props.match.params;
    const state = this.props.location.state;

    console.log("PARAMS: ", params);
    console.log("STATE: ", state);
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
