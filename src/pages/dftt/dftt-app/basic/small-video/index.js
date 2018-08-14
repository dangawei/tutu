import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const SmallVideo = ({
	smallVideo
}) => {
	return (
		<div>
			SmallVideo Page
		</div>
	)
};

SmallVideo.propTypes = {
	smallVideo: PropTypes.object,
};

export default connect(({ smallVideo }) => ({ smallVideo }))(SmallVideo);
	