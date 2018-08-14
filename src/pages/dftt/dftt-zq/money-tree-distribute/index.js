import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const MoneyTreeDistribute = ({
	moneyTreeDistribute
}) => {
	return (
		<div>
			MoneyTreeDistribute Page
		</div>
	)
};

MoneyTreeDistribute.propTypes = {
	moneyTreeDistribute: PropTypes.object,
};

export default connect(({ moneyTreeDistribute }) => ({ moneyTreeDistribute }))(MoneyTreeDistribute);
	