import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Counts = ({
	counts
}) => {
	return (
		<div>
			Counts Page
		</div>
	)
};

Counts.propTypes = {
	counts: PropTypes.object,
};

export default connect(({ counts }) => ({ counts }))(Counts);
	