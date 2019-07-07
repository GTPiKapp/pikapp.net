import React, {Component} from 'react';

import {Row, Col, Card, Tag} from 'antd';
import Image from './Image'
import Quote from './Quote';

class OfficerCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {email, position, name, image, hometown, major, quote, hideInformation, hideEmail} = this.props;

		const createTag = info => {
			return (
				<div style={{ display: 'inline-block' }}>
					<Tag style={{color: '#292929'}} color="rgba(41, 41, 41, 0.09)">{info}</Tag>
				</div>
			);
		};
		const createInfoRow = (prop, info) => {
			return (
				<div style={{ margin: '2% 0' }}>
					{createTag(info)}
					<span>{prop}</span>
				</div>
			);
		};
		// this creates empty rows for those that are missing for a card so the alignment is consistent
		const createHiddenInfoRows = props => {
			let rows = [];
			props.forEach((prop, i) => {
				if (!prop) {
					rows.push((
						<div style={{ margin: '2% 0', visibility: 'hidden' }} key={i}>
							{createTag('Null')}
							<span>Null</span>
						</div>
					));
				}
			});
			return rows;
		};
		const createEmailInfoRow = (email, hideInfo) => {
			return (
				<div style={{ margin: '2% 0', visibility: hideEmail ? 'hidden' : 'visible' }}>
					{createTag('Email:')}
					{hideInfo ? (
						<a href={`mailto:${email}`} title={`Email ${email}`}>{email}</a>
					) : (
						<a href={`mailto:${email.toLowerCase()}@pikapp.net`} title={`Email the ${email.toLowerCase()}`}>{email.toLowerCase().replace(' ', '')}@pikapp.net</a>
					)}
				</div>
			);
		};

		return (
			<Col xs={24} md={11}>
				<Card
                    style={{ height: window.innerHeight / (window.innerWidth < 800 ? 1.8 : 2.3 ), color: '#292929' }}
                    title={position}
                    hoverable
                >
					<Row>
						<Col span={8}>
							<Image src={`${image}.jpg`} title={name} />
						</Col>
						<Col span={15} offset={1}>
							{name && createInfoRow(name, 'Name:')}
							{!hideInformation ? (
							<div>
								{!hideEmail && createEmailInfoRow(position)}
								{major && createInfoRow(major, 'Major:')}
								{hometown && createInfoRow(hometown, 'Hometown:')}
								{createHiddenInfoRows([name, !hideEmail, major, hometown])}
								{quote &&
									<div style={{verticalAlign: 'middle'}}>
										<span><b>What does Pi Kapp mean to you?</b></span>
										<br/>
										<br/>
										<Quote quote={quote} name={name} />
									</div>
								}
							</div>
							) : (
								createEmailInfoRow(email, true)
							)}
						</Col>
					</Row>
				</Card>
			</Col>
		)
	}
}

export default OfficerCard;
