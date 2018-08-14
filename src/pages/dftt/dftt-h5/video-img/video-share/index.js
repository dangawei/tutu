import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const VideoShare = ({
	videoShare
}) => {
	return (
		<div>
			VideoShare Page
		</div>
	)
};

VideoShare.propTypes = {
	videoShare: PropTypes.object,
};

export default connect(({ videoShare }) => ({ videoShare }))(VideoShare);
	