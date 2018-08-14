import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Tt = ({
	tt
}) => {
	return (
		<div>
			Tt Page
		</div>
	)
};

Tt.propTypes = {
	tt: PropTypes.object,
};

export default connect(({ tt }) => ({ tt }))(Tt);
	