import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Read = ({
	read
}) => {
	return (
		<div>
			Read Page
		</div>
	)
};

Read.propTypes = {
	read: PropTypes.object,
};

export default connect(({ read }) => ({ read }))(Read);
	