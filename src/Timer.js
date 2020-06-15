import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 60,
      isRunning: false,
    };
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
  }

  start() {
    if (this.state.isRunning) {
      return;
    } else {
      this.setState({
        isRunning: true,
      });
      this.stop = setInterval(() => {
        if (this.state.time <= 1) {
          clearInterval(this.stop);
          this.setState({
            isRunning: false,
          });
        }
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));
      }, 1000);
    }
  }

  reset() {
    this.setState({
      time: 60,
    });
    clearInterval(this.stop);
    this.setState({
      isRunning: false,
    });
  }

  pause() {
    clearInterval(this.stop);
    this.setState({
      isRunning: false,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Timer</h2>
        <div className="time">{this.state.time}</div>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <button className="start" onClick={this.start}>
          Start
        </button>
        <button className="pause" onClick={this.pause}>
          Pause
        </button>
      </div>
    );
  }
}
export default Timer;
