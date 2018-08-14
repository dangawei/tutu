import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Outside = ({
	outside
}) => {
	return (
		<div>
			Outside Page
		</div>
	)
};

Outside.propTypes = {
	outside: PropTypes.object,
};

export default connect(({ outside }) => ({ outside }))(Outside);
	