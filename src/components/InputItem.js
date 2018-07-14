import React, { Component } from 'react';

class InputItem extends Component {
    inputChange() {
        console.log(this.props.item);
        console.log(this.props.index);

        if (this.props.array.length === this.props.index + 1) {
            this.props.update(this.refs.item.value);
            
        console.log(this.props.array, this.props.array.length);
        }
    }

    render() {
        return (
            <div className="input_wrap">
                <input type="text" defaultValue={this.props.item} onChange={this.inputChange.bind(this)} name="" id="" ref="item" placeholder="test" />
                <button>X</button>
                <br />

            </div>
        );
    }
}

export default InputItem;