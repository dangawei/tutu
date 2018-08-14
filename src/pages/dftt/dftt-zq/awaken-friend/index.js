import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const AwakenFriend = ({
	awakenFriend
}) => {
	return (
		<div>
			AwakenFriend Page
		</div>
	)
};

AwakenFriend.propTypes = {
	awakenFriend: PropTypes.object,
};

export default connect(({ awakenFriend }) => ({ awakenFriend }))(AwakenFriend);
	