import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

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
          <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            onEntered={(el) => {
              el.style.color = "red";
            }}
            appear={true}
          >
            <h3> CSS3 transition </h3>
          </CSSTransition>
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
