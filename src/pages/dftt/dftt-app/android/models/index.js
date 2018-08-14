import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Models = ({
	models
}) => {
	return (
		<div>
			Models Page
		</div>
	)
};

Models.propTypes = {
	models: PropTypes.object,
};

export default connect(({ models }) => ({ models }))(Models);
	