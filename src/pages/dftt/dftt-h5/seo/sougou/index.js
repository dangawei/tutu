import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Sougou = ({
	sougou
}) => {
	return (
		<div>
			Sougou Page
		</div>
	)
};

Sougou.propTypes = {
	sougou: PropTypes.object,
};

export default connect(({ sougou }) => ({ sougou }))(Sougou);
	