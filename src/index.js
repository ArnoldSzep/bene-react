import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import logo from './assets/logo.svg';
import MultiInput from './components/MultiInput';

//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" width="113" height="80" />
                </header>

                <MultiInput />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
