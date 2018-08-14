import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyShowIncome = ({
	dailyShowIncome
}) => {
	return (
		<div>
			DailyShowIncome Page
		</div>
	)
};

DailyShowIncome.propTypes = {
	dailyShowIncome: PropTypes.object,
};

export default connect(({ dailyShowIncome }) => ({ dailyShowIncome }))(DailyShowIncome);
	