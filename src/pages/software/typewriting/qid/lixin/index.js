import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Lixin = ({
	lixin
}) => {
	return (
		<div>
			Lixin Page
		</div>
	)
};

Lixin.propTypes = {
	lixin: PropTypes.object,
};

export default connect(({ lixin }) => ({ lixin }))(Lixin);
	