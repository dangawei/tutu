import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Competitor = ({
	competitor
}) => {
	return (
		<div>
			Competitor Page
		</div>
	)
};

Competitor.propTypes = {
	competitor: PropTypes.object,
};

export default connect(({ competitor }) => ({ competitor }))(Competitor);
	