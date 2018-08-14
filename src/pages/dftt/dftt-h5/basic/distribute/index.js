import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Distribute = ({
	distribute
}) => {
	return (
		<div>
			Distribute Page
		</div>
	)
};

Distribute.propTypes = {
	distribute: PropTypes.object,
};

export default connect(({ distribute }) => ({ distribute }))(Distribute);
	