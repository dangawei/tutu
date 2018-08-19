import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';
import TablePopoverLayout from '@/components/TablePopoverLayout';
import VaildForm from './VaildForm';

import { filterObj } from '@/utils/tools';

import { Form, DatePicker, Input, Button, Popconfirm, message, Modal } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const UserSetting = ({
    userSetting,
    ...props
}) => {
    let { dispatch } = props;
    let { tableData, account, startTime, endTime, modalShow } = userSetting;
    const columns = [
        {
            title: '用户名',
            dataIndex: 'account',
            sorter: true,
            render: (text, record) =>
				<TablePopoverLayout
					title={'修改用户名'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'userSetting/updateUser',
							payload: {
								id: record.id,
								account: v
							}
						})
					}/>
        }, {
        	title: '用户头像',
            dataIndex: 'avatar',
            render: (text) => {
               return <a href={ text }>{ text }</a>
            }
        }, {
        	title: '手机号',
            dataIndex: 'phone',
            sorter: true,
            render: (text, record) =>
				<TablePopoverLayout
					title={'修改手机号'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'userSetting/updateUser',
							payload: {
								id: record.id,
								phone: v
							}
						})
					}/>
        }, {
        	title: '邮箱',
            dataIndex: 'email',
            render: (text, record) =>
				<TablePopoverLayout
					title={'修改邮箱'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'userSetting/updateUser',
							payload: {
								id: record.id,
								email: v
							}
						})
					}/>
        }, {
        	title: '姓名',
            dataIndex: 'name',
            sorter: true,
            render: (text, record) =>
				<TablePopoverLayout
					title={'修改姓名'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'userSetting/updateUser',
							payload: {
								id: record.id,
								name: v
							}
						})
					}/>
        }, {
        	title: '性别',
            dataIndex: 'sex',
        	sorter: true,
            render: (text, record) =>
				<TablePopoverLayout
					title={'修改性别'}
					valueData={ (text == 1) ? '男' : (text == 2) ? '女' : '未知' }
					defaultValue={ (text == 1) ? '男' : (text == 2) ? '女' : '未知' }
					onOk={v => 
						dispatch({
							type: 'userSetting/updateUser',
							payload: {
								id: record.id,
								sex: v
							}
						})
					}/>
        }, {
        	title: '用户id',
        	dataIndex: 'id',
        	sorter: true
        }, {
        	title: '创建时间',
        	dataIndex: 'createtime',
        	sorter: true
        }, {
        	title: '操作',
            dataIndex: 'action',
            render: (txt, record, index) => {
                return <span>
                    <Button type="primary" size="small" onClick={() => handleUsing(record)}>启动</Button>
                    <Button size="small" style={{ marginLeft: 5 }} onClick={() => handleForbidden(record)}>禁用</Button>
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record)}>
                        <Button type="danger" size="small" style={{ marginLeft: 5 }}>删除</Button>
                    </Popconfirm>
                </span>
            }
        }
    ]

    /**
     * 表单输入
     * @param  {[type]} payload    state更新数据
     * @param  {[type]} fetchData: true          是否请求接口
     * @return {[type]}            [description]
     */
    // const changeForm = (payload, formType = 'form', fetchData = true) => {
    // 	dispatch({
    // 		type: 'apprenticeQuality/changeForm',
    // 		payload,
    // 		formType,
    // 		fetchData
    // 	})
    // }
    
    /**
     * 删除用户
     * @param  {object} 列数据
     */
    const handleDelete = (param) => {
        dispatch({
    		type: 'userSetting/deleteUser',
    		payload: param.id
    	})
    }

    /**
     * 启用
     * @param  {object} 列数据
     */
    const handleUsing = (param) => {
    	dispatch({
    		type: 'userSetting/usingUser',
    		payload: param.id
    	})
    }

    /**
     * 禁用
     * @param  {object} 列数据
     */
    const handleForbidden = (param) => {
    	dispatch({
    		type: 'userSetting/forbiddenUser',
    		payload: param.id
    	})
    }

    // 输入用户名
    const handleInput = (e) => {
        dispatch({
    		type: 'userSetting/setParam',
    		payload: {
                account: e.target.value
            }
    	})
    }
    
    // 选择时间框
    const datepickerChange = (d, t) => {
        dispatch({
        	type: 'userSetting/setParam',
        	payload: {
                startTime: t[0] + ':00',
                endTime: t[1] + ':00'
            }
        })
    }

    // 搜索
    const handleSearch = () => {
        let PP = {
            pageNum: 1,
            pageSize: 10,
            startTime: startTime,
            endTime: endTime,
            account: account
        }
     	dispatch({
    		type: 'userSetting/getUser',
    		payload: filterObj(PP)
    	})
    }
    
    // 展示modal
    const changeModalState = (show) => {
        dispatch({
        	type: 'userSetting/setParam',
        	payload: {
                modalShow: show
            }
        })
    }

    // 提交表单
    const submitForm = (userinfo) => {
        dispatch({
        	type: 'userSetting/addUser',
        	payload: filterObj(userinfo)
        })
    }

    // 确认密码
    // const compareToFirstPassword = (rule, value, callback) => {
    // 	if (value && value !== getFieldValue('password')) {
    // 		callback('两次密码输入不相同！');
    // 	} else {
    // 		callback();
    // 	}
    // }
   
    // 表单布局
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        }
    };

	return (
		<div>
			<FormInlineLayout>
			    <Form layout="inline" style={{ marginLeft: 15 }}>
                    {/*时间*/}
                    <FormItem label="时间">
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

                    {/*用户名*/}
                    <FormItem label="用户名">
                        <Input placeholder="输入用户名" value={account} onChange={(e) => handleInput(e)}/>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" icon="search" onClick={handleSearch}>搜索</Button>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={() => changeModalState(true)}>添加用户</Button>
                    </FormItem>

                </Form>
            </FormInlineLayout>

            <Modal
                title="新增用户"
                visible={modalShow}
                onOk={ () => changeModalState(false) }
                onCancel= { () => changeModalState(false) }
                okText="确认"
                cancelText="取消"
                footer={null}
                >
                <VaildForm submitForm={submitForm}>
                </VaildForm>
                {/* <Form>
                    <FormItem
                        {...formItemLayout}
                        label="用户名"
                        >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="密码"
                        >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码!',
                            }],
                        })(
                            <Input type="password" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="确认密码"
                        >
                        {getFieldDecorator('confirm', {
                            rules: [{
                               required: true, message: '请再次确认密码!',
                            }],
                        })(
                            <Input type="password" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式有误!',
                            }, {
                                required: true, message: '请输入邮箱l!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="手机号"
                        >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入手机号!' }],
                        })(
                            <Input style={{ width: '100%' }} />
                        )}
                    </FormItem>
                </Form> */}
            </Modal>

            <TableLayout
                dataSource={tableData}
                allColumns={columns}
                />
            <PaginationLayout
                total={10}        
                current={1}
                pageSize={10} />
		</div>
	)
};

UserSetting.propTypes = {
    userSetting: PropTypes.object
};

export default connect(({ userSetting }) => ({ userSetting }))(UserSetting);
	