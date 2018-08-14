import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Count404 = ({
	count404
}) => {
	return (
		<div>
			Count404 Page
		</div>
	)
};

Count404.propTypes = {
	count404: PropTypes.object,
};

export default connect(({ count404 }) => ({ count404 }))(Count404);
	