import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5 = ({
	h5
}) => {
	return (
		<div>
			H5 Page
		</div>
	)
};

H5.propTypes = {
	h5: PropTypes.object,
};

export default connect(({ h5 }) => ({ h5 }))(H5);
	