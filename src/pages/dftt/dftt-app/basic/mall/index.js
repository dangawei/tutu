import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Mall = ({
	mall
}) => {
	return (
		<div>
			Mall Page
		</div>
	)
};

Mall.propTypes = {
	mall: PropTypes.object,
};

export default connect(({ mall }) => ({ mall }))(Mall);
	