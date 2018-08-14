import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import PermissionTree from './PermissionTree';
import UserGroup from './UserGroup';
import ReportConfig from './ReportConfig';

import { Form, Input, Select, Button, Radio, Table, Icon, Checkbox, Modal, Pagination } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const TextArea = Input.TextArea;
const CheckboxGroup = Checkbox.Group;

const PermissionGroup = ({
	group,
	...props
}) => {
	let {
		// 表单
		form,

		// 列表
		datalist,
		total,
		pageInfo,

		// 添加用户
		showAdd,
		formAdd,

		// 列表选择是否可编辑
		showSelect,
		userSelect,
		editable,

		// 按钮切换
		showListType,
		aCheckable,
		bCheckable,

		// 权限树
		treeList,
		treeCheckedKeys,

		// 权限组列表
		userList,
		userCheckedList,
		userCheckedKeys,

		// 报表配置
		showReportConfig,
		configlist,
		configSheet,
		configField,
		configData,
	} = group;

	let { dispatch } = props;

	const columns = [
		{
			title: '组ID',
			dataIndex: 'id',
			width: 100,
		},
		{
			title: '组名',
			dataIndex: 'gname',
			width: 150,
		},
		{
			title: '创建人',
			dataIndex: 'creator',
			width: 150,
		},
		{
			title: '创建日期',
			dataIndex: 'createtime',
			width: 150,
		},
		{
			title: '备注',
			dataIndex: 'remark',
			width: 150,
		},
		{
			title: '状态',
			dataIndex: 'status',
			render: text => text ? '正常': '禁用',
			width: 100,
		},
	];

	/**
	 * 表格翻页
	 * @param  {[type]} page [description]
	 * @return {[type]}      [description]
	 */
	const onPageChange = page => {
		dispatch({
			type: 'authority/getGrouplist',
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
		if(type === 'gname') {
			p.gname = value;
		}
		dispatch({
			type: 'authority/getGrouplist',
			payload: { form: p },
		})
	}

	/**
	 * 更新弹出框添加用户表单
	 * @param  {[type]} payload [description]
	 * @return {[type]}         [description]
	 */
	const changeForm = (formType, payload) => {
		dispatch({
			type: formType === 'modal' ? 'authority/changeModalForm' : 'authority/changeSelectForm',
			payload,
			stateType: 'group'
		})
	}

	/**
	 * 弹窗框表单布局
	 * @type {Object}
	 */
	const formlayout = {
		labelCol: { span: 4 },
		wrapperCol: { span: 18 },
	}

	/**
	 * 表格行点击
	 */
	const handleTableClick = (record, index) => {
		dispatch({
			type: 'authority/updateUserSelect',
			payload: record,
			stateType: 'group'
		})
	}

	/**
	 * 用户信息操作
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
	const handleBtns = (action) => {
		switch(action) {
			case 'setAuthority':
				dispatch({
					type: 'authority/setAuthority',
					stateType: 'group',
				})
				break;
			case 'clearAuthority':
				dispatch({
					type: 'authority/clearAuthority',
					stateType: 'group',
				})
				break;
			case 'edit':
				dispatch({
					type: 'authority/editUser',
					stateType: 'group',
				})
				break;
			case 'editCancel':
				dispatch({
					type: 'authority/editUser',
					stateType: 'group',
					payload: { editType: 'cancel' }
				})
				break;
			case 'editOk':
				dispatch({
					type: 'authority/editUser',
					stateType: 'group',
					payload: { editType: 'ok' }
				})
				break;
		}
	}

	/**
	 * 是否展示修改 保存按钮
	 */
	const handleRadioEdit = () => {
		dispatch({
			type: 'authority/handleRadioEdit',
			stateType: 'group',
			toggleType: 'show'
		})
	}

	/**
	 * 取消保存权限树编辑
	 * @param  {[type]} action      [description]
	 * @param  {[type]} checkedKeys [description]
	 * @return {[type]}             [description]
	 */
	const handleTreeAction = (action, checkedKeys) => {
		if(action === 'ok') {
			dispatch({
				type: 'authority/setCategoryTree',
				stateType: 'group',
				payload: {
					cids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'group',
				toggleType: 'hide'
			})
		}
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
				type: 'authority/setGroupWithUser',
				stateType: 'group',
				payload: {
					userids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'group',
				toggleType: 'hide'
			})
		}
	}
	
	/**
	 * 节点编辑
	 * @param  {[type]} handleNodeEdit [description]
	 * @return {[type]}                [description]
	 */
	const handleNodeEdit = node => {
		dispatch({
			type: 'authority/handleAuthorityReport',
			stateType: 'group',
			payload: node
		})
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
			stateType: 'group'
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
			stateType: 'group',
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
			stateType: 'group',
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
			stateType: 'group',
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
			stateType: 'group',
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
			stateType: 'user'
		})
	}


	return (
		<div>
			<FormInlineLayout>
				<Form layout="inline">
					<FormItem label="权限组">
						<Search 
							type="search"
							onSearch={v => changeSearchForm('gname', v)}
							placeholder="请输入组名"
							enterButton="搜索" />
					</FormItem>
				</Form>
				<Button 
					className="mr20"
					onClick={() => dispatch({ type: 'authority/toggleUserModal', stateType: 'group' })}
					type="primary"
					icon="plus">新建</Button>
			</FormInlineLayout>
			<div className="panel mt10">
				<div className="panel-header noborder">
					<h3 className="panel-title">权限组列表</h3>
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
						scroll={{ x: 800, y: 139}}/>
					{
						total/pageInfo.pagesize > 1 &&
						<Pagination
							size="small"
							className="tr"
							showQuickJumper
							defaultCurrent={pageInfo.currentpage}
							defaultPageSize={pageInfo.pagesize}
							total={total}
							onChange={onPageChange} />
					}
				</div>
			</div>
			{
				showSelect && 
				<div className="panel mt10">
					<div className="panel-header">
						<h3 className="panel-title">权限组信息</h3>
					</div>
					<div className="panel-content panel-edit">
						<div className="form-editable">
							<Form>
								<FormItem {...formlayout} label="组ID">
									<span className="form-text">{userSelect.id}</span>
								</FormItem>
								<FormItem {...formlayout} label="组名">
									<Input 
										value={userSelect.gname}
										onChange={e => changeForm('select', {gname : e.target.value})}
										disabled={editable}/>
								</FormItem>
								<FormItem {...formlayout} label="创建人">
									<span className="form-text">{userSelect.creator}</span>
								</FormItem>
								<FormItem {...formlayout} label="创建日期">
									<span className="form-text">{userSelect.createtime}</span>
								</FormItem>
								<FormItem {...formlayout} label="备注">
									<TextArea 
										value={userSelect.remark}
										onChange={e => changeForm('select', {remark : e.target.value})}
										disabled={editable}/>
								</FormItem>
							</Form>
							{
								editable ? 
								<div className="form-btns">
									<Button type={userSelect.status ? 'danger' : 'success'} onClick={() => handleBtns('setAuthority')}>{userSelect.status ? '禁用' : '启用'}</Button>
									<Button type="primary" onClick={() => handleBtns('clearAuthority')}>清空权限</Button>
									<Button type="primary" onClick={() => handleBtns('edit')}>修改信息</Button>
								</div> :
								<div className="form-btns">
									<Button onClick={() => handleBtns('editCancel')}>取消</Button>
									<Button type="primary" onClick={() => handleBtns('editOk')}>保存</Button>
								</div>
							}
						</div>


						<div className="config-panel">
							<div className="config-title">{ showListType === 'a' ? '用户列表' : '权限列表'}</div>
							<div className="config-header">
								<div className="config-header-left">
									<Radio.Group value={showListType} onChange={handleRadioChange}>
										<Radio.Button value="a">用户</Radio.Button>
										<Radio.Button value="b">权限</Radio.Button>
									</Radio.Group>
								</div>
								<div className="config-header-right">
									{
										((!aCheckable && showListType === 'a') || (!bCheckable && showListType === 'b')) && <a href="javascript:;" onClick={handleRadioEdit}>修改</a>
									}
								</div>
							</div>
							{
								showListType === 'b' && 
								<PermissionTree
									checkable={bCheckable}
									datalist={treeList}
									handleTreeEdit={handleTreeAction}
									handleNodeEdit={handleNodeEdit}
									checkedKeys={treeCheckedKeys}/>
							}
							{
								showListType === 'a' && 
								<UserGroup
									keyname={'realname'}
									checkable={aCheckable}
									datalist={aCheckable ? userList: userCheckedList}
									handleTreeEdit={handleUserAction}
									checkedKeys={userCheckedKeys} />
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

			<Modal
				visible={showAdd}
				onCancel={() => dispatch({ type: 'authority/userModelChange', stateType: 'group', payload: { action: 'cancel' } })}
				onOk={() => dispatch({ type: 'authority/userModelChange', stateType: 'group', payload: { action: 'ok' } })}
				title="新增组"
				okText="提交"
				cancelText="取消">
				<Form>
					<FormItem {...formlayout} required label="组名">
						<Input
							value={formAdd.gname}
							onChange={e => changeForm('modal', {gname : e.target.value})}
							placeholder="请输入组名" />
					</FormItem>
					<FormItem {...formlayout} label="备注">
						<TextArea
							onChange={e => changeForm('modal', {remark : e.target.value})}
							value={formAdd.remark}/>
					</FormItem>
				</Form>
			</Modal>
		</div>
	)
}

export default PermissionGroup;