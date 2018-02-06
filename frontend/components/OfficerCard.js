import React, {Component} from 'react';

import {Row, Col, Card} from 'antd';
import Image from './Image'

class OfficerCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {email, position, name, image, hometown, major, quote, hideInformation, hideEmail} = this.props;
		return (
			<Col xs={24} md={11}>
				<Card title={position}>
					<Row>
						<Col span={8}>
							<Image src={`${image}.jpg`} title={name} />
						</Col>
						<Col span={15} offset={1}>
							<p><b>Name: </b> {name}</p>
							{!hideInformation ? ( 
							<div>
								{hometown && <p><b>Hometown: </b> {hometown}</p>}
								{major && <p><b>Major: </b> {major}</p>}
								{!hideEmail && <p><b>Email: </b> <a href={`mailto:${position.toLowerCase()}@pikapp.net`} title={`Email the ${position.toLowerCase()}`}>{position.toLowerCase().replace(' ', '')}@pikapp.net</a></p>}
								{quote && <p><b>What does PiKapp mean to you?</b><br/><i>{quote}</i></p>}
							</div>
							) : (
								<p><b>Email: </b> <a href={`mailto:${email}`} title={`Email ${email}`}>{email}</a></p>
							)}
						</Col>
					</Row>
				</Card>
			</Col>
		)
	}
}

export default OfficerCard;