import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
<<<<<<< HEAD
import UploadComponent from '@/components/UploadComponent';
=======
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
import MyUpload from '@/components/UploadComponent';
import moment from 'moment';

import { filterObj } from '@/utils/tools';
import { formItemLayout } from '@/configs/layout';

<<<<<<< HEAD
import { Form, DatePicker, Input, Button, Popconfirm, Tabs, Modal, Radio, Badge, Select } from 'antd';
=======
import { Form, DatePicker, Input, Button, Popconfirm, Tabs, Modal, Radio, Badge, Select, message } from 'antd';
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { RangePicker } = DatePicker;
<<<<<<< HEAD
=======
const { TextArea } = Input;
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5

const AppverUpdate = ({
	appver,
	...props
}) => {
	let { dispatch, form } = props;
<<<<<<< HEAD
	let { appList, verList, activeKey, startTime, endTime, appname, modalShow, appTypeId, apkUrl } = appver;
	let { getFieldDecorator, validateFieldsAndScroll, resetFields } = form;
=======
	let { appList, verList, activeKey, startTime, endTime, appname, modalShow, appTypeId } = appver;
	let { getFieldDecorator, validateFieldsAndScroll, resetFields, setFieldsValue } = form;
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5

	let appColumns = [
        {
            title: '类型名称',
			dataIndex: 'name',
			sorter: true
		}, {
			title: '添加时间',
			dataIndex: 'createdAt',
			sorter: true
		}, {
			title: '状态',
			dataIndex: 'status',
			render: (txt) => {
				switch (txt) {
					case 1:
<<<<<<< HEAD
						return <Badge status="processing" text="正常"/>;	
=======
						return <Badge status="processing" text="正常"/>;
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
					case 2:
						return <Badge status="warning" text="不可用"/>;
					default:
					    return <Badge status="warning" text="删除"/>;
				}
			}
		}, {
			title: '操作',
			dataIndex: 'action',
            render: (txt, record, index) => {
                return <span>
                    {
<<<<<<< HEAD
                        record.status === 2 && <Button type="primary" size="small" onClick={() => handleEnable(index, 'ver')}>启用</Button>
					}
					{
                        record.status === 1 && <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleDisable(index, 'ver')}>禁用</Button>
=======
                        record.status === 2 && <Button type="primary" size="small" onClick={() => handleEnable(index, 'app')}>启用</Button>
					}
					{
                        record.status === 1 && <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleDisable(index, 'app')}>禁用</Button>
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
					}
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(index, 'app')}>
                        <Button type="danger" size="small" style={{ marginLeft: 5 }}>删除</Button>
                    </Popconfirm>
                </span>
            }
		}
	];
	let verColumns = [
        {
            title: '版本名称',
			dataIndex: 'versionName',
			sorter: true
		}, {
			title: '添加时间',
			dataIndex: 'createdAt',
			sorter: true
		}, {
			title: '状态',
			dataIndex: 'status',
			sorter: true,
			render: (txt) => {
				switch (txt) {
					case 1:
<<<<<<< HEAD
						return <Badge status="processing" text="正常"/>;	
=======
						return <Badge status="processing" text="正常"/>;
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
					case 2:
						return <Badge status="warning" text="不可用"/>;
					default:
					    return <Badge status="warning" text="删除"/>;
				}
			}
		}, {
			title: '是否需要强制更新',
			dataIndex: 'forceUpdate',
			sorter: true,
			render: (txt) => <span>{ (txt == 1) ? '不需要' : '需要' }</span>
		}, {
			title: '操作',
			dataIndex: 'action',
            render: (txt, record, index) => {
                return <span>
					{
                        record.status === 2 && <Button type="primary" size="small" onClick={() => handleEnable(index, 'ver')}>启用</Button>
					}
					{
                        record.status === 1 && <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleDisable(index, 'ver')}>禁用</Button>
					}
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(index, 'ver')}>
                        <Button type="danger" size="small" style={{ marginLeft: 5 }}>删除</Button>
                    </Popconfirm>

					<Button type="primary" size="small" style={{ marginLeft: 5 }} onClick={() => handleDownload(index)}>下载apk</Button>
                </span>
            }
		}
	];

	// 表格列配置
	let allColumns = (activeKey === '0') ? appColumns : verColumns;
	let dataSource = (activeKey === '0') ? appList : verList;

    /**
     * 删除App、版本类型
     * @param  {object} 列数据
     */
    const handleDelete = (idx, type) => {
		const LIST = (type === 'app') ? appList : verList;
    	dispatch({
    		type: 'appver/deleteType',
    		payload: {
				id: LIST[idx].id,
				type
			}
    	})
	}
