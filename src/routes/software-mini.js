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
			path: '/software/mini/basic',
			component: () => require('../pages/software/mini/basic/index'),
			models: () => [require('../pages/software/mini/basic/model')]
		},
		{
			path: '/software/mini/click-pos',
			component: () => require('../pages/software/mini/click-pos/index'),
			models: () => [require('../pages/software/mini/click-pos/model')]
		},
		{
			path: '/software/mini/click-specific',
			component: () => require('../pages/software/mini/click-specific/index'),
			models: () => [require('../pages/software/mini/click-specific/model')]
		},
		{
			path: '/software/mini/click-url',
			component: () => require('../pages/software/mini/click-url/index'),
			models: () => [require('../pages/software/mini/click-url/model')]
		},
		{
			path: '/software/mini/monitor',
			component: () => require('../pages/software/mini/monitor/index'),
			models: () => [require('../pages/software/mini/monitor/model')]
		},
		{
			path: '/software/mini/qid-basic',
			component: () => require('../pages/software/mini/qid-basic/index'),
			models: () => [require('../pages/software/mini/qid-basic/model')]
		},
		{
			path: '/software/mini/qid-pos',
			component: () => require('../pages/software/mini/qid-pos/index'),
			models: () => [require('../pages/software/mini/qid-pos/model')]
		},
		{
			path: '/software/mini/qid-tag',
			component: () => require('../pages/software/mini/qid-tag/index'),
			models: () => [require('../pages/software/mini/qid-tag/model')]
		},
		{
			path: '/software/mini/links',
			component: () => require('../pages/software/mini/links/index'),
			models: () => [require('../pages/software/mini/links/model')]
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
