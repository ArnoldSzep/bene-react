import React, { Component } from 'react';
import InputItem from './InputItem';

class MultiInput extends Component {
  constructor(props) {
    super();
    this.state = {
      inputArray: [],
      inputs: []
    };
  }

  componentWillMount() {
    this.setState({
      inputArray: ['first', 'second', '']
    });
  }

  update(ev, key) {
    var inputArray = this.state.inputArray;

    inputArray[key] = ev.target.value;

    if (inputArray.length === key + 1) {
      inputArray.push('');
    }

    this.setState({ inputArray: inputArray });
    //console.log('update', key, ev);
  }

  remove(key) {
    var inputArray = this.state.inputArray;
    inputArray.splice(key, 1);
    
    this.setState({ inputArray: inputArray });
  }
  
  render() {
    var inputs = this.state.inputArray.map((item, key) => {
      return (
        <div className="input_wrap" key={key}>
          {key}
          <input type="text" value={item} onChange={(ev) => this.update(ev, key)} placeholder="test" />
          <button onClick={() => this.remove(key)}>X</button>
          <br />
        </div>
      );
    });

    return (
      <section className="multi_input">
        <h1>Multi Input</h1>
        {inputs}

        <button>Cancel</button>
        <button>Save</button>
      </section>
    );
  }
}

export default MultiInput;