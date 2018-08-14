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
			path: '/software/rmwnl/basic',
			component: () => require('../pages/software/rmwnl/basic/index'),
			models: () => [require('../pages/software/rmwnl/basic/model')]
		},
		{
			path: '/software/rmwnl/competitor',
			component: () => require('../pages/software/rmwnl/competitor/index'),
			models: () => [require('../pages/software/rmwnl/competitor/model')]
		},
		{
			path: '/software/rmwnl/qid-version',
			component: () => require('../pages/software/rmwnl/qid-version/index'),
			models: () => [require('../pages/software/rmwnl/qid-version/model')]
		},
		{
			path: '/software/rmwnl/competitor-qid',
			component: () => require('../pages/software/rmwnl/competitor-qid/index'),
			models: () => [require('../pages/software/rmwnl/competitor-qid/model')]
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