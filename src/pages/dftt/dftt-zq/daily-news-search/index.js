import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DailyNewsSearch = ({
	dailyNewsSearch
}) => {
	return (
		<div>
			DailyNewsSearch Page
		</div>
	)
};

DailyNewsSearch.propTypes = {
	dailyNewsSearch: PropTypes.object,
};

export default connect(({ dailyNewsSearch }) => ({ dailyNewsSearch }))(DailyNewsSearch);
	