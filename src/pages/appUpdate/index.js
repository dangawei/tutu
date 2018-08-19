import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import moment from 'moment';

import { filterObj } from '@/utils/tools';
import { formItemLayout } from '@/configs/layout';

import { Form, DatePicker, Input, Button, Popconfirm, Tabs, Modal, Radio, Badge } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;

const AppverUpdate = ({
	appver,
	...props
}) => {
	let { dispatch, form } = props;
	let { appList, verList, activeKey, startTime, endTime, appname, modalShow } = appver;
	let { getFieldDecorator, validateFieldsAndScroll, resetFields } = form;

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
			title: 'id',
			dataIndex: 'id',
			sorter: true
		}, {
			title: '状态',
			dataIndex: 'status',
			render: (txt) => {
				switch (txt) {
					case 1:
						return <Badge status="processing" text="正常"/>;	
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
                    <Button type="primary" size="small" onClick={() => handleEnable(record, 'app')}>启用</Button>
                    <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleDisable(record, 'app')}>禁用</Button>
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record, 'app')}>
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
			title: 'id',
			dataIndex: 'id',
			sorter: true
		}, {
			title: 'App类型id',
			dataIndex: 'appTypeId',
			sorter: true
		}, {
			title: 'apk下载地址',
			dataIndex: 'apkUrl',
			sorter: true,
			render: (text) => {
               return <a href={ text }>{ text }</a>
            }
		}, {
			title: '状态',
			dataIndex: 'status',
			sorter: true,
			render: (txt) => {
				switch (txt) {
					case 1:
						return <Badge status="processing" text="正常"/>;	
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
                    <Button type="primary" size="small" onClick={() => handleEnable(record, 'ver')}>启用</Button>
                    <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleDisable(record, 'ver')}>禁用</Button>
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record, 'ver')}>
                        <Button type="danger" size="small" style={{ marginLeft: 5 }}>删除</Button>
                    </Popconfirm>
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
    const handleDelete = (param, type) => {
    	dispatch({
    		type: 'appver/deleteType',
    		payload: {
				id: param.id,
				type
			}
    	})
	}
	
	/**
	 * 启用App、版本类型
	 * @param  {object} 列数据
	 */
	const handleEnable = (param, type) => {
		dispatch({
			type: 'appver/enableType',
			payload: {
				id: param.id,
				type
			}
		})
	}

	/**
	 * 禁用App、版本类型
	 * @param  {object} 列数据
	 */
	const handleDisable = (param, type) => {
		dispatch({
			type: 'appver/disableType',
			payload: {
				id: param.id,
				type
			}
		})
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
		dispatch({
			type: 'appver/addApptype',
			payload: {
				name: appname
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
		resetFields();
	}

	// 搜索版本信息
	const handleSearch = () => {
		let PP = {
			pageNum: 1,
			pageSize: 10,
			startTime: startTime,
			endTime: endTime
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

							<FormItem
								label="apk下载地址"
								{...formItemLayout}
								>
								{getFieldDecorator('apkUrl', {
									rules: [{ required: true, message: '请输下载地址!' }],
								})(
									<Input placeholder="请输下载地址"/>
								)}
							</FormItem>

							<FormItem
								label="强制更新"
								{...formItemLayout}
								>
								{getFieldDecorator('forceUpdate', {
									rules: [{ message: '请选择是否强制更新!' }],
								})(
									<RadioGroup>
										<Radio value="1">不需要</Radio>
										<Radio value="2">需要</Radio>
									</RadioGroup>
								)}
							</FormItem>

							<FormItem
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
	