import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const QidData = ({
	qidData
}) => {
	return (
		<div>
			QidData Page
		</div>
	)
};

QidData.propTypes = {
	qidData: PropTypes.object,
};

export default connect(({ qidData }) => ({ qidData }))(QidData);
	