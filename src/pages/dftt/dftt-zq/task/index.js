import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import BaseEchartsLayout from '@/components/BaseEchartsLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Task = ({
	task
}) => {
	return (
		<div>
			<BaseEchartsLayout
			    data={[]}
				maps={{'dt': '日期'}}
				xAxis={'dt'}
			/>
		</div>
	)
};

Task.propTypes = {
	task: PropTypes.object,
};

export default connect(({ task }) => ({ task }))(Task);
	