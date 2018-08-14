import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Active = ({
	active
}) => {
	return (
		<div>
			Active Page
		</div>
	)
};

Active.propTypes = {
	active: PropTypes.object,
};

export default connect(({ active }) => ({ active }))(Active);
	