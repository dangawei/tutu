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
			path: '/mop/mop-h5/realtime',
			component: () => require('../pages/mop/mop-h5/realtime/index'),
			models: () => [require('../pages/mop/mop-h5/realtime/model')]
		},
		{
			path: '/mop/mop-h5/videos',
			component: () => require('../pages/mop/mop-h5/videos/index'),
			models: () => [require('../pages/mop/mop-h5/videos/model')]
		},
		{
			path: '/mop/mop-h5/qid',
			component: () => require('../pages/mop/mop-h5/qid/index'),
			models: () => [require('../pages/mop/mop-h5/qid/model')]
		},
		{
			path: '/mop/mop-h5/tt',
			component: () => require('../pages/mop/mop-h5/tt/index'),
			models: () => [require('../pages/mop/mop-h5/tt/model')]
		},
		{
			path: '/mop/mop-h5/dzh',
			component: () => require('../pages/mop/mop-h5/dzh/index'),
			models: () => [require('../pages/mop/mop-h5/dzh/model')]
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
