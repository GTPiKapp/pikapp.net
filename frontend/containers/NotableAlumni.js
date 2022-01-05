import React from 'react';

import {Row, Col} from 'antd';

import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle'

const NotableAlumni = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Alumni Donations</title>
			</Helmet>
			<PageTitle name="Alumni Donations"/>
		</div>
	);
}

export default NotableAlumni;