import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const VersionUpgrade = ({
	versionUpgrade
}) => {
	return (
		<div>
			VersionUpgrade Page
		</div>
	)
};

VersionUpgrade.propTypes = {
	versionUpgrade: PropTypes.object,
};

export default connect(({ versionUpgrade }) => ({ versionUpgrade }))(VersionUpgrade);
	