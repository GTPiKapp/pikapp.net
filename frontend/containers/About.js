import React from 'react'
import Helmet from 'react-helmet';

import {Row, Col, Card} from 'antd';

import PageTitle from '../components/PageTitle';
import Image from '../components/Image';
import Leaders from '../components/Leaders';

const Missing = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | About</title>
			</Helmet>
			<PageTitle name="About"/>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Card style={{width: '100%'}}>
						<p>For more than 100 years, Pi Kappa Phi has been building better men on college campuses across the country. From our humble roots at the College of Charleston in South Carolina to over 130 campuses today, Pi Kappa Phi stands for a commitment to fundamental values.</p>
						<p>We are a first CLASS fraternity who firmly believes in the tenets of Character, Leadership, Academics, Sportsmanship, and Service. These principles are not only valued but instilled through leading-edge educational, service, and leadership opportunities.</p>
						<p>In 1904, Andrew Alexander Kroeg, Jr., Simon Fogarty, Jr., and Lawrence Harry Mixson were all attending the College of Charleston. The three men led a small campus movement to form a group called Nu Phi, which stood for "non-fraternity."  Kroeg, in his determination to see his friends given the opportunity to influence the campus like fraternity men, decided that the only recourse was to start a new, full-fledged fraternity we know today as Pi Kappa Phi.  Seven loyal Nu Phi's were at that ever-important meeting, and Pi Kappa Phi's foundation began to take form.  On December 10, 1905, Mixson's mother cooked the men a special supper to celebrate Founder's Day with a dinner ceremony marking the achievements of the founding fathers.</p>
						<p>The men chose to expand and create more Pi Kappa Phi chapters.  The Beta chapter was established at Presbyterian in 1907, and Theodore Kelly established Pi Kappa Phi as a national fraternity with his founding of the Gamma chapter at the University of California.  Pi Kappa Phi became locally registered in South Carolina on December 23, 1907.  The coat of arms, motto, and rituals were established, and the creation of the Pi Kappa Phi Fraternity Journal strengthened communications between chapters.  The Journal changed its name to The Star and Lamp, a name that still endures and maintains chapter communications today.</p>
						<p>Pi Kappa Phi enjoyed a progressive beginning and it is that dedication which helped Pi Kappa Phi become a leading fraternity in the United States.</p>
					</Card>
				</Col>
			</Row>
			<Row style={{marginTop: 20}}>
				<Leaders />
			</Row>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-around" style={{paddingTop: 20}}>
						<Card style={{width: '100%'}}>
							<Image src="composite.jpg" title="Fall 2017 Composite" caption="Fall 2017 Composite"/>
						</Card>
					</Row>
					<Row style={{paddingTop: 20}}>
						<PageTitle name="Photos" />
					</Row>
					<Row type="flex" justify="space-between" style={{paddingTop: 20}}>
						<Col sm={24} md={13}>
							<Card>
								<Image src="pikapps_abroad.jpg" title="Brothers of Pi Kappa Phi in New Zealand" caption="Brothers of Pi Kappa Phi in New Zealand" />
							</Card>
						</Col>
						<Col sm={24} md={10}>
							<Card>
								<Image src="twin_lakes.jpg" title="Brothers volunteering at an Ability Weekned" caption="Brothers volunteering at an Ability Weekned" />
							</Card>
						</Col>
						<Col sm={24} md={10}>
							<Card>
								<Image src="pikapps_winter.jpg" title="Brothers enjoying the winter weather" />
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
}


export default Missing;