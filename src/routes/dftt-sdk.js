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
			path: '/dftt/sdk/qid-version',
			component: () => require('../pages/dftt/sdk/qid-version/index'),
			models: () => [require('../pages/dftt/sdk/qid-version/model')]
		},
		{
			path: '/dftt/sdk/today-data',
			component: () => require('../pages/dftt/sdk/today-data/index'),
			models: () => [require('../pages/dftt/sdk/today-data/model')]
		},
		{
			path: '/dftt/sdk/qid-recommend',
			component: () => require('../pages/dftt/sdk/qid-recommend/index'),
			models: () => [require('../pages/dftt/sdk/qid-recommend/model')]
		},
		{
			path: '/dftt/sdk/today-detail',
			component: () => require('../pages/dftt/sdk/today-detail/index'),
			models: () => [require('../pages/dftt/sdk/today-detail/model')]
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
