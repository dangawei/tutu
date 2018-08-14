import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const RealtimeTop = ({
	realtimeTop
}) => {
	return (
		<div>
			RealtimeTop Page
		</div>
	)
};

RealtimeTop.propTypes = {
	realtimeTop: PropTypes.object,
};

export default connect(({ realtimeTop }) => ({ realtimeTop }))(RealtimeTop);
	