import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const CmsAdd = ({
	cmsAdd
}) => {
	return (
		<div>
			CmsAdd Page
		</div>
	)
};

CmsAdd.propTypes = {
	cmsAdd: PropTypes.object,
};

export default connect(({ cmsAdd }) => ({ cmsAdd }))(CmsAdd);
	