import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ApprenticeAppRank = ({
	apprenticeAppRank
}) => {
	return (
		<div>
			ApprenticeAppRank Page
		</div>
	)
};

ApprenticeAppRank.propTypes = {
	apprenticeAppRank: PropTypes.object,
};

export default connect(({ apprenticeAppRank }) => ({ apprenticeAppRank }))(ApprenticeAppRank);
	