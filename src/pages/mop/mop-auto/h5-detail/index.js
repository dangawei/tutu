import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Detail = ({
	h5Detail
}) => {
	return (
		<div>
			H5Detail Page
		</div>
	)
};

H5Detail.propTypes = {
	h5Detail: PropTypes.object,
};

export default connect(({ h5Detail }) => ({ h5Detail }))(H5Detail);
	