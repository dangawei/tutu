import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Enter = ({
	enter
}) => {
	return (
		<div>
			Enter Page
		</div>
	)
};

Enter.propTypes = {
	enter: PropTypes.object,
};

export default connect(({ enter }) => ({ enter }))(Enter);
	