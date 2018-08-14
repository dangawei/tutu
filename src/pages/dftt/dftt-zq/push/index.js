import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import { TreeSelect } from 'antd';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const Push = ({
	push
}) => {
   
	const treeData = [{
		title: 'Node1',
		value: '0-0',
		key: '0-0',
		children: [{
			title: 'Child Node1',
			value: '0-0-0',
			key: '0-0-0',
		}],
	}, {
		title: 'Node2',
		value: '0-1',
		key: '0-1',
		children: [{
			title: 'Child Node3',
			value: '0-1-0',
			key: '0-1-0',
		}, {
			title: 'Child Node4',
			value: '0-1-1',
			key: '0-1-1',
		}, {
			title: 'Child Node5',
			value: '0-1-2',
			key: '0-1-2',
		}],
	}];

	const onChange = (value, label, extra) => {
		console.log(value, label, extra)
	}

	const tProps = {
		treeData,
		showCheckedStrategy: SHOW_PARENT,
		onChange: onChange,
		treeCheckable: true,
		searchPlaceholder: 'Please select',
		style: {
			width: 300,
		},
	};

	return (
		<div>
			<TreeSelect {...tProps} />
		</div>
	)
};

Push.propTypes = {
	push: PropTypes.object,
};

export default connect(({ push }) => ({ push }))(Push);
	