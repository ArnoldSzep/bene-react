import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close.svg';

class MultiInput extends Component {
  save() {
    var sendArray = this.props.inputArray;
    this.props.onChange(sendArray);
  }

  focus(ev) {
    ev.target.parentNode.classList.add('active');
  }

  blur(ev) {
    ev.target.parentNode.classList.remove('active');
  }

  render() {
    var inputs = this.props.inputArray.map((item, key, array) => {
      return (
        <div className="input_wrap" key={key}>
          <label htmlFor={'input' + key}>{'Input #' + key}</label>
          <input type="text" id={'input' + key} value={item} onChange={(ev) => this.props.update(ev, key)} onBlur={(ev) => this.blur(ev)} onFocus={(ev) => this.focus(ev)} placeholder="empty" />
          <button onClick={() => this.props.remove(key)} style={{ display: array.length === key + 1 ? 'none' : '' }}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
      );
    });

    return (
      <section className="multi_input">
        <aside className="multi_input-sidebar">
          <h1>Multi Input</h1>
          <p>
            Heirloom tumblr glossier jianbing godard put a bird on it hammock shabby chic retro cardigan sartorial hell of meditation.
          </p>
        </aside>

        <div className="multi_input-inputs">
          {inputs}
        </div>

        <div className="cl"></div>

        <footer className="multi_input-footer">
          <button onClick={this.props.reset.bind(this)}>Reset</button>
          <button onClick={this.save.bind(this)}>Save</button>
        </footer>
      </section>
    );
  }
}

MultiInput.propTypes = {
  inputArray: PropTypes.array,
  update: PropTypes.func,
  reset: PropTypes.func,
  remove: PropTypes.func,
  onChange: PropTypes.func
}

export default MultiInput;