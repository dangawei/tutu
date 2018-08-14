import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ApprenticePrentice = ({
	apprenticePrentice
}) => {
	return (
		<div>
			ApprenticePrentice Page
		</div>
	)
};

ApprenticePrentice.propTypes = {
	apprenticePrentice: PropTypes.object,
};

export default connect(({ apprenticePrentice }) => ({ apprenticePrentice }))(ApprenticePrentice);
	