import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CategoryVideo = ({
	categoryVideo
}) => {
	return (
		<div>
			CategoryVideo Page
		</div>
	)
};

CategoryVideo.propTypes = {
	categoryVideo: PropTypes.object,
};

export default connect(({ categoryVideo }) => ({ categoryVideo }))(CategoryVideo);
	