import React from 'react';

import {Row, Col} from 'antd';

const PageTitle = props => {
	return (
		<Row type="flex" justify="center" style={{marginBottom: 40}}>
			<div style={{display: 'inline-block'}}>
				<h1 style={{padding: 0, margin: 0}}>{props.name}</h1>
				<div style={{width: '80%', marginLeft: 'auto', marginTop: 10, marginRight: 'auto', height: '2px', backgroundColor: 'rgb(49, 86, 147)'}}></div>
			</div>
		</Row>
	);
}

export default PageTitle;
