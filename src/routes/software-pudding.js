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
			path: '/software/pudding/user',
			component: () => require('../pages/software/pudding/user/index'),
			models: () => [require('../pages/software/pudding/user/model')]
		},
		{
			path: '/software/pudding/basic',
			component: () => require('../pages/software/pudding/basic/index'),
			models: () => [require('../pages/software/pudding/basic/model')]
		},
		{
			path: '/software/pudding/qid',
			component: () => require('../pages/software/pudding/qid/index'),
			models: () => [require('../pages/software/pudding/qid/model')]
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
