import PropTypes from 'prop-types';
import { Pagination } from 'antd';

/**
 * 分页布局
 * @param  {[type]}    options.hidePageInfo 是否显示左侧分页信息
 * @param  {...[type]} options.props        [description]
 * @return {[type]}                         [description]
 */
const PaginationLayout = ({
	hidePageInfo,
	...props
}) => {
	let { total, current, pageSize } = props;

	return (
		<div className="main-pagination">
			{
				hidePageInfo || Math.ceil(total/pageSize) === 1 ? null :<div className="pagination-info">共 <span>{total}</span> 条记录 第 <span>{current}</span> / {Math.ceil(total/pageSize)} 页</div>
			}
			<Pagination
				showSizeChanger
				showQuickJumper
				hideOnSinglePage
				//size="small"
				pageSizeOptions={['50', '100', '200']}
				{...props} />
		</div>
	);
};

PaginationLayout.propTypes = {
	hidePageInfo: PropTypes.bool,
};

export default PaginationLayout;