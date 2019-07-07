import React, {Component} from 'react';

import {Tooltip} from 'antd';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placement: 'bottom'
        };
        this.quoteInput = React.createRef();
        this.determinePlacement = this.determinePlacement.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.determinePlacement);
    }

    determinePlacement() {
        const placement = this.quoteInput.current ? this.quoteInput.current.getBoundingClientRect().top >=
        (window.innerHeight / 2) ? 'top' : 'bottom' : 'bottom';
        this.setState({placement});
    }

    render() {
        const {quote} = this.props;
        const {placement} = this.state;

        // strip end of string of the following chars
        const blacklist = [' ', ','];
        let trimmedQuote = quote.slice(0, 172);

        while (blacklist.includes(trimmedQuote.slice(-1))) {
            trimmedQuote = trimmedQuote.slice(0, -1);
        }
        const ellipsizedQuote = quote.length > 175 ? trimmedQuote + '...' : quote;

        return (
            <Tooltip placement={placement} title={quote} arrowPointAtCenter>
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(41, 41, 41, 0.09)',
                        padding: '2px 0px',
                        borderRadius: '10px',
                        height: window.innerWidth < 800 ? 'auto' : '131px'
                    }}
                    ref={this.quoteInput}
                >
                    <p style={{ margin: '11px 22px' }}>
                        {ellipsizedQuote}
                    </p>
                </div>
            </Tooltip>
        );
    }
}

export default Quote;
