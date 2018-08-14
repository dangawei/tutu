import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Regression = ({
	regression
}) => {
	return (
		<div>
			Regression Page
		</div>
	)
};

Regression.propTypes = {
	regression: PropTypes.object,
};

export default connect(({ regression }) => ({ regression }))(Regression);
	