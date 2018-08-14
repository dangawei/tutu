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
			path: '/dftt/dftt-app/realtime/data',
			component: () => require('../pages/dftt/dftt-app/realtime/data/index'),
			models: () => [require('../pages/dftt/dftt-app/realtime/data/model')]
		},
		{
			path: '/dftt/dftt-app/realtime/detail',
			component: () => require('../pages/dftt/dftt-app/realtime/detail/index'),
			models: () => [require('../pages/dftt/dftt-app/realtime/detail/model')]
		},
		{
			path: '/dftt/dftt-app/realtime/newspool',
			component: () => require('../pages/dftt/dftt-app/realtime/newspool/index'),
			models: () => [require('../pages/dftt/dftt-app/realtime/newspool/model')]
		},
		{
			path: '/dftt/dftt-app/realtime/login',
			component: () => require('../pages/dftt/dftt-app/realtime/login/index'),
			models: () => [require('../pages/dftt/dftt-app/realtime/login/model')]
		},
		{
			path: '/dftt/dftt-app/basic/data',
			component: () => require('../pages/dftt/dftt-app/basic/data/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/data/model')]
		},
		{
			path: '/dftt/dftt-app/basic/active',
			component: () => require('../pages/dftt/dftt-app/basic/active/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/active/model')]
		},
		{
			path: '/dftt/dftt-app/basic/qid-version',
			component: () => require('../pages/dftt/dftt-app/basic/qid-version/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/qid-version/model')]
		},
		{
			path: '/dftt/dftt-app/basic/small-video',
			component: () => require('../pages/dftt/dftt-app/basic/small-video/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/small-video/model')]
		},
		{
			path: '/dftt/dftt-app/basic/btns',
			component: () => require('../pages/dftt/dftt-app/basic/btns/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/btns/model')]
		},
		{
			path: '/dftt/dftt-app/basic/top-rank',
			component: () => require('../pages/dftt/dftt-app/basic/top-rank/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/top-rank/model')]
		},
		{
			path: '/dftt/dftt-app/basic/mall-daily',
			component: () => require('../pages/dftt/dftt-app/basic/mall-daily/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/mall-daily/model')]
		},
		{
			path: '/dftt/dftt-app/basic/mall',
			component: () => require('../pages/dftt/dftt-app/basic/mall/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/mall/model')]
		},
		{
			path: '/dftt/dftt-app/basic/active-simple',
			component: () => require('../pages/dftt/dftt-app/basic/active-simple/index'),
			models: () => [require('../pages/dftt/dftt-app/basic/active-simple/model')]
		},
		{
			path: '/dftt/dftt-app/origin',
			component: () => require('../pages/dftt/dftt-app/origin/index'),
			models: () => [require('../pages/dftt/dftt-app/origin/model')]
		},
		{
			path: '/dftt/dftt-app/regression',
			component: () => require('../pages/dftt/dftt-app/regression/index'),
			models: () => [require('../pages/dftt/dftt-app/regression/model')]
		},
		{
			path: '/dftt/dftt-app/quality',
			component: () => require('../pages/dftt/dftt-app/quality/index'),
			models: () => [require('../pages/dftt/dftt-app/quality/model')]
		},
		{
			path: '/dftt/dftt-app/message-count',
			component: () => require('../pages/dftt/dftt-app/message-count/index'),
			models: () => [require('../pages/dftt/dftt-app/message-count/model')]
		},
		{
			path: '/dftt/dftt-app/user-grade',
			component: () => require('../pages/dftt/dftt-app/user-grade/index'),
			models: () => [require('../pages/dftt/dftt-app/user-grade/model')]
		},
		{
			path: '/dftt/dftt-app/activity-entry',
			component: () => require('../pages/dftt/dftt-app/activity-entry/index'),
			models: () => [require('../pages/dftt/dftt-app/activity-entry/model')]
		},
		{
			path: '/dftt/dftt-app/version-upgrade',
			component: () => require('../pages/dftt/dftt-app/version-upgrade/index'),
			models: () => [require('../pages/dftt/dftt-app/version-upgrade/model')]
		},
		{
			path: '/dftt/dftt-app/cloud-fail',
			component: () => require('../pages/dftt/dftt-app/cloud-fail/index'),
			models: () => [require('../pages/dftt/dftt-app/cloud-fail/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/top',
			component: () => require('../pages/dftt/dftt-app/newspool/top/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/top/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/data',
			component: () => require('../pages/dftt/dftt-app/newspool/data/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/data/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/list-idx',
			component: () => require('../pages/dftt/dftt-app/newspool/list-idx/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/list-idx/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/page-idx',
			component: () => require('../pages/dftt/dftt-app/newspool/page-idx/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/page-idx/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/category-news',
			component: () => require('../pages/dftt/dftt-app/newspool/category-news/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/category-news/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/category-video',
			component: () => require('../pages/dftt/dftt-app/newspool/category-video/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/category-video/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/video-idx',
			component: () => require('../pages/dftt/dftt-app/newspool/video-idx/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/video-idx/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/read',
			component: () => require('../pages/dftt/dftt-app/newspool/read/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/read/model')]
		},
		{
			path: '/dftt/dftt-app/newspool/source',
			component: () => require('../pages/dftt/dftt-app/newspool/source/index'),
			models: () => [require('../pages/dftt/dftt-app/newspool/source/model')]
		},
		{
			path: '/dftt/dftt-app/recommend/qid',
			component: () => require('../pages/dftt/dftt-app/recommend/qid/index'),
			models: () => [require('../pages/dftt/dftt-app/recommend/qid/model')]
		},
		{
			path: '/dftt/dftt-app/recommend/videos',
			component: () => require('../pages/dftt/dftt-app/recommend/videos/index'),
			models: () => [require('../pages/dftt/dftt-app/recommend/videos/model')]
		},
		{
			path: '/dftt/dftt-app/push/accurate',
			component: () => require('../pages/dftt/dftt-app/push/accurate/index'),
			models: () => [require('../pages/dftt/dftt-app/push/accurate/model')]
		},
		{
			path: '/dftt/dftt-app/push/awaken',
			component: () => require('../pages/dftt/dftt-app/push/awaken/index'),
			models: () => [require('../pages/dftt/dftt-app/push/awaken/model')]
		},
		{
			path: '/dftt/dftt-app/push/message',
			component: () => require('../pages/dftt/dftt-app/push/message/index'),
			models: () => [require('../pages/dftt/dftt-app/push/message/model')]
		},
		{
			path: '/dftt/dftt-app/android/models',
			component: () => require('../pages/dftt/dftt-app/android/models/index'),
			models: () => [require('../pages/dftt/dftt-app/android/models/model')]
		},
		{
			path: '/dftt/dftt-app/android/distribute',
			component: () => require('../pages/dftt/dftt-app/android/distribute/index'),
			models: () => [require('../pages/dftt/dftt-app/android/distribute/model')]
		},
		{
			path: '/dftt/dftt-app/promote/register',
			component: () => require('../pages/dftt/dftt-app/promote/register/index'),
			models: () => [require('../pages/dftt/dftt-app/promote/register/model')]
		},
		{
			path: '/dftt/dftt-app/promote/download',
			component: () => require('../pages/dftt/dftt-app/promote/download/index'),
			models: () => [require('../pages/dftt/dftt-app/promote/download/model')]
		},
		{
			path: '/dftt/dftt-app/promote/install',
			component: () => require('../pages/dftt/dftt-app/promote/install/index'),
			models: () => [require('../pages/dftt/dftt-app/promote/install/model')]
		},
		{
			path: '/dftt/dftt-app/promote/ios',
			component: () => require('../pages/dftt/dftt-app/promote/ios/index'),
			models: () => [require('../pages/dftt/dftt-app/promote/ios/model')]
		},
		{
			path: '/dftt/dftt-app/promote/red',
			component: () => require('../pages/dftt/dftt-app/promote/red/index'),
			models: () => [require('../pages/dftt/dftt-app/promote/red/model')]
		},
		{
			path: '/dftt/dftt-app/comment/counts',
			component: () => require('../pages/dftt/dftt-app/comment/counts/index'),
			models: () => [require('../pages/dftt/dftt-app/comment/counts/model')]
		},
		{
			path: '/dftt/dftt-app/comment/daily',
			component: () => require('../pages/dftt/dftt-app/comment/daily/index'),
			models: () => [require('../pages/dftt/dftt-app/comment/daily/model')]
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
