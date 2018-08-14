import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Newspool = ({
	newspool
}) => {
	return (
		<div>
			Newspool Page
		</div>
	)
};

Newspool.propTypes = {
	newspool: PropTypes.object,
};

export default connect(({ newspool }) => ({ newspool }))(Newspool);
	