<<<<<<< HEAD
	
=======

>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
	/**
	 * 启用App、版本类型
	 * @param  {object} 列数据
	 */
	const handleEnable = (idx, type) => {
		const LIST = (type === 'app') ? appList : verList;
		dispatch({
			type: 'appver/enableType',
			payload: {
				id: LIST[idx].id,
				type
			}
		})
	}

	/**
	 * 禁用App、版本类型
	 * @param  {object} 列数据
	 */
	const handleDisable = (idx, type) => {
		const LIST = (type === 'app') ? appList : verList;
		dispatch({
			type: 'appver/disableType',
			payload: {
				id: LIST[idx].id,
				type
			}
		})
	}

	// 下载Apk
	const handleDownload = (idx) => {
		window.location.href = verList[idx].apkUrl;
	}

	// 切换tabs
    const handleTabChange = (key = '0') => {
    	dispatch({
    		type: 'appver/setParam',
    		payload: {
				activeKey: key
			}
    	})
	}
<<<<<<< HEAD
	
=======

>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
	// 选择时间框
	const datepickerChange = (d, t) => {
		dispatch({
			type: 'appver/setParam',
			payload: {
				startTime: t[0] + ':00',
				endTime: t[1] + ':00'
			}
		})
	}

	// 展示modal
	const changeModalState = (flag, show) => {
		dispatch({
			type: 'appver/setParam',
			payload: {
				modalShow: show
			}
		})
	}

	// 添加App类型
	const handleAddapptype = () => {
<<<<<<< HEAD
		dispatch({
			type: 'appver/addApptype',
			payload: {
				name: appname
			}
		})
=======
		if (appname.trim()) {
			dispatch({
				type: 'appver/addApptype',
				payload: {
					name: appname
				}
			})
		} else{
            message.warning('请输入App名称')
		}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
	}

	// 筛选app类型
	const changeApptype = (val) => {
		dispatch({
			type: 'appver/setParam',
			payload: {
<<<<<<< HEAD
				appTypeId: val
=======
				appTypeId: val.appname
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
			}
		})
	}

	// 添加版本信息
	const handleSubmit = (e) => {
		e.preventDefault();
		validateFieldsAndScroll((err, values) => {
			if (!err) {
				values.forceUpdate && (values.forceUpdate = values.forceUpdate - 0);
				values.updateDescribe && (values.updateDescribe = values.updateDescribe - 0);
<<<<<<< HEAD
				apkUrl && (values.apkUrl = apkUrl);
=======
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
				dispatch({
					type: 'appver/addVersion',
					payload: {
						name: filterObj(values)
					}
				})
			}
		});
	}

	// 表单取消
	const handleReset = () => {
<<<<<<< HEAD
		resetFields();
	}

	// 上传文件回调
	const uploadSuccess = (url) => {
		dispatch({
			type: 'appver/setParam',
			payload: {
				apkUrl: url
=======
		resetFields()
		dispatch({
			type: 'appver/setParam',
			payload: {
				modalShow: false
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
			}
		})
	}

<<<<<<< HEAD
=======
	// 上传文件回调
	const uploadSuccess = (url) => {
		setFieldsValue({'apkUrl': url})
	}

>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
	// 搜索版本信息
	const handleSearch = () => {
		let PP = {
			pageNum: 1,
			pageSize: 10,
			appTypeId: appTypeId,
			startTime: startTime,
			endTime: endTime,
		}
		dispatch({
			type: 'appver/getVerList',
			payload: filterObj(PP)
		})
	}

	// 输入APP类型名称
	const handleInput = (e) => {
		dispatch({
			type: 'appver/setParam',
			payload: {
				appname: e.target.value
			}
		})
	}

	return (
		<div>
			<Tabs
                animated={false}
				onChange={handleTabChange}
            >
			   <TabPane tab="App类型" key="0">
					<FormInlineLayout>
						<Form layout="inline" style={{ marginLeft: 15 }}>
							<FormItem>
								<Input placeholder="输入App名称" onChange={(e) => handleInput(e)}/>
							</FormItem>

							<FormItem>
								<Button type="primary" onClick={handleAddapptype}>添加</Button>
							</FormItem>
						</Form>
					</FormInlineLayout>
				</TabPane>

				<TabPane tab="版本信息" key="1">
				    <FormInlineLayout>
						{/*时间*/}
						<Form layout="inline">
							<FormItem label="时间" style={{ marginLeft: 15 }}>
								<RangePicker
									format="YYYY-MM-DD HH:mm"
									showTime={{
										hideDisabledOptions: true,
										defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
									}}
									format="YYYY-MM-DD HH:mm"
									onChange={datepickerChange}
									/>
							</FormItem>

							{/*App类型*/}
							<FormItem label="App类型">
								<Select
									showSearch
									onFocus={() => dispatch({type: 'appver/getAppList'})}
									onChange={v => changeApptype({appname: v})}
									>
									{
										appList.map(item =>
											<Option key={item.id} value={item.id}>{item.name}</Option>
										)
									}
								</Select>
							</FormItem>

							<FormItem>
								<Button type="primary" icon="search" onClick={handleSearch}>搜索</Button>
							</FormItem>

							<FormItem>
								<Button type="primary" onClick={() => changeModalState('modalShow', true)}>添加版本</Button>
							</FormItem>

						</Form>
					</FormInlineLayout>

					<Modal
						title="新增版本"
						visible={modalShow}
						onCancel= { () => changeModalState('modalShow', false) }
						okText="确认"
						cancelText="取消"
						footer={null}
						>
						<Form>
<<<<<<< HEAD
							<FormItem
								label="版本名称"
								{...formItemLayout}
								>
								{getFieldDecorator('versionName', {
									rules: [{ required: true, message: '请输入版本名!', whitespace: false }],
								})(
									<Input placeholder="请输入版本名"/>
								)}
							</FormItem>

							{/*App类型*/}
							<FormItem 
=======
							{/*App类型*/}
							<FormItem
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
							    label="App类型"
								{...formItemLayout}
								>
								{getFieldDecorator('appTypeId', {
									rules: [{ required: true, message: '请选择App类型!' }],
								})(
									<Select showSearch>
									{
										appList.map(item =>
											<Option key={item.id} value={item.id}>{item.name}</Option>
										)
									}
									</Select>
								)}
							</FormItem>

							<FormItem
<<<<<<< HEAD
								label="apk下载地址"
								{...formItemLayout}
								>
								{getFieldDecorator('apkUrl', {
									rules: [{ message: '请上传apk包!' }],
								})(
									<MyUpload uploadSuccess={uploadSuccess}></MyUpload>
=======
								label="版本名称"
								{...formItemLayout}
								>
								{getFieldDecorator('versionName', {
									rules: [{ required: true, message: '请输入版本名!', whitespace: false }],
								})(
									<Input placeholder="请输入版本名"/>
								)}
							</FormItem>

							<FormItem
								label="apk上传"
								{...formItemLayout}
								>
								{getFieldDecorator('apkUrl', {
									rules: [{ required: true, message: '请上传apk包!' }],
								})(
									<MyUpload uploadSuccess={uploadSuccess} uploadTxt={'上传apk包'}></MyUpload>
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
								)}
							</FormItem>

							<FormItem
								label="强制更新"
								{...formItemLayout}
								>
								{getFieldDecorator('forceUpdate', {
<<<<<<< HEAD
									rules: [{ message: '请选择是否强制更新!' }],
								})(
									<RadioGroup>
										<Radio value="1">不需要</Radio>
										<Radio value="2">需要</Radio>
=======
									initialValue: 1,
									rules: [{ required: true, message: '请选择是否强制更新!' }],
								})(
									<RadioGroup>
										<Radio value={1}>不需要</Radio>
										<Radio value={2}>需要</Radio>
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
									</RadioGroup>
								)}
							</FormItem>

							<FormItem
<<<<<<< HEAD
								label="格式"
								{...formItemLayout}
								>
								{getFieldDecorator('updateDescribe', {
									rules: [{ message: '请选择格式!' }],
								})(
									<RadioGroup>
										<Radio value="1">添加用户模块</Radio>
										<Radio value="2">添加商城模块</Radio>
									</RadioGroup>
=======
								label="版本描述"
								{...formItemLayout}
								>
								{getFieldDecorator('updateDescribe', {
									rules: [{ required: true, message: '请输入版本描述!' }],
								})(
									<TextArea placeholder="版本描述格式： 1.XXX 2.XXX 3.XXX" autosize={{ minRows: 3, maxRows: 6 }} />
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
								)}
							</FormItem>

							<FormItem
								{...formItemLayout}>
								<Button type="primary" onClick={handleSubmit} style={{ marginLeft: 75 }}>提交</Button>
								<Button onClick={handleReset} style={{ marginLeft: 15 }}>取消</Button>
							</FormItem>
						</Form>
					</Modal>
				</TabPane>
			</Tabs>

			<TableLayout
				dataSource={dataSource}
				allColumns={allColumns}
			/>
		</div>
	)
};

AppverUpdate.propTypes = {
	appver: PropTypes.object,
};

export default connect(({ appver }) => ({ appver }))(Form.create()(AppverUpdate));
<<<<<<< HEAD
	
=======
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
