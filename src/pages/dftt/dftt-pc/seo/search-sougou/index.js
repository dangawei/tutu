import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const SearchSougou = ({
	searchSougou
}) => {
	return (
		<div>
			SearchSougou Page
		</div>
	)
};

SearchSougou.propTypes = {
	searchSougou: PropTypes.object,
};

export default connect(({ searchSougou }) => ({ searchSougou }))(SearchSougou);
	