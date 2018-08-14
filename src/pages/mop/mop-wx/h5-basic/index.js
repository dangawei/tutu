import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Basic = ({
	h5Basic
}) => {
	return (
		<div>
			H5Basic Page
		</div>
	)
};

H5Basic.propTypes = {
	h5Basic: PropTypes.object,
};

export default connect(({ h5Basic }) => ({ h5Basic }))(H5Basic);
	