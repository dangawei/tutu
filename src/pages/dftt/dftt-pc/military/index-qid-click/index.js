import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const IndexQidClick = ({
	indexQidClick
}) => {
	return (
		<div>
			IndexQidClick Page
		</div>
	)
};

IndexQidClick.propTypes = {
	indexQidClick: PropTypes.object,
};

export default connect(({ indexQidClick }) => ({ indexQidClick }))(IndexQidClick);
	