import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const TodayData = ({
	todayData
}) => {
	return (
		<div>
			TodayData Page
		</div>
	)
};

TodayData.propTypes = {
	todayData: PropTypes.object,
};

export default connect(({ todayData }) => ({ todayData }))(TodayData);
	