import React, {Component} from 'react'

import Helmet from 'react-helmet';

import {Row, Col, Card} from 'antd';

import OfficerCard from '../components/OfficerCard';
import PageTitle from '../components/PageTitle';

class Officers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Pi Kappa Phi | Officers</title>
				</Helmet>
				<Row type="flex" justify="center">
					<Col xs={24} sm={20} md={18}>
						<PageTitle name="Chapter Officers"/>
						<Row type="flex" justify="space-around" align="top">
							<OfficerCard position="President" name="Vishnu Rajendran" hometown="Naperville, IL" image="vishnu-rajendran" major="Aerospace Engineering" quote="Pi Kapp holds a special place in my heart as it represents my second family bound by undying loyalty and common values. My brothers manage to motivate me to excel and grow as a student, leader, and man. Anytime I need support, I can count on my brothers to come to my aid and help me regain confidence and strength. These traits of Pi Kappa Phi are undying and I feel like I have a second family not just for the duration of my collegiate career, but a lifetime to come."/>
							<OfficerCard position="Vice President" name="Ryan J. Trickett" hometown="Cary, NC" image="ryan-j-trickett" major="Mechanical Engineering" quote="To me Pi Kapp means home. Pi Kapp is a place that gives me a family on campus that I can go to for anything. My brothers are there when times get stressful and when I just want to hang out. I know that I will have Pi Kapp as a support system for me during my years at Georgia Tech and for many years after."/>
						</Row>
						<Row type="flex" justify="space-around" align="top" style={{marginTop: 20}}>
							<OfficerCard position="Treasurer" name="Chris T. Hough" hometown="Canton, GA" image="chris-t-hough" major="Electrical Engineering" />
							<OfficerCard position="Secretary" name="Tyler H. Zeigler" hometown="Valdosta, GA" image="tyler-h-zeigler" major="Mechanical Engineering" quote="Pi Kapp is my home away from home. These guys are family to me and it’s always fun learning and experiencing life together."/>
						</Row>
						<Row type="flex" justify="space-around" align="top" style={{marginTop: 20}}>
							<OfficerCard position="Warden" name="Paul J. Dorsch" hometown="Leesburg, VA" image="paul-j-dorsch" major="Computer Science" quote="To me, Pi Kapp is about the people. Its a community of my closest friends that I know will always have my back, and I will always have theirs. Even the brothers from other chapters have never hesitated to reach out a helping hand, and I believe that this uncommon loyalty is what makes Pi Kapp stand out above the rest."/>
							<OfficerCard position="Historian" name="Teddy E. Stopford" hometown="Fayetteville, GA" image="michael-e-stopford" major="Chemical Engineering" quote="Being part of Pi Kappa Phi goes beyond just the organization, it means establishing and connecting with a brotherhood that is more important than oneself."/>
						</Row>
						<Row type="flex" justify="space-around" align="top" style={{marginTop: 20}}>
							<OfficerCard position="Chaplain" name="Benjamin B. Frumkin" hometown="Nashville, TN" image="benjamin-b-frumkin" major="Mechanical Engineering" quote="Pi Kapp has not only provided not the strong personal friendships that I desire coming into college, but it has also given me an incredible base from which I can branch out and take part in other organizations on campus."/>
							<OfficerCard position="Chapter Advisor" name="Glenn Goorsky" image="glenn-goorsky" hideInformation email="ggoorsky@gmail.com" />
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}


export default Officers;