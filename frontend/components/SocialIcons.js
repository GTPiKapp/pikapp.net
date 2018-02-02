import React from 'react';

import {Icon} from 'antd';

const SocialIcons = props => {
	return (
		<div>
			<h1 style={{fontSize: '2rem', display: 'inline-block', marginRight: 10}}><a href="https://github.com/gtpikapp" title="GitHub Account" style={{color: '#777'}}><Icon type="github"/></a></h1>
			<h1 style={{fontSize: '2rem', display: 'inline-block', marginRight: 10}}><a href="https://instagram.com/gtpikappaphi" title="Instagram Account" style={{color: '#777'}}><Icon type="camera"/></a></h1>
			<h1 style={{fontSize: '2rem', display: 'inline-block', marginRight: 10}}><a href="https://www.youtube.com/watch?v=BkuKIGUxbUE" title="YouTube Account" style={{color: '#777'}}><Icon type="youtube"/></a></h1>
			<h1 style={{fontSize: '2rem', display: 'inline-block', marginRight: 10}}><a href="https://twitter.com/gtpikappaphi" title="Twitter Account" style={{color: '#777'}}><Icon type="twitter"/></a></h1>
			<h1 style={{fontSize: '2rem', display: 'inline-block'}}><a href="https://www.facebook.com/gtpikappaphi/" title="Facebook Account" style={{color: '#777'}}><Icon type="facebook"/></a></h1>
		</div>
	);
}

export default SocialIcons;