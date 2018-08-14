import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountHttIdx = ({
	countHttIdx
}) => {
	return (
		<div>
			CountHttIdx Page
		</div>
	)
};

CountHttIdx.propTypes = {
	countHttIdx: PropTypes.object,
};

export default connect(({ countHttIdx }) => ({ countHttIdx }))(CountHttIdx);
	