import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const BindingShow = ({
	bindingShow
}) => {
	return (
		<div>
			BindingShow Page
		</div>
	)
};

BindingShow.propTypes = {
	bindingShow: PropTypes.object,
};

export default connect(({ bindingShow }) => ({ bindingShow }))(BindingShow);
	