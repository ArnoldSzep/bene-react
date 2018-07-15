import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './assets/logo.svg';
import MultiInput from './components/MultiInput';

class App extends React.Component {
    constructor() {
        super();

        this.startState = ['first', 'second', ''];
        this.savedItems = '';

        this.state = {
            savedArray: [],
            inputArray: []
        }
    }

    componentWillMount() {
        this.setState({
            inputArray: this.startState.slice()
        });
    }

    save(array) {
        var arrayCopy = array.slice();
        if (arrayCopy[arrayCopy.length - 1] === '') {
            arrayCopy.splice(arrayCopy.length - 1, 1);
        }

        this.setState({
            savedArray: arrayCopy
        });
    }

    update(ev, key) {
        var inputArray = this.state.inputArray;

        inputArray[key] = ev.target.value;

        if (inputArray.length === key + 1) {
            inputArray.push('');
        }

        this.setState({ inputArray: inputArray });
    }

    remove(key) {
        var inputArray = this.state.inputArray;
        inputArray.splice(key, 1);

        this.setState({ inputArray: inputArray });
    }

    reset(array) {
        this.setState({
            inputArray: this.startState.slice()
        });
    }

    render() {
        this.savedItems = this.state.savedArray.map((item, key) => {
            return (
                <li key={key}>
                    {item}
                </li>
            );
        });

        return (
            <div className="page_wrap">
                <header className="header">
                    <img src={logo} className="header-logo" alt="logo" width="113" height="80" />
                </header>

                <div className="container">
                    <MultiInput
                        inputArray={this.state.inputArray}
                        update={this.update.bind(this)}
                        reset={this.reset.bind(this)}
                        remove={this.remove.bind(this)}
                        onChange={this.save.bind(this)} />

                    <ol>
                        {this.savedItems}
                    </ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
