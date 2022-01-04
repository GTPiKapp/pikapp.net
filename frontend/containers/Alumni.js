import React from 'react';

import {Row, Col, Card} from 'antd';
const {Meta} = Card;

import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';

const Alumni = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Alumni Donations</title>
			</Helmet>
			<PageTitle name="Alumni Donations"/>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-around">
						{/* {newsletters.reverse().map(e => {
							return (
								<Col xs={11} sm={11} md={7} lg={7} xl={5} key={e.name}>
									<a href={e.link} title={e.name} target="_blank">
										<Card
											style={{marginBottom: 20}}
											hoverable={true}
											cover={<img alt="PDF Download" src="/images/pdf.png" style={{margin: 20, width:'50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto'}} />}>
											<Meta
												title={e.name}
												description='Download'>
											</Meta>
										</Card>
									</a>
								</Col>
							);
						})} */}
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Donations;