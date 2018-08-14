import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';

import { Form, Input, Button, Popconfirm, Modal, notification, Icon, DatePicker } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const Authmenu = ({
    authmenu,
    ...props
}) => {
    let { dispatch, form } = props;
    let { tableData, modalShow, account } = authmenu;

    const columns = [
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            sorter: true
        }, {
        	title: '更新时间',
        	dataIndex: 'updatedAt',
        	sorter: true
        }, {
        	title: '菜单id',
        	dataIndex: 'id',
        	sorter: true
        }, {
        	title: '菜单名称',
        	dataIndex: 'menuName',
        	sorter: true
        }, {
        	title: '菜单路径',
        	dataIndex: 'path',
        	sorter: true
        }, {
        	title: '菜单状态',
        	dataIndex: 'status',
        	sorter: true
        }, {
        	title: 'url',
        	dataIndex: 'url',
        	sorter: true
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
    
    /**
     * 删除菜单
     * @param  {object} 列数据
     */
    const handleDelete = (param) => {
        // dispatch({
    	// 	type: 'authmenu/deleteMenu',
    	// 	payload: param.id
        // })
        notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }

    // 输入菜单
    const handleInput = (e) => {
        // dispatch({
    	// 	type: 'authmenu/setaccount',
    	// 	payload: e.target.value
        // })
        notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }

    // 搜索
    const handleSearch = () => {
     	// dispatch({
    	// 	type: 'authmenu/getMenu',
    	// 	payload: account
        // })
        notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }

    // 添加菜单
    const handleSubmit = () => {
        // dispatch({
        // 	type: 'authmenu/addMenu',
        // 	payload: getFieldValue('rolename')
        // })
        notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }

    // 权限菜单
    const handleGetmenu = () => {
    	notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }
    
    // 展示modal
    const changeModalState = (show) => {
        // dispatch({
        // 	type: 'roleSetting/changeModal',
        // 	payload: show
        // })
        notification.open({
            message: '功能开发中！',
            description: '请等待后续开发。',
            duration: 1,
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
        });
    }
   

	return (
		<div>
			<FormInlineLayout>
			    <Form layout="inline" style={{ marginLeft: 15 }}>
                    

                    <FormItem>
                        <Button type="primary" icon="search" onClick={handleSearch}>搜索</Button>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={() => changeModalState(true)}>添加菜单</Button>
                    </FormItem>

                </Form>
            </FormInlineLayout>

            <Modal
                title="新增角色"
                visible={modalShow}
                onOk={ () => changeModalState(false) }
                onCancel= { () => changeModalState(false) }
                footer={null}
                >
                <Form>
                    <FormItem>
                        <Input placeholder="请输入角色名"/>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={handleSubmit}>提交</Button>
                    </FormItem>
                </Form>
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

Authmenu.propTypes = {
    authmenu: PropTypes.object
};

export default connect(({ authmenu }) => ({ authmenu }))(Authmenu);