import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Binding = ({
	binding
}) => {
	return (
		<div>
			Binding Page
		</div>
	)
};

Binding.propTypes = {
	binding: PropTypes.object,
};

export default connect(({ binding }) => ({ binding }))(Binding);
	