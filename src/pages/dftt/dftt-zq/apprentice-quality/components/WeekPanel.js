/**
 * 周报
 * @param  {[type]}    options.week  [description]
 * @param  {...[type]} options.props [description]
 * @return {[type]}                  [description]
 */

import TableLayout from '@/components/TableLayout';
import PaginationLayout from '@/components/PaginationLayout';

import { showTotalOrList } from '@/utils/tools';

const WeekPanel = ({
	tabs,
	week,
	columns,
	detailProps,
	...props
}) => {
	let { totalList, userDataList, userDatalTotal, listConfig, filterColumns } = week;
	let { dispatch } = props;
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
				tab: 'week',
				filterColumns: param.res
			}
		})
	}

	/**
	 * 是否显示汇总或列表
	 */
	let { showTotal, showList } = showTotalOrList(showDetail, accid);

	return (
		<div className="week-panel">
			{
				showTotal &&
				<TableLayout
					dataSource={totalList}
					allColumns={columns}
					filterColumns={filterColumns}
					showToolbar={false}
					onChange={(pagination, filters, { field, order }) => handleChange({
						sortname: field,
						sorttype: order.replace('end', '')
					}, 'total')}
					scroll={{x: true}} />
			}
			{
				showList &&
				<div>
					<TableLayout
						dataSource={userDataList}
						allColumns={columns}
						filterColumns={filterColumns}
						treeOnCheck={treeOnCheck}
						onChange={(pagination, filters, { field, order }) => handleChange({
							sortname: field,
							sorttype: order.replace('end', '')
						})}
						scroll={{x: true}} />
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

export default WeekPanel;