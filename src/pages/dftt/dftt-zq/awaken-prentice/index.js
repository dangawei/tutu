import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const AwakenPrentice = ({
	awakenPrentice
}) => {
	return (
		<div>
			AwakenPrentice Page
		</div>
	)
};

AwakenPrentice.propTypes = {
	awakenPrentice: PropTypes.object,
};

export default connect(({ awakenPrentice }) => ({ awakenPrentice }))(AwakenPrentice);
	