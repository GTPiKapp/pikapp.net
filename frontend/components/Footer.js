import React from 'react';
import {Icon,Layout, Row, Col} from 'antd';

const { Footer } = Layout;

import {Link} from 'react-router-dom';

import SocialIcons from './SocialIcons';

const FooterWrap = props => {
	return (
		<Footer style={{ marginTop: 20, textAlign: 'center', width: '100%', backgroundColor: 'rgb(41, 41, 41)', color: '#777' }}>
			<Row type="flex" justify="center">
				<Col xs={24} md={14}>
					<Row>
						<Col span={12}>
							<p style={{color: '#777', textAlign: 'left'}}>PI KAPPA PHI</p>
							<p style={{color: '#777', textAlign: 'left'}}>Iota Chapter</p>
						</Col>
						<Col span={12} style={{textAlign: 'left', paddingBottom: 20}}>
							<p style={{color: '#ccc'}}>220 Ferst Drive NW,<br/>Atlanta, GA<br/>30318</p>
							<Link to="/contact" style={{color: '#ccc'}}>CONTACT US</Link>
						</Col>
					</Row>
					<Row style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20}}>
						<Col xs={24} md={8}>
							<p style={{textAlign: 'left'}}>© 2022 Pi Kappa Phi. All Rights Reserved.</p>
						</Col>
						<Col xs={24} md={{span: 8, offset: 8}} style={{textAlign: 'right'}}>
							<SocialIcons />
						</Col>
					</Row>
				</Col>
			</Row>
		</Footer>
	);
}

export default FooterWrap;