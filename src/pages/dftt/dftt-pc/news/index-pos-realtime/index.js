import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const IndexPosRealtime = ({
	indexPosRealtime
}) => {
	return (
		<div>
			IndexPosRealtime Page
		</div>
	)
};

IndexPosRealtime.propTypes = {
	indexPosRealtime: PropTypes.object,
};

export default connect(({ indexPosRealtime }) => ({ indexPosRealtime }))(IndexPosRealtime);
	