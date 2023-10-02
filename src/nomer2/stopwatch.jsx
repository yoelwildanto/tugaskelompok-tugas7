import React, { Component } from 'react';
import './Stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchText: '00:00',
      timeoutId: null,
      ms: 0,
      sec: 0,
      min: 0,
      isPaused: false,
    };
  }

  run = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
      this.start();
    } else {
      this.setState({ isPaused: true });
      clearTimeout(this.state.timeoutId);
    }
  }

  start = () => {
    const { ms, sec, min } = this.state;
    let { timeoutId } = this.state;

    timeoutId = setTimeout(() => {
      let newMs = ms + 1;
      let newSec = sec;
      let newMin = min;

      if (newMs === 100) {
        newSec = sec + 1;
        newMs = 0;
      }
      if (newSec === 60) {
        newMin = min + 1;
        newSec = 0;
      }
      if (newMs < 10) {
        newMs = '0' + newMs;
      }
      if (newSec < 10) {
        newSec = '0' + newSec;
      }
      if (newMin < 10) {
        newMin = '0' + newMin;
      }

      this.setState({
        stopwatchText: `${newMin}:${newSec}`,
        ms: newMs,
        sec: newSec,
        min: newMin,
        timeoutId,
      });

      this.start();
    }, 10); // delay 10 ms
  }

  pause = () => {
    clearTimeout(this.state.timeoutId);
    this.setState({ isPaused: true });
  }

  reset = () => {
    this.setState({
      ms: 0,
      sec: 0,
      min: 0,
      stopwatchText: '00:00',
      isPaused: false,
    });
    clearTimeout(this.state.timeoutId);
  }

  render() {
    return (
      <div id="container">
        <div id="stopwatch">{this.state.stopwatchText}</div>
        <button onClick={this.run} id="start-btn">Start</button>
        <button onClick={this.pause} id="pause-btn">Stop</button>
        <button onClick={this.reset} id="reset-btn">Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
