import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Point = ({
	point
}) => {
	return (
		<div>
			Point Page
		</div>
	)
};

Point.propTypes = {
	point: PropTypes.object,
};

export default connect(({ point }) => ({ point }))(Point);
	