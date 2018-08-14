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
			path: '/dftt/dftt-zq/task',
			component: () => require('../pages/dftt/dftt-zq/task/index'),
			models: () => [require('../pages/dftt/dftt-zq/task/model')]
		},
		{
			path: '/dftt/dftt-zq/read-article',
			component: () => require('../pages/dftt/dftt-zq/read-article/index'),
			models: () => [require('../pages/dftt/dftt-zq/read-article/model')]
		},
		{
			path: '/dftt/dftt-zq/read-count',
			component: () => require('../pages/dftt/dftt-zq/read-count/index'),
			models: () => [require('../pages/dftt/dftt-zq/read-count/model')]
		},
		{
			path: '/dftt/dftt-zq/push',
			component: () => require('../pages/dftt/dftt-zq/push/index'),
			models: () => [require('../pages/dftt/dftt-zq/push/model')]
		},
		{
			path: '/dftt/dftt-zq/share-news',
			component: () => require('../pages/dftt/dftt-zq/share-news/index'),
			models: () => [require('../pages/dftt/dftt-zq/share-news/model')]
		},
		{
			path: '/dftt/dftt-zq/share-readed',
			component: () => require('../pages/dftt/dftt-zq/share-readed/index'),
			models: () => [require('../pages/dftt/dftt-zq/share-readed/model')]
		},
		{
			path: '/dftt/dftt-zq/share-rank',
			component: () => require('../pages/dftt/dftt-zq/share-rank/index'),
			models: () => [require('../pages/dftt/dftt-zq/share-rank/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-app-count',
			component: () => require('../pages/dftt/dftt-zq/apprentice-app-count/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-app-count/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-app-rank',
			component: () => require('../pages/dftt/dftt-zq/apprentice-app-rank/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-app-rank/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-quality',
			component: () => require('../pages/dftt/dftt-zq/apprentice-quality/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-quality/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-master',
			component: () => require('../pages/dftt/dftt-zq/apprentice-master/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-master/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-prentice',
			component: () => require('../pages/dftt/dftt-zq/apprentice-prentice/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-prentice/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-h5-invite',
			component: () => require('../pages/dftt/dftt-zq/apprentice-h5-invite/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-h5-invite/model')]
		},
		{
			path: '/dftt/dftt-zq/apprentice-red',
			component: () => require('../pages/dftt/dftt-zq/apprentice-red/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-red/model')]
		},
		{
			path: '/dftt/dftt-zq/money-tree-count',
			component: () => require('../pages/dftt/dftt-zq/money-tree-count/index'),
			models: () => [require('../pages/dftt/dftt-zq/money-tree-count/model')]
		},
		{
			path: '/dftt/dftt-zq/money-tree-distribute',
			component: () => require('../pages/dftt/dftt-zq/money-tree-distribute/index'),
			models: () => [require('../pages/dftt/dftt-zq/money-tree-distribute/model')]
		},
		{
			path: '/dftt/dftt-zq/disposable-reward',
			component: () => require('../pages/dftt/dftt-zq/disposable-reward/index'),
			models: () => [require('../pages/dftt/dftt-zq/disposable-reward/model')]
		},
		{
			path: '/dftt/dftt-zq/sign',
			component: () => require('../pages/dftt/dftt-zq/sign/index'),
			models: () => [require('../pages/dftt/dftt-zq/sign/model')]
		},
		{
			path: '/dftt/dftt-zq/daily-show-income',
			component: () => require('../pages/dftt/dftt-zq/daily-show-income/index'),
			models: () => [require('../pages/dftt/dftt-zq/daily-show-income/model')]
		},
		{
			path: '/dftt/dftt-zq/daily-news-search',
			component: () => require('../pages/dftt/dftt-zq/daily-news-search/index'),
			models: () => [require('../pages/dftt/dftt-zq/daily-news-search/model')]
		},
		{
			path: '/dftt/dftt-zq/awaken-prentice',
			component: () => require('../pages/dftt/dftt-zq/awaken-prentice/index'),
			models: () => [require('../pages/dftt/dftt-zq/awaken-prentice/model')]
		},
		{
			path: '/dftt/dftt-zq/awaken-friend',
			component: () => require('../pages/dftt/dftt-zq/awaken-friend/index'),
			models: () => [require('../pages/dftt/dftt-zq/awaken-friend/model')]
		},
		{
			path: '/dftt/dftt-zq/twenty-dian',
			component: () => require('../pages/dftt/dftt-zq/twenty-dian/index'),
			models: () => [require('../pages/dftt/dftt-zq/twenty-dian/model')]
		},
		{
			path: '/dftt/dftt-zq/answer',
			component: () => require('../pages/dftt/dftt-zq/answer/index'),
			models: () => [require('../pages/dftt/dftt-zq/answer/model')]
		},
		{
			path: '/dftt/dftt-zq/rank',
			component: () => require('../pages/dftt/dftt-zq/rank/index'),
			models: () => [require('../pages/dftt/dftt-zq/rank/model')]
		},
		{
			path: '/dftt/dftt-zq/activity',
			component: () => require('../pages/dftt/dftt-zq/activity/index'),
			models: () => [require('../pages/dftt/dftt-zq/activity/model')]
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
