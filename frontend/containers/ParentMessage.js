import React from 'react';

import {Row, Col, Card} from 'antd';

import PageTitle from '../components/PageTitle';

import Helmet from 'react-helmet';

const ParentMessage = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Message To Parents</title>
			</Helmet>
			<PageTitle name="Message To Parents"/>
			<Row type="flex" justify="center">
				<Col xs={24} sm={20} md={14}>
					<Row type="flex" justify="space-around" style={{paddingTop: 20}}>
						<Card style={{width: '100%'}}>
							<p>Dear Parents,</p>
							<p>On behalf of myself and the entire Iota Chapter of Pi Kappa Phi Fraternity, I would like to congratulate your son on his choice to attend The Georgia Institute of Technology. He has taken the first step on a path to becoming a great man and leader. We encourage him to continue on this road of success and join our Fraternity, Pi Kappa Phi.</p>
							<p>As your son enters Georgia Tech, you'll be worrying about such things as his living situation, academic success, physical and mental health, social development, and general well being. We understand your fears and share your concerns since we were all in that position at one time. Pi Kappa Phi Fraternity will act as a second home to your son and as a place of support as he enters into this new phase of his life. We will reinforce the values you have instilled in him, stimulate his intellectual growth, further his development as a leader, support him during any troubling times, offer advice, and challenge him to become a better man.</p>
							<p>All fraternities are seeking to combat the "Animal House" stereotype that surrounds Greek Life. Fraternities were founded on the principles of personal growth, character, and academic development. In an effort to return to this noble fraternal existence, Pi Kapps strive to be Men of C.L.A.S.S. by upholding the principles of Character, Leadership, Achievement, Sportsmanship, and Service. Pi Kappa Phi Fraternity sets itself apart as the only national fraternity to own and operate its own philanthropy organization, <a href="http://www.abilityexperience.org/" title="The Ability Experience">The Ability Experience</a>. Through volunteering with Ability Experience, brothers make it a point to serve and improve the quality of life for those with disabilities. At Pi Kappa Phi, we understand that your son is in college primarily to receive an education and being in a fraternity should not interfere with your son's collegiate experience, but rather complement it.</p>
							<p>Joining Pi Kappa Phi Fraternity was one of the best decisions I have made in my college career. I have found men that share my ideals, interests, and goals. Please allow us to build your son into a better man while he enjoys the opportunity that is Pi Kappa Phi Fraternity.</p>
							<p>Feel free to contact me or any of the <a href="/officers" title="Pi Kappa Phi Officers">officers</a> for any questions you may have about Pi Kappa Phi or fraternity life in general and the college experience.</p>
							<p>Best Regards,</p>
							<p>Patrick Miga<br/>
							President<br/>
							Iota Chapter<br/>
							Pi Kappa Phi Fraternity</p>
							<p><a href="/contact" title="Contact Us">Contact Us</a></p>
						</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default ParentMessage;
