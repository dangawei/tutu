/**
 * 负责人配置
 * @param  {[type]}    options.playerConfig  负责人配置相关state
 * @param  {[type]}    options.playerOptions 负责人列表
 * @param  {...[type]} options.props         [description]
 * @return {[type]}                          [description]
 */

import TransferLayout from '@/components/TransferLayout';

const PlayConfigPanel = ({
	playerConfig,
	playerOptions,
	...props
}) => {
	let { selected, dataList, selectedList } = playerConfig;

	let { dispatch } = props;
	/**
	 * 选择左侧列表
	 */
	const handleTransferClick = (item, i) => {
		dispatch({
			type: 'apprenticeQuality/fetchPlayerCodeid',
			selectKey: i,
			payload: {
				playerid: item.playerid
			}
		})
	}

	/**
	 * 按负责人穿梭框选择
	 */
	const handlePlayerTransferChange = targetKeys => {
		dispatch({
			type: 'apprenticeQuality/save',
			payload: {
				playerConfig: {
					selectedList: targetKeys
				}
			}
		})
	}

	return (
		<TransferLayout
			showSearch
			leftTitle="负责人"
			leftList={playerOptions}
			leftSelectedIndex={selected}
			leftRender={item => item.player}
			onChangeTransfer={handleTransferClick}
			titles={["该负责人邀请码", "所有邀请码"]}
			dataSource={dataList}
			rowKey={record => record.codeid}
			render={item => item.invitecode}
			targetKeys={selectedList}
			onChange={handlePlayerTransferChange} />
	)
}


export default PlayConfigPanel;