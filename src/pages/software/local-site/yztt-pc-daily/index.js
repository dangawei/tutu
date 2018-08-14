import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const YzttPcDaily = ({
	yzttPcDaily
}) => {
	return (
		<div>
			YzttPcDaily Page
		</div>
	)
};

YzttPcDaily.propTypes = {
	yzttPcDaily: PropTypes.object,
};

export default connect(({ yzttPcDaily }) => ({ yzttPcDaily }))(YzttPcDaily);
	