import React from 'react'
import Helmet from 'react-helmet';

import {Row, Col, Card} from 'antd';

const Missing = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | 404</title>
			</Helmet>
			<Row type="flex" justify="centered" style={{padding: '0 0 20px'}}>
				<Col xs={24} sm={{span: 20, offset:2}} md={{span: 14, offset: 5}}>
					<Card>
						<Row type="flex" justify="center">
							<img src="/images/CoA.png" height="120"/>
						</Row>
						<Row type="flex" justify="center" style={{marginTop: '20px'}}>
							<h1>404</h1>
						</Row>
						<Row type="flex" justify="center">
							<h3><b>Not Found</b></h3>
						</Row>
						<Row type="flex" justify="center">
							<p>Oops, it looks like that page is missing or has been deleted. We're sorry about this!</p>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}


export default Missing;