import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DisposableReward = ({
	disposableReward
}) => {
	return (
		<div>
			DisposableReward Page
		</div>
	)
};

DisposableReward.propTypes = {
	disposableReward: PropTypes.object,
};

export default connect(({ disposableReward }) => ({ disposableReward }))(DisposableReward);
	