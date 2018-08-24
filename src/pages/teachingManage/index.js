import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';
import TablePopoverLayout from '@/components/TablePopoverLayout';
import MyUpload from '@/components/UploadComponent';

import moment from 'moment';
import { filterObj } from '@/utils/tools';
import { formItemLayout } from '@/configs/layout';

<<<<<<< HEAD
import { Form, Input, Button, Popconfirm, Modal, Tabs, Select, DatePicker } from 'antd';
=======
import { Form, Input, Button, Popconfirm, Modal, Tabs, Select, DatePicker, message } from 'antd';
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const TabPane = Tabs.TabPane;

const TeachingManage = ({
    teachingmanage,
    ...props
}) => {
    let { dispatch, form } = props;
<<<<<<< HEAD
    let { bookList, gradeList, modalShow, modal2Show, startTime, endTime, gradeId, activeKey, icon } = teachingmanage;
    let { getFieldDecorator, getFieldValue, resetFields } = form;

    const bookColumns = [
        {
            title: '教材名',
            dataIndex: 'name',
            sorter: true
        }, {
        	title: '教材id',
        	dataIndex: 'id',
        	sorter: true
        }, {
        	title: '创建时间',
        	dataIndex: 'createdAt',
        	sorter: true
        }, {
        	title: '年级',
        	dataIndex: 'gradeId',
            sorter: true
        }, {
        	title: '教材封面图',
        	dataIndex: 'icon',
            sorter: true,
            render: (text) => {
               return (text) ? <img src={ text } style={{ width: 30, height: 40 }}/> : <span>无</span>
            }
        }, {
        	title: '操作',
            dataIndex: 'action',
            render: (txt, record, index) => {
                return <span>
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record)}>
                        <Button type="danger" size="small" style={{ marginLeft: 10 }}>删除</Button>
                    </Popconfirm>
                </span>
            }
        }
    ]

    const gradeColumns = [
        {
        	title: '年级名称',
        	dataIndex: 'gradeName',
        	sorter: true,
            render: (text, record) =>
				<TablePopoverLayout
					title={'年级名称'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'teachingmanage/updateGrade',
							payload: {
								id: record.id,
								gradeName: v
							}
						})
					}/>
        }, {
        	title: '年级id',
        	dataIndex: 'id',
        	sorter: true
        }, {
        	title: '创建时间',
        	dataIndex: 'createdAt',
        	sorter: true
        }, {
        	title: '状态',
        	dataIndex: 'status',
        	sorter: true
        }
    ]
    
    // 表格列
    let columns = (activeKey === '0') ? bookColumns : gradeColumns;
