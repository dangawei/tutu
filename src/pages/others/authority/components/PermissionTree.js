import { Component } from 'react';
import classnames from 'classnames';

import { Input, Button, Icon, Tree } from 'antd';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;


/**
 * 根据id查找节点id 及父节点id
 * @param  {[type]} data [description]
 * @param  {[type]} id   [description]
 * @return {[type]}      选中节点及父辈节点id集合
 */
const findExpandIds = (data, id) => {
	let result = [];
	let stack = [...JSON.parse(JSON.stringify(data))];

	for (let i = 0; i < stack.length; i++) {
		let item = stack[i];

		if(item.id === id) {
			return (function findParent(d) {
				result.unshift(''+d.id);
				if(d.parent) {
					return findParent(d.parent)
				}
				return result
			})(item)
		}

		if(item.children && item.children.length) {
			stack.push(...item.children.map(d => {
				d.parent = item;
				return d
			}))
		}
	}
	return result;
}

/**
 * 根据itemname模糊搜索匹配指定包含关键词的id 及父辈和所有子辈id
 * @param  {[type]} data [description]
 * @param  {[type]} key  [description]
 * @return {[type]}      返回匹配的id集合
 */
const findTreeIds = (data, key) => {
	let result = [];
	let stack = [...JSON.parse(JSON.stringify(data))];

	for (let i = 0; i < stack.length; i++) {
		let item = stack[i];

		if(item.itemname.indexOf(key) > -1) {

			// 查找子辈
			function findChildren(data) {
				if(data.children && data.children.length) {
					data.children.forEach(d => {
						result.push(''+d.id)
						findChildren(d)
					})
				}
			}
			findChildren(item)

			// 查找父辈
			function findParent(data) {
				result.unshift(''+data.id);
				if(data.parent) {
					findParent(data.parent)
				}
			}
			findParent(item)
		}

		if(item.children && item.children.length) {
			stack.push(...item.children.map(d => {
				d.parent = item;
				return d
			}))
		}
	}
	return [...new Set(result)];
}


export default class PermissionTree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedKeys: this.props.checkedKeys || [],
			allCheckedKeys: this.props.checkedKeys || [],
			searchValue: '',
			searchKeys: [],
			expandedKeys: [],
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		let { datalist, checkedKeys, selectedKey } = nextProps;

		let newState = selectedKey ? {
			checkedKeys: checkedKeys,
			expandedKeys: findExpandIds(datalist, selectedKey)
		} : {
			checkedKeys: checkedKeys,
		}

		this.setState(newState)
	}

	renderTree = data => {
		let { handleNodeEdit, checkable, filter, selectedKey } = this.props;
		let { searchValue, searchKeys } = this.state;

		if(data && data.length) {
			return data.map(item => 
				<TreeNode
					title={
						item.children.length ? 
						item.itemname : 
						<span onClick={() => (!checkable && !filter) && handleNodeEdit && handleNodeEdit(item)} >
							{item.itemname} 
							{
								(!checkable && !filter) && <Icon type="edit"/>
							}
						</span>
					}
					className={classnames({
						'hide': ((!item.checked && !checkable) || (searchValue && searchKeys.indexOf(''+item.id) === -1)) && !filter ,
						'selected': selectedKey == item.id
					})}
					key={item.id}>
					{
						item.children && this.renderTree(item.children)
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

	onExpand = (expandedKeys) => {
		this.setState({ expandedKeys });
	}

	getAllkeys = () => {
		let { datalist } = this.props;
		let sks = [];
		const getkeys = data => {
			if(data && data.length) {
				return data.map(item => {
					sks.push(''+item.id);
					if(item.children && item.children.length) {
						getkeys(item.children);
					}	
				})
			}
		}
		getkeys(datalist)
		return sks
	}

	onSearch = v => {
		let { datalist } = this.props;

		let keys = findTreeIds(datalist, v)

		this.setState({
			searchValue: v,
			searchKeys: keys,
			expandedKeys: keys 
		})

	}

	render() {

		let { checkable, datalist, handleTreeEdit } = this.props;
		let { checkedKeys, allCheckedKeys, expandedKeys } = this.state;

		return (
			<div>
				<div className="config-content">
					<div className="config-search">
						<Search placeholder="请输入" onSearch={this.onSearch} />
					</div>
					<div className="config-body scrollbar-middle">
						<Tree
							expandedKeys={expandedKeys}
							checkedKeys={checkedKeys}
							onCheck={this.onCheck}
							onExpand={this.onExpand}
							checkable={checkable}>
							{ this.renderTree(datalist) }
						</Tree>
					</div>
				</div>
				{
					checkable && 
					<div className="config-btns">
						<Button onClick={() => handleTreeEdit('cancel', allCheckedKeys)}>取消</Button>
						<Button type="primary" onClick={() => handleTreeEdit('ok', allCheckedKeys)}>保存</Button>
					</div>
				}
			</div>
		)
	}
}