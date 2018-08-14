import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyQid = ({
	dailyQid
}) => {
	return (
		<div>
			DailyQid Page
		</div>
	)
};

DailyQid.propTypes = {
	dailyQid: PropTypes.object,
};

export default connect(({ dailyQid }) => ({ dailyQid }))(DailyQid);
	