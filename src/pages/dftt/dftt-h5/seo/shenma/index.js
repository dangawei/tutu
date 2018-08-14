import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Shenma = ({
	shenma
}) => {
	return (
		<div>
			Shenma Page
		</div>
	)
};

Shenma.propTypes = {
	shenma: PropTypes.object,
};

export default connect(({ shenma }) => ({ shenma }))(Shenma);
	