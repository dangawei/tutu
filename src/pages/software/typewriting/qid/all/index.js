import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const All = ({
	all
}) => {
	return (
		<div>
			All Page
		</div>
	)
};

All.propTypes = {
	all: PropTypes.object,
};

export default connect(({ all }) => ({ all }))(All);
	