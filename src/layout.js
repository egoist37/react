import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Base } from './base-class';

export class MainLayout extends Base {
  constructor(props) {
    super(props);
    this.props = props;
    console.log("PROPS: ", props);
  }

  add(e) {
    e.preventDefault();
    this.props.addUser(123);
  }

  render() {
    return (
      <div className="app">
        <div className="main-navbar">
          <button onClick={this.add.bind(this)}>add</button>
          <ul>
            <li><Link to='/' activeclassname="active">Home</Link></li>
            <li><Link to="/catalog" partiallyactive="active">Catalog</Link></li>
            <li><Link to="/product/add" partiallyactive="active">Add product</Link></li>
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

export const addUser = content => ({
  type: 'ADD_USER',
  payload: {
    id: +(new Date()),
    name: 'asgagag'
  }
});

// export default MainLayout;
const mapStateToProps = state => {
  console.log('STATE: ', state);
  return { users: state.users };
};
export default connect(mapStateToProps, {
  addUser
})(MainLayout);