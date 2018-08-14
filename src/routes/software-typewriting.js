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
			path: '/software/typewriting/whole/basic',
			component: () => require('../pages/software/typewriting/whole/basic/index'),
			models: () => [require('../pages/software/typewriting/whole/basic/model')]
		},
		{
			path: '/software/typewriting/whole/version',
			component: () => require('../pages/software/typewriting/whole/version/index'),
			models: () => [require('../pages/software/typewriting/whole/version/model')]
		},
		{
			path: '/software/typewriting/whole/competitor',
			component: () => require('../pages/software/typewriting/whole/competitor/index'),
			models: () => [require('../pages/software/typewriting/whole/competitor/model')]
		},
		{
			path: '/software/typewriting/whole/software',
			component: () => require('../pages/software/typewriting/whole/software/index'),
			models: () => [require('../pages/software/typewriting/whole/software/model')]
		},
		{
			path: '/software/typewriting/whole/index',
			component: () => require('../pages/software/typewriting/whole/index/index'),
			models: () => [require('../pages/software/typewriting/whole/index/model')]
		},
		{
			path: '/software/typewriting/whole/xyb',
			component: () => require('../pages/software/typewriting/whole/xyb/index'),
			models: () => [require('../pages/software/typewriting/whole/xyb/model')]
		},
		{
			path: '/software/typewriting/whole/binding',
			component: () => require('../pages/software/typewriting/whole/binding/index'),
			models: () => [require('../pages/software/typewriting/whole/binding/model')]
		},
		{
			path: '/software/typewriting/whole/binding-daily',
			component: () => require('../pages/software/typewriting/whole/binding-daily/index'),
			models: () => [require('../pages/software/typewriting/whole/binding-daily/model')]
		},
		{
			path: '/software/typewriting/whole/binding-show',
			component: () => require('../pages/software/typewriting/whole/binding-show/index'),
			models: () => [require('../pages/software/typewriting/whole/binding-show/model')]
		},
		{
			path: '/software/typewriting/whole/binding-error',
			component: () => require('../pages/software/typewriting/whole/binding-error/index'),
			models: () => [require('../pages/software/typewriting/whole/binding-error/model')]
		},
		{
			path: '/software/typewriting/qid/quality',
			component: () => require('../pages/software/typewriting/qid/quality/index'),
			models: () => [require('../pages/software/typewriting/qid/quality/model')]
		},
		{
			path: '/software/typewriting/qid/all',
			component: () => require('../pages/software/typewriting/qid/all/index'),
			models: () => [require('../pages/software/typewriting/qid/all/model')]
		},
		{
			path: '/software/typewriting/qid/lixin',
			component: () => require('../pages/software/typewriting/qid/lixin/index'),
			models: () => [require('../pages/software/typewriting/qid/lixin/model')]
		},
		{
			path: '/software/typewriting/qid/qid7654',
			component: () => require('../pages/software/typewriting/qid/qid7654/index'),
			models: () => [require('../pages/software/typewriting/qid/qid7654/model')]
		},
		{
			path: '/software/typewriting/qid/competitor',
			component: () => require('../pages/software/typewriting/qid/competitor/index'),
			models: () => [require('../pages/software/typewriting/qid/competitor/model')]
		},
		{
			path: '/software/typewriting/qid/version',
			component: () => require('../pages/software/typewriting/qid/version/index'),
			models: () => [require('../pages/software/typewriting/qid/version/model')]
		},
		{
			path: '/software/typewriting/qid/realtime',
			component: () => require('../pages/software/typewriting/qid/realtime/index'),
			models: () => [require('../pages/software/typewriting/qid/realtime/model')]
		},
		{
			path: '/software/typewriting/qid/uninstall-os',
			component: () => require('../pages/software/typewriting/qid/uninstall-os/index'),
			models: () => [require('../pages/software/typewriting/qid/uninstall-os/model')]
		},
		{
			path: '/software/typewriting/qid/install-time',
			component: () => require('../pages/software/typewriting/qid/install-time/index'),
			models: () => [require('../pages/software/typewriting/qid/install-time/model')]
		},
		{
			path: '/software/typewriting/qid/program',
			component: () => require('../pages/software/typewriting/qid/program/index'),
			models: () => [require('../pages/software/typewriting/qid/program/model')]
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
