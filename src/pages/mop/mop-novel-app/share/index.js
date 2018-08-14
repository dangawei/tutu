import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Share = ({
	share
}) => {
	return (
		<div>
			Share Page
		</div>
	)
};

Share.propTypes = {
	share: PropTypes.object,
};

export default connect(({ share }) => ({ share }))(Share);
	