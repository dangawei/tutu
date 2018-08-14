import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyTerminal = ({
	dailyTerminal
}) => {
	return (
		<div>
			DailyTerminal Page
		</div>
	)
};

DailyTerminal.propTypes = {
	dailyTerminal: PropTypes.object,
};

export default connect(({ dailyTerminal }) => ({ dailyTerminal }))(DailyTerminal);
	