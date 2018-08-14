import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import PermissionTree from './PermissionTree';
import UserGroup from './UserGroup';
import ReportConfig from './ReportConfig';

import { Form, Input, Select, Button, Radio, Table, Icon, Checkbox, Modal, Popconfirm, Pagination } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const TextArea = Input.TextArea;
const CheckboxGroup = Checkbox.Group;

const PermissionUser = ({
	user,
	...props
}) => {

	let {
		// 表单
		form,

		// 部门
		deptlist,

		// 列表
		datalist,
		total,
		pageInfo,

		// 添加用户
		showAdd,
		formAdd,

		// 密码
		showPwd,
		formPwd,

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
		groupList,
		groupCheckedList,
		groupCheckedKeys,

		// 报表配置
		showReportConfig,
		configlist,
		configSheet,
		configField,
		configData,

	} = user;

	let { dispatch } = props;

	const columns = [
		{
			title: '用户ID',
			dataIndex: 'id',
			width: 100,
		},
		{
			title: '用户名',
			dataIndex: 'username',
			width: 150,
		},
		{
			title: '真实姓名',
			dataIndex: 'realname',
			width: 100,
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
			title: '手机号码',
			dataIndex: 'mobile',
			width: 150,
		},
		{
			title: '部门',
			dataIndex: 'dept',
			width: 200,
		},
		{
			title: '职位',
			dataIndex: 'demo',
			width: 100,
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
			type: 'authority/fetchUserlist',
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
		if(type === 'name') {
			if(!value) {
				p.username = '';
				p.realname = '';
			} else {
				if(/^[a-zA-Z0-9]*$/.test(value)) {
					p.username = value;
				} else {
					p.realname = value;
				}
			}
		} else if(type === 'dept') {
			if(!value) {
				p.dept = '';
			} else {
				p.dept = value;
			}
		}
		dispatch({
			type: 'authority/fetchUserlist',
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
			stateType: 'user'
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
			stateType: 'user',
			payload: record
		})
	}

	/**
	 * 用户信息操作
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
	const handleUser = (action) => {
		switch(action) {
			case 'setAuthority':
				dispatch({
					type: 'authority/setAuthority',
					stateType: 'user',
				})
				break;
			case 'clearAuthority':
				dispatch({
					type: 'authority/clearAuthority',
					stateType: 'user',
				})
				break;
			case 'changePwd':
				dispatch({
					type: 'authority/togglePwdModal'
				})
				break;
			case 'edit':
				dispatch({
					type: 'authority/editUser',
					stateType: 'user',
				})
				break;
			case 'editCancel':
				dispatch({
					type: 'authority/editUser',
					stateType: 'user',
					payload: { editType: 'cancel' }
				})
				break;
			case 'editOk':
				dispatch({
					type: 'authority/editUser',
					stateType: 'user',
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
			stateType: 'user',
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
				payload: {
					cids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'user',
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
				type: 'authority/setUsercategoryGroup',
				payload: {
					gids: checkedKeys
				}
			})
		} else if(action === 'cancel') {
			dispatch({
				type: 'authority/handleRadioEdit',
				stateType: 'user',
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
			stateType: 'user',
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
			stateType: 'user'
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
			stateType: 'user',
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
			stateType: 'user',
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
			stateType: 'user',
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
			stateType: 'user',
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
					<FormItem label="用户名">
						<Search 
							type="search"
							onSearch={v => changeSearchForm('name', v)}
							placeholder="请输入用户名"
							enterButton="搜索" />
					</FormItem>
					<FormItem label="部门">
						<Select
							showSearch
							value={form.dept}
							onChange={ v => changeSearchForm('dept', v) }
							onFocus={ () => !deptlist.length && dispatch({ type: 'authority/getDept' }) }
							placeholder="请输入部门">
							<Option value=''>全部</Option>
							{
								deptlist && deptlist.length && deptlist.map((item, i) => item && <Option value={item.dept} key={i}>{item.dept}</Option>)
							}
						</Select>
					</FormItem>
				</Form>
				<Button 
					className="mr20"
					onClick={() => dispatch({ type: 'authority/toggleUserModal' })}
					type="primary"
					icon="plus">新建</Button>
			</FormInlineLayout>
			<div className="panel mt10">
				<div className="panel-header noborder">
					<h3 className="panel-title">用户列表</h3>
				</div>
				<div className="panel-content">
					<Table
						bordered
						size="small"
						className="mt5"
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
						scroll={{ x: 1200, y: 139}}/>
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
						<h3 className="panel-title">用户信息</h3>
					</div>
					<div className="panel-content panel-edit">
						<div className="form-editable">
							<Form>
								<FormItem {...formlayout} label="用户ID">
									<span className="form-text">{userSelect.id}</span>
								</FormItem>
								<FormItem {...formlayout} label="用户名">
									<Input 
										value={userSelect.username}
										onChange={e => changeForm('select', {username : e.target.value})}
										disabled={editable}/>
								</FormItem>
								<FormItem {...formlayout} label="真实姓名">
									<Input 
										value={userSelect.realname}
										onChange={e => changeForm('select', {realname : e.target.value})}
										disabled={editable} />
								</FormItem>
								<FormItem {...formlayout} label="创建人">
									<span className="form-text">{userSelect.creator}</span>
								</FormItem>
								<FormItem {...formlayout} label="创建日期">
									<span className="form-text">{userSelect.createtime}</span>
								</FormItem>
								<FormItem {...formlayout} label="手机号码">
									<Input 
										value={userSelect.mobile}
										onChange={e => changeForm('select', {mobile : e.target.value})}
										disabled={editable}/>
								</FormItem>
								<FormItem {...formlayout} label="部门">
									<Input
										value={userSelect.dept}
										onChange={e => changeForm('select', {dept : e.target.value})}
										disabled={editable} />
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
									<Button type={userSelect.status ? 'danger' : 'success'} onClick={() => handleUser('setAuthority')}>{userSelect.status ? '禁用' : '启用'}</Button>
				
									<Popconfirm placement="top" title={'确定删除清空用户权限？'} onConfirm={() => handleUser('clearAuthority')} okText="确定" cancelText="取消">
									    <Button type="primary">清空权限</Button>
									</Popconfirm>
									<Button type="primary" onClick={() => handleUser('edit')}>修改信息</Button>
									<Button type="primary" onClick={() => handleUser('changePwd')}>修改密码</Button>
								</div> :
								<div className="form-btns">
									<Button onClick={() => handleUser('editCancel')}>取消</Button>
									<Button type="primary" onClick={() => handleUser('editOk')}>保存</Button>
								</div>
							}
						</div>


						<div className="config-panel">
							<div className="config-title">{ showListType === 'a' ? '已有权限列表' : '已有权限组列表'}</div>
							<div className="config-header">
								<div className="config-header-left">
									<Radio.Group value={showListType} onChange={handleRadioChange}>
										<Radio.Button value="a">权限</Radio.Button>
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
								<PermissionTree
									checkable={aCheckable}
									datalist={treeList}
									handleTreeEdit={handleTreeAction}
									handleNodeEdit={handleNodeEdit}
									checkedKeys={treeCheckedKeys}/>
							}
							{
								showListType === 'b' && 
								<UserGroup
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

			{ /* 新增用户弹窗 */ }
			<Modal
				visible={showAdd}
				onCancel={() => dispatch({ type: 'authority/userModelChange', stateType: 'user', payload: { action: 'cancel' } })}
				onOk={() => dispatch({ type: 'authority/userModelChange', stateType: 'user', payload: { action: 'ok' } })}
				title="新增用户"
				okText="提交"
				cancelText="取消">
				<Form>
					<FormItem {...formlayout} required label="用户名">
						<Input
							value={formAdd.username}
							onChange={e => changeForm('modal', {username : e.target.value})}
							placeholder="请输入用户名" />
					</FormItem>
					<FormItem {...formlayout} required label="真实姓名">
						<Input
							value={formAdd.realname}
							onChange={e => changeForm('modal', {realname : e.target.value})}
							placeholder="请输入中文姓名" />
					</FormItem>
					<FormItem {...formlayout} label="密码">
						<Input 
							value={formAdd.password}
							placeholder="默认密码"
							disabled/>
					</FormItem>
					<FormItem {...formlayout} label="邮箱">
						<Input 
							onChange={e => changeForm('modal', {email : e.target.value})}
							value={formAdd.email} />
					</FormItem>
					<FormItem {...formlayout} label="手机号">
						<Input
							onChange={e => changeForm('modal', {mobile : e.target.value})}
							value={formAdd.mobile}/>
					</FormItem>
					<FormItem {...formlayout} label="部门">
						<Input 
							onChange={e => changeForm('modal', {dept : e.target.value})}
							value={formAdd.dept}/>
					</FormItem>
					<FormItem {...formlayout} label="职位">
						<Input
							onChange={e => changeForm('modal', {demo : e.target.value})}
							value={formAdd.demo}/>
					</FormItem>
					<FormItem {...formlayout} label="备注">
						<TextArea
							onChange={e => changeForm('modal', {remark : e.target.value})}
							value={formAdd.remark}/>
					</FormItem>
				</Form>
			</Modal>

			{ /* 修改密码 */ }
			<Modal
				visible={showPwd}
				onCancel={() => dispatch({ type: 'authority/togglePwdModal' })}
				onOk={() => dispatch({ type: 'authority/togglePwdModal', actionType: 'ok'})}
				title="修改密码"
				okText="提交"
				cancelText="取消">
				<Form>
					<FormItem {...formlayout} required label="旧密码">
						<Input
							type="password"
							value={formPwd.password}
							onChange={e => dispatch({ type: 'authority/changePwdForm', payload: {  password: e.target.value}})}
							placeholder="请输入旧密码" />
					</FormItem>
					<FormItem {...formlayout} required label="新密码">
						<Input
							type="password"
							value={formPwd.newpassword}
							onChange={e => dispatch({ type: 'authority/changePwdForm', payload: { newpassword: e.target.value}})}
							placeholder="请输入新密码" />
					</FormItem>
				</Form>
			</Modal>
		</div>
	)
}

export default PermissionUser;