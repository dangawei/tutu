var fs = require('fs');

var { routes, redirectRoutes } = require('./src/configs/pages')

// index.js动态路由加载条件
var dynamicImportTemplate = ''

// 所有路由
var pages = routes.map(l => l.url);

// 路由引用前缀
var preDir = '../pages';

// 路由组
var routesGroup = {};

// 其他路由组
var otherRoutes = [];

// 获取所有路由组、最多保留三级
pages.map(item => {
	var preRoute = item.split('/').slice(0, 3).join('/')+'/';
	if(!preRoute.startsWith('/others/')) {
		if(!routesGroup[preRoute]) {
			routesGroup[preRoute] = []
		}
		routesGroup[preRoute] && routesGroup[preRoute].push(item)
	} else {
		otherRoutes.push(item)
	}
})

/**
 * 生成各版块对应的routes
 * @param  {[type]} item 板块路径(/songheng/product/dftt-zq/)
 * @return {[type]}      [description]
 */
const renderRouteJs = item => {
	var dynamicRouteArr = ''
	routesGroup[item].map(item => {
		var last = item.lastIndexOf('/'),
			dir = preDir + item,
			file = item.substr(last+1, item.length);
		if(file.indexOf('-') > -1) {
			file = file.split('-').map((l,i) => i ? l.substr(0,1).toUpperCase()+l.slice(1) : l).join('');
		}
		var vfile = file.substr(0,1).toUpperCase()+file.slice(1);
		dynamicRouteArr += `
		{
			path: '${item}',
			component: () => require('${dir}/index'),
			models: () => [require('${dir}/model')]
		},`
	})

var content = `import PropTypes from 'prop-types'
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
	const routes = [${dynamicRouteArr.split('$$')}
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
`

	// filename
	var filename = item.split('/').filter(l => l).join('-')

	dynamicImportTemplate += `else if(href.indexOf('${item}') > -1) {
	import(/* webpackChunkName: "${filename}" */ './routes/${filename}.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} `

	fs.writeFile(`./src/routes/${filename}.js`, content, function (err) {

	})
} 

Object.keys(routesGroup).map(item => {
	renderRouteJs(item)
})



/**
 * 修改src/router.js
 * 加载others目录下的路由和配置redirect
 */
let dynamicOthersRouteArr = '';
otherRoutes.map(item => {
	var last = item.lastIndexOf('/'),
		path = item.replace('/others', ''),
		dir = './pages' + item,
		file = item.substr(last+1, item.length);
	if(file.indexOf('-') > -1) {
		file = file.split('-').map((l,i) => i ? l.substr(0,1).toUpperCase()+l.slice(1) : l).join('');
	}
	var vfile = file.substr(0,1).toUpperCase()+file.slice(1);
	dynamicOthersRouteArr+= `
		{
			path: '${path}',
			component: () => import(/* webpackChunkName: "${file}" */ '${dir}/index'),
			models: () => [import(/* webpackChunkName: "${file}" */ '${dir}/model')]
		}$$`
})


let RidirectRouteArr = '';
redirectRoutes.map(item => {
	RidirectRouteArr += `<Redirect exact from='${item.from}'  to='${item.to}' />
						`
})

var routerJsTemplate =`import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import App from './App';

// 动态加载component和model
const { ConnectedRouter } = routerRedux;
const Routers = ({
	history,
	app
}) => {

	const routes = [${dynamicOthersRouteArr.split('$$')}
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
						${RidirectRouteArr}
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

fs.writeFile('./src/router.js', routerJsTemplate, function (err) {

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
// 5. Start
hashChangeFire()

// url变化监听器 浏览器支持onhashchange事件
if( ('onhashchange' in window) && ((typeof document.documentMode==='undefined') || document.documentMode==8)) {
    window.onhashchange = hashChangeFire;
}

function hashChangeFire() {
	var href = window.location.href
	${dynamicImportTemplate.slice(5)} else {
		app.router(require('./router').default);
		app.start('#root');
	}
}
`

fs.writeFile('./src/index.js', indexJsTemplate, function (err) {

})