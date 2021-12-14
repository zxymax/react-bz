import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus() {
    this.setState((prevState) => ({
      list: [...prevState.list, "item"],
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onEntered={(el) => {
                    el.style.color = "red";
                  }}
                  appear={true}
                  key={index}
                >
                  <h3>{item} CSS3 transition </h3>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
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
