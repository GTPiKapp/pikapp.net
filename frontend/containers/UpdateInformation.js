import React, {Component} from 'react'

import Helmet from 'react-helmet';

import {Row, Col, Card, Button, Form, Input, Breadcrumb} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

import PageTitle from '../components/PageTitle';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formLoading: false
		};
		this.formSubmission = this.formSubmission.bind(this);
	}

	formSubmission(e) {
		e.preventDefault();
		this.setState({formLoading: true});
	}

	render() {
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
				md: { span: 6 },
				lg: { span: 4 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
				md: { span: 18 },
				lg: { span: 20 }
			}
		};

		const { getFieldDecorator } = this.props.form;
		const {formLoading} = this.state;
		return (
			<div>
				<Helmet>
					<title>Pi Kappa Phi | Update Information</title>
				</Helmet>
				<PageTitle name="Update Information"/>
				<Row type="flex" justify="center" align="top">
					<p></p>
					<Col span={12}>
						<Card style={{width: '100%'}}>
							<Form layout="horizontal" onSubmit={this.formSubmission}>
								<FormItem {...formItemLayout} label="Name">
									{getFieldDecorator('name', {
										rules: [{
											required: true, message: 'Please enter your name.',
										}],
									})(
										<Input placeholder="George Burdell" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="I-Number">
									{getFieldDecorator('i-num')(
										<Input placeholder="I-1654" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Email">
									{getFieldDecorator('email', {
										rules: [{
											type: 'email', message: 'The input is not valid E-mail!',
										}, {
											required: true, message: 'Please enter your email.',
										}],
									})(
										<Input placeholder="gburdell3@gatech.edu" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Phone">
									{getFieldDecorator('phone', {
										rules: [{
											required: true, message: 'Please enter your phone number.',
										}],
									})(
										<Input placeholder="516-123-1992" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Address">
									{getFieldDecorator('street', {
										rules: [{
											required: true, message: 'Please enter your street address.',
										}],
									})(
										<Input placeholder="220 Ferst Drive NW" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="City">
									{getFieldDecorator('city', {
										rules: [{
											required: true, message: 'Please enter your city.',
										}],
									})(
										<Input placeholder="Atlanta" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Zip Code">
									{getFieldDecorator('zip', {
										rules: [{
											required: true, message: 'Please enter your zip code.',
										}],
									})(
										<Input placeholder="30318" />
									)}
								</FormItem>
							    <Button type="primary" loading={formLoading} onClick={this.formSubmission} htmlType="submit" style={{float: 'right'}}>Update Information</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Form.create()(Contact);