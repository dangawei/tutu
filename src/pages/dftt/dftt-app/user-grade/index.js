import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const UserGrade = ({
	userGrade
}) => {
	return (
		<div>
			UserGrade Page
		</div>
	)
};

UserGrade.propTypes = {
	userGrade: PropTypes.object,
};

export default connect(({ userGrade }) => ({ userGrade }))(UserGrade);
	