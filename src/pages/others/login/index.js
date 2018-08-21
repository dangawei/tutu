import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import { Form, Input, Button, Row, Icon } from 'antd';
import './login.scss';

const FormItem = Form.Item;

const Login = ({
	loading,
	dispatch,
	login,
	form: {
		getFieldDecorator,
		validateFieldsAndScroll
	}
}) => {
	const handleOk = () => {
		validateFieldsAndScroll((errors, values) => {
			if (errors) {
				return;
			}
			dispatch({
				type: 'login/login',
				payload: values
			});
		})
	}

	return (
		<div className="form">
			<form>
				<FormItem hasFeedback>
					{getFieldDecorator('username', {
						rules: [
							{
								required: true,
								message: '请输入用户名！'
							}
						],
					})(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} onPressEnter={handleOk} placeholder="用户名" />)}
				</FormItem>
				<FormItem hasFeedback>
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入密码！'
							}
						],
					})(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" onPressEnter={handleOk} placeholder="密码" />)}
				</FormItem>
				<Row>
					<Button type="primary" onClick={handleOk} loading={loading.effects.login}>
						登录
					</Button>
				</Row>

			</form>
		</div>
	)
};

Login.propTypes = {
	loading: PropTypes.object,
	dispatch: PropTypes.func,
	login: PropTypes.object
};

export default connect(({ login, loading }) => ({ login, loading }))(Form.create()(Login));
	