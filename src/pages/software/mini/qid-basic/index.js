import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const QidBasic = ({
	qidBasic
}) => {
	return (
		<div>
			QidBasic Page
		</div>
	)
};

QidBasic.propTypes = {
	qidBasic: PropTypes.object,
};

export default connect(({ qidBasic }) => ({ qidBasic }))(QidBasic);
	