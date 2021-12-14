import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className={this.state.show ? "show" : "hide"}>CSS3 transition</h3>
          <h3 className={this.state.show ? "other-show" : "other-hide"}>
            Other CSS3 transition
          </h3>
          <button onClick={this.changeStatus}>CHANGE STATUS</button>
        </header>
      </div>
    );
  }
}

export default App;
