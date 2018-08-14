import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ApprenticeH5Invite = ({
	apprenticeH5Invite
}) => {
	return (
		<div>
			ApprenticeH5Invite Page
		</div>
	)
};

ApprenticeH5Invite.propTypes = {
	apprenticeH5Invite: PropTypes.object,
};

export default connect(({ apprenticeH5Invite }) => ({ apprenticeH5Invite }))(ApprenticeH5Invite);
	