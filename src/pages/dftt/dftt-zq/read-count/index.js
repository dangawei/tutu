import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ReadCount = ({
	readCount
}) => {
	return (
		<div>
			ReadCount Page
		</div>
	)
};

ReadCount.propTypes = {
	readCount: PropTypes.object,
};

export default connect(({ readCount }) => ({ readCount }))(ReadCount);
	