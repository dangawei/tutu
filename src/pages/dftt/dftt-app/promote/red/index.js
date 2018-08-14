import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Red = ({
	red
}) => {
	return (
		<div>
			Red Page
		</div>
	)
};

Red.propTypes = {
	red: PropTypes.object,
};

export default connect(({ red }) => ({ red }))(Red);
	