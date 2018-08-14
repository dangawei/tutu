import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const UninstallOs = ({
	uninstallOs
}) => {
	return (
		<div>
			UninstallOs Page
		</div>
	)
};

UninstallOs.propTypes = {
	uninstallOs: PropTypes.object,
};

export default connect(({ uninstallOs }) => ({ uninstallOs }))(UninstallOs);
	