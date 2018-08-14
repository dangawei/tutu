import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const TopRank = ({
	topRank
}) => {
	return (
		<div>
			TopRank Page
		</div>
	)
};

TopRank.propTypes = {
	topRank: PropTypes.object,
};

export default connect(({ topRank }) => ({ topRank }))(TopRank);
	