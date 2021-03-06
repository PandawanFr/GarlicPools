/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

const target = document.querySelector('#root');

render(
	<Provider store={store}>
	  <ConnectedRouter history={history}>
		<div>
		  <App />
		</div>
	  </ConnectedRouter>
	</Provider>,
	target
  );
/*
ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
*/
registerServiceWorker();
