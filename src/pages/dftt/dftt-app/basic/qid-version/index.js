import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const QidVersion = ({
	qidVersion
}) => {
	return (
		<div>
			QidVersion Page
		</div>
	)
};

QidVersion.propTypes = {
	qidVersion: PropTypes.object,
};

export default connect(({ qidVersion }) => ({ qidVersion }))(QidVersion);
	