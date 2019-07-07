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

        const ellipsizedQuote = quote.length > 175 ? quote.slice(0, 172).trim() + '...' : quote;


        return (
            <Tooltip placement={placement} title={quote} arrowPointAtCenter>
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(41, 41, 41, 0.09)',
                        color: '#292929',
                        border: '1px solid #d9d9d9',
                        boxShadow: '0px 0px 8px 0px #000000a6',
                        borderRadius: '10px'
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
