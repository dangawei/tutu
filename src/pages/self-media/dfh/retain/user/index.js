import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const User = ({
	user
}) => {
	return (
		<div>
			User Page
		</div>
	)
};

User.propTypes = {
	user: PropTypes.object,
};

export default connect(({ user }) => ({ user }))(User);
	