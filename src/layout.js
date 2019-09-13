import React from 'react';
import { Link } from 'react-router-dom';
import { Base } from './base-class';

export class MainLayout extends Base {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <div className="main-navbar">
          <ul>
            <li><Link to='/' activeclassname="active">Home</Link></li>
            <li><Link to="/catalog" partiallyactive="active">Catalog</Link></li>
            <li><Link to="/cart" partiallyactive="active">Cart</Link></li>
          </ul>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;