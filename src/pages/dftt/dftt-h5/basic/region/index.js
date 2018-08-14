import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Region = ({
	region
}) => {
	return (
		<div>
			Region Page
		</div>
	)
};

Region.propTypes = {
	region: PropTypes.object,
};

export default connect(({ region }) => ({ region }))(Region);
	