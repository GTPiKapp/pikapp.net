import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Helmet from 'react-helmet';

import Layout from '../Layout';
import PaddingWrapper from '../../components/PaddingWrapper';

import Homepage from '../Homepage';
import House from '../House';
import Dining from '../Dining';
import Officers from '../Officers';
import Rush from '../Rush';
import Scholarship from "../Scholarship";
import Contact from '../Contact';
import About from '../About';
import ParentMessage from '../ParentMessage';
import UpdateInformation from '../UpdateInformation';
import NotableAlumni from '../NotableAlumni';
import Newsletters from '../Newsletters';
import Involvement from '../Involvement';
import Philanthropy from '../Philanthropy';

import Missing from '../Missing';

export default function Root({ store }) {
	return (
		<Provider store={store}>
			<div>
				<Helmet bodyAttributes={{style:'background-color: #f0f2f5'}}>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Helmet>
				<Router>
					<Layout paddingTop={false}>
						<Switch>
							<Route exact path="/" component={Homepage} />
							<PaddingWrapper>
								<Switch>
									<Route exact path="/house" component={House} />
									<Route exact path="/house/dining" component={Dining} />
									<Route exact path="/contact" component={Contact} />
									<Route exact path="/rush" component={Rush} />
									<Route exact path="/scholarship" component={Scholarship} />
									<Route exact path="/alumni/update" component={UpdateInformation} />
									<Route exact path="/alumni/notable" component={NotableAlumni} />
									<Route exact path="/alumni/newsletters" component={Newsletters} />
									<Route exact path="/about" component={About} />
									<Route exact path="/about/parents" component={ParentMessage} />
									<Route exact path="/about/officers" component={Officers} />
									<Route exact path="/about/involvement" component={Involvement} />
									<Route exact path="/about/philanthropy" component={Philanthropy} />
									<Route path="*" component={Missing} />
								</Switch>
							</PaddingWrapper>
						</Switch>
					</Layout>
				</Router>
		   </div>
		</Provider>
	);
}

Root.propTypes = {};
