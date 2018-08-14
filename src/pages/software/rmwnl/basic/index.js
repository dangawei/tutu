import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Basic = ({
	basic
}) => {
	return (
		<div>
			Basic Page
		</div>
	)
};

Basic.propTypes = {
	basic: PropTypes.object,
};

export default connect(({ basic }) => ({ basic }))(Basic);
	