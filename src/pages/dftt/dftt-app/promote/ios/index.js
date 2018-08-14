import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Ios = ({
	ios
}) => {
	return (
		<div>
			Ios Page
		</div>
	)
};

Ios.propTypes = {
	ios: PropTypes.object,
};

export default connect(({ ios }) => ({ ios }))(Ios);
	