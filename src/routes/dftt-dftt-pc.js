import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import App from '../App';

// 动态加载component和model
const { ConnectedRouter } = routerRedux;
const Routers = ({
	history,
	app 
}) => {
	const routes = [
		{
			path: '/dftt/dftt-pc/news/daily-realtime',
			component: () => require('../pages/dftt/dftt-pc/news/daily-realtime/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/daily-realtime/model')]
		},
		{
			path: '/dftt/dftt-pc/news/daily-data',
			component: () => require('../pages/dftt/dftt-pc/news/daily-data/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/daily-data/model')]
		},
		{
			path: '/dftt/dftt-pc/news/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/news/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/news/daily-pos',
			component: () => require('../pages/dftt/dftt-pc/news/daily-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/daily-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/news/daily-terminal',
			component: () => require('../pages/dftt/dftt-pc/news/daily-terminal/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/daily-terminal/model')]
		},
		{
			path: '/dftt/dftt-pc/news/today-qid',
			component: () => require('../pages/dftt/dftt-pc/news/today-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/today-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/news/qid-region',
			component: () => require('../pages/dftt/dftt-pc/news/qid-region/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/qid-region/model')]
		},
		{
			path: '/dftt/dftt-pc/news/index-pos-realtime',
			component: () => require('../pages/dftt/dftt-pc/news/index-pos-realtime/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/index-pos-realtime/model')]
		},
		{
			path: '/dftt/dftt-pc/news/index-pos-daily',
			component: () => require('../pages/dftt/dftt-pc/news/index-pos-daily/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/index-pos-daily/model')]
		},
		{
			path: '/dftt/dftt-pc/news/links',
			component: () => require('../pages/dftt/dftt-pc/news/links/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/links/model')]
		},
		{
			path: '/dftt/dftt-pc/news/recommend-new',
			component: () => require('../pages/dftt/dftt-pc/news/recommend-new/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/recommend-new/model')]
		},
		{
			path: '/dftt/dftt-pc/news/recommend',
			component: () => require('../pages/dftt/dftt-pc/news/recommend/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/recommend/model')]
		},
		{
			path: '/dftt/dftt-pc/news/library',
			component: () => require('../pages/dftt/dftt-pc/news/library/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/library/model')]
		},
		{
			path: '/dftt/dftt-pc/news/user-center',
			component: () => require('../pages/dftt/dftt-pc/news/user-center/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/user-center/model')]
		},
		{
			path: '/dftt/dftt-pc/news/newspool',
			component: () => require('../pages/dftt/dftt-pc/news/newspool/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/newspool/model')]
		},
		{
			path: '/dftt/dftt-pc/news/qid-nav',
			component: () => require('../pages/dftt/dftt-pc/news/qid-nav/index'),
			models: () => [require('../pages/dftt/dftt-pc/news/qid-nav/model')]
		},
		{
			path: '/dftt/dftt-pc/video/click',
			component: () => require('../pages/dftt/dftt-pc/video/click/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/click/model')]
		},
		{
			path: '/dftt/dftt-pc/video/click-pos',
			component: () => require('../pages/dftt/dftt-pc/video/click-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/click-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/video/gg',
			component: () => require('../pages/dftt/dftt-pc/video/gg/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/gg/model')]
		},
		{
			path: '/dftt/dftt-pc/video/today',
			component: () => require('../pages/dftt/dftt-pc/video/today/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/today/model')]
		},
		{
			path: '/dftt/dftt-pc/video/daily-count',
			component: () => require('../pages/dftt/dftt-pc/video/daily-count/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/daily-count/model')]
		},
		{
			path: '/dftt/dftt-pc/video/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/video/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/video/links',
			component: () => require('../pages/dftt/dftt-pc/video/links/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/links/model')]
		},
		{
			path: '/dftt/dftt-pc/video/gg-patch',
			component: () => require('../pages/dftt/dftt-pc/video/gg-patch/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/gg-patch/model')]
		},
		{
			path: '/dftt/dftt-pc/video/click-rate',
			component: () => require('../pages/dftt/dftt-pc/video/click-rate/index'),
			models: () => [require('../pages/dftt/dftt-pc/video/click-rate/model')]
		},
		{
			path: '/dftt/dftt-pc/military/index-pos-realtime',
			component: () => require('../pages/dftt/dftt-pc/military/index-pos-realtime/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/index-pos-realtime/model')]
		},
		{
			path: '/dftt/dftt-pc/military/index-pos-daily',
			component: () => require('../pages/dftt/dftt-pc/military/index-pos-daily/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/index-pos-daily/model')]
		},
		{
			path: '/dftt/dftt-pc/military/daily-click',
			component: () => require('../pages/dftt/dftt-pc/military/daily-click/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/daily-click/model')]
		},
		{
			path: '/dftt/dftt-pc/military/daily-pos',
			component: () => require('../pages/dftt/dftt-pc/military/daily-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/daily-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/military/daily-detail',
			component: () => require('../pages/dftt/dftt-pc/military/daily-detail/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/daily-detail/model')]
		},
		{
			path: '/dftt/dftt-pc/military/daily-data',
			component: () => require('../pages/dftt/dftt-pc/military/daily-data/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/daily-data/model')]
		},
		{
			path: '/dftt/dftt-pc/military/terminal',
			component: () => require('../pages/dftt/dftt-pc/military/terminal/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/terminal/model')]
		},
		{
			path: '/dftt/dftt-pc/military/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/military/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/military/index-qid-click',
			component: () => require('../pages/dftt/dftt-pc/military/index-qid-click/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/index-qid-click/model')]
		},
		{
			path: '/dftt/dftt-pc/military/today-qid',
			component: () => require('../pages/dftt/dftt-pc/military/today-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/military/today-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/click-pos',
			component: () => require('../pages/dftt/dftt-pc/lieqi/click-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/click-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/daily-detail',
			component: () => require('../pages/dftt/dftt-pc/lieqi/daily-detail/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/daily-detail/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/daily-data',
			component: () => require('../pages/dftt/dftt-pc/lieqi/daily-data/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/daily-data/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/lieqi/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/terminal',
			component: () => require('../pages/dftt/dftt-pc/lieqi/terminal/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/terminal/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/today-qid',
			component: () => require('../pages/dftt/dftt-pc/lieqi/today-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/today-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/pages',
			component: () => require('../pages/dftt/dftt-pc/lieqi/pages/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/pages/model')]
		},
		{
			path: '/dftt/dftt-pc/lieqi/links',
			component: () => require('../pages/dftt/dftt-pc/lieqi/links/index'),
			models: () => [require('../pages/dftt/dftt-pc/lieqi/links/model')]
		},
		{
			path: '/dftt/dftt-pc/weather/daily',
			component: () => require('../pages/dftt/dftt-pc/weather/daily/index'),
			models: () => [require('../pages/dftt/dftt-pc/weather/daily/model')]
		},
		{
			path: '/dftt/dftt-pc/seo/search-360',
			component: () => require('../pages/dftt/dftt-pc/seo/search-360/index'),
			models: () => [require('../pages/dftt/dftt-pc/seo/search-360/model')]
		},
		{
			path: '/dftt/dftt-pc/seo/search-sougou',
			component: () => require('../pages/dftt/dftt-pc/seo/search-sougou/index'),
			models: () => [require('../pages/dftt/dftt-pc/seo/search-sougou/model')]
		},
		{
			path: '/dftt/dftt-pc/health/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/health/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/health/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/health/daily-pos',
			component: () => require('../pages/dftt/dftt-pc/health/daily-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/health/daily-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/health/today-qid',
			component: () => require('../pages/dftt/dftt-pc/health/today-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/health/today-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/auto/daily-detail',
			component: () => require('../pages/dftt/dftt-pc/auto/daily-detail/index'),
			models: () => [require('../pages/dftt/dftt-pc/auto/daily-detail/model')]
		},
		{
			path: '/dftt/dftt-pc/auto/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/auto/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/auto/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/auto/daily-pos',
			component: () => require('../pages/dftt/dftt-pc/auto/daily-pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/auto/daily-pos/model')]
		},
		{
			path: '/dftt/dftt-pc/imgs/daily-qid',
			component: () => require('../pages/dftt/dftt-pc/imgs/daily-qid/index'),
			models: () => [require('../pages/dftt/dftt-pc/imgs/daily-qid/model')]
		},
		{
			path: '/dftt/dftt-pc/imgs/pos',
			component: () => require('../pages/dftt/dftt-pc/imgs/pos/index'),
			models: () => [require('../pages/dftt/dftt-pc/imgs/pos/model')]
		},
		{
			path: '/dftt/dftt-pc/imgs/links',
			component: () => require('../pages/dftt/dftt-pc/imgs/links/index'),
			models: () => [require('../pages/dftt/dftt-pc/imgs/links/model')]
		},
	]

	return (
		<ConnectedRouter history={history}>
			<LocaleProvider locale={zhCN}>
				<App>
					<Switch>
						{
							routes.map(({ path, ...dynamics}, key) => (
								<Route key={key}
									path={path}
									component={dynamic({ app, ...dynamics })}
								/>
							))
						}
					</Switch>
				</App>
			</LocaleProvider>	
		</ConnectedRouter>
	);
};

Routers.propTypes = {
	history: PropTypes.object,
	app: PropTypes.object,
};

export default Routers;
