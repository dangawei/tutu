/**
 * 师父分组配置
 * @param  {[type]}    options.masterConfig  师父分组配置相关state
 * @param  {[type]}    options.accOptions    师父列表
 * @param  {...[type]} options.props         [description]
 * @return {[type]}                          [description]
 */

import TransferLayout from '@/components/TransferLayout';

const MasterConfigPanel = ({
	masterConfig,
	accOptions,
	...props
}) => {
	let { selected, dataList, selectedList } = masterConfig;
	let { dispatch } = props;

	/**
	 * 选择左侧列表
	 */
	const handleTransferClick = (item, i) => {
		dispatch({
			type: 'apprenticeQuality/fetchMasterid',
			selectKey: i,
			payload: {
				groupid: item.master_groupid
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
				masterConfig: {
					selectedList: targetKeys
				}
			}
		})
	}

	return (
		<TransferLayout
			showSearch
			leftTitle="师父组"
			leftList={accOptions}
			leftSelectedIndex={selected}
			leftRender={item => item.master_groupname}
			onChangeTransfer={handleTransferClick}
			titles={["师父ID", "所有师父ID"]}
			dataSource={dataList}
			rowKey={record => record.qid_id}
			render={item => item.qid}
			targetKeys={selectedList}
			onChange={handlePlayerTransferChange} />
	)
}


export default MasterConfigPanel;