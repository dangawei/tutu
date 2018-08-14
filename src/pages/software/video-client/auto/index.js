import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Auto = ({
	auto
}) => {
	return (
		<div>
			Auto Page
		</div>
	)
};

Auto.propTypes = {
	auto: PropTypes.object,
};

export default connect(({ auto }) => ({ auto }))(Auto);
	