import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyPos = ({
	dailyPos
}) => {
	return (
		<div>
			DailyPos Page
		</div>
	)
};

DailyPos.propTypes = {
	dailyPos: PropTypes.object,
};

export default connect(({ dailyPos }) => ({ dailyPos }))(DailyPos);
	