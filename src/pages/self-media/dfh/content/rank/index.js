import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Rank = ({
	rank
}) => {
	return (
		<div>
			Rank Page
		</div>
	)
};

Rank.propTypes = {
	rank: PropTypes.object,
};

export default connect(({ rank }) => ({ rank }))(Rank);
	