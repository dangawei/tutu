import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ShareRank = ({
	shareRank
}) => {
	return (
		<div>
			ShareRank Page
		</div>
	)
};

ShareRank.propTypes = {
	shareRank: PropTypes.object,
};

export default connect(({ shareRank }) => ({ shareRank }))(ShareRank);
	