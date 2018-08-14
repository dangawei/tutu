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
			path: '/mop/mop-master/realtime',
			component: () => require('../pages/mop/mop-master/realtime/index'),
			models: () => [require('../pages/mop/mop-master/realtime/model')]
		},
		{
			path: '/mop/mop-master/whole',
			component: () => require('../pages/mop/mop-master/whole/index'),
			models: () => [require('../pages/mop/mop-master/whole/model')]
		},
		{
			path: '/mop/mop-master/click-pos',
			component: () => require('../pages/mop/mop-master/click-pos/index'),
			models: () => [require('../pages/mop/mop-master/click-pos/model')]
		},
		{
			path: '/mop/mop-master/daily-qid',
			component: () => require('../pages/mop/mop-master/daily-qid/index'),
			models: () => [require('../pages/mop/mop-master/daily-qid/model')]
		},
		{
			path: '/mop/mop-master/index-newspool',
			component: () => require('../pages/mop/mop-master/index-newspool/index'),
			models: () => [require('../pages/mop/mop-master/index-newspool/model')]
		},
		{
			path: '/mop/mop-master/tt',
			component: () => require('../pages/mop/mop-master/tt/index'),
			models: () => [require('../pages/mop/mop-master/tt/model')]
		},
		{
			path: '/mop/mop-master/dzh',
			component: () => require('../pages/mop/mop-master/dzh/index'),
			models: () => [require('../pages/mop/mop-master/dzh/model')]
		},
		{
			path: '/mop/mop-master/videos',
			component: () => require('../pages/mop/mop-master/videos/index'),
			models: () => [require('../pages/mop/mop-master/videos/model')]
		},
		{
			path: '/mop/mop-master/index',
			component: () => require('../pages/mop/mop-master/index/index'),
			models: () => [require('../pages/mop/mop-master/index/model')]
		},
		{
			path: '/mop/mop-master/post',
			component: () => require('../pages/mop/mop-master/post/index'),
			models: () => [require('../pages/mop/mop-master/post/model')]
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
