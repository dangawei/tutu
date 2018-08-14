import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const PcPos = ({
	pcPos
}) => {
	return (
		<div>
			PcPos Page
		</div>
	)
};

PcPos.propTypes = {
	pcPos: PropTypes.object,
};

export default connect(({ pcPos }) => ({ pcPos }))(PcPos);
	