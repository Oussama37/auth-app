import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggin: true
    };
  }
  
  
  

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLoggin } = this.state;

    if (isLoggin) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLoggin: !prevState.isLoggin }));
  }
  
  render() {
    const { isLoggin } = this.state;
    const current = isLoggin ? "Register" : "Login";
    const currentActive = isLoggin ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLoggin && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLoggin && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

