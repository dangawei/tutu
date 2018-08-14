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
			path: '/mop/mop-wx/basic',
			component: () => require('../pages/mop/mop-wx/basic/index'),
			models: () => [require('../pages/mop/mop-wx/basic/model')]
		},
		{
			path: '/mop/mop-wx/page-active',
			component: () => require('../pages/mop/mop-wx/page-active/index'),
			models: () => [require('../pages/mop/mop-wx/page-active/model')]
		},
		{
			path: '/mop/mop-wx/pc-qid',
			component: () => require('../pages/mop/mop-wx/pc-qid/index'),
			models: () => [require('../pages/mop/mop-wx/pc-qid/model')]
		},
		{
			path: '/mop/mop-wx/h5-qid',
			component: () => require('../pages/mop/mop-wx/h5-qid/index'),
			models: () => [require('../pages/mop/mop-wx/h5-qid/model')]
		},
		{
			path: '/mop/mop-wx/h5-basic',
			component: () => require('../pages/mop/mop-wx/h5-basic/index'),
			models: () => [require('../pages/mop/mop-wx/h5-basic/model')]
		},
		{
			path: '/mop/mop-wx/h5-rank',
			component: () => require('../pages/mop/mop-wx/h5-rank/index'),
			models: () => [require('../pages/mop/mop-wx/h5-rank/model')]
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
