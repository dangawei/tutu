import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const PcQid = ({
	pcQid
}) => {
	return (
		<div>
			PcQid Page
		</div>
	)
};

PcQid.propTypes = {
	pcQid: PropTypes.object,
};

export default connect(({ pcQid }) => ({ pcQid }))(PcQid);
	