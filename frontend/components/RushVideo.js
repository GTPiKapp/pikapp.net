import React from 'react';

import {Row, Col, Card} from 'antd';

import Youtube from 'react-youtube';

const RushVideo = props => {
	return (
		<div>
			<Row type="flex" justify="center">
				<h2 style={{textAlign: 'center', fontSize: '1.5rem'}}>Spring Rush 2018</h2>
			</Row>
			<Row type="flex" justify="center">
				<Col span={14}>
					<Col span={16}>
						<Youtube
							videoId="BkuKIGUxbUE"
							style={{width: '100%', height: 'auto'}}
						/>
					</Col>
					<Col span={8} style={{textAlign: 'center'}}>
						<h2>Spring 2018 Rush</h2>
						<p>Pi Kapps are known for the wide range of experiences they have by the time they graduate. We created our rush video to highlight some of these experiences, from study abroad to participation in Georgia Tech's Greek Week competition.</p>
					</Col>
				</Col>
			</Row>
		</div>
	);
}

export default RushVideo;