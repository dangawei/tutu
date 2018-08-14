import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const InstallRealtime = ({
	installRealtime
}) => {
	return (
		<div>
			InstallRealtime Page
		</div>
	)
};

InstallRealtime.propTypes = {
	installRealtime: PropTypes.object,
};

export default connect(({ installRealtime }) => ({ installRealtime }))(InstallRealtime);
	