import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Sign = ({
	sign
}) => {
	return (
		<div>
			Sign Page
		</div>
	)
};

Sign.propTypes = {
	sign: PropTypes.object,
};

export default connect(({ sign }) => ({ sign }))(Sign);
	