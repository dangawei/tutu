import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Charge = ({
	charge
}) => {
	return (
		<div>
			Charge Page
		</div>
	)
};

Charge.propTypes = {
	charge: PropTypes.object,
};

export default connect(({ charge }) => ({ charge }))(Charge);
	