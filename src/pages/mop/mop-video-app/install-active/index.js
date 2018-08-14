import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const InstallActive = ({
	installActive
}) => {
	return (
		<div>
			InstallActive Page
		</div>
	)
};

InstallActive.propTypes = {
	installActive: PropTypes.object,
};

export default connect(({ installActive }) => ({ installActive }))(InstallActive);
	