import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Source = ({
	source
}) => {
	return (
		<div>
			Source Page
		</div>
	)
};

Source.propTypes = {
	source: PropTypes.object,
};

export default connect(({ source }) => ({ source }))(Source);
	