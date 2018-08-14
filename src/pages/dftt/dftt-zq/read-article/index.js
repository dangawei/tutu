import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ReadArticle = ({
	readArticle
}) => {
	return (
		<div>
			ReadArticle Page
		</div>
	)
};

ReadArticle.propTypes = {
	readArticle: PropTypes.object,
};

export default connect(({ readArticle }) => ({ readArticle }))(ReadArticle);
	