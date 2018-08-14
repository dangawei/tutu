import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Index = ({
	index
}) => {
	return (
		<div>
			Index Page
		</div>
	)
};

Index.propTypes = {
	index: PropTypes.object,
};

export default connect(({ index }) => ({ index }))(Index);
	