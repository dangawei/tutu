import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Gg = ({
	gg
}) => {
	return (
		<div>
			Gg Page
		</div>
	)
};

Gg.propTypes = {
	gg: PropTypes.object,
};

export default connect(({ gg }) => ({ gg }))(Gg);
	