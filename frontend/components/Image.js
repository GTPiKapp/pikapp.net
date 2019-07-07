import React, {Component} from 'react';

import {Avatar} from 'antd';

const PRELOAD_DIRECTORY = '/images/preload/';

class Image extends Component {
	constructor(props) {
		super(props);

		if (!props.src) {
			console.error('Invalid src parameter');
			return;
		}

		this.state = {
			showDefault: false,
			loaded: false,
			src: `/images/${props.src}`,
			title: props.title,
			caption: props.caption
		};

		this.loaded = this.loaded.bind(this);
		this.showDefault = this.showDefault.bind(this);
	}

	loaded() {
		this.setState({loaded: true});
	}

	showDefault() {
		this.setState({showDefault: true});
	}

	render() {
		const {showDefault, loaded, src, title, caption} = this.state;

		return (
			<div>
				<img
					src={showDefault ? '/images/default-officer.png' : src}
					alt={title}
					style={{width: '100%', height: 'auto', opacity: loaded ? 1 : 0}}
					onLoad={this.loaded}
					onError={this.showDefault}
				/>
				{caption &&
					<p style={{textAlign: 'center', margin: 0, marginTop: 10, padding: 0}}>{caption}</p>
				}
			</div>
		);
	}
}

export default Image;
