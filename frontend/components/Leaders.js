import React from 'react';

import {Col, Row} from 'antd';

const Leaders = props => {
	return (
		<Row type="flex" style={{width: '100%', backgroundColor: 'rgb(0, 85, 150)', padding: '40px 0'}}>
			<Col xs={0} sm={24}>
				<h2 style={{textAlign: 'center', width:'100%', margin: 0, padding: 0, fontWeight: 'thin', color: 'white'}}>Exceptional Leaders. Uncommon Opportunities.</h2>
			</Col>
			<Col xs={24} sm={0}>
				<h2 style={{textAlign: 'center', width:'100%', margin: 0, padding: 0, fontWeight: 'thin', color: 'white'}}>Exceptional Leaders.<br/>Uncommon Opportunities.</h2>
			</Col>
		</Row>
	);
}

export default Leaders;