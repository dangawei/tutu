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
			path: '/dftt/dftt-zq/apprentice-quality',
			component: () => require('../pages/dftt/dftt-zq/apprentice-quality/index'),
			models: () => [require('../pages/dftt/dftt-zq/apprentice-quality/model')]
		}
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
