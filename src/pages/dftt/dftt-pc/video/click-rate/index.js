import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ClickRate = ({
	clickRate
}) => {
	return (
		<div>
			ClickRate Page
		</div>
	)
};

ClickRate.propTypes = {
	clickRate: PropTypes.object,
};

export default connect(({ clickRate }) => ({ clickRate }))(ClickRate);
	