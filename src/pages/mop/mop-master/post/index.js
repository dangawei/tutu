import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Post = ({
	post
}) => {
	return (
		<div>
			Post Page
		</div>
	)
};

Post.propTypes = {
	post: PropTypes.object,
};

export default connect(({ post }) => ({ post }))(Post);
	