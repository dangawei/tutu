import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Message = ({
	message
}) => {
	return (
		<div>
			Message Page
		</div>
	)
};

Message.propTypes = {
	message: PropTypes.object,
};

export default connect(({ message }) => ({ message }))(Message);
	