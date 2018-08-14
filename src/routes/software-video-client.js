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
			path: '/software/video-client/active',
			component: () => require('../pages/software/video-client/active/index'),
			models: () => [require('../pages/software/video-client/active/model')]
		},
		{
			path: '/software/video-client/basic',
			component: () => require('../pages/software/video-client/basic/index'),
			models: () => [require('../pages/software/video-client/basic/model')]
		},
		{
			path: '/software/video-client/qid',
			component: () => require('../pages/software/video-client/qid/index'),
			models: () => [require('../pages/software/video-client/qid/model')]
		},
		{
			path: '/software/video-client/auto',
			component: () => require('../pages/software/video-client/auto/index'),
			models: () => [require('../pages/software/video-client/auto/model')]
		},
		{
			path: '/software/video-client/video',
			component: () => require('../pages/software/video-client/video/index'),
			models: () => [require('../pages/software/video-client/video/model')]
		},
		{
			path: '/software/video-client/user-behavior',
			component: () => require('../pages/software/video-client/user-behavior/index'),
			models: () => [require('../pages/software/video-client/user-behavior/model')]
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
