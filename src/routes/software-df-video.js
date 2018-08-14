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
			path: '/software/df-video/basic',
			component: () => require('../pages/software/df-video/basic/index'),
			models: () => [require('../pages/software/df-video/basic/model')]
		},
		{
			path: '/software/df-video/qid',
			component: () => require('../pages/software/df-video/qid/index'),
			models: () => [require('../pages/software/df-video/qid/model')]
		},
		{
			path: '/software/df-video/outside',
			component: () => require('../pages/software/df-video/outside/index'),
			models: () => [require('../pages/software/df-video/outside/model')]
		},
		{
			path: '/software/df-video/click',
			component: () => require('../pages/software/df-video/click/index'),
			models: () => [require('../pages/software/df-video/click/model')]
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
