import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import BaseEchartsLayout from '@/components/BaseEchartsLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const DeleteLog = ({
	deleteLog
}) => {
	return (
		<div>
			删除日志页面
		</div>
	)
};

DeleteLog.propTypes = {
	deleteLog: PropTypes.object,
};

export default connect(({ deleteLog }) => ({ deleteLog }))(DeleteLog);
	