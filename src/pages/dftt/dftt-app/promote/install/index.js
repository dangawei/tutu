import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Install = ({
	install
}) => {
	return (
		<div>
			Install Page
		</div>
	)
};

Install.propTypes = {
	install: PropTypes.object,
};

export default connect(({ install }) => ({ install }))(Install);
	