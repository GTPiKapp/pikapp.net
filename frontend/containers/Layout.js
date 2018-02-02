import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

import SideNav from '../components/SideNav';

import Navigation from '../components/Navigation';
import FooterWrap from '../components/Footer';

const LayoutContainer = props => {
	return (
		<Layout>
			<Layout>
				<Header style={{backgroundColor: 'white', borderBottom: '1px solid #e8e8e8', height: 68}}>
					<Navigation />
				</Header>
				<Content>
					{props.paddingTop === false ? (
						<div>
							{props.children}
						</div>
					) : (
						<div style={{paddingTop: '50px'}}>
							{props.children}
						</div>
					)}
				</Content>
				<FooterWrap />
			</Layout>
		</Layout>
	);
}

export default LayoutContainer;