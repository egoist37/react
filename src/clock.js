import React from 'react';
import { Base } from './base-class';

export class Clock extends Base {
  constructor(props) {
    console.log("PROPS: ", props);
    super(props);
    this.timer = this.props.timer || 1;
    this.state = {
      date: new Date(),
      times: 0,
    };
  }

  componentWillMount() {
    const timer = this.timer * 1000;
    this.intervalId = setInterval(() => {
      this.setState((state) => ({
        date: new Date(),
        times: state.times + 1
      }));
    }, timer);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    return (
      <div>
        <h2>now is {
          this.state.date.toLocaleTimeString()
          }
          ({this.state.times}).</h2>
      </div>
    );
  }
}