import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ClickSpecific = ({
	clickSpecific
}) => {
	return (
		<div>
			ClickSpecific Page
		</div>
	)
};

ClickSpecific.propTypes = {
	clickSpecific: PropTypes.object,
};

export default connect(({ clickSpecific }) => ({ clickSpecific }))(ClickSpecific);
	