import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Activity = ({
	activity
}) => {
	return (
		<div>
			Activity Page
		</div>
	)
};

Activity.propTypes = {
	activity: PropTypes.object,
};

export default connect(({ activity }) => ({ activity }))(Activity);
	