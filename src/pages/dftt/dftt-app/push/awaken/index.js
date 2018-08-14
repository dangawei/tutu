import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Awaken = ({
	awaken
}) => {
	return (
		<div>
			Awaken Page
		</div>
	)
};

Awaken.propTypes = {
	awaken: PropTypes.object,
};

export default connect(({ awaken }) => ({ awaken }))(Awaken);
	