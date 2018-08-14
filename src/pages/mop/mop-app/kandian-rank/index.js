import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const KandianRank = ({
	kandianRank
}) => {
	return (
		<div>
			KandianRank Page
		</div>
	)
};

KandianRank.propTypes = {
	kandianRank: PropTypes.object,
};

export default connect(({ kandianRank }) => ({ kandianRank }))(KandianRank);
	