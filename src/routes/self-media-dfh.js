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
			path: '/self-media/dfh/flow/basic',
			component: () => require('../pages/self-media/dfh/flow/basic/index'),
			models: () => [require('../pages/self-media/dfh/flow/basic/model')]
		},
		{
			path: '/self-media/dfh/flow/h5',
			component: () => require('../pages/self-media/dfh/flow/h5/index'),
			models: () => [require('../pages/self-media/dfh/flow/h5/model')]
		},
		{
			path: '/self-media/dfh/flow/daily',
			component: () => require('../pages/self-media/dfh/flow/daily/index'),
			models: () => [require('../pages/self-media/dfh/flow/daily/model')]
		},
		{
			path: '/self-media/dfh/flow/user',
			component: () => require('../pages/self-media/dfh/flow/user/index'),
			models: () => [require('../pages/self-media/dfh/flow/user/model')]
		},
		{
			path: '/self-media/dfh/flow/qid',
			component: () => require('../pages/self-media/dfh/flow/qid/index'),
			models: () => [require('../pages/self-media/dfh/flow/qid/model')]
		},
		{
			path: '/self-media/dfh/retain/user',
			component: () => require('../pages/self-media/dfh/retain/user/index'),
			models: () => [require('../pages/self-media/dfh/retain/user/model')]
		},
		{
			path: '/self-media/dfh/retain/integral',
			component: () => require('../pages/self-media/dfh/retain/integral/index'),
			models: () => [require('../pages/self-media/dfh/retain/integral/model')]
		},
		{
			path: '/self-media/dfh/retain/analysis',
			component: () => require('../pages/self-media/dfh/retain/analysis/index'),
			models: () => [require('../pages/self-media/dfh/retain/analysis/model')]
		},
		{
			path: '/self-media/dfh/content/rank',
			component: () => require('../pages/self-media/dfh/content/rank/index'),
			models: () => [require('../pages/self-media/dfh/content/rank/model')]
		},
		{
			path: '/self-media/dfh/content/user',
			component: () => require('../pages/self-media/dfh/content/user/index'),
			models: () => [require('../pages/self-media/dfh/content/user/model')]
		},
		{
			path: '/self-media/dfh/content/operate',
			component: () => require('../pages/self-media/dfh/content/operate/index'),
			models: () => [require('../pages/self-media/dfh/content/operate/model')]
		},
		{
			path: '/self-media/dfh/content/edit',
			component: () => require('../pages/self-media/dfh/content/edit/index'),
			models: () => [require('../pages/self-media/dfh/content/edit/model')]
		},
		{
			path: '/self-media/dfh/check/index',
			component: () => require('../pages/self-media/dfh/check/index/index'),
			models: () => [require('../pages/self-media/dfh/check/index/model')]
		},
		{
			path: '/self-media/dfh/check/enter',
			component: () => require('../pages/self-media/dfh/check/enter/index'),
			models: () => [require('../pages/self-media/dfh/check/enter/model')]
		},
		{
			path: '/self-media/dfh/check/gold',
			component: () => require('../pages/self-media/dfh/check/gold/index'),
			models: () => [require('../pages/self-media/dfh/check/gold/model')]
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
