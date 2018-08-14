import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ApprenticeAppCount = ({
	apprenticeAppCount
}) => {
	return (
		<div>
			ApprenticeAppCount Page
		</div>
	)
};

ApprenticeAppCount.propTypes = {
	apprenticeAppCount: PropTypes.object,
};

export default connect(({ apprenticeAppCount }) => ({ apprenticeAppCount }))(ApprenticeAppCount);
	