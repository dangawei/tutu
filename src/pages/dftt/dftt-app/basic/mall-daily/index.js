import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const MallDaily = ({
	mallDaily
}) => {
	return (
		<div>
			MallDaily Page
		</div>
	)
};

MallDaily.propTypes = {
	mallDaily: PropTypes.object,
};

export default connect(({ mallDaily }) => ({ mallDaily }))(MallDaily);
	