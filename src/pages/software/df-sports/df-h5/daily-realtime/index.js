import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyRealtime = ({
	dailyRealtime
}) => {
	return (
		<div>
			DailyRealtime Page
		</div>
	)
};

DailyRealtime.propTypes = {
	dailyRealtime: PropTypes.object,
};

export default connect(({ dailyRealtime }) => ({ dailyRealtime }))(DailyRealtime);
	