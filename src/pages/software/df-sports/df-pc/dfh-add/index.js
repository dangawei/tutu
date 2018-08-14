import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DfhAdd = ({
	dfhAdd
}) => {
	return (
		<div>
			DfhAdd Page
		</div>
	)
};

DfhAdd.propTypes = {
	dfhAdd: PropTypes.object,
};

export default connect(({ dfhAdd }) => ({ dfhAdd }))(DfhAdd);
	