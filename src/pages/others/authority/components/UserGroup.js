import { Component } from 'react';

import { Input, Button, Tree, Icon } from 'antd';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;


export default class UserGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedKeys: this.props.checkedKeys || [],
			allCheckedKeys: this.props.checkedKeys || [],
			searchValue: ''
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({checkedKeys: nextProps.checkedKeys })
	}

	renderTree = data => {
		let { handleNodeEdit, keyname = 'gname', editable, checkable } = this.props;
		let { searchValue } = this.state;
		if(data && data.length) {
			return data.map(item => 
				<TreeNode
					title={
						item.children && item.children.length ? 
						item[keyname] : 
						<span onClick={() => (editable && !checkable) && handleNodeEdit && handleNodeEdit(item)} >
							{item[keyname]}
							{
								(editable && !checkable) && <Icon type="edit" onClick={() => handleNodeEdit && handleNodeEdit(item)} />
							}
						</span>
					}
					className={item[keyname].indexOf(searchValue) === -1 ? 'hide' : ''}
					key={item.id}>
					{
						this.renderTree(item.children)
					}
				</TreeNode>
			)
		} else {
			return 
		}
	}

	onCheck = (checkedKeys, e) => {
		this.setState({
			checkedKeys: checkedKeys,
			allCheckedKeys: checkedKeys.concat(e.halfCheckedKeys)
		})
	}

	onSearch = e => {
		this.setState({ searchValue: e.target.value })
	}

	render() {
		let { checkable, datalist, handleTreeEdit } = this.props;
		let { checkedKeys } = this.state;

		return (
			<div>
				<div className="config-content">
					<div className="config-search">
						<Search placeholder="请输入" onChange={this.onSearch} />
					</div>
					<div className="config-body scrollbar-middle">
						<Tree
							className="single-tree"
							checkedKeys={checkedKeys}
							onCheck={this.onCheck}
							checkable={checkable}>
							{ this.renderTree(datalist) }
						</Tree>
					</div>
				</div>
				{
					checkable && 
					<div className="config-btns">
						<Button onClick={() => handleTreeEdit('cancel', checkedKeys)}>取消</Button>
						<Button type="primary" onClick={() => handleTreeEdit('ok', checkedKeys)}>保存</Button>
					</div>
				}
			</div>
		)
	}
}