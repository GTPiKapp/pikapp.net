import React from 'react';

import {Row, Col, Card} from 'antd';

const Class = props => {
	return (
		<div style={{padding: '20px 0'}}>
			<Row type="flex" justify="center">
				<h2 style={{textAlign: 'center', fontSize: '1.5rem'}}>Men of C.L.A.S.S.</h2>
			</Row>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" align="top" justify="space-around" style={{marginBottom: 20}}>
						<Col sm={24} md={12} lg={7}>
							<Card style={{textAlign: 'center'}}>
								<h2>Character</h2>
								<p>Pi Kapps have mental and moral qualities that stem beyond the norm of society.</p>
							</Card>
						</Col>
						<Col sm={24} md={12} lg={7}>
							<Card style={{textAlign: 'center'}}>
								<h2>Leadership</h2>
								<p>Pi Kapps are able to show guidance and perserverance not only to our brotherhood, but to every person we associate with.</p>
							</Card>
						</Col>
						<Col sm={24} md={12} lg={7}>
							<Card style={{textAlign: 'center'}}>
								<h2>Academics</h2>
								<p>Pi Kapps strive to attain the highest possible standards of scholarship.</p>
							</Card>
						</Col>
					
						<Col sm={24} md={12} lg={7}>
							<Card style={{textAlign: 'center'}}>
								<h2>Sportsmanship</h2>
								<p>Pi Kapps ensure our behavior and treatment of others both in a sporting environment and our general conduct is exemplary.</p>
							</Card>
						</Col>
						<Col sm={24} md={12} lg={7}>
							<Card style={{textAlign: 'center'}}>
								<h2>Service</h2>
								<p>Pi Kapps are always actively assisting and supporting the community through our work with <a href="http://abilityexperience.org" target="_blank" title="The Ability Experience">The Ability Experience</a>.</p>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Class;