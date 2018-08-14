import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const PdfRead = ({
	pdfRead
}) => {
	return (
		<div>
			PdfRead Page
		</div>
	)
};

PdfRead.propTypes = {
	pdfRead: PropTypes.object,
};

export default connect(({ pdfRead }) => ({ pdfRead }))(PdfRead);
	