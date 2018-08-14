import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const IndexNewspool = ({
	indexNewspool
}) => {
	return (
		<div>
			IndexNewspool Page
		</div>
	)
};

IndexNewspool.propTypes = {
	indexNewspool: PropTypes.object,
};

export default connect(({ indexNewspool }) => ({ indexNewspool }))(IndexNewspool);
	