import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const TwentyDian = ({
	twentyDian
}) => {
	return (
		<div>
			TwentyDian Page
		</div>
	)
};

TwentyDian.propTypes = {
	twentyDian: PropTypes.object,
};

export default connect(({ twentyDian }) => ({ twentyDian }))(TwentyDian);
	