import React, {Component} from 'react'

import Helmet from 'react-helmet';

import {Row, Col, Card} from 'antd';

import HouseMapLocation from '../components/HouseMapLocation';
import PageTitle from '../components/PageTitle';
import Image from '../components/Image';

const House = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Our House</title>
			</Helmet>
			<PageTitle name="Our House"/>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-around">
						<Card style={{width: '100%'}}>
							<Image src="house-aerial.jpg" title="Pi Kappa Phi Aerial Picture" />
						</Card>
					</Row>
					<Row type="flex" justify="space-around" style={{paddingTop: 20}}>
						<Col sm={24} md={24} lg={17}>
							<Card style={{width: '100%'}}>
								<p>Our previous chapter house was located at 831 Techwood Drive, which is presently used by Psi Upsilon Fraternity. Iota sold that house and land to Psi Upsilon in late 1994. The land that we are currently on, as well as the land occupied by Phi Mu, Phi Kappa Theta, and Pi Kappa Alpha, was previously a Georgia Tech parking lot.</p>
								<p>The chapter along with alumni celebrated the grand opening of our house with a dedication ceremony on May 18, 1996. Before brothers of Pi Kappa Phi lived in the house, it was used to house the Nigerian track team for the 1996 Olympics. The house is 14,000 square feet and consists of twenty-one two person bedrooms and three single rooms. During the summer of 2008, the house went through an extensive renovation. The kitchen was redone in order to better accommodate our personal chef, and the chapter room was also renovated to provide an updated social area for the chapter. There were also several other small improvements made all around the house including hardwood floors in the hallways and tiled bathrooms. Along with a recently renovated house, brothers of Pi Kappa Phi enjoy having a basketball court, a full beach volleyball court, and a deck area in between the two for cookouts.</p>
								<p>We're extremely lucky to have the only dedicated house keeper on Tech's campus who ensures that our house always looks as beautiful as the day we moved in. Virgina Moore has been with us for several years now ensuring that we always have a clean house to come home to.</p>
							</Card>
						</Col>
						<Col sm={12} lg={6}>
							<Card style={{width: '100%'}}>
								<Image src="virginia-moore.jpg" title="Virginia Moore" caption="Virginia Moore, Housekeeper" />
							</Card>
						</Col>
					</Row>
					<Row type="flex" justify="space-around" style={{paddingTop: 20}}>
						<Card style={{width: '100%'}}>
							<HouseMapLocation
								googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAPS_API}`}
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `400px` }} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
}


export default House;