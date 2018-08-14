import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const VideoSource = ({
	videoSource
}) => {
	return (
		<div>
			VideoSource Page
		</div>
	)
};

VideoSource.propTypes = {
	videoSource: PropTypes.object,
};

export default connect(({ videoSource }) => ({ videoSource }))(VideoSource);
	