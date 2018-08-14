import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Search360 = ({
	search360
}) => {
	return (
		<div>
			Search360 Page
		</div>
	)
};

Search360.propTypes = {
	search360: PropTypes.object,
};

export default connect(({ search360 }) => ({ search360 }))(Search360);
	