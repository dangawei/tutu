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
			path: '/mop/mop-novel-app/basic',
			component: () => require('../pages/mop/mop-novel-app/basic/index'),
			models: () => [require('../pages/mop/mop-novel-app/basic/model')]
		},
		{
			path: '/mop/mop-novel-app/charge',
			component: () => require('../pages/mop/mop-novel-app/charge/index'),
			models: () => [require('../pages/mop/mop-novel-app/charge/model')]
		},
		{
			path: '/mop/mop-novel-app/install-active',
			component: () => require('../pages/mop/mop-novel-app/install-active/index'),
			models: () => [require('../pages/mop/mop-novel-app/install-active/model')]
		},
		{
			path: '/mop/mop-novel-app/read',
			component: () => require('../pages/mop/mop-novel-app/read/index'),
			models: () => [require('../pages/mop/mop-novel-app/read/model')]
		},
		{
			path: '/mop/mop-novel-app/point',
			component: () => require('../pages/mop/mop-novel-app/point/index'),
			models: () => [require('../pages/mop/mop-novel-app/point/model')]
		},
		{
			path: '/mop/mop-novel-app/rank',
			component: () => require('../pages/mop/mop-novel-app/rank/index'),
			models: () => [require('../pages/mop/mop-novel-app/rank/model')]
		},
		{
			path: '/mop/mop-novel-app/install-realtime',
			component: () => require('../pages/mop/mop-novel-app/install-realtime/index'),
			models: () => [require('../pages/mop/mop-novel-app/install-realtime/model')]
		},
		{
			path: '/mop/mop-novel-app/task',
			component: () => require('../pages/mop/mop-novel-app/task/index'),
			models: () => [require('../pages/mop/mop-novel-app/task/model')]
		},
		{
			path: '/mop/mop-novel-app/sign',
			component: () => require('../pages/mop/mop-novel-app/sign/index'),
			models: () => [require('../pages/mop/mop-novel-app/sign/model')]
		},
		{
			path: '/mop/mop-novel-app/share',
			component: () => require('../pages/mop/mop-novel-app/share/index'),
			models: () => [require('../pages/mop/mop-novel-app/share/model')]
		},
		{
			path: '/mop/mop-novel-app/push',
			component: () => require('../pages/mop/mop-novel-app/push/index'),
			models: () => [require('../pages/mop/mop-novel-app/push/model')]
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
