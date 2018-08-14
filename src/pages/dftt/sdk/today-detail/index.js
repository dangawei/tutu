import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const TodayDetail = ({
	todayDetail
}) => {
	return (
		<div>
			TodayDetail Page
		</div>
	)
};

TodayDetail.propTypes = {
	todayDetail: PropTypes.object,
};

export default connect(({ todayDetail }) => ({ todayDetail }))(TodayDetail);
	