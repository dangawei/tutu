import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';

import { Form, Input, Button, Popconfirm, Modal } from 'antd';
const FormItem = Form.Item;

const RoleSetting = ({
    roleSetting,
    ...props
}) => {
    let { dispatch, form } = props;
    let { tableData, modalShow, account } = roleSetting;
    let { getFieldDecorator, getFieldValue } = form;

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            sorter: true
        }, {
        	title: '用户id',
        	dataIndex: 'id',
        	sorter: true
        }, {
        	title: '操作',
            dataIndex: 'action',
            render: (txt, record, index) => {
                return <span>
                    <Popconfirm title="是否删除?" onConfirm={() => handleDelete(record)}>
                        <Button type="danger" size="small">删除</Button>
                    </Popconfirm>
                </span>
            }
        }
    ]
    
    /**
     * 删除角色
     * @param  {object} 列数据
     */
    const handleDelete = (param) => {
        dispatch({
    		type: 'roleSetting/deleteRole',
    		payload: param.id
    	})
    }

    // 输入角色名
    const handleInput = (e) => {
        dispatch({
    		type: 'roleSetting/setaccount',
    		payload: e.target.value
    	})
    }

    // 搜索
    const handleSearch = () => {
     	dispatch({
    		type: 'roleSetting/getRole',
    		payload: account
    	})
    }

    // 添加角色
    const handleSubmit = () => {
        dispatch({
        	type: 'roleSetting/addRole',
        	payload: getFieldValue('rolename')
        })
    }
    
    // 展示modal
    const changeModalState = (show) => {
        dispatch({
        	type: 'roleSetting/changeModal',
        	payload: show
        })
    }
   

	return (
		<div>
			<FormInlineLayout>
			    <Form layout="inline" style={{ marginLeft: 15 }}>
                    {/*角色名*/}
                    <FormItem label="角色名">
                        <Input placeholder="输入角色名" value={account} onChange={(e) => handleInput(e)}/>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" icon="search" onClick={handleSearch}>搜索</Button>
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={() => changeModalState(true)}>添加角色</Button>
                    </FormItem>

                </Form>
            </FormInlineLayout>

            <Modal
                title="新增角色"
                visible={modalShow}
                onOk={ () => changeModalState(false) }
                onCancel= { () => changeModalState(false) }
                okText="确认"
                cancelText="取消"
                footer={null}
                >
                <Form>
                    <FormItem>
                        {getFieldDecorator('rolename', {
                            rules: [{ required: true, message: '请输入角色名!', whitespace: true }],
                        })(
                            <Input placeholder="请输入角色名"/>
                        )}
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

RoleSetting.propTypes = {
    roleSetting: PropTypes.object
};

export default connect(({ roleSetting }) => ({ roleSetting }))(Form.create()(RoleSetting));
	