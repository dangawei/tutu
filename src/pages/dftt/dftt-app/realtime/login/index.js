import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Login = ({
	login
}) => {
	return (
		<div>
			Login Page
		</div>
	)
};

Login.propTypes = {
	login: PropTypes.object,
};

export default connect(({ login }) => ({ login }))(Login);
	