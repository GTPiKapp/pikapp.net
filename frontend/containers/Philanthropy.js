import React from 'react';

import {Row, Col, Card} from 'antd';

import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';
import Image from '../components/Image';

const Philanthropy = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Our Philanthropy</title>
			</Helmet>
			<PageTitle name="Our Philanthropy" />
			<Row type="flex" justify="center">
				<Col sm={24} md={14}>
					<Row type="flex" justify="space-between">
						<Col xs={24} lg={14}>
							<Card>
								<p>Pi Kappa Phi prides itself on being the only national fraternity who runs and operates their own philanthrophic organization, <a href="http://abilityexperience.org">The Ability Experience</a>. The Ability Experience was founded on the idea that children with disabilities are no different from children without disabilities. Rather than align itself with a specific disability, The Ability Experience strives to improve the lives of all children with disabilities. One of the ways this is done is by working with camps local to Pi Kapp chapters and improving the infrastructure of that camp to be more friendly to people with disabilities.</p>
								<p>The Iota chapter of Pi Kappa Phi is extremely proud to announce that three of our brothers will be participating in Journey of Hope 2018 where they will be riding bikes across the United States over an entire summer to raise money for children with disabilities. Each brother participating is required to fundraise at least $5,500 before they're allowed to bike across the country.</p>
							</Card>
						</Col>
						<Col xs={24} lg={8}>
							<Card>
								<Image src="twin_lakes.jpg" title="Brothers volunteering at an Ability Weekned" />
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Philanthropy;