import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const QidNav = ({
	qidNav
}) => {
	return (
		<div>
			QidNav Page
		</div>
	)
};

QidNav.propTypes = {
	qidNav: PropTypes.object,
};

export default connect(({ qidNav }) => ({ qidNav }))(QidNav);
	