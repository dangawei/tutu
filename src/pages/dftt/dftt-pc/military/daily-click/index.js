import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyClick = ({
	dailyClick
}) => {
	return (
		<div>
			DailyClick Page
		</div>
	)
};

DailyClick.propTypes = {
	dailyClick: PropTypes.object,
};

export default connect(({ dailyClick }) => ({ dailyClick }))(DailyClick);
	