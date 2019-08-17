import React, {Component} from 'react';
import Helmet from "react-helmet";
import PageTitle from "../components/PageTitle";
import {Card, Col, Row} from "antd";

class Scholarship extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Pi Kappa Phi | Scholarship</title>
                </Helmet>
                <PageTitle name="Scholarship" />
                <Row type="flex" justify="center">
                    <Col md={14} xs={24} sm={20}>
                        <Row
                            type="flex"
                            justify="space-around"
                            style={{ paddingTop: 20 }}>
                            <Card style={{ width: '100%', textAlign: 'center' }}>
                                <p>We are offering a scholarship for Fall 2019 to incoming freshmen. Apply using the form below or at the link: <a href='https://forms.gle/5eqko5LgjdVg9A3S7' target="_blank">https://forms.gle/5eqko5LgjdVg9A3S7</a></p>
                            </Card>
                        </Row>
                        <Row
                            type="flex"
                            justify="space-around"
                            style={{ paddingTop: 20 }}>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdvQdC510u0EVYa_s_VENBvXCFU1LNiqNYNMQusKfkNNodgOg/viewform?embedded=true"
                                width="900"
                                height="1800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                            </iframe>
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Scholarship;
