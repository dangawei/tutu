import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountPage = ({
	countPage
}) => {
	return (
		<div>
			CountPage Page
		</div>
	)
};

CountPage.propTypes = {
	countPage: PropTypes.object,
};

export default connect(({ countPage }) => ({ countPage }))(CountPage);
	