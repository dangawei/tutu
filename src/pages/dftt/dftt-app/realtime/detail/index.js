import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Detail = ({
	detail
}) => {
	return (
		<div>
			Detail Page
		</div>
	)
};

Detail.propTypes = {
	detail: PropTypes.object,
};

export default connect(({ detail }) => ({ detail }))(Detail);
	