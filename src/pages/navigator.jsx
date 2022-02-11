import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import { ErrorNotFoundComponent } from '../components/error-component/error-component';
import { IndexPage } from './index-page/index-page';

export const Navigator = () => (
	<Router>
		<Routes>
			<Route exact path='/' element={<IndexPage/>}/>
			<Route element={<ErrorNotFoundComponent/>}/>
		</Routes>
	</Router>
);
