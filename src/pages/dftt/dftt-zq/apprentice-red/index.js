import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ApprenticeRed = ({
	apprenticeRed
}) => {
	return (
		<div>
			ApprenticeRed Page
		</div>
	)
};

ApprenticeRed.propTypes = {
	apprenticeRed: PropTypes.object,
};

export default connect(({ apprenticeRed }) => ({ apprenticeRed }))(ApprenticeRed);
	