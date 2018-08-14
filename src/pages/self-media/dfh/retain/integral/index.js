import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Integral = ({
	integral
}) => {
	return (
		<div>
			Integral Page
		</div>
	)
};

Integral.propTypes = {
	integral: PropTypes.object,
};

export default connect(({ integral }) => ({ integral }))(Integral);
	