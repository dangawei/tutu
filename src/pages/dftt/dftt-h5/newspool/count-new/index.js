import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountNew = ({
	countNew
}) => {
	return (
		<div>
			CountNew Page
		</div>
	)
};

CountNew.propTypes = {
	countNew: PropTypes.object,
};

export default connect(({ countNew }) => ({ countNew }))(CountNew);
	