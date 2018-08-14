import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Click = ({
	click
}) => {
	return (
		<div>
			Click Page
		</div>
	)
};

Click.propTypes = {
	click: PropTypes.object,
};

export default connect(({ click }) => ({ click }))(Click);
	