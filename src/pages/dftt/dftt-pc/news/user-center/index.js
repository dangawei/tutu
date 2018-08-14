import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const UserCenter = ({
	userCenter
}) => {
	return (
		<div>
			UserCenter Page
		</div>
	)
};

UserCenter.propTypes = {
	userCenter: PropTypes.object,
};

export default connect(({ userCenter }) => ({ userCenter }))(UserCenter);
	