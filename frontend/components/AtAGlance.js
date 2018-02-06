import React from 'react';

import {Row, Col} from 'antd';

import CountUp from 'react-countup';

const AtAGlance = props => {
	return (
		<div>
			<Row type="flex" justify="center" style={{backgroundColor: 'rgb(54, 54, 54)', padding: '40px 0'}}>
				<Col xs={0} sm={24}>
					<h2 style={{margin:0, padding:0, textAlign: 'center', color: 'white'}}>Pi Kappa Phi At-A-Glance</h2>
				</Col>
				<Col xs={24} sm={0}>
					<h2 style={{margin:0, padding:0, textAlign: 'center', color: 'white'}}>Pi Kappa Phi<br/>At-A-Glance</h2>
				</Col>
			</Row>
			<Row type="flex" justify="center" style={{padding: '40px 0', textAlign: 'center'}}>
				<Col xs={24} sm={20} md={14}>
					<Col xs={24} md={6}>
						<h2 style={{color: 'rgb(0, 85, 150)',textAlign: 'center'}}>Iota Chapter</h2>
						<p style={{textAlign: 'center'}}>Pi Kappa Phi nationally has over 100,000 members in our alumni network. The Iota chapter of Pi Kappa Phi provides its members with opporunities to excel both in the classroom and out of it.</p>
					</Col>
					<Col xs={24} md={{span: 16, offset: 2}}>
						<Col xs={24} sm={8}>
							<h1 style={{color: 'rgb(0, 85, 150)', fontSize: '3em'}}>
								<CountUp start={0} end={104} duration={4} />
							</h1>
							<h2>Current Chapter<br/>Size</h2>
						</Col>
						<Col xs={24} sm={8}>
							<h1 style={{color: 'rgb(0, 85, 150)', fontSize: '3em'}}>
								<CountUp start={0} end={29} duration={3} />
							</h1>
							<h2>New Members Added<br/>This Year</h2>
						</Col>
						<Col xs={24} sm={8}>
							<h1 style={{color: 'rgb(0, 85, 150)', fontSize: '3em'}}>$<CountUp start={0} end={10658} duration={6} /></h1>
							<h2>Ability Experience<br/>Dollars Raised</h2>
						</Col>
					</Col>
				</Col>
			</Row>
		</div>
	);
}

export default AtAGlance;