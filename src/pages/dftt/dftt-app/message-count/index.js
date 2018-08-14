import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const MessageCount = ({
	messageCount
}) => {
	return (
		<div>
			MessageCount Page
		</div>
	)
};

MessageCount.propTypes = {
	messageCount: PropTypes.object,
};

export default connect(({ messageCount }) => ({ messageCount }))(MessageCount);
	