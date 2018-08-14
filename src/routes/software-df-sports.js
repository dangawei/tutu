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
			path: '/software/df-sports/realtime/index',
			component: () => require('../pages/software/df-sports/realtime/index/index'),
			models: () => [require('../pages/software/df-sports/realtime/index/model')]
		},
		{
			path: '/software/df-sports/project/index',
			component: () => require('../pages/software/df-sports/project/index/index'),
			models: () => [require('../pages/software/df-sports/project/index/model')]
		},
		{
			path: '/software/df-sports/df-pc/daily-realtime',
			component: () => require('../pages/software/df-sports/df-pc/daily-realtime/index'),
			models: () => [require('../pages/software/df-sports/df-pc/daily-realtime/model')]
		},
		{
			path: '/software/df-sports/df-pc/daily-detail',
			component: () => require('../pages/software/df-sports/df-pc/daily-detail/index'),
			models: () => [require('../pages/software/df-sports/df-pc/daily-detail/model')]
		},
		{
			path: '/software/df-sports/df-pc/daily-count',
			component: () => require('../pages/software/df-sports/df-pc/daily-count/index'),
			models: () => [require('../pages/software/df-sports/df-pc/daily-count/model')]
		},
		{
			path: '/software/df-sports/df-pc/daily-qid',
			component: () => require('../pages/software/df-sports/df-pc/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/df-pc/daily-qid/model')]
		},
		{
			path: '/software/df-sports/df-pc/cms-add',
			component: () => require('../pages/software/df-sports/df-pc/cms-add/index'),
			models: () => [require('../pages/software/df-sports/df-pc/cms-add/model')]
		},
		{
			path: '/software/df-sports/df-pc/dfh-add',
			component: () => require('../pages/software/df-sports/df-pc/dfh-add/index'),
			models: () => [require('../pages/software/df-sports/df-pc/dfh-add/model')]
		},
		{
			path: '/software/df-sports/df-pc/pages',
			component: () => require('../pages/software/df-sports/df-pc/pages/index'),
			models: () => [require('../pages/software/df-sports/df-pc/pages/model')]
		},
		{
			path: '/software/df-sports/df-pc/click-pos',
			component: () => require('../pages/software/df-sports/df-pc/click-pos/index'),
			models: () => [require('../pages/software/df-sports/df-pc/click-pos/model')]
		},
		{
			path: '/software/df-sports/df-pc/today-qid',
			component: () => require('../pages/software/df-sports/df-pc/today-qid/index'),
			models: () => [require('../pages/software/df-sports/df-pc/today-qid/model')]
		},
		{
			path: '/software/df-sports/df-pc/video-gg',
			component: () => require('../pages/software/df-sports/df-pc/video-gg/index'),
			models: () => [require('../pages/software/df-sports/df-pc/video-gg/model')]
		},
		{
			path: '/software/df-sports/df-pc/index-pos',
			component: () => require('../pages/software/df-sports/df-pc/index-pos/index'),
			models: () => [require('../pages/software/df-sports/df-pc/index-pos/model')]
		},
		{
			path: '/software/df-sports/df-h5/daily-realtime',
			component: () => require('../pages/software/df-sports/df-h5/daily-realtime/index'),
			models: () => [require('../pages/software/df-sports/df-h5/daily-realtime/model')]
		},
		{
			path: '/software/df-sports/df-h5/daily-detail',
			component: () => require('../pages/software/df-sports/df-h5/daily-detail/index'),
			models: () => [require('../pages/software/df-sports/df-h5/daily-detail/model')]
		},
		{
			path: '/software/df-sports/df-h5/daily-data',
			component: () => require('../pages/software/df-sports/df-h5/daily-data/index'),
			models: () => [require('../pages/software/df-sports/df-h5/daily-data/model')]
		},
		{
			path: '/software/df-sports/df-h5/daily-qid',
			component: () => require('../pages/software/df-sports/df-h5/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/df-h5/daily-qid/model')]
		},
		{
			path: '/software/df-sports/df-h5/func',
			component: () => require('../pages/software/df-sports/df-h5/func/index'),
			models: () => [require('../pages/software/df-sports/df-h5/func/model')]
		},
		{
			path: '/software/df-sports/df-app/basic',
			component: () => require('../pages/software/df-sports/df-app/basic/index'),
			models: () => [require('../pages/software/df-sports/df-app/basic/model')]
		},
		{
			path: '/software/df-sports/df-app/qid',
			component: () => require('../pages/software/df-sports/df-app/qid/index'),
			models: () => [require('../pages/software/df-sports/df-app/qid/model')]
		},
		{
			path: '/software/df-sports/df-app/version',
			component: () => require('../pages/software/df-sports/df-app/version/index'),
			models: () => [require('../pages/software/df-sports/df-app/version/model')]
		},
		{
			path: '/software/df-sports/df-app/active',
			component: () => require('../pages/software/df-sports/df-app/active/index'),
			models: () => [require('../pages/software/df-sports/df-app/active/model')]
		},
		{
			path: '/software/df-sports/df-app/recommend',
			component: () => require('../pages/software/df-sports/df-app/recommend/index'),
			models: () => [require('../pages/software/df-sports/df-app/recommend/model')]
		},
		{
			path: '/software/df-sports/df-app/btns',
			component: () => require('../pages/software/df-sports/df-app/btns/index'),
			models: () => [require('../pages/software/df-sports/df-app/btns/model')]
		},
		{
			path: '/software/df-sports/wx-pc/daily-data',
			component: () => require('../pages/software/df-sports/wx-pc/daily-data/index'),
			models: () => [require('../pages/software/df-sports/wx-pc/daily-data/model')]
		},
		{
			path: '/software/df-sports/wx-pc/daily-qid',
			component: () => require('../pages/software/df-sports/wx-pc/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/wx-pc/daily-qid/model')]
		},
		{
			path: '/software/df-sports/wx-h5/daily-data',
			component: () => require('../pages/software/df-sports/wx-h5/daily-data/index'),
			models: () => [require('../pages/software/df-sports/wx-h5/daily-data/model')]
		},
		{
			path: '/software/df-sports/wx-h5/daily-qid',
			component: () => require('../pages/software/df-sports/wx-h5/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/wx-h5/daily-qid/model')]
		},
		{
			path: '/software/df-sports/mop-h5/daily-qid',
			component: () => require('../pages/software/df-sports/mop-h5/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/mop-h5/daily-qid/model')]
		},
		{
			path: '/software/df-sports/mop-pc/daily-qid',
			component: () => require('../pages/software/df-sports/mop-pc/daily-qid/index'),
			models: () => [require('../pages/software/df-sports/mop-pc/daily-qid/model')]
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
