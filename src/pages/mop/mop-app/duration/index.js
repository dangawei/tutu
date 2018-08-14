import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Duration = ({
	duration
}) => {
	return (
		<div>
			Duration Page
		</div>
	)
};

Duration.propTypes = {
	duration: PropTypes.object,
};

export default connect(({ duration }) => ({ duration }))(Duration);
	