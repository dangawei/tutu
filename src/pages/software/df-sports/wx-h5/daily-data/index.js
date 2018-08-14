import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyData = ({
	dailyData
}) => {
	return (
		<div>
			DailyData Page
		</div>
	)
};

DailyData.propTypes = {
	dailyData: PropTypes.object,
};

export default connect(({ dailyData }) => ({ dailyData }))(DailyData);
	