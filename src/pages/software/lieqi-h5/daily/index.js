import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Daily = ({
	daily
}) => {
	return (
		<div>
			Daily Page
		</div>
	)
};

Daily.propTypes = {
	daily: PropTypes.object,
};

export default connect(({ daily }) => ({ daily }))(Daily);
	