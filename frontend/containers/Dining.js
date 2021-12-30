import React, { Component } from 'react';

import Helmet from 'react-helmet';

import { Row, Col, Card } from 'antd';

import PageTitle from '../components/PageTitle';
import Image from '../components/Image';

const House = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Dining</title>
			</Helmet>
			<PageTitle name="Dining" />
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-around">
						<Col xs={24} md={{ span: 17, push: 7 }}>
							<Card style={{ width: '100%' }}>
								<p>
									Our chapter features one of the Georgia Tech
									Greek community's finest and most complete
									dining programs. Our Chef serves 10 meals
									per week and additionally provides a quick
									breakfast option for members Monday-Friday.
									Additionally, the chapter enjoys the
									availability of several cereals and fruits
									throughout the day for those in need of a
									quick snack. Our dining room is also
									equipped with a Coca-Cola fountain machine
									that dispenses 6 beverages.
								</p>
								<p>
									We are honored to have Robert Grimes as the
									Head Chef of our dining program. He comes to
									us from an esteemed background including
									catering for several US Open Tennis events.
									He thoughtfully prepares lunch and dinner
									every day and strives to vary the menu in
									order to provide healthy and delicious
									meals.
								</p>
								<p>
									As a member of Pi Kappa Phi fraternity, you
									will either be on a 5 meals per week plan as
									an Associate member or on a 10 meals per
									week plan as a brother. The price of the
									meal plan is priced competitively with the
									meal plans offered by Georgia Tech and will
									undoubtedly save you money during your time
									as a member.
								</p>
								<p>
									Even if you are not able to make it to our
									house during the pre-set mealtimes, we use{' '}
									<a
										href="https://lateplate.io"
										alt="Lateplate.io request system">
										lateplate.io
									</a>{' '}
									which allows you to remotely request a plate
									of food be set aside for you until you're
									able to make it to the house to pick it up.
									They have iOS, Android and Web applications
									so you're always able to make sure you get
									the amazing food.
								</p>
								<p>
									If you are interested in joining or finding
									out more about the dining program, please
									come by during Rush and taste some of our
									chef's wonderful food.
								</p>
							</Card>
						</Col>
						<Col xs={20} sm={14} md={{ span: 6, pull: 17 }}>
							<Card style={{ width: '100%' }}>
								<Image
									src="james-moore.jpg"
									title="Robert Grimes, Head Chef"
									caption="Robert Grimes, Head Chef"
								/>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default House;
