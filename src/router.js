import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import App from './App';

// 动态加载component和model
const { ConnectedRouter } = routerRedux;
const Routers = ({
	history,
	app
}) => {

	const routes = [
		{
			path: '/login',
			component: () => import(/* webpackChunkName: "login" */ './pages/others/login/index'),
			models: () => [import(/* webpackChunkName: "login" */ './pages/others/login/model')]
		},
		{
			path: '/sitemap',
			component: () => import(/* webpackChunkName: "sitemap" */ './pages/others/sitemap/index'),
			models: () => [import(/* webpackChunkName: "sitemap" */ './pages/others/sitemap/model')]
		},
		{
			path: '/authority',
			component: () => import(/* webpackChunkName: "authority" */ './pages/others/authority/index'),
			models: () => [import(/* webpackChunkName: "authority" */ './pages/others/authority/model')]
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
						<Redirect exact from='/'  to='/dftt/dftt-zq/task' />
						<Redirect exact from='/dftt'  to='/dftt/dftt-zq/task' />
						<Redirect exact from='/dftt/dftt-zq'  to='/dftt/dftt-zq/task' />
						
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
