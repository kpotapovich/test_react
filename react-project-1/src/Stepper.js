import React, { Component } from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      import React from 'react';
import './Srepper.css';
import Button from './Button';



class Stepper extends React.Component {


    state = {
        number: 1,
        visible: true,
    };
    plus = () => {
        this.setState({
            number: this.state.number + 1,
        })
    };

    minus = () => {
        this.setState({
            number: this.state.number - 1,
        })
    };

    render () {
      return (
          <div className="App">
              <span>this.props.title</span>
              <div className="buttons">
                  <Button
                      label ='-'
                      onClick ={this.minus}
                  />
                  <span className="text">{this.state.number}</span>
                  <Button
                      label = '+'
                      onClick = {() => this.plus(3)}
                  />
              </div>
          </div>
      )
    }
}

export default Stepper;
