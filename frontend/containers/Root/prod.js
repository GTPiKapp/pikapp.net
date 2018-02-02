import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import DevTools from '../../components/DevTools';
import Helmet from 'react-helmet';

import Layout from '../Layout';

import Homepage from '../../containers/Homepage';

export default function Root({ store }) {
	return (
		<Provider store={store}>
			<div>
				<Helmet bodyAttributes={{style:'background-color: #f0f2f5'}}>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Helmet>
				<Router>
					<Layout>
						<Switch>
							<Route exact path="/" component={Homepage} />
						</Switch>
					</Layout>
				</Router>
		   </div>
		</Provider>
	);
}

Root.propTypes = {};
