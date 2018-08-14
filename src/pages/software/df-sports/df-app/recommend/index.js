import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Recommend = ({
	recommend
}) => {
	return (
		<div>
			Recommend Page
		</div>
	)
};

Recommend.propTypes = {
	recommend: PropTypes.object,
};

export default connect(({ recommend }) => ({ recommend }))(Recommend);
	