=======
    let { bookList, gradeList, versionList, modalShow, startTime, endTime, gradeId, activeKey, bookVersionName, gradeName, bookVersionId } = teachingmanage;
    let { getFieldDecorator, getFieldValue, resetFields, setFieldsValue } = form;
    // 表格配置
    const columnsOpt = {
        bookList, gradeList, versionList,
        // 书籍管理表格
        bookColumns: [
            {
                title: '教材名',
                dataIndex: 'name',
                sorter: true
            }, {
                title: '教材id',
                dataIndex: 'id',
                sorter: true
            }, {
                title: '教材版本id',
                dataIndex: 'bookVersionId',
                sorter: true
            }, {
                title: '创建时间',
                dataIndex: 'createdAt',
                sorter: true
            }, {
                title: '年级',
                dataIndex: 'gradeId',
                sorter: true
            }, {
                title: '教材封面图',
                dataIndex: 'icon',
                sorter: true,
                render: (text) => {
                   return (text) ?  <a href={ text } target='_blank'><img src={ text } style={{ width: 35, height: 40 }}/></a> : <span>无</span>
                }
            }, {
                title: '操作',
                dataIndex: 'action',
                render: (txt, record, index) => {
                    return <span>
                        <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record)}>
                            <Button type="danger" size="small" style={{ marginLeft: 10 }}>删除</Button>
                        </Popconfirm>
                    </span>
                }
            }
        ],
        // 年级管理表格
        gradeColumns: [
            {
                title: '年级名称',
                dataIndex: 'gradeName',
                sorter: true,
                render: (text, record) =>
                    <TablePopoverLayout
                        title={'修改年级名称'}
                        valueData={text || '无'}
                        defaultValue={text || '无'}
                        onOk={v => 
                            dispatch({
                                type: 'teachingmanage/updateGrade',
                                payload: {
                                    id: record.id,
                                    gradeName: v
                                }
                            })
                        }/>
            }, {
                title: '年级id',
                dataIndex: 'id',
                sorter: true
            }, {
                title: '创建时间',
                dataIndex: 'createdAt',
                sorter: true
            }, {
                title: '状态',
                dataIndex: 'status',
                sorter: true
            }
        ],
        // 版本管理表格
        versionColumns: [
            {
                title: '教材版本名称',
                dataIndex: 'name',
                sorter: true,
                render: (text, record) =>
                    <TablePopoverLayout
                        title={'修改教材版本名称'}
                        valueData={text || '无'}
                        defaultValue={text || '无'}
                        onOk={v => 
                            dispatch({
                                type: 'teachingmanage/updateVersion',
                                payload: {
                                    id: record.id,
                                    name: v
                                }
                            })
                        }/>
            }, {
                title: '教材版本id',
                dataIndex: 'id',
                sorter: true
            }
        ]
    }
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
    
    /**
     * 删除教材
     * @param  {object} 列数据
     */
    const handleDelete = (param) => {
        dispatch({
    		type: 'teachingmanage/deleteBook',
    		payload: param.id
    	})
    }

    // 搜索
    const handleSearch = () => {
        let PP = {
        	pageNum: 1,
        	pageSize: 10,
        	startTime: startTime,
        	endTime: endTime,
<<<<<<< HEAD
        	gradeId: gradeId
=======
            gradeId: gradeId,
            bookVersionId: bookVersionId
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        }
     	dispatch({
    		type: 'teachingmanage/getBook',
    		payload: filterObj(PP)
    	})
    }

    // 添加书籍
    const handleSubmit = () => {
        let PP = {
            name: getFieldValue('name'),
            icon: getFieldValue('icon'),
            gradeId: getFieldValue('gradeId'),
<<<<<<< HEAD
            icon: icon
=======
            bookVersionId: getFieldValue('bookVersionId'),
            icon: getFieldValue('icon')
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        }
        dispatch({
        	type: 'teachingmanage/addBook',
        	payload: filterObj(PP)
        })
    }

