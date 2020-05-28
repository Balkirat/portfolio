import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./loading.scss";
import { motion } from "framer-motion";

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
    const variants = {
      open: { y: 0 },
      closed: { x: "5%", transition: { delay: 100 } },
    };
    return (
      <>
        {this.state.isLoaded && (
          <motion.nav
            className="mobile-nav"
            variants={variants}
            initial="open"
            animate={this.state.isLoaded ? "open" : "closed"}
            transition={{ damping: 900 }}
          >
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
          </motion.nav>
        )}
      </>
    );
  }
}

export default Loading;
