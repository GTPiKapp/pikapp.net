import React, { Component } from 'react';

import Helmet from 'react-helmet';

import { Row, Col, message, Card, Button, Form, Input, Modal } from 'antd';
const FormItem = Form.Item;
const TextArea = Input.TextArea;

import PageTitle from '../components/PageTitle';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formLoading: false,
			formDisabled: false,
		};
		this.formSubmission = this.formSubmission.bind(this);
	}

	formSubmission(e) {
		e.preventDefault();
		this.setState({ formLoading: true });
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}

			const api = `${
				process.env.NODE_ENV === 'production'
					? process.env.API_HOST
					: ''
			}/api/contact`;

			fetch(api, {
				credentials: 'same-origin',
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: values.name,
					email: values.email,
					message: values.message,
				}),
			})
				.then(response => response.json())
				.then(json => {
					this.setState({ formDisabled: true, formLoading: false });
					message.success(json.message);
				})
				.catch(err => {
					console.error(err);
					Modal.error({
						title: 'Uh oh!',
						content: `We're sorry, but it looks like something has gone wrong on our side.`,
					});
				});
		});
	}

	render() {
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
				md: { span: 6 },
				lg: { span: 4 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
				md: { span: 18 },
				lg: { span: 20 },
			},
		};

		const { getFieldDecorator } = this.props.form;
		const { formLoading, formDisabled } = this.state;
		return (
			<div>
				<Helmet>
					<title>Pi Kappa Phi | Contact Us</title>
				</Helmet>
				<PageTitle name="Contact Us" />
				<Row type="flex" justify="center" align="top">
					<Col span={12}>
						<Card style={{ width: '100%' }}>
							<Form
								layout="horizontal"
								onSubmit={this.formSubmission}>
								<FormItem {...formItemLayout} label="Name">
									{getFieldDecorator('name', {
										rules: [
											{
												required: true,
												message:
													'Please enter your name!',
											},
										],
									})(
										<Input
											disabled={
												formLoading || formDisabled
											}
											placeholder="George Burdell"
										/>
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Email">
									{getFieldDecorator('email', {
										rules: [
											{
												type: 'email',
												message:
													'The input is not valid E-mail!',
											},
											{
												required: true,
												message:
													'Please enter your email!',
											},
										],
									})(
										<Input
											disabled={
												formLoading || formDisabled
											}
											placeholder="gburdell3@gatech.edu"
										/>
									)}
								</FormItem>
								<FormItem {...formItemLayout} label="Message">
									{getFieldDecorator('message', {
										rules: [
											{
												required: true,
												message:
													'Please enter your message!',
											},
										],
									})(
										<TextArea
											disabled={
												formLoading || formDisabled
											}
											autosize={{
												minRows: 4,
												maxRows: 8,
											}}
											placeholder="Enter your message here"
										/>
									)}
								</FormItem>
								<Button
									type="primary"
									disabled={formLoading || formDisabled}
									loading={formLoading}
									onClick={this.formSubmission}
									htmlType="submit"
									style={{ float: 'right' }}>
									Submit Form
								</Button>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Form.create()(Contact);
