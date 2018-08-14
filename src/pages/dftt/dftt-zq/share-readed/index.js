import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ShareReaded = ({
	shareReaded
}) => {
	return (
		<div>
			ShareReaded Page
		</div>
	)
};

ShareReaded.propTypes = {
	shareReaded: PropTypes.object,
};

export default connect(({ shareReaded }) => ({ shareReaded }))(ShareReaded);
	