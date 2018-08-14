import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyCount = ({
	dailyCount
}) => {
	return (
		<div>
			DailyCount Page
		</div>
	)
};

DailyCount.propTypes = {
	dailyCount: PropTypes.object,
};

export default connect(({ dailyCount }) => ({ dailyCount }))(DailyCount);
	