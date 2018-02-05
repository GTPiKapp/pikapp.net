import React from 'react';

import {Row, Col, Card} from 'antd';

import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';
import Image from '../components/Image';

const Involvement = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Campus Involvement</title>
			</Helmet>
			<PageTitle name="Campus Involvement"/>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-between">
						<Col xs={24} lg={13}>
							<Card>
								<p>On Georgia Tech's campus, the brothers of Pi Kappa Phi are members of several clubs and organizations which provide leadership opportunities, build character and embrace the history of Georgia Tech. In the past, brothers of Pi Kappa Phi have been heavily involved in NSSP (New Student and Sophomore Programs) such as FASET. Some of our brothers have been on the FASET cabinet in charge of making sure new freshman and sophomores to Georgia Tech get the best possible experience. The Ramblin' Reck is one of Georgia Tech's biggest traditions and you'll almost always see a brother of Pi Kappa Phi standing next to it due to our brothers' involvement in the Ramblin' Reck Club.</p>
								<p>Brothers of Pi Kappa Phi understand the importance of Georgia Tech traditions and embrace them with open-arms. From the time students first take a campus tour to when they're watching our football games, brothers of Pi Kappa Phi are always involved keeping alive campus traditions.</p>
								<p>Pi Kappa Phi prides itself on our heavy involvement in both homecoming and greek week, frequently placing in the top 10 and almost always winning events such as the pomp display for homecoming.</p>
							</Card>
						</Col>
						<Col xs={24} lg={{span: 10, offset: 1}}>
							<Card>
								<Image src="faset_involvement.jpg" title="Pi Kappa Phi FASET Leaders" caption="Pi Kappa Phi FASET members" />
							</Card>
						</Col>
					</Row>
					<Row type="flex" justify="space-between" style={{marginTop: 20}}>
						<Col xs={24} lg={10}>
							<Card>
								<Image src="robert_cottingham_reck.jpg" title="Pi Kapp with the Reck" caption="Brother Robert walking with the Reck on gameday" />
							</Card>
						</Col>
						<Col xs={24} lg={10}>
							<Card>
								<Image src="mini_500.jpg" title="Homecoming Mini 500" caption="Homecoming Mini 500 Competition" />
							</Card>
						</Col>
					</Row>
					<Row type="flex" justify="center" style={{marginTop: 20}}>
						<Card>
							<Image src="homecoming_pomp.jpg" title="Pi Kappa Phi Homecoming Pomp" caption="Fall 2017 Homecoming Pomp Display" />
						</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Involvement;