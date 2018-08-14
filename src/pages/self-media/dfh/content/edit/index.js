import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Edit = ({
	edit
}) => {
	return (
		<div>
			Edit Page
		</div>
	)
};

Edit.propTypes = {
	edit: PropTypes.object,
};

export default connect(({ edit }) => ({ edit }))(Edit);
	