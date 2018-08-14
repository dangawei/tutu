import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Register = ({
	register
}) => {
	return (
		<div>
			Register Page
		</div>
	)
};

Register.propTypes = {
	register: PropTypes.object,
};

export default connect(({ register }) => ({ register }))(Register);
	