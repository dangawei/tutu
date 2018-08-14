import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const InstallTime = ({
	installTime
}) => {
	return (
		<div>
			InstallTime Page
		</div>
	)
};

InstallTime.propTypes = {
	installTime: PropTypes.object,
};

export default connect(({ installTime }) => ({ installTime }))(InstallTime);
	