import React, { Component } from "react";
import Counter from "./counter";

class CounterList extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            //   key is used internally so react can identify which component to re-render
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </React.Fragment>
    );
  }

  handleReset = () => {
    const newCounters = this.state.counters.map((cnt) => {
      cnt.value = 0;
      return cnt;
    });
    this.setState({ counters: newCounters });
  };

  handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(
      (cnt) => cnt.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  handleIncrement = (counterId) => {
    const newCounters = [...this.state.counters];
    const newCounter = { ...newCounters[counterId] };
    newCounters[counterId] = newCounter;
    newCounter.value++;
    this.setState({ counters: newCounters });
  };
}

export default CounterList;
