import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Qid7654 = ({
	qid7654
}) => {
	return (
		<div>
			Qid7654 Page
		</div>
	)
};

Qid7654.propTypes = {
	qid7654: PropTypes.object,
};

export default connect(({ qid7654 }) => ({ qid7654 }))(Qid7654);
	