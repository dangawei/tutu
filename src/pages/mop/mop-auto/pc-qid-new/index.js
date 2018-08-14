import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const PcQidNew = ({
	pcQidNew
}) => {
	return (
		<div>
			PcQidNew Page
		</div>
	)
};

PcQidNew.propTypes = {
	pcQidNew: PropTypes.object,
};

export default connect(({ pcQidNew }) => ({ pcQidNew }))(PcQidNew);
	