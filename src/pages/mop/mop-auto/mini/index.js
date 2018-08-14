import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Mini = ({
	mini
}) => {
	return (
		<div>
			Mini Page
		</div>
	)
};

Mini.propTypes = {
	mini: PropTypes.object,
};

export default connect(({ mini }) => ({ mini }))(Mini);
	