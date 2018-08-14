import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Whole = ({
	whole
}) => {
	return (
		<div>
			Whole Page
		</div>
	)
};

Whole.propTypes = {
	whole: PropTypes.object,
};

export default connect(({ whole }) => ({ whole }))(Whole);
	