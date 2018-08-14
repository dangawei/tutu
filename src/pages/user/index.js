import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';

import { Form, DatePicker, Input, Button, Popconfirm } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const UserSetting = ({
    userSetting,
    ...props
}) => {
    let { dispatch } = props;
    let { tableData, account, startTime, endTime } = userSetting

    const columns = [
        {
            title: '用户名',
            dataIndex: 'account',
            editable: true,
            sorter: true
        }, {
        	title: '用户头像',
            dataIndex: 'avatar',
            render: (text) => {
               return <a href={ text }>{ text }</a>
            }
        }, {
        	title: '手机号',
            dataIndex: 'phone',
            editable: true,
        	sorter: true,
        }, {
        	title: '邮箱',
            dataIndex: 'email',
            editable: true
        }, {
        	title: '姓名',
            dataIndex: 'name',
            editable: true,
        	sorter: true
        }, {
        	title: '性别',
            dataIndex: 'sex',
            editable: true,
        	sorter: true
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
    		type: 'userSetting/setaccount',
    		payload: e.target.value
    	})
    }
    
    // 选择时间框
    const datepickerChange = (d, t) => {
        dispatch({
        	type: 'userSetting/settime',
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
        for (var key in PP) {
            if (!PP[key]) {
                delete PP[key]
            }
        }
     	dispatch({
    		type: 'userSetting/getUser',
    		payload: PP
    	})
    }

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
                        <Button type="primary">添加用户</Button>
                    </FormItem>

                </Form>
            </FormInlineLayout>

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
	userSetting: PropTypes.object,
};

export default connect(({ userSetting }) => ({ userSetting }))(UserSetting);
	