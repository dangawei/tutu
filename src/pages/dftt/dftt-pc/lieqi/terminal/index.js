import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Terminal = ({
	terminal
}) => {
	return (
		<div>
			Terminal Page
		</div>
	)
};

Terminal.propTypes = {
	terminal: PropTypes.object,
};

export default connect(({ terminal }) => ({ terminal }))(Terminal);
	