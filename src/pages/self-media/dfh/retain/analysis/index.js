import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Analysis = ({
	analysis
}) => {
	return (
		<div>
			Analysis Page
		</div>
	)
};

Analysis.propTypes = {
	analysis: PropTypes.object,
};

export default connect(({ analysis }) => ({ analysis }))(Analysis);
	