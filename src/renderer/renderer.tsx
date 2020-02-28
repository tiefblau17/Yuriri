import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../../public/index.css';

console.log('👋 This message is being logged by "renderer.tsx", included via webpack');

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();