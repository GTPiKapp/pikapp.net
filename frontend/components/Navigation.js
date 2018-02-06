import React, {Component} from 'react';

import {Menu, Row, Col} from 'antd';
const {MenuItemGroup, SubMenu, Item} = Menu;

import {Link, Prompt, withRouter} from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'index'
		}
		const {pathname} = this.props.location;
		const pathSplit = pathname.split('/');

		pathSplit.splice(0,1); // Remove the first "/" that we capture

		this.state.current = pathSplit.length > 0 ? pathSplit.join('/') : 'index';

		this.navigationLinkClick = this.navigationLinkClick.bind(this);
	}

	navigationLinkClick(e) {
		if (e.key) {
			if (e.key === 'logo') return this.setState({current: 'index'});

			this.setState({
				current: e.key,
			});
		} else {
			this.setState({
				current: e.target.id,
			});
		}
	}

	render() {
		const {current} = this.state;
		return (
			<div>
				<Col xs={0} md={24}>
					<Menu
						mode="horizontal"
						theme="light"
						onClick={this.navigationLinkClick}
						selectedKeys={[current]}>
						<Item key="logo" selected style={{paddingTop: '10px', paddingBottom: '10px'}}>
							<Link to="/"><img src="/images/CoA.png" height="40"/><span style={{paddingLeft: '10px'}}>Pi Kappa Phi – Georgia Tech</span></Link>
						</Item>
						{/* Right-side navigation */}
						<Item key="contact" style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Link to="/contact">Contact Us</Link>
						</Item>
						{/*
						<SubMenu title={(<Link id="alumni" onClick={this.navigationLinkClick} to="/alumni" style={{color: 'rgba(0, 0, 0, 0.65)', display: 'block', height: '100%'}}>Alumni</Link>)} style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Item key="alumni/update">
								<Link to="/alumni/update">Update Information</Link>
							</Item>
							<Item key="notable">
								<Link to="/alumni/notable">Notable Alumni</Link>
							</Item>
							<Item key="alumni/newsletters">
								<Link to="/alumni/newsletters">Newsletters</Link>
							</Item>
						</SubMenu>*/}
						<SubMenu title={(<Link id="house" onClick={this.navigationLinkClick} to="/house" style={{color: 'rgba(0, 0, 0, 0.65)', display: 'block', height: '100%'}}>House</Link>)} style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Item key="house">
								<Link to="/house">Our House</Link>
							</Item>
							<Item key="house/dining">
								<Link to="/house/dining">Dining</Link>
							</Item>
						</SubMenu>
						<SubMenu title={(<Link id="about" onClick={this.navigationLinkClick} to="/about" style={{color: 'rgba(0, 0, 0, 0.65)', display: 'block', height: '100%'}}>About</Link>)} style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Item key="about">
								<Link to="/about">Our Chapter</Link>
							</Item>
							<Item key="about/involvement">
								<Link to="/about/involvement">Campus Involvement</Link>
							</Item>
							<Item key="about/philanthropy">
								<Link to="/about/philanthropy">Our Philanthropy</Link>
							</Item>
							<Item key="about/officers">
								<Link to="/about/officers">Chapter Officers</Link>
							</Item>
							<Item key="about/parents">
								<Link to="/about/parents">Message To Parents</Link>
							</Item>
						</SubMenu>
						<Item key="rush" style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Link to="/rush">Rush</Link>
						</Item>
						<Item key="index" style={{paddingTop: '10px', paddingBottom: '10px', float: 'right'}}>
							<Link to="/">Home</Link>
						</Item>
					</Menu>
				</Col>
				<Col xs={24} md={0}>
					<Menu
						mode="horizontal"
						theme="light"
						onClick={this.navigationLinkClick}
						selectedKeys={[current]}>
						<Item key="logo" selected style={{paddingTop: '10px', paddingBottom: '10px'}}>
							<Link to="/"><img src="/images/CoA.png" height="40"/><span style={{paddingLeft: '10px'}}>Pi Kappa Phi – Georgia Tech</span></Link>
						</Item>
					</Menu>
				</Col>
			</div>
			)
	}
}

export default withRouter(Navigation);