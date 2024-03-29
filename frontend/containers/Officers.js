import React, { Component } from 'react';

import Helmet from 'react-helmet';

import { Row, Col } from 'antd';

import OfficerCard from '../components/OfficerCard';
import PageTitle from '../components/PageTitle';

class Officers extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Pi Kappa Phi | Officers</title>
				</Helmet>
				<Row type="flex" justify="center">
					<Col xs={24} sm={20} md={18}>
						<PageTitle name="Chapter Officers" />
						<Row type="flex" justify="space-around" align="top">
							<OfficerCard
								position="President"
								name="Landon J. Schultz"
								hometown="Canton, GA"
								image="patrick-miga"
								major="Industrial Engineering"
								quote="Pi Kapp has helped me grow into a much better man and has given me the greatest support system I have ever had. While Georgia Tech is an undoubtedly stressful environment, I know my brothers have had my back the entire time and will continue to do so, and for that reason it is easy to avoid the struggles of this school. Pi Kapp has given me so much and has helped me succeed in every aspect of life; I am honored to be able to lead this place and afford the same opportunities to all of my brothers."
							/>
							<OfficerCard
								position="Vice President"
								name="Ethan O. Huston"
								hometown="Marietta, GA"
								image="shamari-davenport"
								major="Industrial Engineering"
								quote="To me Pi Kapp means home. Pi Kapp is a place that gives me a family on campus that I can go to for anything. My brothers are there when times get stressful and when I just want to hang out. I know that I will have Pi Kapp as a support system for me during my years at Georgia Tech and for many years after. Furthermore, as Vice President and Rush Chair of our chapter, I have the ability to make sure we recruit brothers who can help cultivate and better this culture, which I cherish."
							/>
						</Row>
						<Row
							type="flex"
							justify="space-around"
							align="top"
							style={{ marginTop: window.innerWidth < 800 ? 0 : 20 }}>
							<OfficerCard
								position="Treasurer"
								name="Dylan S. Fader"
								hometown="Alpharetta, GA"
								image="karan-achtani"
								major="Business Administration"
								quote="Pi Kapp is a place of true brotherhood. It’s a place where I can be myself and hang out with friends who have a diverse range of interests. We are always there to support and push each other so that each of us can be the best man we can possibly be. It’s truly the best part of my college experience."
							/>
							<OfficerCard
								position="Secretary"
								name="Marcus S. Mudano"
								hometown="Birmingham, AL"
								image="michael-shelton"
								major="Computer Engineering"
								quote="Pi Kapp is a place that has changed my life and helped me grow in so many different ways. Making countless memories with this diverse brotherhood has made for a great college experience."
							/>
						</Row>
						<Row
							type="flex"
							justify="space-around"
							align="top"
							style={{ marginTop: window.innerWidth < 800 ? 0 : 20 }}>
							<OfficerCard
								position="Warden"
								name="Venkatesh R. Rao"
								hometown="Marietta, GA"
								image="venkatesh-rao"
								major="Business Administration"
								quote="Pi Kapp is my home and my family. I love that I am surrounded by people who bring out the best in me every day. Everyone here strives to make each other better and to uphold our common values. They’re my role models and best friends."
							/>
							<OfficerCard
								position="Historian"
								name="Nicholas C. Jones"
								hometown="Rydal, GA"
								image="koosha-kermani"
								major="Industrial Engineering"
								quote="Being part of Pi Kappa Phi goes beyond just the organization, it means establishing and connecting with a brotherhood that is more important than oneself."
							/>
						</Row>
						<Row
							type="flex"
							justify="space-around"
							align="top"
							style={{ marginTop: window.innerWidth < 800 ? 0 : 20 }}>
							<OfficerCard
								position="Chaplain"
								name="Zachary L. Donald"
								hometown="Storrs, CT"
								image="jarod-vogt"
								major="Electrical Engineering"
								quote="Growing up as any only child, Pi Kapp has provided me with the brothers I&#39;ve always wanted. Pi Kapp is all about building a brotherhood that connects people and allows them to achieve their goals."
							/>
							<OfficerCard
								position="Risk Manager"
								hideEmail
								name="Creighton P. Goerner"
								hometown="Covington, GA"
								image="jason-guo"
								major="Industrial Engineering"
								quote="As a brother of Pi Kapp, it has given me the core group of men that I can learn from and become life-long friends with. For all that Pi Kapp has given me, I hope that I could give back as much as Pi Kapp has given me."
							/>
						</Row>
						<Row
							type="flex"
							justify="space-around"
							align="top"
							style={{ marginTop: window.innerWidth < 800 ? 0 : 20 }}>
							<OfficerCard
								position="Philanthropy Chair"
								hideEmail
								name="Brennan M. Pritchard"
								hometown="Marietta, GA"
								image="ravi-sunder"
								major="Industrial Engineering"
								quote="Pi Kapp is a family that works together and helps each other, and is a place where we can all grow as people."
							/>
							<OfficerCard
								position="Chapter Advisor"
								hideInformation
								name="Glenn Goorsky"
								image="glenn-goorsky"
								email="ggoorsky@gmail.com"
							/>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Officers;
