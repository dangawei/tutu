import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const TodayQid = ({
	todayQid
}) => {
	return (
		<div>
			TodayQid Page
		</div>
	)
};

TodayQid.propTypes = {
	todayQid: PropTypes.object,
};

export default connect(({ todayQid }) => ({ todayQid }))(TodayQid);
	