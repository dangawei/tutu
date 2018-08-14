import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Task = ({
	task
}) => {
	return (
		<div>
			Task Page
		</div>
	)
};

Task.propTypes = {
	task: PropTypes.object,
};

export default connect(({ task }) => ({ task }))(Task);
	