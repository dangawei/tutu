import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import BaseEchartsLayout from '@/components/BaseEchartsLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const AppverUpdate = ({
	appver
}) => {
	let { text } = appver;
	return (
		<div>
			APP版本升级控制 {text}
		</div>
	)
};

AppverUpdate.propTypes = {
	appver: PropTypes.object,
};

export default connect(({ appver }) => ({ appver }))(AppverUpdate);
	