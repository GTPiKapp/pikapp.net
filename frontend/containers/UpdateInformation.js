import React, {Component} from 'react'

import Helmet from 'react-helmet';

import {Row, Col, Card, Button, message, Form, Input, Breadcrumb} from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

import PageTitle from '../components/PageTitle';

class UpdateInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formLoading: false,
			formDisabled: false
		};
		this.formSubmission = this.formSubmission.bind(this);
	}

	formSubmission(e) {
		e.preventDefault();
		this.setState({formLoading: true});
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}

			fetch(`/api/alumni/update`, {
				credentials: 'same-origin',
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: values.name,
					inumber: values.inumber,
					email: values.email,
					phone: values.phone,
					address: values.address,
					city: values.city,
					zip: values.zip
				})
			})
			.then(response => response.json())
			.then(json => {
				this.setState({formDisabled: true, formLoading: false});
				message.success(json.message);
			})
			.catch(err => {
				message.error(json.error);
			})
		});
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
		const { formLoading, formDisabled } = this.state;
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
										<Input disabled={formLoading || formDisabled} placeholder="George Burdell" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="I-Number">
									{getFieldDecorator('inumber')(
										<Input disabled={formLoading || formDisabled} placeholder="I-1654" />
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
										<Input disabled={formLoading || formDisabled} placeholder="gburdell3@gatech.edu" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Phone">
									{getFieldDecorator('phone', {
										rules: [{
											required: true, message: 'Please enter your phone number.',
										}],
									})(
										<Input disabled={formLoading || formDisabled} placeholder="516-123-1992" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Address">
									{getFieldDecorator('address', {
										rules: [{
											required: true, message: 'Please enter your street address.',
										}],
									})(
										<Input disabled={formLoading || formDisabled} placeholder="220 Ferst Drive NW" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="City">
									{getFieldDecorator('city', {
										rules: [{
											required: true, message: 'Please enter your city.',
										}],
									})(
										<Input disabled={formLoading || formDisabled} placeholder="Atlanta" />
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Zip Code">
									{getFieldDecorator('zip', {
										rules: [{
											required: true, message: 'Please enter your zip code.',
										}],
									})(
										<Input disabled={formLoading || formDisabled} placeholder="30318" />
									)}
								</FormItem>
							    <Button type="primary" loading={formLoading} disabled={formLoading || formDisabled} onClick={this.formSubmission} htmlType="submit" style={{float: 'right'}}>Update Information</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Form.create()(UpdateInformation);