import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Version = ({
	version
}) => {
	return (
		<div>
			Version Page
		</div>
	)
};

Version.propTypes = {
	version: PropTypes.object,
};

export default connect(({ version }) => ({ version }))(Version);
	