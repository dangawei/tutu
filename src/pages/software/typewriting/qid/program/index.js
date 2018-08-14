import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Program = ({
	program
}) => {
	return (
		<div>
			Program Page
		</div>
	)
};

Program.propTypes = {
	program: PropTypes.object,
};

export default connect(({ program }) => ({ program }))(Program);
	