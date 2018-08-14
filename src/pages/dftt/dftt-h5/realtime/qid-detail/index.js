import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const QidDetail = ({
	qidDetail
}) => {
	return (
		<div>
			QidDetail Page
		</div>
	)
};

QidDetail.propTypes = {
	qidDetail: PropTypes.object,
};

export default connect(({ qidDetail }) => ({ qidDetail }))(QidDetail);
	