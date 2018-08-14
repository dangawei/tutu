import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const VideoIdx = ({
	videoIdx
}) => {
	return (
		<div>
			VideoIdx Page
		</div>
	)
};

VideoIdx.propTypes = {
	videoIdx: PropTypes.object,
};

export default connect(({ videoIdx }) => ({ videoIdx }))(VideoIdx);
	