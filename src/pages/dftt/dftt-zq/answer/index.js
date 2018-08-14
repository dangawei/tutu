import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Answer = ({
	answer
}) => {
	return (
		<div>
			Answer Page
		</div>
	)
};

Answer.propTypes = {
	answer: PropTypes.object,
};

export default connect(({ answer }) => ({ answer }))(Answer);
	