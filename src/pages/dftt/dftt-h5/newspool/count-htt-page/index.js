import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CountHttPage = ({
	countHttPage
}) => {
	return (
		<div>
			CountHttPage Page
		</div>
	)
};

CountHttPage.propTypes = {
	countHttPage: PropTypes.object,
};

export default connect(({ countHttPage }) => ({ countHttPage }))(CountHttPage);
	