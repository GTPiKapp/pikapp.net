import React, { Component } from 'react'

import Helmet from 'react-helmet';

import { Row, Col, Card } from 'antd';

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
							<OfficerCard position="Warden" name="Aaron M. Burtz" hometown="Fayetteville GA" image="aaron-m-burtz" major="Mechanical Engineering" quote="Pi Kapp is a place that surrounds me with guys that push me to succeed inside and outside of the fraternity. It creates a culture that strives to make each brother the best version of themselves."/>
							<OfficerCard position="Historian" name="Teddy E. Stopford" hometown="Fayetteville, GA" image="michael-e-stopford" major="Chemical Engineering" quote="Being part of Pi Kappa Phi goes beyond just the organization, it means establishing and connecting with a brotherhood that is more important than oneself."/>
						</Row>
						<Row type="flex" justify="space-around" align="top" style={{marginTop: 20}}>
							<OfficerCard position="Chaplain" name="Benjamin B. Frumkin" hometown="Nashville, TN" image="benjamin-b-frumkin" major="Mechanical Engineering" quote="Pi Kapp has not only provided not the strong personal friendships that I desire coming into college, but it has also given me an incredible base from which I can branch out and take part in other organizations on campus."/>
							<OfficerCard position="Risk Manager" hideEmail name="Lachlan G. Suter" hometown="Melbourne, Australia" image="lachlan-g-suter" major="Mechanical Engineering" quote="My parents and siblings live far away. I find my home and family in Georgia Tech at Pi Kapp. The men around me support my lifestyle and in turn I support theirs. There is a home for everyone at Pi Kapp." />
						</Row>
						<Row type="flex" justify="space-around" align="top" style={{marginTop: 20}}>
							<OfficerCard position="Philanthopy Chair" hideEmail name="Stephen A. Lindeman" hometown="Bufford, GA" image="stephen-a-lindeman" major="Electrical Engineering" />
							<OfficerCard position="Chapter Advisor" name="Glenn Goorsky" image="glenn-goorsky" hideInformation email="ggoorsky@gmail.com" />
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}


export default Officers;