<<<<<<< HEAD
    // 添加年级
    const handleSubmitGrade = () => {
        dispatch({
        	type: 'teachingmanage/addGrade',
        	payload: getFieldValue('gradename')
        })
=======
    // 添加年级、教材版本
    const handleAdd = (param) => {
        let _name = (param === 'Grade') ? gradeName : bookVersionName;
        if (_name.trim()) {
            dispatch({
                type: 'teachingmanage/add' + param,
                payload: _name
            })
        } else {
            let _msg = (param === 'Grade') ? '年级' : '教材版本';
            message.warning(`请输入${_msg}名称`)
        }
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
    }

    // 表单取消
    const handleReset  = () => {
<<<<<<< HEAD
        resetFields();
    }

    // 选择年级
    const changeGrage = (v) => {
    	dispatch({
    		type: 'teachingmanage/setParam',
    		payload: {
    			gradeId: v
    		}
=======
        resetFields()
        dispatch({
    		type: 'teachingmanage/setParam',
    		payload: {
    			modalShow: false
    		}
    	})
    }

    // 选择下拉框
    const changeSelect = (v) => {
    	dispatch({
    		type: 'teachingmanage/setParam',
    		payload: v
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
    	})
    }
    
    // 展示modal
    const changeModalState = (flag, show) => {
        dispatch({
        	type: 'teachingmanage/setParam',
        	payload: {
                [flag]: show
            }
        })
    }

    // 选择时间框
    const datepickerChange = (d, t) => {
        dispatch({
        	type: 'teachingmanage/setParam',
        	payload: {
                startTime: t[0] + ':00',
                endTime: t[1] + ':00'
            }
        })
    }

    // 切换tabs
<<<<<<< HEAD
    const handleTabChange = (key = '0') => {
        if (key === '1') {
            dispatch({
            	type: 'teachingmanage/getGrade',
            	payload: key
            })
=======
    const handleTabChange = (key = 'book') => {
        if (key === 'grade') {
            dispatch({ type: 'teachingmanage/getGrade' })
        } else if (key === 'version') {
            dispatch({ type: 'teachingmanage/getVersion' })
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        }
    	dispatch({
    		type: 'teachingmanage/setParam',
    		payload: {
                activeKey: key
            }
    	})
    }
    
    // 文件上传成功
    const uploadSuccess = (url) => {
<<<<<<< HEAD
        dispatch({
        	type: 'teachingmanage/setParam',
        	payload: {
        		icon: url
        	}
        })
    }
=======
        setFieldsValue({'icon': url})
    }

    // 存入输入框值
	const handleInput = (e, paramName) => {
		dispatch({
			type: 'teachingmanage/setParam',
			payload: {
				[paramName]: e.target.value
			}
		})
	}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
   
	return (
		<div>
            <Tabs
                animated={false}
                onChange={handleTabChange}
            >
<<<<<<< HEAD
            <TabPane tab="书籍管理" key="0">
=======
            <TabPane tab="书籍管理" key="book">
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
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
                        
                        {/*年级*/}
                        <FormItem label="年级">
                            <Select
                                showSearch
                                onFocus={() => dispatch({type: 'teachingmanage/getGrade'})}
<<<<<<< HEAD
                                onChange={v => changeGrage({gradeId: v})}
=======
                                onChange={v => changeSelect({gradeId: v})}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
                                >
                                {
                                    gradeList.map(item =>
                                        <Option key={item.id} value={item.id}>{item.gradeName}</Option>
                                    )
                                }
                            </Select>
                        </FormItem>

<<<<<<< HEAD
=======
                        {/*教材版本*/}
                        <FormItem label="教材版本">
                            <Select
                                showSearch
                                onFocus={() => dispatch({type: 'teachingmanage/getVersion'})}
                                onChange={v => changeSelect({bookVersionId: v})}
                                >
                                {
                                    versionList.map(item =>
                                        <Option key={item.id} value={item.id}>{item.name}</Option>
                                    )
                                }
                            </Select>
                        </FormItem>

>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
                        <FormItem>
                            <Button type="primary" icon="search" onClick={handleSearch}>搜索</Button>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={() => changeModalState('modalShow', true)}>添加教材</Button>
                        </FormItem>

                    </Form>
                </FormInlineLayout>

                <Modal
                    title="新增教材"
                    visible={modalShow}
                    onCancel= { () => changeModalState('modalShow',false) }
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                    >
                    <Form>
                        <FormItem
                            label="教材名称"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入教材名!', whitespace: true }],
                            })(
                                <Input placeholder="请输入教材名"/>
                            )}
                        </FormItem>

                        <FormItem
                            label="教材封面图"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('icon', {
                                initialValue: 'book',
                                rules: [{
                                    message: '请上传书本素材!', 
                                    whitespace: true
                                }],
                            })(
                                <MyUpload uploadSuccess={uploadSuccess}></MyUpload>
                            )}
                        </FormItem>

                        <FormItem
                            label="年级"
                            hasFeedback
                            {...formItemLayout}
                            >
                            {getFieldDecorator('gradeId', {
                                rules: [{ required: true, message: '请选择年级!' }],
                            })(
                                <Select
                                    showSearch
                                    onFocus={() => dispatch({type: 'teachingmanage/getGrade'})}
                                    >
                                    {
                                        gradeList.map(item => 
                                            <Option key={item.id} value={item.id}>{item.gradeName}</Option>
                                        )
                                    }
                                </Select>
                            )}
                        </FormItem>

                        <FormItem
<<<<<<< HEAD
=======
                            label="教材版本"
                            hasFeedback
                            {...formItemLayout}
                            >
                            {getFieldDecorator('bookVersionId', {
                                rules: [{ required: true, message: '请选择教材版本!' }],
                            })(
                                <Select
                                    showSearch
                                    onFocus={() => dispatch({type: 'teachingmanage/getVersion'})}
                                    >
                                    {
                                        versionList.map(item =>
                                            <Option key={item.id} value={item.id}>{item.name}</Option>
                                        )
                                    }
                                </Select>
                            )}
                        </FormItem>

                        <FormItem
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
                            {...formItemLayout}>
                            <Button type="primary" onClick={handleSubmit} style={{ marginLeft: 75 }}>提交</Button>
                            <Button onClick={handleReset} style={{ marginLeft: 15 }}>取消</Button>
                        </FormItem>
                    </Form>
                </Modal>
            </TabPane>

<<<<<<< HEAD
            <TabPane tab="年级管理" key="1">
                <FormInlineLayout>
                    <Form layout="inline" style={{ marginLeft: 15 }}>
                        <FormItem>
                            <Button type="primary" onClick={() => changeModalState('modal2Show', true)}>添加年级</Button>
                        </FormItem>
                    </Form>
                </FormInlineLayout>

                <Modal
                    title="新增年级"
                    visible={modal2Show}
                    onCancel= {() => changeModalState('modal2Show',false)}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                    >
                    <Form>
                        <FormItem
                            label="年级名称"
                            {...formItemLayout}
                            >
                            {getFieldDecorator('gradename', {
                                rules: [{ required: true, message: '请输入年级名称!', whitespace: true }],
                            })(
                                <Input placeholder="请输入年级名称"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}>
                            <Button type="primary" onClick={handleSubmitGrade} style={{ marginLeft: 40 }}>提交</Button>
                        </FormItem>
                    </Form>
                </Modal>
=======
            <TabPane tab="年级管理" key="grade">
                <FormInlineLayout>
                    <Form layout="inline" style={{ marginLeft: 15 }}>
                        <FormItem>
                            <Input placeholder="请输入年级名称" onChange={(e) => handleInput(e, 'gradeName')}/>
                        </FormItem>
                     
                        <FormItem>
                            <Button type="primary" onClick={() => handleAdd('Grade')}>添加年级</Button>
                        </FormItem>
                    </Form>
                </FormInlineLayout>
            </TabPane>

            <TabPane tab="教材版本" key="version">
                <FormInlineLayout>
                    <Form layout="inline" style={{ marginLeft: 15 }}>
                        <FormItem>
                            <Input placeholder="请输入教材版本" onChange={(e) => handleInput(e, 'bookVersionName')}/>
                        </FormItem>
                     
                        <FormItem>
                            <Button type="primary" onClick={() => handleAdd('Version')}>添加教材版本</Button>
                        </FormItem>
                    </Form>
                </FormInlineLayout>
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
            </TabPane>
            </Tabs>
			

            <TableLayout
<<<<<<< HEAD
                dataSource={bookList}
                allColumns={columns}
=======
                dataSource={columnsOpt[activeKey + 'List']}
                allColumns={columnsOpt[activeKey + 'Columns']}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
                />
            <PaginationLayout
                total={10}        
                current={1}
                pageSize={10} />
		</div>
	)
};

TeachingManage.propTypes = {
    teachingmanage: PropTypes.object
};

export default connect(({ teachingmanage }) => ({ teachingmanage }))(Form.create()(TeachingManage));
	