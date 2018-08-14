import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Count = ({
	count
}) => {
	return (
		<div>
			Count Page
		</div>
	)
};

Count.propTypes = {
	count: PropTypes.object,
};

export default connect(({ count }) => ({ count }))(Count);
	