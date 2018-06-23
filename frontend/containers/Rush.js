import React from 'react';

import {Row, Col, Card} from 'antd';

import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';

const Rush = props => {
	return (
		<div>
			<Helmet>
				<title>Pi Kappa Phi | Rush</title>
			</Helmet>
			<PageTitle name="Rush"/>
			<Row type="flex" justify="center">
				<Col md={14} xs={24} sm={20}>
					<Row type="flex" justify="space-around" style={{paddingTop: 20}}>
						<Card style={{width: '100%'}}>
							<p><b>Spring 2018 Rush</b><br/>
							Rush will take place from <b>Tuesday, January 16th</b> through <b>Friday, January 19th</b>. Rush officially starts at <b>7pm</b> and ends at <b>11pm</b> each day. You can visit our house (white house across from the baseball field) anytime you like, and feel free to email our <a href="/about/officers" title="Officers">Vice President Ryan</a> for questions at any time!</p>
							<p><b>Formal Rush</b><br/>
							At the beginning of each semester, IFC sponsors a week called Rush that is designed to be a fun and easy way for you to become familiar with the fraternity and brothers of Pi Kappa Phi. Rush is very informal and relaxed, requires no registration, and carries no financial commitment or obligation to join. Every academically eligible man at Georgia Tech can participate regardless of age or year in school.</p>
							<p>During the nights of rush, Pi Kapp will hold an open house where you can come eat dinner, meet the brothers and see what the Pi Kappa Phi has to offer.  Your part in Rush is easy - simply show up to the house and let the brothers take care of the rest. You’ll get some of Chef James' great food and talk to great people who are interested in learning about who you are and what you do. We encourage you to come back on different days and meet different brothers. The best way to get a feel for what a fraternity is like is by meeting as many of the brothers as possible.</p>
							<p><b>Receiving a Bid</b><br/>
							A bid is an official invitation to join a fraternity as an associate member or pledge. If the brothers decide you would be a good fit for the fraternity you will be given a bid.  Do not worry about fitting in, be yourself. Generally, the more brothers you meet, the better the fraternity is able to decide if you would be a good fit. Bids are given out all week, so don’t feel discouraged if you don’t receive one the first few nights. Also, do not be afraid to ask each chapter how their bid process works and if you are the kind of member they are looking for.</p>
							<p><b>FAQs</b><br/>
							<i>Do I have to become a brother if I accept my bid?</i><br/>
							No. The pledge period is a time for you to get to know the fraternity and the fraternity to get to know you. Both have the option of ending the pledge period with no further obligation at any time if situations arise.</p>
							<p><i>How long is the pledge process?</i><br/>
							Eight weeks - During that time, you will learn the history of the fraternity, get to know the brothers and other pledges, and participate in service projects, intramurals, socials, date nights, mixers, and other aspects of fraternity life.</p>
							<p><i>Will I get hazed?</i><br/>
							Absolutely not. Pi Kappa Phi has a strict no hazing policy. None of us were hazed when we pledged and we will not haze you in any way. We find that not hazing helps strengthen the bonds between pledge classes. We do not want any resentment between pledge classes due to hazing, and we find many of our brothers' best friends pledged in different years than themselves.</p>
							<p><i>What is the time commitment associated with pledging?</i><br/>
							While you are expected to become involved and participate in events with the fraternity, we realize that you are also adjusting to college life at Georgia Tech. You will be expected to attend one pledge education meeting a week as well as have the opportunity to go to other events with the chapter.  You will also be able to eat breakfast, lunch, and dinner at the chapter house, which is a great way of meeting and hanging out with the brothers and your other pledge brothers.</p>
							<p><i>What if I don't have the time?</i><br/>
							If anything, a fraternity will help teach you valuable time management and study skills.  Fraternity members can offer you help with your classes and will make sure you are studying to get grades equal to your ability. After investing time and effort into you as a pledge, the fraternity is committed to helping you succeed. In addition, the Greek average GPA is higher than the non-Greek GPA, and with older brothers who have already taken the classes you take, finding help is extremely easy and studying with your pledge brothers makes it go by a lot quicker.</p>
							<p><i>How much does it cost to join?</i><br/>
							You will find that the cost associated with joining a fraternity is reasonable. Your associate member semester will cost $990. This might seem like a lot but think about all you are getting. First you get 5 meals per week prepared fresh daily by our chef, James Moore. Second, you receive tickets to every football game (includes Georgia game) in our section (this year we were first row, right next to the tunnel). Some of your money goes to parties, mixers or socials, and fraternity events. The remaining part of your dues will go towards many activities that you and your fellow pledge brothers will do. After your associate member semester you will become a brother and have the option to live in the house. If you chose to live in the house, your total fraternity dues will be about $800 less than comparable Georgia Tech housing and meal plan. In fact, a semester of full dues, a meal plan, and housing with us at Pi Kappa Phi is still less than just the rent for North Avenue Apartments alone. Please ask any of the brothers for a financial sheet during rush for the most up to date numbers of associate and brother dues.</p>
							<p><i>What should I wear to rush?</i><br/>
							Rush is very informal, so wear whatever you feel comfortable in. Most chapters will be dressed in business casual — a collared shirt and khakis, but you aren’t expected to wear anything special.</p>
							<p><b>Contact Information</b><br/>
							If interested contact <a href="mailto:vicepresident@pikapp.net" title="Email our Vice President">vicepresident@pikapp.net</a> or <a href="/contact" title="Contact">contact us</a> with questions.</p>
							<p>Sincerely,</p>
							<p>Ryan J. Trickett,<br/>
							Vice President<br/>
							<a href="mailto:vicepresident@pikapp.net" title="Email our Vice President">vicepresident@pikapp.net</a></p>
						</Card>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

export default Rush;