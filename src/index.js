import dva from 'dva';
import { message } from 'antd';
import './scss/reset.scss';
import './../public/iconfont/iconfont.css';
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
	if(href.indexOf('/dftt/dftt-zq/') > -1) {
	import(/* webpackChunkName: "dftt-dftt-zq" */ './routes/dftt-dftt-zq.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/dftt/dftt-h5/') > -1) {
	import(/* webpackChunkName: "dftt-dftt-h5" */ './routes/dftt-dftt-h5.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/dftt/dftt-app/') > -1) {
	import(/* webpackChunkName: "dftt-dftt-app" */ './routes/dftt-dftt-app.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/dftt/dftt-pc/') > -1) {
	import(/* webpackChunkName: "dftt-dftt-pc" */ './routes/dftt-dftt-pc.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/dftt/sdk/') > -1) {
	import(/* webpackChunkName: "dftt-sdk" */ './routes/dftt-sdk.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-master/') > -1) {
	import(/* webpackChunkName: "mop-mop-master" */ './routes/mop-mop-master.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-app/') > -1) {
	import(/* webpackChunkName: "mop-mop-app" */ './routes/mop-mop-app.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-h5/') > -1) {
	import(/* webpackChunkName: "mop-mop-h5" */ './routes/mop-mop-h5.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-auto/') > -1) {
	import(/* webpackChunkName: "mop-mop-auto" */ './routes/mop-mop-auto.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-video-app/') > -1) {
	import(/* webpackChunkName: "mop-mop-video-app" */ './routes/mop-mop-video-app.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-wx/') > -1) {
	import(/* webpackChunkName: "mop-mop-wx" */ './routes/mop-mop-wx.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mop-novel-app/') > -1) {
	import(/* webpackChunkName: "mop-mop-novel-app" */ './routes/mop-mop-novel-app.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/mop/mz/') > -1) {
	import(/* webpackChunkName: "mop-mz" */ './routes/mop-mz.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/typewriting/') > -1) {
	import(/* webpackChunkName: "software-typewriting" */ './routes/software-typewriting.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/pudding/') > -1) {
	import(/* webpackChunkName: "software-pudding" */ './routes/software-pudding.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/mini/') > -1) {
	import(/* webpackChunkName: "software-mini" */ './routes/software-mini.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/ktw/') > -1) {
	import(/* webpackChunkName: "software-ktw" */ './routes/software-ktw.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/clover/') > -1) {
	import(/* webpackChunkName: "software-clover" */ './routes/software-clover.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/browser/') > -1) {
	import(/* webpackChunkName: "software-browser" */ './routes/software-browser.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/rmwnl/') > -1) {
	import(/* webpackChunkName: "software-rmwnl" */ './routes/software-rmwnl.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/df-sports/') > -1) {
	import(/* webpackChunkName: "software-df-sports" */ './routes/software-df-sports.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/df-video/') > -1) {
	import(/* webpackChunkName: "software-df-video" */ './routes/software-df-video.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/video-client/') > -1) {
	import(/* webpackChunkName: "software-video-client" */ './routes/software-video-client.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/weather/') > -1) {
	import(/* webpackChunkName: "software-weather" */ './routes/software-weather.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/local-site/') > -1) {
	import(/* webpackChunkName: "software-local-site" */ './routes/software-local-site.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/lieqi-h5/') > -1) {
	import(/* webpackChunkName: "software-lieqi-h5" */ './routes/software-lieqi-h5.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/zip-software/') > -1) {
	import(/* webpackChunkName: "software-zip-software" */ './routes/software-zip-software.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/software/51ios/') > -1) {
	import(/* webpackChunkName: "software-51ios" */ './routes/software-51ios.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
} else if(href.indexOf('/self-media/dfh/') > -1) {
	import(/* webpackChunkName: "self-media-dfh" */ './routes/self-media-dfh.js').then(res => {
		app.router(res.default);
		app.start('#root');
	})
}  else {
		app.router(require('./router').default);
		app.start('#root');
	}
}
