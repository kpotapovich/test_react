                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React from 'react';
import './App.css';



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
            <button
                className="button"
                placeholder="sdsd"
                title="sds"
                onClick={this.minus}
            >-</button>
            <span className="text">{this.state.number}</span>
            <button
                className="button"
               onClick={() => this.plus(2)}
            >+</button>
        </div>
      )
    }
}

export default Stepper;
