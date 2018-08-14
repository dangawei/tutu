import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Monitor = ({
	monitor
}) => {
	return (
		<div>
			Monitor Page
		</div>
	)
};

Monitor.propTypes = {
	monitor: PropTypes.object,
};

export default connect(({ monitor }) => ({ monitor }))(Monitor);
	