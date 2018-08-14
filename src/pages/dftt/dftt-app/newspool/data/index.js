import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Data = ({
	data
}) => {
	return (
		<div>
			Data Page
		</div>
	)
};

Data.propTypes = {
	data: PropTypes.object,
};

export default connect(({ data }) => ({ data }))(Data);
	