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
			path: '/mop/mop-app/basic',
			component: () => require('../pages/mop/mop-app/basic/index'),
			models: () => [require('../pages/mop/mop-app/basic/model')]
		},
		{
			path: '/mop/mop-app/retention',
			component: () => require('../pages/mop/mop-app/retention/index'),
			models: () => [require('../pages/mop/mop-app/retention/model')]
		},
		{
			path: '/mop/mop-app/duration',
			component: () => require('../pages/mop/mop-app/duration/index'),
			models: () => [require('../pages/mop/mop-app/duration/model')]
		},
		{
			path: '/mop/mop-app/click-pos',
			component: () => require('../pages/mop/mop-app/click-pos/index'),
			models: () => [require('../pages/mop/mop-app/click-pos/model')]
		},
		{
			path: '/mop/mop-app/kandian-rank',
			component: () => require('../pages/mop/mop-app/kandian-rank/index'),
			models: () => [require('../pages/mop/mop-app/kandian-rank/model')]
		},
		{
			path: '/mop/mop-app/kandian-newspool',
			component: () => require('../pages/mop/mop-app/kandian-newspool/index'),
			models: () => [require('../pages/mop/mop-app/kandian-newspool/model')]
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
