import React, {Component} from 'react';

const PRELOAD_DIRECTORY = '/images/preload/';

class Image extends Component {
	constructor(props) {
		super(props);

		if (!props.src) {
			console.error('Invalid src parameter');
			return;
		}

		this.state = {
			preload: false,
			loadedPreloader: false,
			loadedFullsize: false,
			src: `/images/${props.src}`,
			title: props.title,
			caption: props.caption
		};
		this.fullImageLoaded = this.fullImageLoaded.bind(this);
		this.preloaderLoaded = this.preloaderLoaded.bind(this);
	}

	preloaderLoaded() {
		this.setState({loadedPreloader: true});
	}

	fullImageLoaded() {
		this.setState({loadedFullsize: true});
	}

	render() {
		const {loadedFullsize, src, title, caption, preload} = this.state;
		const {src: rawSrc} = this.props;
		return (
			<div>
				{preload &&
					<img
						className="preloadCover"
						src={`${PRELOAD_DIRECTORY}${rawSrc}`}
						title={`${title} loading`}
						style={{float: 'left', height: 'auto', opacity: !loadedFullsize ? 1 : 0}}
						onLoad={this.preloaderLoaded}
					/>
				}
				{(this.preloaderLoaded || !preload) &&
				<img
					src={src}
					alt={title}
					style={{width: '100%', height: 'auto', opacity: (!loadedFullsize && preload) ? 0 : 1}}
					onLoad={this.fullImageLoaded}
				/>
				}
				{caption &&
					<p style={{textAlign: 'center', margin: 0, marginTop: 10, padding: 0}}>{caption}</p>
				}
			</div>
		);
	}
}

export default Image;