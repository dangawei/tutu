import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';

import { List } from 'antd';

const Sitemap = ({
	sitemap
}) => {

	let { pages } = sitemap;

	return (
		<div style={{ 'padding': '0 15px' }}>
			{
				pages.map((pitem, i) => <List
					key={i}
					grid={{ gutter: 24, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
					header={<div style={{'fontWeight': 600, 'fontSize': 16}}>{pitem.category}</div>}
					size="small"
					dataSource={pitem.list}
					renderItem={item => (
						<List.Item style={{'marginTop': 8, 'marginBottom': 8}}>
							{item.cname} <Link to={item.url}> {item.url}</Link>
						</List.Item>
					)} />)
			}
		</div>
	)
};

Sitemap.propTypes = {
	sitemap: PropTypes.object,
};

export default connect(({ sitemap }) => ({ sitemap }))(Sitemap);