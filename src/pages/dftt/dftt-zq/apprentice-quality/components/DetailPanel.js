/**
 * 明细
 * @param  {[type]}    options.detail [description]
 * @param  {...[type]} options.props  [description]
 * @return {[type]}                   [description]
 */

import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';
import BaseEchartsLayout from '@/components/BaseEchartsLayout';

import { showTotalOrList } from '@/utils/tools';
import { WSAEPROVIDERFAILEDINIT } from 'constants';

const DetailPanel = ({
	detailProps,
	columns,
	detail,
	...props
}) => {
	let { totalList, userDataList, userDatalTotal, listConfig, filterColumns } = detail;
	let { dispatch, location } = props;
	let { accid, showDetail } = detailProps;
	
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
	 * @param  {[type]} param.res 不展示的列
	 */
	const treeOnCheck = (param) => {
		dispatch({
			type: 'apprenticeQuality/filterColumns',
			payload: {
				tab: 'detail',
				filterColumns: param.res
			}
		})
	}

	/**
	 * 是否显示汇总或列表
	 */
	let { showTotal, showList } = showTotalOrList(showDetail, accid);

	return (
		<div className="detail-panel">
		    {
				showDetail &&
				<BaseEchartsLayout
				   labelShow={false}
				   data={ showList ? userDataList : totalList }
				   xAxis={'dt'}
				   maps={{ 
					   dailycash: '当日提现金额',
					   usedmoney: '已提现金额',
				    }} />
			}
			{
				showTotal &&
				<TableLayout
					dataSource={totalList}
					allColumns={columns}
					filterColumns={filterColumns}
					showToolbar={false}
					onChange={(pagination, filters, { field, order }) => (order && showDetail) && handleChange({
						sortname: field,
						sorttype: order.replace('end', '')
					}, 'total')} />
			}
			{
				showList &&
				<div>
					<TableLayout
						dataSource={userDataList}
						allColumns={columns}
						filterColumns={filterColumns}
						treeOnCheck={treeOnCheck}
						scrollY={400}
						onChange={(pagination, filters, { field, order }) => order && handleChange({
							sortname: field,
							sorttype: order.replace('end', '')
						})} />
					<PaginationLayout
						total={userDatalTotal}
						onChange={(page, pageSize) => handleChange({
							page,
							pagesize: pageSize
						})}
						onShowSizeChange={(current, size) => handleChange({
							page: 1,
							pagesize: size
						})}
						current={listConfig.page}
						pageSize={listConfig.pagesize} />
				</div>
			}
		</div>
	)
}

export default DetailPanel;