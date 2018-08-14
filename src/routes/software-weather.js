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
			path: '/software/weather/basic',
			component: () => require('../pages/software/weather/basic/index'),
			models: () => [require('../pages/software/weather/basic/model')]
		},
		{
			path: '/software/weather/point',
			component: () => require('../pages/software/weather/point/index'),
			models: () => [require('../pages/software/weather/point/model')]
		},
		{
			path: '/software/weather/report',
			component: () => require('../pages/software/weather/report/index'),
			models: () => [require('../pages/software/weather/report/model')]
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
