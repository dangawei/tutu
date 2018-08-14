import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Video = ({
	h5Video
}) => {
	return (
		<div>
			H5Video Page
		</div>
	)
};

H5Video.propTypes = {
	h5Video: PropTypes.object,
};

export default connect(({ h5Video }) => ({ h5Video }))(H5Video);
	