import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const IndexPos = ({
	indexPos
}) => {
	return (
		<div>
			IndexPos Page
		</div>
	)
};

IndexPos.propTypes = {
	indexPos: PropTypes.object,
};

export default connect(({ indexPos }) => ({ indexPos }))(IndexPos);
	