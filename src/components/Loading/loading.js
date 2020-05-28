import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./loading.scss";

class Loading extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: true,
    };

    setTimeout(() => {
      this.setState({
        isLoaded: false,
      });
    }, 4000);
  }

  render() {
    return (
      <>
        {this.state.isLoaded && (
          <div className="loading">
            <div className="loading__text">
              <ReactTypingEffect
                className="typed-cursor"
                speed={100}
                staticText=""
                eraseDelay={1000}
                typingDelay={750}
                text={["WELCOME TO MY PORTFOLIO"]}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Loading;
