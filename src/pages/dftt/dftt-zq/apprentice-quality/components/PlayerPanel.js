/**
 * 按负责人
 * @param  {[type]}    options.player [description]
 * @param  {...[type]} options.props  [description]
 * @return {[type]}                   [description]
 */

import TableLayout from '@/components/TableLayout';
import global from '@/utils/global';

const PlayerPanel = ({
	tabs,
	player,
	columns,
	...props
}) => {
	let { dispatch } = props;
	let { byplayerDataList, filterColumns } = player;

	/**
	 * 分页或排序更改
	 * @param  {[type]} payload 更新参数
	 * @param  {[type]} type    更新列表
	 * @return {[type]}         [description]
	 */
	const handleChange = (payload, type = 'list') => {
		dispatch({
			type: 'apprenticeQuality/updateList',
			updateType: type,
			payload
		});
	}

	/**
	 * 筛选要展示的列
	 * @param  {[type]} res 不展示的列
	 */
	const treeOnCheck = (param) => {
		dispatch({
			type: 'apprenticeQuality/filterColumns',
			payload: {
				tab: 'player',
				filterColumns: param.res
			}
		})
	}

	return (
		<div className="player-panel">
			<TableLayout
				allColumns={columns}
				dataSource={byplayerDataList}
				filterColumns={filterColumns}
				treeOnCheck={treeOnCheck}/>
		</div>
	)
}


export default PlayerPanel;