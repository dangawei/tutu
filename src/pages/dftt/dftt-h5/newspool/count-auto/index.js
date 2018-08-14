import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountAuto = ({
	countAuto
}) => {
	return (
		<div>
			CountAuto Page
		</div>
	)
};

CountAuto.propTypes = {
	countAuto: PropTypes.object,
};

export default connect(({ countAuto }) => ({ countAuto }))(CountAuto);
	