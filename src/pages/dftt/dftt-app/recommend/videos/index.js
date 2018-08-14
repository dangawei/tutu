import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Videos = ({
	videos
}) => {
	return (
		<div>
			Videos Page
		</div>
	)
};

Videos.propTypes = {
	videos: PropTypes.object,
};

export default connect(({ videos }) => ({ videos }))(Videos);
	