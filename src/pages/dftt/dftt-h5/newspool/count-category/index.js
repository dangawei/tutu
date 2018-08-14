import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountCategory = ({
	countCategory
}) => {
	return (
		<div>
			CountCategory Page
		</div>
	)
};

CountCategory.propTypes = {
	countCategory: PropTypes.object,
};

export default connect(({ countCategory }) => ({ countCategory }))(CountCategory);
	