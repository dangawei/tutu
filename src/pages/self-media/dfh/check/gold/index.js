import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Gold = ({
	gold
}) => {
	return (
		<div>
			Gold Page
		</div>
	)
};

Gold.propTypes = {
	gold: PropTypes.object,
};

export default connect(({ gold }) => ({ gold }))(Gold);
	