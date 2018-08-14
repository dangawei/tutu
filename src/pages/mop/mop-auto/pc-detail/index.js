import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const PcDetail = ({
	pcDetail
}) => {
	return (
		<div>
			PcDetail Page
		</div>
	)
};

PcDetail.propTypes = {
	pcDetail: PropTypes.object,
};

export default connect(({ pcDetail }) => ({ pcDetail }))(PcDetail);
	