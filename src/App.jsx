import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { Navigator } from './pages/navigator';

export const App = () => (
	<Provider store={Store}>
		<Navigator/>
	</Provider>
);
