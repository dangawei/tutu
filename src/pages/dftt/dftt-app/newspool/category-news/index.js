import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CategoryNews = ({
	categoryNews
}) => {
	return (
		<div>
			CategoryNews Page
		</div>
	)
};

CategoryNews.propTypes = {
	categoryNews: PropTypes.object,
};

export default connect(({ categoryNews }) => ({ categoryNews }))(CategoryNews);
	