import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const IndexPosDaily = ({
	indexPosDaily
}) => {
	return (
		<div>
			IndexPosDaily Page
		</div>
	)
};

IndexPosDaily.propTypes = {
	indexPosDaily: PropTypes.object,
};

export default connect(({ indexPosDaily }) => ({ indexPosDaily }))(IndexPosDaily);
	