// react dva
import PropTypes from 'prop-types';
import { connect } from 'dva';

// css
import './authority.scss'

// page components
import PermissionUser from './components/PermissionUser';
import PermissionReport from './components/PermissionReport';
import PermissionGroup from './components/PermissionGroup';

import { Tabs, Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

const Authority = ({
	authority,
	...props
}) => {

	let { dispatch } = props;
	let { user, report, group, common } = authority;

	/**
	 * tab选项卡切换
	 * @param  {[type]} k [description]
	 * @return {[type]}   [description]
	 */
	const handleTabChange = key => {
		dispatch({
			type: 'authority/changeTab',
			payload: { key }
		})
	}

	return (
		<div>
			<Tabs
				defaultActiveKey={common.activeKey}
				animated={false}
				onChange={handleTabChange}>
				<TabPane tab="用户权限管理" key="1">
					<PermissionUser user={ user } {...props} />
				</TabPane>
				<TabPane tab="报表权限设置" key="2">
					<PermissionReport report={report} {...props} />
				</TabPane>
				<TabPane tab="权限组设置" key="3">
					<PermissionGroup group={group} {...props} />
				</TabPane>
			</Tabs>
		</div>
	)
};

Authority.propTypes = {
	authority: PropTypes.object,
};

export default connect(({ authority }) => ({ authority }))(Authority);
	