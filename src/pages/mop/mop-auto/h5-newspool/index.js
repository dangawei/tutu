import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Newspool = ({
	h5Newspool
}) => {
	return (
		<div>
			H5Newspool Page
		</div>
	)
};

H5Newspool.propTypes = {
	h5Newspool: PropTypes.object,
};

export default connect(({ h5Newspool }) => ({ h5Newspool }))(H5Newspool);
	