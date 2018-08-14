import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Xyb = ({
	xyb
}) => {
	return (
		<div>
			Xyb Page
		</div>
	)
};

Xyb.propTypes = {
	xyb: PropTypes.object,
};

export default connect(({ xyb }) => ({ xyb }))(Xyb);
	