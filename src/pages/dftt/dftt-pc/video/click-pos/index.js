import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ClickPos = ({
	clickPos
}) => {
	return (
		<div>
			ClickPos Page
		</div>
	)
};

ClickPos.propTypes = {
	clickPos: PropTypes.object,
};

export default connect(({ clickPos }) => ({ clickPos }))(ClickPos);
	