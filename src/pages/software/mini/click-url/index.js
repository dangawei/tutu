import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ClickUrl = ({
	clickUrl
}) => {
	return (
		<div>
			ClickUrl Page
		</div>
	)
};

ClickUrl.propTypes = {
	clickUrl: PropTypes.object,
};

export default connect(({ clickUrl }) => ({ clickUrl }))(ClickUrl);
	