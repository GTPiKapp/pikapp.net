import React, {Component} from 'react';

import {Layout, Col, Row, Menu} from 'antd';

const { Sider } = Layout;

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	toggleVisibility() {
		this.setState({visible: !this.state.visible});
	}

	render() {
		return (
			<div>
				<Sider
					collapsible
					collapsed={this.state.visible}>
					<h1 style={{color: 'white'}}>Test</h1>
				</Sider>
			</div>
		);
	}
}

export default SideNav;