import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const H5Rank = ({
	h5Rank
}) => {
	return (
		<div>
			H5Rank Page
		</div>
	)
};

H5Rank.propTypes = {
	h5Rank: PropTypes.object,
};

export default connect(({ h5Rank }) => ({ h5Rank }))(H5Rank);
	