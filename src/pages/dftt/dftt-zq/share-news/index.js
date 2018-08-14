import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ShareNews = ({
	shareNews
}) => {
	return (
		<div>
			ShareNews Page
		</div>
	)
};

ShareNews.propTypes = {
	shareNews: PropTypes.object,
};

export default connect(({ shareNews }) => ({ shareNews }))(ShareNews);
	