import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Qid = ({
	h5Qid
}) => {
	return (
		<div>
			H5Qid Page
		</div>
	)
};

H5Qid.propTypes = {
	h5Qid: PropTypes.object,
};

export default connect(({ h5Qid }) => ({ h5Qid }))(H5Qid);
	