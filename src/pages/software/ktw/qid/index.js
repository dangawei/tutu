import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Qid = ({
	qid
}) => {
	return (
		<div>
			Qid Page
		</div>
	)
};

Qid.propTypes = {
	qid: PropTypes.object,
};

export default connect(({ qid }) => ({ qid }))(Qid);
	