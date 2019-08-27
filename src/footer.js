import React from 'react';

export class Footer extends React.Component {
    render() {
      return (
        <footer>
          <h6>{this.props.name} | {this.props.email}</h6>  
          <p>2019 © ReactJS</p>
        </footer>
      );
    }
  }