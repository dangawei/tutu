import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ListIdx = ({
	listIdx
}) => {
	return (
		<div>
			ListIdx Page
		</div>
	)
};

ListIdx.propTypes = {
	listIdx: PropTypes.object,
};

export default connect(({ listIdx }) => ({ listIdx }))(ListIdx);
	