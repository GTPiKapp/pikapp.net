import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Helmet from 'react-helmet';

import {Modal, Row, Col, Card, Alert} from 'antd';

import Leaders from '../components/Leaders';
import Class from '../components/Class';
import AtAGlance from '../components/AtAGlance';
import RushVideo from '../components/RushVideo';
import Carousel from '../components/Carousel/';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {success_message} = this.props;
		return (
			<div>
				<Helmet>
					<title>Pi Kappa Phi | IOTA</title>
				</Helmet>

				<Leaders />
				<Class />
				<AtAGlance />
			</div>
		);
	}
}


export default Homepage;