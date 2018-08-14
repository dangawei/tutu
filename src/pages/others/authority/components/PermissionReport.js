import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import PermissionTree from './PermissionTree';
import UserGroup from './UserGroup';
import ReportConfig from './ReportConfig';

import { Form, Input, Select, Button, Radio, Table, Icon, Checkbox, Modal, Popconfirm, Pagination } from 'antd';
const FormItem = Form.Item;
const Search = Input.Search;

const PermissionReport = ({
	report,
	...props
}) => {
	let {
		// 表单搜索及列表
		form,
		datalist,
		total,
		pageInfo,

		showSelect,
		userSelect,

		treeList,

		// 按钮切换
		showListType,
		aCheckable,
		bCheckable,

		// 用户组
		userList,
		userCheckedList,
		userCheckedKeys,

		// 权限组列表
		groupList,
		groupCheckedList,
		groupCheckedKeys,

		// 报表配置
		showReportConfig,
		configId,
		configlist,
		configSheet,
		configField,
		configData,
	} = report;

	let { dispatch } = props;

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			width: 100,
		},
		{
			title: '报表名称',
			dataIndex: 'itemname',
			width: 200,
		},
		{
			title: '创建日期',
			dataIndex: 'cratetime',
			width: 150,
		},
		{
			title: '最后更新时间',
			dataIndex: 'modifytime',
			width: 150,
		},
		{
			title: '操作',
			width: 200,
			render: (text, record) => <span>操作</span>
		},

	];

	/**
	 * 表格翻页
	 * @param  {[type]} page [description]
	 * @return {[type]}      [description]
	 */
	const onPageChange = page => {
		dispatch({
			type: 'authority/getCategorylist',
			payload: {
				pageInfo: { currentpage: page }
			}
		})
	}


	/**
	 * 更新搜索表单
	 * @param  {[type]} payload [description]
	 * @return {[type]}         [description]
	 */
	const changeSearchForm = (type, value) => {
		let p = {};
		if(type === 'itemname') {
			p.itemname = value;
		}
		dispatch({
			type: 'authority/getCategorylist',
			payload: {
				form: p
			}
		})
	}

	/**
	 * 表格行点击
	 */
	const handleTableClick = (record, index) => {
		dispatch({
			type: 'authority/updateUserSelect',
			stateType: 'report',
			payload: record
		})
	}

	/**
	 * 节点编辑
	 * @param  {[type]} handleNodeEdit [description]
	 * @return {[type]}                [description]
	 */
	const handleNodeEdit = node => {
		dispatch({
			type: 'authority/handleAuthorityReport',
			stateType: 'report',
			payload: node
		})
	}

	/**
	 * 是否展示修改 保存按钮
	 */
	const handleRadioEdit = () => {
		dispatch({
			type: 'authority/handleRadioEdit',
			stateType: 'report',
			toggleType: 'show'
		})
	}

	/**
	 * 取消保存用户组编辑
	 * @param  {[type]} action      [description]
	 * @param  {[type]} checkedKeys [description]
	 * @return {[type]}             [description]
	 */
	const handleUserAction = (action, checkedKeys) => {
		if(action === 'ok') {
			dispatch({
				type: 'authority/setCategoryWithUser',
				stateType: 'report',
				payload: {
					userids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'report',
				toggleType: 'hide'
			})
		}
	}

	/**
	 * 取消保存权限组编辑
	 * @param  {[type]} action      [description]
	 * @param  {[type]} checkedKeys [description]
	 * @return {[type]}             [description]
	 */
	const handleGroupAction = (action, checkedKeys) => {
		if(action === 'ok') {
			dispatch({
				type: 'authority/setCategoryWithGroup',
				stateType: 'report',
				payload: {
					gids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'report',
				toggleType: 'hide'
			})
		}
	}

	/**
	 * 已有权限列表按钮组
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	const handleRadioChange = e => {
		dispatch({
			type: 'authority/handleRadioChange',
			payload: e.target.value,
			stateType: 'report'
		})
	}

	/**
	 * 添加配置组
	 * @param  {[type]} cfgname [description]
	 * @return {[type]}         [description]
	 */
	const handleAddConfig = cfgname => {
		dispatch({
			type: 'authority/addConfig',
			stateType: 'report',
			payload: cfgname
		})
	}

	/**
	 * 删除配置组
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	const handleDelConfig = id => {
		dispatch({
			type: 'authority/delConfig',
			stateType: 'report',
			payload: id
		})
	}

	/**
	 * 配置项radio切换
	 * @param  {[type]} v [description]
	 * @return {[type]}   [description]
	 */
	const onSheetChange = v => {
		dispatch({
			type: 'authority/reportSheetChange',
			stateType: 'report',
			payload: v,
		})
	}

	/**
	 * 配置保存提交
	 * @param  {[type]} cfgid      [description]
	 * @param  {[type]} sheetid    [description]
	 * @param  {[type]} configtype [description]
	 * @param  {[type]} itemid     [description]
	 * @param  {[type]} itemname   [description]
	 * @return {[type]}            [description]
	 */
	const handleConfigChange = (cfgid, sheetid, configtype, itemid, itemname) => {
		dispatch({
			type: 'authority/handleConfigChange',
			stateType: 'report',
			payload: {
				cfgid,
				sheetid,
				configtype,
				itemid,
				itemname
			},
		})
	}

	/**
	 * 取消报表配置修改
	 * @return {[type]} [description]
	 */
	const handleCancelReportConfig = () => {
		dispatch({
			type: 'authority/handleCancelReportConfig',
			stateType: 'report'
		})
	}


	return (
		<div>
			<FormInlineLayout>
				<Form layout="inline">
					<FormItem label="报表名">
						<Search 
							type="search"
							onSearch={v => changeSearchForm('itemname', v)}
							placeholder="请输入菜单名"
							enterButton="搜索" />
					</FormItem>
				</Form>
				<Button 
					className="mr20"
					onClick={() => dispatch({ type: 'authority/getAllCategory', stateType: 'report' })}
					type="primary">目录检索</Button>
			</FormInlineLayout>

			<div className="panel mt10">
				<div className="panel-header noborder">
					<h3 className="panel-title">报表列表</h3>
				</div>
				<div className="panel-content">
					<Table
						bordered
						size="small"
						className="mt5 mb5"
						columns={columns}
						dataSource={datalist}
						rowKey={record => record.id}
						rowClassName={(record, index) => record.id === userSelect.id ? 'active' : ''}
						onRow={(record,index) => {
							return {
								onClick: () => handleTableClick(record,index)
							}
						}}
						pagination={false}
						scroll={{x: 800, y: 139}}/>
					{
						total/pageInfo.pagesize > 1 &&
						<Pagination
							size="small"
							className="tr"
							showQuickJumper
							current={pageInfo.currentpage}
							pageSize={pageInfo.pagesize}
							total={total}
							onChange={onPageChange} />
					}
				</div>
			</div>

			{
				showSelect && 
				<div className="panel mt10">
					<div className="panel-header">
						<h3 className="panel-title">报表配置</h3>
					</div>
					<div className="panel-content panel-edit">
						<div className="config-panel config-tree">
							<div className="config-title">报表权限树</div>
							<PermissionTree
								selectedKey={userSelect.id}
								filter={true}
								datalist={treeList}/>
						</div>

						<div className="config-panel">
							<div className="config-title">{ showListType === 'a' ? '已有权限人员列表' : '已有权限权限组列表'}</div>
							<div className="config-header">
								<div className="config-header-left">
									<Radio.Group value={showListType} onChange={handleRadioChange}>
										<Radio.Button value="a">人员</Radio.Button>
										<Radio.Button value="b">权限组</Radio.Button>
									</Radio.Group>
								</div>
								<div className="config-header-right">
									{
										((!aCheckable && showListType === 'a') || (!bCheckable && showListType === 'b')) && <a href="javascript:;" onClick={handleRadioEdit}>修改</a>
									}
								</div>
							</div>
							{
								showListType === 'a' && 
								<UserGroup
									editable={true}
									handleNodeEdit={handleNodeEdit}
									keyname={'realname'}
									checkable={aCheckable}
									datalist={aCheckable ? userList: userCheckedList}
									handleTreeEdit={handleUserAction}
									checkedKeys={userCheckedKeys} />
							}
							{
								showListType === 'b' && 
								<UserGroup
									editable={true}
									handleNodeEdit={handleNodeEdit}
									keyname={'gname'}
									checkable={bCheckable}
									datalist={bCheckable ? groupList: groupCheckedList}
									handleTreeEdit={handleGroupAction}
									checkedKeys={groupCheckedKeys} />
							}
						</div>

						{
							showReportConfig &&
							<ReportConfig 
								configlist={configlist}
								configSheet={configSheet}
								configField={configField}
								onSheetChange={onSheetChange}
								handleAddConfig={handleAddConfig}
								handleDelConfig={handleDelConfig}
								handleConfigChange={handleConfigChange}
								handleCancelReportConfig={handleCancelReportConfig} />
						}
					</div>
				</div>
			}
		</div>
	)
}

export default PermissionReport;