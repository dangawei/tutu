var fs = require('fs');

var { routes } = require('./src/configs/pages')

var pages = routes.map(l => l.url);
const preDir = './pages';

let dynamicRouteArr = '';
pages.map(item => {
	var last = item.lastIndexOf('/'),
		dir = preDir + item.substr(0, last),
		file = item.substr(last+1, item.length);
	if(file.indexOf('-') > -1) {
		file = file.split('-').map((l,i) => i ? l.substr(0,1).toUpperCase()+l.slice(1) : l).join('');
	}
	var vfile = file.substr(0,1).toUpperCase()+file.slice(1);
	dynamicRouteArr+= `
		{
			path: '${item}',
			component: () => require('${dir}/views/${vfile}'),
			models: () => [require('${dir}/models/${file}')]
		}$$`
})

var content = `import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import App from './App';

// 动态加载component和model
const { ConnectedRouter } = routerRedux;
const Routers = function ({ history, app }) {

	const routes = [${dynamicRouteArr.split('$$')}
	]

	return (
		<ConnectedRouter history={history}>
			<LocaleProvider locale={zhCN}>
				<App>
					<Switch>
						{/*<Route exact path="/" render={() => (<Redirect to="" />)} />*/}
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
`

fs.writeFile('./src/router.js', content, function (err) {

})



/**
 * 修改index.js
 */

var indexJsTemplate = `import dva from 'dva';
import { message } from 'antd';
import './scss/reset.scss';
// import { createLogger } from 'redux-logger';

import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
	// ...createLoading({
	// 	effects: true,
	// }),
	onError(e) {
		message.error(e.message, 3);
	},
	// onAction: createLogger(),
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./model').default);
	
// 4. Router
app.router(require('./router').default);
app.start('#root');
// 5. Start

`

fs.writeFile('./src/index.js', indexJsTemplate, function (err) {

})