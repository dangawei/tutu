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
			path: '/dftt/dftt-h5/realtime/count',
			component: () => require('../pages/dftt/dftt-h5/realtime/count/index'),
			models: () => [require('../pages/dftt/dftt-h5/realtime/count/model')]
		},
		{
			path: '/dftt/dftt-h5/realtime/qid-data',
			component: () => require('../pages/dftt/dftt-h5/realtime/qid-data/index'),
			models: () => [require('../pages/dftt/dftt-h5/realtime/qid-data/model')]
		},
		{
			path: '/dftt/dftt-h5/realtime/qid-detail',
			component: () => require('../pages/dftt/dftt-h5/realtime/qid-detail/index'),
			models: () => [require('../pages/dftt/dftt-h5/realtime/qid-detail/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/detail',
			component: () => require('../pages/dftt/dftt-h5/basic/detail/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/detail/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/count',
			component: () => require('../pages/dftt/dftt-h5/basic/count/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/count/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/qid',
			component: () => require('../pages/dftt/dftt-h5/basic/qid/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/qid/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/terminal',
			component: () => require('../pages/dftt/dftt-h5/basic/terminal/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/terminal/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/region',
			component: () => require('../pages/dftt/dftt-h5/basic/region/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/region/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/count404',
			component: () => require('../pages/dftt/dftt-h5/basic/count404/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/count404/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/new-user',
			component: () => require('../pages/dftt/dftt-h5/basic/new-user/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/new-user/model')]
		},
		{
			path: '/dftt/dftt-h5/basic/distribute',
			component: () => require('../pages/dftt/dftt-h5/basic/distribute/index'),
			models: () => [require('../pages/dftt/dftt-h5/basic/distribute/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-new',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-new/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-new/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-idx',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-idx/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-idx/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-page',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-page/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-page/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count',
			component: () => require('../pages/dftt/dftt-h5/newspool/count/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-category',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-category/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-category/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-auto',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-auto/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-auto/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-htt-idx',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-htt-idx/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-htt-idx/model')]
		},
		{
			path: '/dftt/dftt-h5/newspool/count-htt-page',
			component: () => require('../pages/dftt/dftt-h5/newspool/count-htt-page/index'),
			models: () => [require('../pages/dftt/dftt-h5/newspool/count-htt-page/model')]
		},
		{
			path: '/dftt/dftt-h5/recommend/qid',
			component: () => require('../pages/dftt/dftt-h5/recommend/qid/index'),
			models: () => [require('../pages/dftt/dftt-h5/recommend/qid/model')]
		},
		{
			path: '/dftt/dftt-h5/recommend/video',
			component: () => require('../pages/dftt/dftt-h5/recommend/video/index'),
			models: () => [require('../pages/dftt/dftt-h5/recommend/video/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/realtime-top',
			component: () => require('../pages/dftt/dftt-h5/video-img/realtime-top/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/realtime-top/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/video',
			component: () => require('../pages/dftt/dftt-h5/video-img/video/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/video/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/video-daily',
			component: () => require('../pages/dftt/dftt-h5/video-img/video-daily/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/video-daily/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/imgs',
			component: () => require('../pages/dftt/dftt-h5/video-img/imgs/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/imgs/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/h5-video',
			component: () => require('../pages/dftt/dftt-h5/video-img/h5-video/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/h5-video/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/video-source',
			component: () => require('../pages/dftt/dftt-h5/video-img/video-source/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/video-source/model')]
		},
		{
			path: '/dftt/dftt-h5/video-img/video-share',
			component: () => require('../pages/dftt/dftt-h5/video-img/video-share/index'),
			models: () => [require('../pages/dftt/dftt-h5/video-img/video-share/model')]
		},
		{
			path: '/dftt/dftt-h5/seo/shenma',
			component: () => require('../pages/dftt/dftt-h5/seo/shenma/index'),
			models: () => [require('../pages/dftt/dftt-h5/seo/shenma/model')]
		},
		{
			path: '/dftt/dftt-h5/seo/sougou',
			component: () => require('../pages/dftt/dftt-h5/seo/sougou/index'),
			models: () => [require('../pages/dftt/dftt-h5/seo/sougou/model')]
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
