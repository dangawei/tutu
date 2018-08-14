// import jsonp from '@/utils/jsonp';

// // 所有导航
// import { datalist } from '@/configs/layout';

// let routes = []
// const getRoute = (data, nameArr = new Array(4)) => {
// 	data.map(l => {
// 		if(l.children && l.children.length) {
// 			let newArr = new Array(4)
// 			for (let i = 0; i < nameArr.length; i++) {
// 				if(!nameArr[i]) {
// 					newArr[i] = l.cname;
// 					break
// 				} else {
// 					newArr[i] = nameArr[i];
// 				}
// 			}
// 			getRoute(l.children, newArr)
// 		} else {
// 			routes.push({
// 				name1: nameArr[0],
// 				name2: nameArr[1],
// 				name3: nameArr[2],
// 				name4: nameArr[3] || '',
// 				cname: l.cname,
// 				modelpage: l.modelpage,
// 				url: '',
// 			})
// 		}
// 	})
// }
// getRoute(datalist)

// console.log(JSON.stringify(routes));

module.exports = {
	/**
	 * routes 生成文件和路由
	 * 尽量保证同一个板块（如dftt-zq东方头条赚钱）下的path层级一样，保持目录结构更整齐
	 * @type {Array}
	 */
	// routes_old: [
	// 	/**
	// 	 *  上海嵩恒 -- 产品
	// 	 */

	// 	// 东方头条赚钱
	// 	{
	// 	 	"name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "赚钱任务总览",
	// 	    "modelpage": "#songheng/chanpin/money/money_renwu",
	// 	    "url": "/songheng/product/dftt-zq/task"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "阅读文章",
	// 	    "cname": "阅读文章",
	// 	    "modelpage": "#songheng/chanpin/money/money_yueduwenzhang",
	// 	    "url": "/songheng/product/dftt-zq/read-article"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "阅读文章",
	// 	    "cname": "阅读文章次数",
	// 	    "modelpage": "#songheng/chanpin/money/money_yueducishu",
	// 	    "url": "/songheng/product/dftt-zq/read-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "阅读推送文章",
	// 	    "modelpage": "#songheng/chanpin/money/money_yuedutuisong",
	// 	    "url": "/songheng/product/dftt-zq/push"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "分享被阅读",
	// 	    "cname": "分享新闻",
	// 	    "modelpage": "#songheng/chanpin/money/money_fenxiangxinwen",
	// 	    "url": "/songheng/product/dftt-zq/share-news"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "分享被阅读",
	// 	    "cname": "分享被阅读",
	// 	    "modelpage": "#songheng/chanpin/money/money_fenxiangyuedu",
	// 	    "url": "/songheng/product/dftt-zq/share-readed"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "分享被阅读",
	// 	    "cname": "新闻排行榜",
	// 	    "modelpage": "#songheng/chanpin/money/money_xinwenpaihangbang",
	// 	    "url": "/songheng/product/dftt-zq/share-rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "APP邀请收徒统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqingshoutu",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-app-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "APP邀请收徒排行榜",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqingshoutupaihang",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-app-rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "师徒质量监控",
	// 	    "modelpage": "#songheng/chanpin/money/money_shituzhiliang",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-quality"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "师父数据统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_shifushuju",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-master"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "徒弟数据统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_tudishuju",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-prentice"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "H5邀请",
	// 	    "modelpage": "#songheng/chanpin/money/money_h5yaoqing",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-h5-invite"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "师徒活动",
	// 	    "cname": "拼手气拆红包",
	// 	    "modelpage": "#songheng/chanpin/money/money_shouqihongbao",
	// 	    "url": "/songheng/product/dftt-zq/apprentice-red"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "摇钱树活动",
	// 	    "cname": "摇钱树统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_yaoqianshu",
	// 	    "url": "/songheng/product/dftt-zq/money-tree-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "摇钱树活动",
	// 	    "cname": "APP摇钱树次数分布",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqianshu",
	// 	    "url": "/songheng/product/dftt-zq/money-tree-distribute"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "一次性任务奖励",
	// 	    "modelpage": "#songheng/chanpin/money/money_yicirenwu",
	// 	    "url": "/songheng/product/dftt-zq/disposable-reward"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "每日签到",
	// 	    "modelpage": "#songheng/chanpin/money/money_meiriqiandao",
	// 	    "url": "/songheng/product/dftt-zq/daily-sign"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "每日任务",
	// 	    "cname": "晒收入统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_shaishouru",
	// 	    "url": "/songheng/product/dftt-zq/daily-show-income"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "每日任务",
	// 	    "cname": "新闻搜索任务数据",
	// 	    "modelpage": "#songheng/chanpin/money/money_xinwensousuo",
	// 	    "url": "/songheng/product/dftt-zq/daily-news-search"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "唤醒",
	// 	    "cname": "唤醒徒儿",
	// 	    "modelpage": "#songheng/chanpin/money/money_huanxingtudi",
	// 	    "url": "/songheng/product/dftt-zq/awaken-prentice"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "唤醒",
	// 	    "cname": "唤醒好友",
	// 	    "modelpage": "#songheng/chanpin/money/money_huanxinghaoyou",
	// 	    "url": "/songheng/product/dftt-zq/awaken-friend"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "20点抢红包统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_qinghongbao",
	// 	    "url": "/songheng/product/dftt-zq/twenty-dian"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "全民答题统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_quanmindati",
	// 	    "url": "/songheng/product/dftt-zq/answer"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "排行榜统计",
	// 	    "modelpage": "#songheng/chanpin/money/money_paihangbang",
	// 	    "url": "/songheng/product/dftt-zq/rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条赚钱",
	// 	    "name4": "",
	// 	    "cname": "活动会场每日数据 ",
	// 	    "modelpage": "#songheng/chanpin/money/money_huodonghuichang",
	// 	    "url": "/songheng/product/dftt-zq/activity"
	// 	},

	// 	// 东方头条H5端
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5实时",
	// 	    "cname": "H5实时统计数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shishitongji",
	// 	    "url": "/songheng/product/dftt-h5/realtime/count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5实时",
	// 	    "cname": "H5今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_jinriqudao",
	// 	    "url": "/songheng/product/dftt-h5/realtime/qid-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5实时",
	// 	    "cname": "H5今日渠道详情页",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_jinrixiangqingye",
	// 	    "url": "/songheng/product/dftt-h5/realtime/qid-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_meirishujuxiangqing",
	// 	    "url": "/songheng/product/dftt-h5/basic/detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_meirishujutongji",
	// 	    "url": "/songheng/product/dftt-h5/basic/count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_meiriqudao",
	// 	    "url": "/songheng/product/dftt-h5/basic/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5终端数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_zhongduanshuju",
	// 	    "url": "/songheng/product/dftt-h5/basic/terminal"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5渠道地域分布",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_qudaodiyufenbu",
	// 	    "url": "/songheng/product/dftt-h5/basic/region"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "头条404统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_toutiao404",
	// 	    "url": "/songheng/product/dftt-h5/basic/count404"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5新老访客",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_xinlaofangke",
	// 	    "url": "/songheng/product/dftt-h5/basic/new-user"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5基础",
	// 	    "cname": "H5用户阅读分布",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_yonghuyuedufenbu",
	// 	    "url": "/songheng/product/dftt-h5/basic/distribute"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "H5新信息流统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_xinxinxiliu",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-new"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "H5渠道信息流idx统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_xinxiliuidx",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-idx"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "H5渠道内页idx统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_neiyeidx",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-page"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "H5信息流统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_xinxiliunew",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "H5新闻分类统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_xinwenfenlei",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-category"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "汽车信息流统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_qichexinxiliu",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-auto"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "惠头条idx统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_htt_xinxiliuidx",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-htt-idx"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5信息流",
	// 	    "cname": "惠头条内页idx统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_htt_neiyeidx",
	// 	    "url": "/songheng/product/dftt-h5/newspool/count-htt-page"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5推荐",
	// 	    "cname": "H5渠道推荐数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_qudaotuijian",
	// 	    "url": "/songheng/product/dftt-h5/recommend/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "H5推荐",
	// 	    "cname": "H5视频推荐统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_shipintuijian",
	// 	    "url": "/songheng/product/dftt-h5/recommend/video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "视频与美女实时TOP",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shipinyumeinvshishitop",
	// 	    "url": "/songheng/product/dftt-h5/video-img/realtime-top"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "视频数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shipinshujutongji",
	// 	    "url": "/songheng/product/dftt-h5/video-img/video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "视频每日渠道统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_shipinmeiriqudao",
	// 	    "url": "/songheng/product/dftt-h5/video-img/video-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "图片站数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_tupianzhanshujutongji",
	// 	    "url": "/songheng/product/dftt-h5/video-img/imgs"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "H5视频每日排行榜",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_shipinpaihangbang",
	// 	    "url": "/songheng/product/dftt-h5/video-img/h5-video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "视频按来源统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_qd_shipinlaiyuan",
	// 	    "url": "/songheng/product/dftt-h5/video-img/video-source"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "视频+图片",
	// 	    "cname": "视频分享点击数据",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shipinfenxiang",
	// 	    "url": "/songheng/product/dftt-h5/video-img/video-share"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "SEO搜索",
	// 	    "cname": "神马搜索",
	// 	    "modelpage": "#songheng/chanpin/dftth5_seo_shenma",
	// 	    "url": "/songheng/product/dftt-h5/seo/shenma"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条H5端",
	// 	    "name4": "SEO搜索",
	// 	    "cname": "搜狗搜索",
	// 	    "modelpage": "#songheng/chanpin/dftth5_seo_360",
	// 	    "url": "/songheng/product/dftt-h5/seo/sougou"
	// 	},

	// 	// 东方头条APP端
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP实时",
	// 	    "cname": "APP今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_jinriqudao",
	// 	    "url": "/songheng/product/dftt-app/realtime/data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP实时",
	// 	    "cname": "APP今日渠道详情页",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_jinrixiangqingye",
	// 	    "url": "/songheng/product/dftt-app/realtime/detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP实时",
	// 	    "cname": "APP推荐信息流数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_tuijianxinxiliu",
	// 	    "url": "/songheng/product/dftt-app/realtime/newspool"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP实时",
	// 	    "cname": "APP实时登陆数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_shishidenglu",
	// 	    "url": "/songheng/product/dftt-app/realtime/login"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP基础数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_jichu",
	// 	    "url": "/songheng/product/dftt-app/basic/data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP每日活跃数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_meirihuoyue",
	// 	    "url": "/songheng/product/dftt-app/basic/active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP每日渠道版本统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_meiriqudaobanbentongji",
	// 	    "url": "/songheng/product/dftt-app/basic/qid-version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP小视频统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_xiaoshipin",
	// 	    "url": "/songheng/product/dftt-app/basic/small-video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP按钮统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_anniutongji",
	// 	    "url": "/songheng/product/dftt-app/basic/btns"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP每日Top榜单",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_meiritop",
	// 	    "url": "/songheng/product/dftt-app/basic/top-rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP商城每日数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shangcheng",
	// 	    "url": "/songheng/product/dftt-app/basic/mall-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP商城数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shangchengshuju",
	// 	    "url": "/songheng/product/dftt-app/basic/mall"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP基础",
	// 	    "cname": "APP每日活跃数据简版",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_meirihuoyuecut",
	// 	    "url": "/songheng/product/dftt-app/basic/active-simple"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP渠道地域分布",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaodiyufenbu",
	// 	    "url": "/songheng/product/dftt-app/origin"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP内活用户回归数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_yonghuhuigui",
	// 	    "url": "/songheng/product/dftt-app/regression"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP渠道质量监控",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaozhiliangjiankong",
	// 	    "url": "/songheng/product/dftt-app/quality"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP消息统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_xiaoxi",
	// 	    "url": "/songheng/product/dftt-app/message-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP用户等级",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yonghushengji",
	// 	    "url": "/songheng/product/dftt-app/user-grade"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "活动入口每日数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_huodongrukou",
	// 	    "url": "/songheng/product/dftt-app/activity-entry"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP版本升级数据 ",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_banbenshengji",
	// 	    "url": "/songheng/product/dftt-app/version-upgrade"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP详情",
	// 	    "cname": "APP云控获取失败报表",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yunkongshibai",
	// 	    "url": "/songheng/product/dftt-app/cloud-fail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "置顶新闻数据",
	// 	    "modelpage": "#gaoxin/jiankong/zhidingxinwen",
	// 	    "url": "/songheng/product/dftt-app/newspool/top"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP信息流统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_xinxiliu",
	// 	    "url": "/songheng/product/dftt-app/newspool/data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP渠道信息流idx统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_xinxiliuidx",
	// 	    "url": "/songheng/product/dftt-app/newspool/list-idx"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP渠道内页idx统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_neiyeidx",
	// 	    "url": "/songheng/product/dftt-app/newspool/page-idx"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP新闻分类统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_xinwenfenlei",
	// 	    "url": "/songheng/product/dftt-app/newspool/category-news"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP视频分类统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinfenleitongji",
	// 	    "url": "/songheng/product/dftt-app/newspool/category-video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP视频信息流idx",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinidx",
	// 	    "url": "/songheng/product/dftt-app/newspool/video-idx"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "信息流按阅读篇数分布",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_yuedufenbu",
	// 	    "url": "/songheng/product/dftt-app/newspool/read"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP信息流",
	// 	    "cname": "APP视频按来源统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinlaiyuan",
	// 	    "url": "/songheng/product/dftt-app/newspool/source"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推荐",
	// 	    "cname": "APP渠道推荐数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaotuijian",
	// 	    "url": "/songheng/product/dftt-app/recommend/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推荐",
	// 	    "cname": "APP视频推荐统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_shipintuijiantongji",
	// 	    "url": "/songheng/product/dftt-app/recommend/videos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推送&短信",
	// 	    "cname": "APP精准推送数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_jingzhuntuisong",
	// 	    "url": "/songheng/product/dftt-app/push/accurate"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推送&短信",
	// 	    "cname": "APP推送唤醒效果",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_tuisonghuanxing",
	// 	    "url": "/songheng/product/dftt-app/push/awaken"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推送&短信",
	// 	    "cname": "APP短信召回效果统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_duanxinzhaohuinew",
	// 	    "url": "/songheng/product/dftt-app/push/message"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP安卓手机信息",
	// 	    "cname": "APP安卓机型分布",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_anzhuojixingfenbu",
	// 	    "url": "/songheng/product/dftt-app/android/models"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP安卓手机信息",
	// 	    "cname": "安卓安装APP分布",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_anzhuofenbu",
	// 	    "url": "/songheng/product/dftt-app/android/distribute"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推广",
	// 	    "cname": "APP渠道注册数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaozhuce",
	// 	    "url": "/songheng/product/dftt-app/promote/register"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推广",
	// 	    "cname": "APP引导下载数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_yindaoxiazai",
	// 	    "url": "/songheng/product/dftt-app/promote/download"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推广",
	// 	    "cname": "APP安装活跃成本统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_anzhuanghuoyuechengben",
	// 	    "url": "/songheng/product/dftt-app/promote/install"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推广",
	// 	    "cname": "IOS推广统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_IOStuisonghuanxing",
	// 	    "url": "/songheng/product/dftt-app/promote/ios"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "APP推广",
	// 	    "cname": "红包悬浮统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_hongbao",
	// 	    "url": "/songheng/product/dftt-app/promote/red"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "评论",
	// 	    "cname": "APP评论统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_qd_pingluntongji",
	// 	    "url": "/songheng/product/dftt-app/comment/counts"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条APP端",
	// 	    "name4": "评论",
	// 	    "cname": "每日评论数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_meiripinglun",
	// 	    "url": "/songheng/product/dftt-app/comment/daily"
	// 	},

	// 	// 东方头条PC端
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC每日实时数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_meirishishi",
	// 	    "url": "/songheng/product/dftt-pc/news/daily-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_meirishujuxiangqing",
	// 	    "url": "/songheng/product/dftt-pc/news/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC每日渠道数据统计",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_meiriqudaotongji",
	// 	    "url": "/songheng/product/dftt-pc/news/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC栏位点击数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_lanweidianjishuju",
	// 	    "url": "/songheng/product/dftt-pc/news/daily-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC终端数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_zhongduan",
	// 	    "url": "/songheng/product/dftt-pc/news/daily-terminal"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_jinriqudao",
	// 	    "url": "/songheng/product/dftt-pc/news/today-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC渠道地域分布",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_qudaodiyufenbu",
	// 	    "url": "/songheng/product/dftt-pc/news/qid-region"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC首页栏位实时数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_shouyelanweishishi",
	// 	    "url": "/songheng/product/dftt-pc/news/index-pos-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC首页栏位每日统计",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_shouyelanweimeiri",
	// 	    "url": "/songheng/product/dftt-pc/news/index-pos-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC外链点击数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_wailiandianji",
	// 	    "url": "/songheng/product/dftt-pc/news/links"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC渠道推荐数据(新版)",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_qudaotuijianxin",
	// 	    "url": "/songheng/product/dftt-pc/news/recommend-new"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC渠道推荐数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_qudaotuijian",
	// 	    "url": "/songheng/product/dftt-pc/news/recommend"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "稿库数据统计",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_gaojianshuju",
	// 	    "url": "/songheng/product/dftt-pc/news/library"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC用户中心每日数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_yonghuzhongxin",
	// 	    "url": "/songheng/product/dftt-pc/news/user-center"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "PC信息流统计",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_xinxiliu",
	// 	    "url": "/songheng/product/dftt-pc/news/newspool"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "新闻站",
	// 	    "cname": "导航渠道新闻排行",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_xinwenpaihangbang",
	// 	    "url": "/songheng/product/dftt-pc/news/qid-nav"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站点击统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shipinzhandianjitongji",
	// 	    "url": "/songheng/product/dftt-pc/video/click"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站点击位置统计",
	// 	    "modelpage": "#songheng/chanpin/dftth5_zt_shipinzhandianjiweizhitongji",
	// 	    "url": "/songheng/product/dftt-pc/video/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站广告统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanguanggaotongji",
	// 	    "url": "/songheng/product/dftt-pc/video/gg"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhanjinriqudao",
	// 	    "url": "/songheng/product/dftt-pc/video/today"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanmeirishujutongji",
	// 	    "url": "/songheng/product/dftt-pc/video/daily-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanmeiriqudaotongji",
	// 	    "url": "/songheng/product/dftt-pc/video/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站外链点击数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhanwailian",
	// 	    "url": "/songheng/product/dftt-pc/video/links"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站前贴片广告分析",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanqiantiepiangaunggaofenxi",
	// 	    "url": "/songheng/product/dftt-pc/video/gg-patch"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "视频站",
	// 	    "cname": "视频站页面点击率分析",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhandianjilv",
	// 	    "url": "/songheng/product/dftt-pc/video/click-rate"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站首页栏位实时数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweishishi",
	// 	    "url": "/songheng/product/dftt-pc/military/index-pos-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站首页栏位每日统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweimeiri",
	// 	    "url": "/songheng/product/dftt-pc/military/index-pos-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站每日点击数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_meiridianji",
	// 	    "url": "/songheng/product/dftt-pc/military/daily-click"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站每日位置统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_meiriweizhi",
	// 	    "url": "/songheng/product/dftt-pc/military/daily-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_meirishujuxiangqing",
	// 	    "url": "/songheng/product/dftt-pc/military/daily-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_meirishujutongji",
	// 	    "url": "/songheng/product/dftt-pc/military/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站终端数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_zhongduanshuju",
	// 	    "url": "/songheng/product/dftt-pc/military/terminal"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_qudaoyemiandianjitongji",
	// 	    "url": "/songheng/product/dftt-pc/military/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站首页渠道栏位点击",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweidianji",
	// 	    "url": "/songheng/product/dftt-pc/military/index-qid-click"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "军事站",
	// 	    "cname": "军事站今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_js_jinriqudao",
	// 	    "url": "/songheng/product/dftt-pc/military/today-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站点击位置统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_dianjiweizhi",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_meirishujuxiangqing",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/daily-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_meirishujutongji",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_meiriqudao",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站终端数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_zhongduan",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/terminal"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_jinriqudao",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/today-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站分页面数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_fenyemianshujutongji",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/pages"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "猎奇站",
	// 	    "cname": "猎奇站外链点击数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_wailiandianji",
	// 	    "url": "/songheng/product/dftt-pc/lieqi/links"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "天气站",
	// 	    "cname": "天气站每日数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_tq_meirishuju",
	// 	    "url": "/songheng/product/dftt-pc/weather/daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "SEO",
	// 	    "cname": "360搜索",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_360sousuo",
	// 	    "url": "/songheng/product/dftt-pc/seo/search-360"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "SEO",
	// 	    "cname": "搜狗搜索",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_qd_sougousousuo",
	// 	    "url": "/songheng/product/dftt-pc/seo/search-sougou"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "养生站",
	// 	    "cname": "养生站每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_ys_meiriqudao",
	// 	    "url": "/songheng/product/dftt-pc/health/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "养生站",
	// 	    "cname": "养生站每日位置统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_ys_meiriweizhi",
	// 	    "url": "/songheng/product/dftt-pc/health/daily-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "养生站",
	// 	    "cname": "养生站今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_ys_jinriqudao",
	// 	    "url": "/songheng/product/dftt-pc/health/today-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "东方汽车",
	// 	    "cname": "PC每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meirixiangqing",
	// 	    "url": "/songheng/product/dftt-pc/auto/daily-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "东方汽车",
	// 	    "cname": "PC每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meiriqudao",
	// 	    "url": "/songheng/product/dftt-pc/auto/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "东方汽车",
	// 	    "cname": "PC每日栏位统计",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meirilanwei",
	// 	    "url": "/songheng/product/dftt-pc/auto/daily-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "图片站",
	// 	    "cname": "每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_pic_meiriqudao",
	// 	    "url": "/songheng/product/dftt-pc/imgs/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "图片站",
	// 	    "cname": "栏位数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_pic_lanweishuju",
	// 	    "url": "/songheng/product/dftt-pc/imgs/pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方头条PC端",
	// 	    "name4": "图片站",
	// 	    "cname": "外链点击数据",
	// 	    "modelpage": "#songheng/chanpin/dfttpc_pic_wailiandianji",
	// 	    "url": "/songheng/product/dftt-pc/imgs/links"
	// 	},

	// 	// SDK
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "SDK",
	// 	    "name4": "",
	// 	    "cname": "SDK渠道版本数据",
	// 	    "modelpage": "#songheng/chanpin/sdk/sdk_qudaoshuju",
	// 	    "url": "/songheng/product/sdk/qid-version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "SDK",
	// 	    "name4": "",
	// 	    "cname": "SDK今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/sdk/sdk_jinriqudao",
	// 	    "url": "/songheng/product/sdk/today-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "SDK",
	// 	    "name4": "",
	// 	    "cname": "SDK渠道推荐数据",
	// 	    "modelpage": "#songheng/chanpin/sdk/sdk_qudaotuijian",
	// 	    "url": "/songheng/product/sdk/qid-recommend"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "SDK",
	// 	    "name4": "",
	// 	    "cname": "SDK今日渠道详情页",
	// 	    "modelpage": "#songheng/chanpin/sdk/sdk_jinrixiangqingye",
	// 	    "url": "/songheng/product/sdk/today-detail"
	// 	},

	// 	// 猫扑
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "今日实时数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_shishitongji",
	// 	    "url": "/songheng/product/mop/mop-master/realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "网站整体数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_wangzhanzhengti",
	// 	    "url": "/songheng/product/mop/mop-master/whole"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "网站点击位置统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_dianjiweizhinew",
	// 	    "url": "/songheng/product/mop/mop-master/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_meiriqudao",
	// 	    "url": "/songheng/product/mop/mop-master/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "网站首页信息流点击统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_shouyexinxiliu",
	// 	    "url": "/songheng/product/mop/mop-master/index-newspool"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "贴贴",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_tietie",
	// 	    "url": "/songheng/product/mop/mop-master/tt"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "大杂烩",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_dazahui",
	// 	    "url": "/songheng/product/mop/mop-master/dzh"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "猫扑视频",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_mopshipin",
	// 	    "url": "/songheng/product/mop/mop-master/videos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "猫扑首页",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_shouye",
	// 	    "url": "/songheng/product/mop/mop-master/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑主站",
	// 	    "cname": "猫扑发帖统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpzz_fatietongji",
	// 	    "url": "/songheng/product/mop/mop-master/post"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "APP基础数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_jichushuju",
	// 	    "url": "/songheng/product/mop/mop-app/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "APP留存率",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_liucun",
	// 	    "url": "/songheng/product/mop/mop-app/retention"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "APP时长",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_shichang",
	// 	    "url": "/songheng/product/mop/mop-app/duration"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "APP点击位置",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_weizhidianji",
	// 	    "url": "/songheng/product/mop/mop-app/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "看点视频榜单",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_kandianshipin",
	// 	    "url": "/songheng/product/mop/mop-app/kandian-rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑APP",
	// 	    "cname": "看点视频信息流",
	// 	    "modelpage": "#songheng/chanpin/mp_mpapp_shipinxinxiliu",
	// 	    "url": "/songheng/product/mop/mop-app/kandian-newspool"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑H5",
	// 	    "cname": "今日实时数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_shishitongji",
	// 	    "url": "/songheng/product/mop/mop-h5/realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑H5",
	// 	    "cname": "猫扑H5视频",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_shipin",
	// 	    "url": "/songheng/product/mop/mop-h5/videos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑H5",
	// 	    "cname": "H5每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_meiriqudao",
	// 	    "url": "/songheng/product/mop/mop-h5/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑H5",
	// 	    "cname": "猫扑贴贴H5",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_tietie",
	// 	    "url": "/songheng/product/mop/mop-h5/tt"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑H5",
	// 	    "cname": "大杂烩H5",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_dazhahui",
	// 	    "url": "/songheng/product/mop/mop-h5/dzh"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "PC每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_pcmeirishujuxiangqing",
	// 	    "url": "/songheng/product/mop/mop-auto/pc-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "PC每日渠道统计(新版)",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_pcmeiriqudaotongjinew",
	// 	    "url": "/songheng/product/mop/mop-auto/pc-qid-new"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "PC页面栏位每日统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_pclanweimeiritongji",
	// 	    "url": "/songheng/product/mop/mop-auto/pc-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "H5每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_h5meirishujuxiangqing",
	// 	    "url": "/songheng/product/mop/mop-auto/h5-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "H5每日信息流统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mph5_h5meirixinxiliutongji",
	// 	    "url": "/songheng/product/mop/mop-auto/h5-newspool"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "H5渠道数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_h5qudao",
	// 	    "url": "/songheng/product/mop/mop-auto/h5-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "PC终端数据统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_zhongduanshuju",
	// 	    "url": "/songheng/product/mop/mop-auto/pc-terminal"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑汽车",
	// 	    "cname": "汽车迷你页数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpqc_miniye",
	// 	    "url": "/songheng/product/mop/mop-auto/mini"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑视频APP",
	// 	    "cname": "每日渠道版本数据",
	// 	    "modelpage": "#songheng/chanpin/mp_shipin_meiriqudaobanben",
	// 	    "url": "/songheng/product/mop/mop-video-app/qid-version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑视频APP",
	// 	    "cname": "每日安装活跃数据",
	// 	    "modelpage": "#songheng/chanpin/mp_shipin_meirihuoyue",
	// 	    "url": "/songheng/product/mop/mop-video-app/install-active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学基础数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_jichu",
	// 	    "url": "/songheng/product/mop/mop-wx/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学页面访问数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_fangwen",
	// 	    "url": "/songheng/product/mop/mop-wx/page-active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学PC渠道数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_pcqudaoshujunew",
	// 	    "url": "/songheng/product/mop/mop-wx/pc-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学H5渠道数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_h5qudaoshuju",
	// 	    "url": "/songheng/product/mop/mop-wx/h5-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学H5基础数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_h5jichushuju",
	// 	    "url": "/songheng/product/mop/mop-wx/h5-basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑文学",
	// 	    "cname": "猫扑文学H5小说排行榜",
	// 	    "modelpage": "#songheng/chanpin/mp_mpwx_h5paihangbang",
	// 	    "url": "/songheng/product/mop/mop-wx/h5-rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "每日基础数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_jichu",
	// 	    "url": "/songheng/product/mop/mop-novel-app/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "充值消费数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_chongzhi",
	// 	    "url": "/songheng/product/mop/mop-novel-app/charge"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "每日安装活跃数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_meirihuoyue",
	// 	    "url": "/songheng/product/mop/mop-novel-app/install-active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "小说阅读数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_yuedu",
	// 	    "url": "/songheng/product/mop/mop-novel-app/read"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "按钮打点数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_anniudadian",
	// 	    "url": "/songheng/product/mop/mop-novel-app/point"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "小说排行榜",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_paihangbang",
	// 	    "url": "/songheng/product/mop/mop-novel-app/rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "实时安装数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_shishianzhuang",
	// 	    "url": "/songheng/product/mop/mop-novel-app/install-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "APP每日任务数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_meirirenwu",
	// 	    "url": "/songheng/product/mop/mop-novel-app/task"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "APP每日签到数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_meiriqiandao",
	// 	    "url": "/songheng/product/mop/mop-novel-app/sign"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "每日分享数据",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_meirifenxiang",
	// 	    "url": "/songheng/product/mop/mop-novel-app/share"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫扑小说APP",
	// 	    "cname": "APP推送统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpxs_tuisong",
	// 	    "url": "/songheng/product/mop/mop-novel-app/push"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫仔队",
	// 	    "cname": "猫仔队PC渠道统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mzd_pcqudaoshuju",
	// 	    "url": "/songheng/product/mop/mz/pc-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猫扑",
	// 	    "name4": "猫仔队",
	// 	    "cname": "猫仔队H5渠道统计",
	// 	    "modelpage": "#songheng/chanpin/mp_mpcat_qudaotongji",
	// 	    "url": "/songheng/product/mop/mz/h5-qid"
	// 	},


	// 	// 输入法
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "基础统计数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_banben",
	// 	    "url": "/songheng/product/typewriting/whole/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "版本数据统计",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_jichu",
	// 	    "url": "/songheng/product/typewriting/whole/version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "输入法竞品数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_shurufajinpin",
	// 	    "url": "/songheng/product/typewriting/whole/competitor"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "软件竞品数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_ruanjianjinpin",
	// 	    "url": "/songheng/product/typewriting/whole/software"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "默认浏览器数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_morenliulanqi",
	// 	    "url": "/songheng/product/typewriting/whole/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "逍遥笔外部接口",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_xiaoyaobiwaibujiekou",
	// 	    "url": "/songheng/product/typewriting/whole/xyb"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "捆绑数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_kunbang",
	// 	    "url": "/songheng/product/typewriting/whole/binding"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "当日捆绑实时数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_kunbangshishi",
	// 	    "url": "/songheng/product/typewriting/whole/binding-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "捆绑数据展示位",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_kunbangzhanshi",
	// 	    "url": "/songheng/product/typewriting/whole/binding-show"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "整体数据",
	// 	    "cname": "捆绑错误码数据",
	// 	    "modelpage": "#songheng/chanpin/srf_zt_kunbangcuowuma",
	// 	    "url": "/songheng/product/typewriting/whole/binding-error"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法渠道质量分析",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_qudaozhiliangfenxi",
	// 	    "url": "/songheng/product/typewriting/qid/quality"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_suoyouqudao",
	// 	    "url": "/songheng/product/typewriting/qid/all"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法李鑫渠道数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_lixinqudao",
	// 	    "url": "/songheng/product/typewriting/qid/lixin"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法7654渠道数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_7654qudao",
	// 	    "url": "/songheng/product/typewriting/qid/qid7654"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "软件竞品渠道数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_ruanjianjinpinqudao",
	// 	    "url": "/songheng/product/typewriting/qid/competitor"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法渠道版本数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_qudaobanbang",
	// 	    "url": "/songheng/product/typewriting/qid/version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法渠道实时数据",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_qudaoshishi",
	// 	    "url": "/songheng/product/typewriting/qid/realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "安装卸载操作系统分布",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_xitongfenbu",
	// 	    "url": "/songheng/product/typewriting/qid/uninstall-os"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法安装时间分布",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_anzhuangshijianfenbu",
	// 	    "url": "/songheng/product/typewriting/qid/install-time"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "输入法",
	// 	    "name4": "渠道数据",
	// 	    "cname": "输入法被调起程序",
	// 	    "modelpage": "#songheng/chanpin/srf_qd_beidiaoqichengxu",
	// 	    "url": "/songheng/product/typewriting/qid/program"
	// 	},

	// 	// 布丁桌面
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "布丁桌面",
	// 	    "name4": "",
	// 	    "cname": "用户行为数据",
	// 	    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_yonghuxingwei",
	// 	    "url": "/songheng/product/pudding/user"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "布丁桌面",
	// 	    "name4": "",
	// 	    "cname": "布丁桌面基础数据",
	// 	    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_jichu",
	// 	    "url": "/songheng/product/pudding/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "布丁桌面",
	// 	    "name4": "",
	// 	    "cname": "布丁桌面所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_suoyouqudao",
	// 	    "url": "/songheng/product/pudding/qid"
	// 	},

	// 	// 迷你页
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "基础数据统计",
	// 	    "modelpage": "#songheng/chanpin/mny_jichu",
	// 	    "url": "/songheng/product/mini/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "栏位点击",
	// 	    "modelpage": "#songheng/chanpin/mny_lanweidianji",
	// 	    "url": "/songheng/product/mini/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "具体位置点击数据",
	// 	    "modelpage": "#songheng/chanpin/mny_jutiweizhidianji",
	// 	    "url": "/songheng/product/mini/click-specific"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "URL点击排序",
	// 	    "modelpage": "#songheng/chanpin/mny_urldianjipaixu",
	// 	    "url": "/songheng/product/mini/click-url"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "迷你页数据实时监控",
	// 	    "modelpage": "#songheng/chanpin/mny_shishijiankong",
	// 	    "url": "/songheng/product/mini/monitor"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "渠道迷你页基础数据",
	// 	    "modelpage": "#songheng/chanpin/mny_jichushuju",
	// 	    "url": "/songheng/product/mini/qid-basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "渠道迷你页栏位数据",
	// 	    "modelpage": "#songheng/chanpin/mny_lanweishuju",
	// 	    "url": "/songheng/product/mini/qid-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "迷你页渠道标签数据",
	// 	    "modelpage": "#songheng/chanpin/mny_qudaobiaoqian",
	// 	    "url": "/songheng/product/mini/qid-tag"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "迷你页",
	// 	    "name4": "",
	// 	    "cname": "迷你页外链点击统计",
	// 	    "modelpage": "#songheng/chanpin/mny_wailiandianji",
	// 	    "url": "/songheng/product/mini/links"
	// 	},

	// 	// 看图王
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "看图王",
	// 	    "name4": "",
	// 	    "cname": "看图王基础数据",
	// 	    "modelpage": "#songheng/chanpin/ktw_zt_jichu",
	// 	    "url": "/songheng/product/ktw/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "看图王",
	// 	    "name4": "",
	// 	    "cname": "看图王所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/ktw_qd_souyouqudao",
	// 	    "url": "/songheng/product/ktw/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "看图王",
	// 	    "name4": "",
	// 	    "cname": "PDF阅读器统计",
	// 	    "modelpage": "#songheng/chanpin/ktw_qd_PDF",
	// 	    "url": "/songheng/product/ktw/pdf-read"
	// 	},

	// 	// Clover
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "Clover",
	// 	    "name4": "",
	// 	    "cname": "Clover基础数据",
	// 	    "modelpage": "#songheng/chanpin/clover_zt_jichu",
	// 	    "url": "/songheng/product/clover/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "Clover",
	// 	    "name4": "",
	// 	    "cname": "Clover所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/wnllq_qd_suoyou",
	// 	    "url": "/songheng/product/clover/qid"
	// 	},

	// 	// 浏览器
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "浏览器",
	// 	    "name4": "",
	// 	    "cname": "基础数据",
	// 	    "modelpage": "#songheng/chanpin/wnllq_zt_jichu",
	// 	    "url": "/songheng/product/browser/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "浏览器",
	// 	    "name4": "",
	// 	    "cname": "浏览器所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/wnllq_qd_wannengsuoyouqudao",
	// 	    "url": "/songheng/product/browser/qid"
	// 	},

	// 	// 人民万年历
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "人民万年历",
	// 	    "name4": "",
	// 	    "cname": "基础数据统计",
	// 	    "modelpage": "#songheng/chanpin/rmwnl_zt_jichu",
	// 	    "url": "/songheng/product/rmwnl/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "人民万年历",
	// 	    "name4": "",
	// 	    "cname": "竞品数据",
	// 	    "modelpage": "#songheng/chanpin/rmwnl_zt_jinpin",
	// 	    "url": "/songheng/product/rmwnl/competitor"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "人民万年历",
	// 	    "name4": "",
	// 	    "cname": "日历渠道版本数据",
	// 	    "modelpage": "#songheng/chanpin/rmwnl_qd_riliqudaobanben",
	// 	    "url": "/songheng/product/rmwnl/qid-version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "人民万年历",
	// 	    "name4": "",
	// 	    "cname": "竞品渠道数据",
	// 	    "modelpage": "#songheng/chanpin/rmwnl_qd_jinpinqudao",
	// 	    "url": "/songheng/product/rmwnl/competitor-qid"
	// 	},

	// 	// 东方号
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "流量监控",
	// 	    "cname": "东方号基础数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_jichu",
	// 	    "url": "/songheng/product/dfh/flow/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "流量监控",
	// 	    "cname": "东方号H5页面统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_h5yemian",
	// 	    "url": "/songheng/product/dfh/flow/h5"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "流量监控",
	// 	    "cname": "每日订阅数据",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_meiridingyue",
	// 	    "url": "/songheng/product/dfh/flow/daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "流量监控",
	// 	    "cname": "用户订阅排行榜",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_dingyuebang",
	// 	    "url": "/songheng/product/dfh/flow/user"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "流量监控",
	// 	    "cname": "东方号渠道统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_qudao",
	// 	    "url": "/songheng/product/dfh/flow/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "留存监控",
	// 	    "cname": "东方号用户发文统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_fawentongji",
	// 	    "url": "/songheng/product/dfh/retain/user"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "留存监控",
	// 	    "cname": "东方号积分指数",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_jifenzhishu",
	// 	    "url": "/songheng/product/dfh/retain/integral"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "留存监控",
	// 	    "cname": "东方号留存分析",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_liucunfenxi",
	// 	    "url": "/songheng/product/dfh/retain/analysis"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "内容监控",
	// 	    "cname": "东方号优质内容榜",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_youzhineirong",
	// 	    "url": "/songheng/product/dfh/content/rank"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "内容监控",
	// 	    "cname": "东方号用户内容统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_yonghuneirongnew",
	// 	    "url": "/songheng/product/dfh/content/user"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "内容监控",
	// 	    "cname": "东方号运营数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_yunyingshuju",
	// 	    "url": "/songheng/product/dfh/content/operate"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "内容监控",
	// 	    "cname": "东方号编辑数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_bianjishuju",
	// 	    "url": "/songheng/product/dfh/content/edit"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "审核监控",
	// 	    "cname": "东方号审核统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_shenhe",
	// 	    "url": "/songheng/product/dfh/check/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "审核监控",
	// 	    "cname": "东方号入驻审核",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_ruzhushenhe",
	// 	    "url": "/songheng/product/dfh/check/enter"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方号",
	// 	    "name4": "分成监控",
	// 	    "cname": "东方号分配金数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttdfh_fenpeijin",
	// 	    "url": "/songheng/product/dfh/check/gold"
	// 	},

	// 	// 东方体育
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "",
	// 	    "cname": "体育站实时汇总",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_shishihuizong",
	// 	    "url": "/songheng/product/df-sports/realtime/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "",
	// 	    "cname": "体育项目汇总",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_xiangmuhuizong",
	// 	    "url": "/songheng/product/df-sports/project/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "新闻每日实时数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_shishitongji",
	// 	    "url": "/songheng/product/df-sports/df-pc/daily-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "新闻每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_meirishujuxiangqing",
	// 	    "url": "/songheng/product/df-sports/df-pc/daily-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "新闻每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_meirishujutongji",
	// 	    "url": "/songheng/product/df-sports/df-pc/daily-count"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "新闻每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_meiriqudao",
	// 	    "url": "/songheng/product/df-sports/df-pc/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "CMS添加新闻统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_cmstongji",
	// 	    "url": "/songheng/product/df-sports/df-pc/cms-add"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "东方号添加新闻统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_dfhtianjiaxinwen",
	// 	    "url": "/songheng/product/df-sports/df-pc/dfh-add"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "分页面统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_fenyemiantongji",
	// 	    "url": "/songheng/product/df-sports/df-pc/pages"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "新闻点击位置统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_dianjiweizhi",
	// 	    "url": "/songheng/product/df-sports/df-pc/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "今日渠道数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_jinriqudao",
	// 	    "url": "/songheng/product/df-sports/df-pc/today-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "视频广告统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_shipinguanggao",
	// 	    "url": "/songheng/product/df-sports/df-pc/video-gg"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育PC端",
	// 	    "cname": "首页栏位实时数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_xw_shouyelanweishishi",
	// 	    "url": "/songheng/product/df-sports/df-pc/index-pos"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育H5端",
	// 	    "cname": "H5新闻每日实时数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_shishitongji",
	// 	    "url": "/songheng/product/df-sports/df-h5/daily-realtime"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育H5端",
	// 	    "cname": "H5新闻每日数据详情",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meirishujuxiangqing",
	// 	    "url": "/songheng/product/df-sports/df-h5/daily-detail"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育H5端",
	// 	    "cname": "H5新闻每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meirishujutongji",
	// 	    "url": "/songheng/product/df-sports/df-h5/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育H5端",
	// 	    "cname": "H5新闻每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meiriqudao",
	// 	    "url": "/songheng/product/df-sports/df-h5/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育H5端",
	// 	    "cname": "H5功能统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyzh5_xw_gongneng",
	// 	    "url": "/songheng/product/df-sports/df-h5/func"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP基础数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_jichu",
	// 	    "url": "/songheng/product/df-sports/df-app/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_qudaoshuju",
	// 	    "url": "/songheng/product/df-sports/df-app/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP版本数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_banbenshuju",
	// 	    "url": "/songheng/product/df-sports/df-app/version"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP每日活跃数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_meirihuoyue",
	// 	    "url": "/songheng/product/df-sports/df-app/active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP新闻推荐数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_tuijianshuju",
	// 	    "url": "/songheng/product/df-sports/df-app/recommend"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "东方体育APP",
	// 	    "cname": "APP按钮点击数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyzapp_xw_anniudianji",
	// 	    "url": "/songheng/product/df-sports/df-app/btns"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "五星体育PC端",
	// 	    "cname": "PC新闻每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_wxty_meirishuju",
	// 	    "url": "/songheng/product/df-sports/wx-pc/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "五星体育PC端",
	// 	    "cname": "PC新闻每日渠道数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_wxty_meiriqudao",
	// 	    "url": "/songheng/product/df-sports/wx-pc/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "五星体育H5端",
	// 	    "cname": "H5新闻每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_wxty_h5meirishuju",
	// 	    "url": "/songheng/product/df-sports/wx-h5/daily-data"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "五星体育H5端",
	// 	    "cname": "H5新闻每日渠道数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_wxty_h5meiriqudao",
	// 	    "url": "/songheng/product/df-sports/wx-h5/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "猫扑体育H5端",
	// 	    "cname": "每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_mph5_meirishuju",
	// 	    "url": "/songheng/product/df-sports/mop-h5/daily-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方体育",
	// 	    "name4": "猫扑体育PC端",
	// 	    "cname": "PC新闻每日渠道数据统计",
	// 	    "modelpage": "#songheng/chanpin/dftttyz_mppc_meiriqudaoshuju",
	// 	    "url": "/songheng/product/df-sports/mop-pc/daily-qid"
	// 	},

	// 	// 东方影视
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视",
	// 	    "name4": "",
	// 	    "cname": "东方影视基础数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfys_jichunew",
	// 	    "url": "/songheng/product/df-video/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视",
	// 	    "name4": "",
	// 	    "cname": "东方影视渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfys_qudao",
	// 	    "url": "/songheng/product/df-video/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视",
	// 	    "name4": "",
	// 	    "cname": "外部渠道导量数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfys_qudaodaoliang",
	// 	    "url": "/songheng/product/df-video/outside"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视",
	// 	    "name4": "",
	// 	    "cname": "网站位置点击数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfys_dianjiweizhi",
	// 	    "url": "/songheng/product/df-video/click"
	// 	},

	// 	// 东方影视客户端
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端活跃数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_huoyue",
	// 	    "url": "/songheng/product/video-client/active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端基础数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_jichu",
	// 	    "url": "/songheng/product/video-client/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_suoyouqudao",
	// 	    "url": "/songheng/product/video-client/qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端启动数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_qidongshuju",
	// 	    "url": "/songheng/product/video-client/auto"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端视频数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_shipinshuju",
	// 	    "url": "/songheng/product/video-client/video"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "东方影视客户端",
	// 	    "name4": "",
	// 	    "cname": "客户端用户行为统计",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_yonghuxingwei",
	// 	    "url": "/songheng/product/video-client/user-behavior"
	// 	},

	// 	// 天气
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "天气",
	// 	    "name4": "",
	// 	    "cname": "天气基础数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqijichushuju",
	// 	    "url": "/songheng/product/weather/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "天气",
	// 	    "name4": "",
	// 	    "cname": "天气打点数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqidadianshuju",
	// 	    "url": "/songheng/product/weather/point"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "天气",
	// 	    "name4": "",
	// 	    "cname": "天气快报",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqikuaibao",
	// 	    "url": "/songheng/product/weather/report"
	// 	},

	// 	// 地方站
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "地方站",
	// 	    "name4": "扬子头条",
	// 	    "cname": "PC每日数据统计",
	// 	    "modelpage": "#songheng/chanpin/dfz/yztt_pcmeirishuju",
	// 	    "url": "/songheng/product/local-site/yztt-pc-daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "地方站",
	// 	    "name4": "",
	// 	    "cname": "东方头条中地方用户数据",
	// 	    "modelpage": "#songheng/chanpin/dfz/dfz_yonghushuju",
	// 	    "url": "/songheng/product/local-site/local-user"
	// 	},

	// 	// 猎奇站H5
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猎奇站H5",
	// 	    "name4": "",
	// 	    "cname": "猎奇H5每日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_h5meriqudao",
	// 	    "url": "/songheng/product/lieqi-h5/daily"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "猎奇站H5",
	// 	    "name4": "",
	// 	    "cname": "猎奇H5今日渠道数据",
	// 	    "modelpage": "#songheng/chanpin/dftttsz_lq_h5jinriqudao",
	// 	    "url": "/songheng/product/lieqi-h5/today"
	// 	},

	// 	// 压缩软件
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "压缩软件",
	// 	    "name4": "",
	// 	    "cname": "基础数据",
	// 	    "modelpage": "#songheng/chanpin/yasuo/yasuo_zt_jichu",
	// 	    "url": "/songheng/product/zip-software/basic"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "产品",
	// 	    "name3": "压缩软件",
	// 	    "name4": "",
	// 	    "cname": "所有渠道数据",
	// 	    "modelpage": "#songheng/chanpin/yasuo/yasuo_qd_suoyouqudao",
	// 	    "url": "/songheng/product/zip-software/qid"
	// 	},


	// 	/**
	// 	 * 上海嵩恒 -- 销售
	// 	 */

	// 	// 广告
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "销售",
	// 	    "name3": "广告",
	// 	    "name4": "",
	// 	    "cname": "PC广告收入统计(新)",
	// 	    "modelpage": "#songheng/shouyi/pcincomenew",
	// 	    "url": "/songheng/sale/gg/pc"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "销售",
	// 	    "name3": "广告",
	// 	    "name4": "",
	// 	    "cname": "软件收入统计",
	// 	    "modelpage": "#songheng/xiaoshou/gg_ruanjianshouru",
	// 	    "url": "/songheng/sale/gg/software"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "销售",
	// 	    "name3": "广告",
	// 	    "name4": "",
	// 	    "cname": "广告销售收益-APP-开屏",
	// 	    "modelpage": "#songheng/xiaoshou/gg_appkaiping",
	// 	    "url": "/songheng/sale/gg/app-open"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "销售",
	// 	    "name3": "广告",
	// 	    "name4": "",
	// 	    "cname": "竞价表自动化",
	// 	    "modelpage": "#songheng/xiaoshou/gg_jingjiabiao",
	// 	    "url": "/songheng/sale/gg/bidlist"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "销售",
	// 	    "name3": "广告",
	// 	    "name4": "",
	// 	    "cname": "猫扑广告投放统计",
	// 	    "modelpage": "#songheng/xiaoshou/gg_maoputoufang",
	// 	    "url": "/songheng/sale/gg/mop"
	// 	},


	// 	/**
	// 	 * 上海嵩恒 -- 监控中心
	// 	 */

	// 	// 实时看板
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "实时看板",
	// 	    "name4": "",
	// 	    "cname": "东方头条实时看板",
	// 	    "modelpage": "#songheng/jiankong/shishikanban",
	// 	    "url": "/songheng/monitor/kanban/dftt"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "实时看板",
	// 	    "name4": "",
	// 	    "cname": "DB实时监控",
	// 	    "modelpage": "#songheng/jiankong/dbkanban",
	// 	    "url": "/songheng/monitor/kanban/db"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "实时看板",
	// 	    "name4": "",
	// 	    "cname": "MOP-DB监控",
	// 	    "modelpage": "#songheng/jiankong/mopdbshishi",
	// 	    "url": "/songheng/monitor/kanban/db-mop"
	// 	},

	// 	// 工具
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "工具",
	// 	    "name4": "",
	// 	    "cname": "URL流量查询工具",
	// 	    "modelpage": "#songheng/jiankong/urlchaxun",
	// 	    "url": "/songheng/monitor/tool/url"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "工具",
	// 	    "name4": "",
	// 	    "cname": "自动邮件配置",
	// 	    "modelpage": "#songheng/jiankong/youjianpeizhi",
	// 	    "url": "/songheng/monitor/tool/email"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "工具",
	// 	    "name4": "",
	// 	    "cname": "关联信息查询工具",
	// 	    "modelpage": "#songheng/jiankong/guanlianxinxi",
	// 	    "url": "/songheng/monitor/tool/relation"
	// 	},

	// 	// 任务监控
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "推荐G监控",
	// 	    "modelpage": "#songheng/jiankong/tuijian_g",
	// 	    "url": "/songheng/monitor/task/recommend"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "热点新闻发现",
	// 	    "modelpage": "#songheng/jiankong/redianxinwenfaxian",
	// 	    "url": "/songheng/monitor/task/hotnews"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "发分监控",
	// 	    "modelpage": "#songheng/jiankong/fenfajiankong",
	// 	    "url": "/songheng/monitor/task/distribute"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "DC报表监控",
	// 	    "modelpage": "#songheng/jiankong/baobiaojiankong",
	// 	    "url": "/songheng/monitor/task/dc-report"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "DC访问日志监控",
	// 	    "modelpage": "#gaoxin/jiankong/dcfangwen",
	// 	    "url": "/gaoxin/monitor/task/dc-active"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "任务监控",
	// 	    "name4": "",
	// 	    "cname": "采样点击率",
	// 	    "modelpage": "#songheng/jiankong/caiyangdianjilv",
	// 	    "url": "/songheng/monitor/task/click-rate"
	// 	},

	// 	// 集群性能监控
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "接口调用监控",
	// 	    "modelpage": "#gaoxin/jiankong/jiekoudiaoyong",
	// 	    "url": "/gaoxin/monitor/colony/api"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "东方头条HBaseTable监控",
	// 	    "modelpage": "#gaoxin/jiankong/HBaseTable",
	// 	    "url": "/gaoxin/monitor/colony/dftt-hbase-table"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "东方头条HBaseServer监控",
	// 	    "modelpage": "#gaoxin/jiankong/HBaseServer",
	// 	    "url": "/gaoxin/monitor/colony/dftt-hbase-server"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "东方头条HBase集群监控",
	// 	    "modelpage": "#gaoxin/jiankong/hbasejiqun",
	// 	    "url": "/gaoxin/monitor/colony/dftt-hbase"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "东方头条HDFS集群监控",
	// 	    "modelpage": "#gaoxin/jiankong/hdfs",
	// 	    "url": "/gaoxin/monitor/colony/dftt-hdfs"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "东方头条集群LoadAverage监控",
	// 	    "modelpage": "#gaoxin/jiankong/loadaverage",
	// 	    "url": "/gaoxin/monitor/colony/dftt-load-average"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "集群性能监控",
	// 	    "name4": "",
	// 	    "cname": "YARN_SPARK集群任务监控",
	// 	    "modelpage": "#gaoxin/jiankong/yarn_spark",
	// 	    "url": "/gaoxin/monitor/colony/yarn-spark"
	// 	},

	// 	// 用户画像
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "用户画像",
	// 	    "name4": "",
	// 	    "cname": "用户画像",
	// 	    "modelpage": "#songheng/jiankong/yonghuhuaxiang",
	// 	    "url": "/songheng/monitor/user/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "用户画像",
	// 	    "name4": "",
	// 	    "cname": "注册用户画像",
	// 	    "modelpage": "#songheng/jiankong/zhuceyonghuhuaxiang",
	// 	    "url": "/songheng/monitor/user/register"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "用户画像",
	// 	    "name4": "",
	// 	    "cname": "标签库",
	// 	    "modelpage": "#songheng/jiankong/biaoqianku",
	// 	    "url": "/songheng/monitor/user/tag"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "用户画像",
	// 	    "name4": "",
	// 	    "cname": "标签库管理",
	// 	    "modelpage": "#songheng/jiankong/biaoqiankuguanli",
	// 	    "url": "/songheng/monitor/user/tag-manage"
	// 	},

	// 	// 反作弊监控
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "反作弊监控",
	// 	    "name4": "",
	// 	    "cname": "反作弊监控",
	// 	    "modelpage": "#songheng/chanpin/money/money_appshualiang",
	// 	    "url": "/songheng/monitor/hlguard/index"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "反作弊监控",
	// 	    "name4": "",
	// 	    "cname": "APP异常渠道统计",
	// 	    "modelpage": "#songheng/chanpin/dfttapp_zt_yichangqudao",
	// 	    "url": "/songheng/monitor/hlguard/app-qid"
	// 	},
	// 	{
	// 	    "name1": "上海嵩恒",
	// 	    "name2": "监控中心",
	// 	    "name3": "反作弊监控",
	// 	    "name4": "",
	// 	    "cname": "NGINX异常IP监控",
	// 	    "modelpage": "#songheng/jiankong/yichangip",
	// 	    "url": "/songheng/monitor/hlguard/nginx"
	// 	},



	// 	/**
	// 	 * 上海高欣 -- 产品
	// 	 */
		
	// 	// m021导航
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "产品",
	// 	    "name3": "m021导航",
	// 	    "name4": "",
	// 	    "cname": "WPS导航数据统计",
	// 	    "modelpage": "#gaoxin/chanpin/dhm021_dhwpsshuju",
	// 	    "url": "/gaoxin/product/m021/nav-wps"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "产品",
	// 	    "name3": "m021导航",
	// 	    "name4": "",
	// 	    "cname": "m021导航统计",
	// 	    "modelpage": "#gaoxin/chanpin/dhm021_dhm021shuju",
	// 	    "url": "/gaoxin/product/m021/nav-m021"
	// 	},

	// 	// 9973导航
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "产品",
	// 	    "name3": "9973导航",
	// 	    "name4": "",
	// 	    "cname": "9973导航统计",
	// 	    "modelpage": "#gaoxin/chanpin/dh9973_shuju",
	// 	    "url": "/gaoxin/product/9973/nav"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "产品",
	// 	    "name3": "9973导航",
	// 	    "name4": "",
	// 	    "cname": "9973点击位置统计",
	// 	    "modelpage": "#gaoxin/chanpin/dh9973_dianjiweizhi",
	// 	    "url": "/gaoxin/product/9973/click"
	// 	},


	// 	/**
	// 	 *  上海高欣 -- 监控
	// 	 */

	// 	// CMS审核编辑
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "CMS审核编辑",
	// 	    "name4": "",
	// 	    "cname": "新闻审核监控",
	// 	    "modelpage": "#gaoxin/jiankong/xinwenshenhe",
	// 	    "url": "/gaoxin/monitor/cms/news-check"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "CMS审核编辑",
	// 	    "name4": "",
	// 	    "cname": "视频审核监控",
	// 	    "modelpage": "#gaoxin/jiankong/shipinshenhe",
	// 	    "url": "/gaoxin/monitor/cms/video-check"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "CMS审核编辑",
	// 	    "name4": "",
	// 	    "cname": "新闻编辑监控",
	// 	    "modelpage": "#gaoxin/jiankong/xinwenbianji",
	// 	    "url": "/gaoxin/monitor/cms/news-edit"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "CMS审核编辑",
	// 	    "name4": "",
	// 	    "cname": "新闻标注监控",
	// 	    "modelpage": "#gaoxin/jiankong/xinwenbiaozhu",
	// 	    "url": "/gaoxin/monitor/cms/news-mark"
	// 	},

	// 	// 爬虫监控
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "爬虫监控",
	// 	    "name4": "",
	// 	    "cname": "爬虫监控统计-新闻",
	// 	    "modelpage": "#gaoxin/jiankong/pachong",
	// 	    "url": "/gaoxin/monitor/spider/news"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "爬虫监控",
	// 	    "name4": "",
	// 	    "cname": "爬虫监控统计-视频",
	// 	    "modelpage": "#gaoxin/jiankong/shipin",
	// 	    "url": "/gaoxin/monitor/spider/video"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "爬虫监控",
	// 	    "name4": "",
	// 	    "cname": "爬虫监控统计-图片",
	// 	    "modelpage": "#gaoxin/jiankong/tupian",
	// 	    "url": "/gaoxin/monitor/spider/imgs"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "爬虫监控",
	// 	    "name4": "",
	// 	    "cname": "爬虫数据考核",
	// 	    "modelpage": "#gaoxin/jiankong/pachongshujukaohe",
	// 	    "url": "/gaoxin/monitor/spider/access"
	// 	},

	// 	// 推送数据监控
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "推送数据监控",
	// 	    "name4": "",
	// 	    "cname": "人工推送效果数据",
	// 	    "modelpage": "#gaoxin/jiankong/rengongtuisongxiaoguo",
	// 	    "url": "/gaoxin/monitor/push/man"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "推送数据监控",
	// 	    "name4": "",
	// 	    "cname": "渠道推送数据监控",
	// 	    "modelpage": "#gaoxin/jiankong/qudaotuisong",
	// 	    "url": "/gaoxin/monitor/push/qid"
	// 	},

	// 	// 评论监控
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "评论监控",
	// 	    "name4": "",
	// 	    "cname": "评论用户监控",
	// 	    "modelpage": "#gaoxin/jiankong/pinglunyonghu",
	// 	    "url": "/gaoxin/monitor/commnet/user"
	// 	},
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "评论监控",
	// 	    "name4": "",
	// 	    "cname": "评论审核监控",
	// 	    "modelpage": "#gaoxin/jiankong/pinglunshenhe",
	// 	    "url": "/gaoxin/monitor/commnet/check"
	// 	},

	// 	// H5PC实时热点top500
	// 	{
	// 	    "name1": "上海高欣",
	// 	    "name2": "监控中心",
	// 	    "name3": "",
	// 	    "name4": "",
	// 	    "cname": "H5PC实时热点top500",
	// 	    "modelpage": "#gaoxin/jiankong/h5pcrediantop100",
	// 	    "url": "/gaoxin/monitor/h5pc/hot-top"
	// 	},



	// 	/**
	// 	 *  上海展盟 -- 产品
	// 	 */

	// 	// 导航站统计
	// 	{
	// 	    "name1": "上海展盟",
	// 	    "name2": "产品",
	// 	    "name3": "导航站统计",
	// 	    "name4": "",
	// 	    "cname": "7654留存率",
	// 	    "modelpage": "#zhanmeng/chanpin/dhztj_dh7654liucunlv",
	// 	    "url": "/zhanmeng/product/navsite/retention"
	// 	},
	// 	{
	// 	    "name1": "上海展盟",
	// 	    "name2": "产品",
	// 	    "name3": "导航站统计",
	// 	    "name4": "",
	// 	    "cname": "7654导航统计",
	// 	    "modelpage": "#zhanmeng/chanpin/dhztj_dh7654shuju",
	// 	    "url": "/zhanmeng/product/navsite/nav"
	// 	},
	// 	{
	// 	    "name1": "上海展盟",
	// 	    "name2": "产品",
	// 	    "name3": "导航站统计",
	// 	    "name4": "",
	// 	    "cname": "7654点击位置统计",
	// 	    "modelpage": "#zhanmeng/chanpin/dhztj_dh7654dianjiweizhi",
	// 	    "url": "/zhanmeng/product/navsite/click-pos"
	// 	},
	// 	{
	// 	    "name1": "上海展盟",
	// 	    "name2": "产品",
	// 	    "name3": "导航站统计",
	// 	    "name4": "",
	// 	    "cname": "7654game导航统计",
	// 	    "modelpage": "#zhanmeng/chanpin/dhztj_dh7654game",
	// 	    "url": "/zhanmeng/product/navsite/game"
	// 	},
	// 	{
	// 	    "name1": "上海展盟",
	// 	    "name2": "产品",
	// 	    "name3": "导航站统计",
	// 	    "name4": "",
	// 	    "cname": "7654game点击位置统计",
	// 	    "modelpage": "#zhanmeng/chanpin/dhztj_dh7654gamedianjiweizhi",
	// 	    "url": "/zhanmeng/product/navsite/game-click"
	// 	},


	// 	/**
	// 	 *  上海乐湃 -- 产品
	// 	 */
		
	// 	// 51苹果助手
	// 	{
	// 	    "name1": "上海乐湃",
	// 	    "name2": "产品",
	// 	    "name3": "51苹果助手",
	// 	    "name4": "",
	// 	    "cname": "H5各渠道汇总数据",
	// 	    "modelpage": "#lepai/chanpin/51pgzs_gequdaohuizong",
	// 	    "url": "/lepai/product/51ios/h5-qid"
	// 	},

	// 	/**
	// 	 *  数据看板
	// 	 */
	// 	{
	// 	    "name1": "数据看板",
	// 	    "name2": "数据看板",
	// 	    "name3": "",
	// 	    "name4": "",
	// 	    "cname": "数据看板",
	// 	    "modelpage": "#income",
	// 	    "url": "/kanban/index"
	// 	},


	// 	/**
	// 	 * 其他
	// 	 */
	// 	{
	// 	    "name1": "其他",
	// 	    "name2": "",
	// 	    "name3": "",
	// 	    "name4": "",
	// 	    "cname": "登录",
	// 	    "url": "/others/login"
	// 	},
	// 	{
	// 	    "name1": "其他",
	// 	    "name2": "",
	// 	    "name3": "",
	// 	    "name4": "",
	// 	    "cname": "网站地图",
	// 	    "url": "/others/sitemap"
	// 	}
	// ],


	routes: [
		/**
		 *  东方头条
		 */

		// 东方头条赚钱
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "赚钱任务总览",
		    "modelpage": "#songheng/chanpin/money/money_renwu",
		    "url": "/dftt/dftt-zq/task"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "阅读文章",
		    "cname": "阅读文章",
		    "modelpage": "#songheng/chanpin/money/money_yueduwenzhang",
		    "url": "/dftt/dftt-zq/read-article"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "阅读文章",
		    "cname": "阅读文章次数",
		    "modelpage": "#songheng/chanpin/money/money_yueducishu",
		    "url": "/dftt/dftt-zq/read-count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "阅读推送文章",
		    "modelpage": "#songheng/chanpin/money/money_yuedutuisong",
		    "url": "/dftt/dftt-zq/push"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "分享被阅读",
		    "cname": "分享新闻",
		    "modelpage": "#songheng/chanpin/money/money_fenxiangxinwen",
		    "url": "/dftt/dftt-zq/share-news"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "分享被阅读",
		    "cname": "分享被阅读",
		    "modelpage": "#songheng/chanpin/money/money_fenxiangyuedu",
		    "url": "/dftt/dftt-zq/share-readed"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "分享被阅读",
		    "cname": "新闻排行榜",
		    "modelpage": "#songheng/chanpin/money/money_xinwenpaihangbang",
		    "url": "/dftt/dftt-zq/share-rank"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "APP邀请收徒统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqingshoutu",
		    "url": "/dftt/dftt-zq/apprentice-app-count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "APP邀请收徒排行榜",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqingshoutupaihang",
		    "url": "/dftt/dftt-zq/apprentice-app-rank"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "师徒质量监控",
		    "modelpage": "#songheng/chanpin/money/money_shituzhiliang",
		    "url": "/dftt/dftt-zq/apprentice-quality"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "师父数据统计",
		    "modelpage": "#songheng/chanpin/money/money_shifushuju",
		    "url": "/dftt/dftt-zq/apprentice-master"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "徒弟数据统计",
		    "modelpage": "#songheng/chanpin/money/money_tudishuju",
		    "url": "/dftt/dftt-zq/apprentice-prentice"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "H5邀请",
		    "modelpage": "#songheng/chanpin/money/money_h5yaoqing",
		    "url": "/dftt/dftt-zq/apprentice-h5-invite"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "师徒活动",
		    "cname": "拼手气拆红包",
		    "modelpage": "#songheng/chanpin/money/money_shouqihongbao",
		    "url": "/dftt/dftt-zq/apprentice-red"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "摇钱树活动",
		    "cname": "摇钱树统计",
		    "modelpage": "#songheng/chanpin/money/money_yaoqianshu",
		    "url": "/dftt/dftt-zq/money-tree-count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "摇钱树活动",
		    "cname": "APP摇钱树次数分布",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_yaoqianshu",
		    "url": "/dftt/dftt-zq/money-tree-distribute"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "一次性任务奖励",
		    "modelpage": "#songheng/chanpin/money/money_yicirenwu",
		    "url": "/dftt/dftt-zq/disposable-reward"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "每日签到",
		    "modelpage": "#songheng/chanpin/money/money_meiriqiandao",
		    "url": "/dftt/dftt-zq/sign"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "每日任务",
		    "cname": "晒收入统计",
		    "modelpage": "#songheng/chanpin/money/money_shaishouru",
		    "url": "/dftt/dftt-zq/daily-show-income"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "每日任务",
		    "cname": "新闻搜索任务数据",
		    "modelpage": "#songheng/chanpin/money/money_xinwensousuo",
		    "url": "/dftt/dftt-zq/daily-news-search"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "唤醒",
		    "cname": "唤醒徒儿",
		    "modelpage": "#songheng/chanpin/money/money_huanxingtudi",
		    "url": "/dftt/dftt-zq/awaken-prentice"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "唤醒",
		    "cname": "唤醒好友",
		    "modelpage": "#songheng/chanpin/money/money_huanxinghaoyou",
		    "url": "/dftt/dftt-zq/awaken-friend"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "20点抢红包统计",
		    "modelpage": "#songheng/chanpin/money/money_qinghongbao",
		    "url": "/dftt/dftt-zq/twenty-dian"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "全民答题统计",
		    "modelpage": "#songheng/chanpin/money/money_quanmindati",
		    "url": "/dftt/dftt-zq/answer"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "排行榜统计",
		    "modelpage": "#songheng/chanpin/money/money_paihangbang",
		    "url": "/dftt/dftt-zq/rank"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条赚钱",
		    "name3": "",
		    "cname": "活动会场每日数据 ",
		    "modelpage": "#songheng/chanpin/money/money_huodonghuichang",
		    "url": "/dftt/dftt-zq/activity"
		},

		// 东方头条H5端
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5实时",
		    "cname": "H5实时统计数据",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shishitongji",
		    "url": "/dftt/dftt-h5/realtime/count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5实时",
		    "cname": "H5今日渠道数据",
		    "modelpage": "#songheng/chanpin/dftth5_qd_jinriqudao",
		    "url": "/dftt/dftt-h5/realtime/qid-data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5实时",
		    "cname": "H5今日渠道详情页",
		    "modelpage": "#songheng/chanpin/dftth5_qd_jinrixiangqingye",
		    "url": "/dftt/dftt-h5/realtime/qid-detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5每日数据详情",
		    "modelpage": "#songheng/chanpin/dftth5_zt_meirishujuxiangqing",
		    "url": "/dftt/dftt-h5/basic/detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5每日数据统计",
		    "modelpage": "#songheng/chanpin/dftth5_zt_meirishujutongji",
		    "url": "/dftt/dftt-h5/basic/count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftth5_qd_meiriqudao",
		    "url": "/dftt/dftt-h5/basic/qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5终端数据",
		    "modelpage": "#songheng/chanpin/dftth5_qd_zhongduanshuju",
		    "url": "/dftt/dftt-h5/basic/terminal"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5渠道地域分布",
		    "modelpage": "#songheng/chanpin/dftth5_qd_qudaodiyufenbu",
		    "url": "/dftt/dftt-h5/basic/region"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "头条404统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_toutiao404",
		    "url": "/dftt/dftt-h5/basic/count404"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5新老访客",
		    "modelpage": "#songheng/chanpin/dftth5_qd_xinlaofangke",
		    "url": "/dftt/dftt-h5/basic/new-user"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5基础",
		    "cname": "H5用户阅读分布",
		    "modelpage": "#songheng/chanpin/dftth5_qd_yonghuyuedufenbu",
		    "url": "/dftt/dftt-h5/basic/distribute"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "H5新信息流统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_xinxinxiliu",
		    "url": "/dftt/dftt-h5/newspool/count-new"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "H5渠道信息流idx统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_xinxiliuidx",
		    "url": "/dftt/dftt-h5/newspool/count-idx"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "H5渠道内页idx统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_neiyeidx",
		    "url": "/dftt/dftt-h5/newspool/count-page"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "H5信息流统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_xinxiliunew",
		    "url": "/dftt/dftt-h5/newspool/count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "H5新闻分类统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_xinwenfenlei",
		    "url": "/dftt/dftt-h5/newspool/count-category"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "汽车信息流统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_qichexinxiliu",
		    "url": "/dftt/dftt-h5/newspool/count-auto"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "惠头条idx统计",
		    "modelpage": "#songheng/chanpin/dftth5_htt_xinxiliuidx",
		    "url": "/dftt/dftt-h5/newspool/count-htt-idx"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5信息流",
		    "cname": "惠头条内页idx统计",
		    "modelpage": "#songheng/chanpin/dftth5_htt_neiyeidx",
		    "url": "/dftt/dftt-h5/newspool/count-htt-page"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5推荐",
		    "cname": "H5渠道推荐数据",
		    "modelpage": "#songheng/chanpin/dftth5_qd_qudaotuijian",
		    "url": "/dftt/dftt-h5/recommend/qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "H5推荐",
		    "cname": "H5视频推荐统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_shipintuijian",
		    "url": "/dftt/dftt-h5/recommend/video"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "视频与美女实时TOP",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shipinyumeinvshishitop",
		    "url": "/dftt/dftt-h5/video-img/realtime-top"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "视频数据统计",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shipinshujutongji",
		    "url": "/dftt/dftt-h5/video-img/video"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "视频每日渠道统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_shipinmeiriqudao",
		    "url": "/dftt/dftt-h5/video-img/video-daily"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "图片站数据统计",
		    "modelpage": "#songheng/chanpin/dftth5_zt_tupianzhanshujutongji",
		    "url": "/dftt/dftt-h5/video-img/imgs"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "H5视频每日排行榜",
		    "modelpage": "#songheng/chanpin/dftth5_qd_shipinpaihangbang",
		    "url": "/dftt/dftt-h5/video-img/h5-video"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "视频按来源统计",
		    "modelpage": "#songheng/chanpin/dftth5_qd_shipinlaiyuan",
		    "url": "/dftt/dftt-h5/video-img/video-source"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "视频+图片",
		    "cname": "视频分享点击数据",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shipinfenxiang",
		    "url": "/dftt/dftt-h5/video-img/video-share"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "SEO搜索",
		    "cname": "神马搜索",
		    "modelpage": "#songheng/chanpin/dftth5_seo_shenma",
		    "url": "/dftt/dftt-h5/seo/shenma"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条H5端",
		    "name3": "SEO搜索",
		    "cname": "搜狗搜索",
		    "modelpage": "#songheng/chanpin/dftth5_seo_360",
		    "url": "/dftt/dftt-h5/seo/sougou"
		},

		// 东方头条APP端
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP实时",
		    "cname": "APP今日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_jinriqudao",
		    "url": "/dftt/dftt-app/realtime/data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP实时",
		    "cname": "APP今日渠道详情页",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_jinrixiangqingye",
		    "url": "/dftt/dftt-app/realtime/detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP实时",
		    "cname": "APP推荐信息流数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_tuijianxinxiliu",
		    "url": "/dftt/dftt-app/realtime/newspool"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP实时",
		    "cname": "APP实时登陆数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_shishidenglu",
		    "url": "/dftt/dftt-app/realtime/login"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP基础数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_jichu",
		    "url": "/dftt/dftt-app/basic/data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP每日活跃数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_meirihuoyue",
		    "url": "/dftt/dftt-app/basic/active"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP每日渠道版本统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_meiriqudaobanbentongji",
		    "url": "/dftt/dftt-app/basic/qid-version"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP小视频统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_xiaoshipin",
		    "url": "/dftt/dftt-app/basic/small-video"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP按钮统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_anniutongji",
		    "url": "/dftt/dftt-app/basic/btns"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP每日Top榜单",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_meiritop",
		    "url": "/dftt/dftt-app/basic/top-rank"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP商城每日数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shangcheng",
		    "url": "/dftt/dftt-app/basic/mall-daily"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP商城数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shangchengshuju",
		    "url": "/dftt/dftt-app/basic/mall"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP基础",
		    "cname": "APP每日活跃数据简版",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_meirihuoyuecut",
		    "url": "/dftt/dftt-app/basic/active-simple"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP渠道地域分布",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaodiyufenbu",
		    "url": "/dftt/dftt-app/origin"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP内活用户回归数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_yonghuhuigui",
		    "url": "/dftt/dftt-app/regression"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP渠道质量监控",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaozhiliangjiankong",
		    "url": "/dftt/dftt-app/quality"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP消息统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_xiaoxi",
		    "url": "/dftt/dftt-app/message-count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP用户等级",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_yonghushengji",
		    "url": "/dftt/dftt-app/user-grade"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "活动入口每日数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_huodongrukou",
		    "url": "/dftt/dftt-app/activity-entry"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP版本升级数据 ",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_banbenshengji",
		    "url": "/dftt/dftt-app/version-upgrade"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP详情",
		    "cname": "APP云控获取失败报表",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_yunkongshibai",
		    "url": "/dftt/dftt-app/cloud-fail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "置顶新闻数据",
		    "modelpage": "#gaoxin/jiankong/zhidingxinwen",
		    "url": "/dftt/dftt-app/newspool/top"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP信息流统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_xinxiliu",
		    "url": "/dftt/dftt-app/newspool/data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP渠道信息流idx统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_xinxiliuidx",
		    "url": "/dftt/dftt-app/newspool/list-idx"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP渠道内页idx统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_neiyeidx",
		    "url": "/dftt/dftt-app/newspool/page-idx"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP新闻分类统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_xinwenfenlei",
		    "url": "/dftt/dftt-app/newspool/category-news"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP视频分类统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinfenleitongji",
		    "url": "/dftt/dftt-app/newspool/category-video"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP视频信息流idx",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinidx",
		    "url": "/dftt/dftt-app/newspool/video-idx"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "信息流按阅读篇数分布",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_yuedufenbu",
		    "url": "/dftt/dftt-app/newspool/read"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP信息流",
		    "cname": "APP视频按来源统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_shipinlaiyuan",
		    "url": "/dftt/dftt-app/newspool/source"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推荐",
		    "cname": "APP渠道推荐数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaotuijian",
		    "url": "/dftt/dftt-app/recommend/qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推荐",
		    "cname": "APP视频推荐统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_shipintuijiantongji",
		    "url": "/dftt/dftt-app/recommend/videos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推送&短信",
		    "cname": "APP精准推送数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_jingzhuntuisong",
		    "url": "/dftt/dftt-app/push/accurate"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推送&短信",
		    "cname": "APP推送唤醒效果",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_tuisonghuanxing",
		    "url": "/dftt/dftt-app/push/awaken"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推送&短信",
		    "cname": "APP短信召回效果统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_duanxinzhaohuinew",
		    "url": "/dftt/dftt-app/push/message"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP安卓手机信息",
		    "cname": "APP安卓机型分布",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_anzhuojixingfenbu",
		    "url": "/dftt/dftt-app/android/models"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP安卓手机信息",
		    "cname": "安卓安装APP分布",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_anzhuofenbu",
		    "url": "/dftt/dftt-app/android/distribute"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推广",
		    "cname": "APP渠道注册数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_qudaozhuce",
		    "url": "/dftt/dftt-app/promote/register"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推广",
		    "cname": "APP引导下载数据",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_yindaoxiazai",
		    "url": "/dftt/dftt-app/promote/download"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推广",
		    "cname": "APP安装活跃成本统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_anzhuanghuoyuechengben",
		    "url": "/dftt/dftt-app/promote/install"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推广",
		    "cname": "IOS推广统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_IOStuisonghuanxing",
		    "url": "/dftt/dftt-app/promote/ios"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "APP推广",
		    "cname": "红包悬浮统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_hongbao",
		    "url": "/dftt/dftt-app/promote/red"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "评论",
		    "cname": "APP评论统计",
		    "modelpage": "#songheng/chanpin/dfttapp_qd_pingluntongji",
		    "url": "/dftt/dftt-app/comment/counts"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条APP端",
		    "name3": "评论",
		    "cname": "每日评论数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_meiripinglun",
		    "url": "/dftt/dftt-app/comment/daily"
		},

		// 东方头条PC端
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC每日实时数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_meirishishi",
		    "url": "/dftt/dftt-pc/news/daily-realtime"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC每日数据详情",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_meirishujuxiangqing",
		    "url": "/dftt/dftt-pc/news/daily-data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC每日渠道数据统计",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_meiriqudaotongji",
		    "url": "/dftt/dftt-pc/news/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC栏位点击数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_lanweidianjishuju",
		    "url": "/dftt/dftt-pc/news/daily-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC终端数据",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_zhongduan",
		    "url": "/dftt/dftt-pc/news/daily-terminal"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC今日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_jinriqudao",
		    "url": "/dftt/dftt-pc/news/today-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC渠道地域分布",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_qudaodiyufenbu",
		    "url": "/dftt/dftt-pc/news/qid-region"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC首页栏位实时数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_shouyelanweishishi",
		    "url": "/dftt/dftt-pc/news/index-pos-realtime"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC首页栏位每日统计",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_shouyelanweimeiri",
		    "url": "/dftt/dftt-pc/news/index-pos-daily"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC外链点击数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_wailiandianji",
		    "url": "/dftt/dftt-pc/news/links"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC渠道推荐数据(新版)",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_qudaotuijianxin",
		    "url": "/dftt/dftt-pc/news/recommend-new"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC渠道推荐数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_qudaotuijian",
		    "url": "/dftt/dftt-pc/news/recommend"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "稿库数据统计",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_gaojianshuju",
		    "url": "/dftt/dftt-pc/news/library"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC用户中心每日数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_yonghuzhongxin",
		    "url": "/dftt/dftt-pc/news/user-center"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "PC信息流统计",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_xinxiliu",
		    "url": "/dftt/dftt-pc/news/newspool"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "新闻站",
		    "cname": "导航渠道新闻排行",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_xinwenpaihangbang",
		    "url": "/dftt/dftt-pc/news/qid-nav"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站点击统计",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shipinzhandianjitongji",
		    "url": "/dftt/dftt-pc/video/click"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站点击位置统计",
		    "modelpage": "#songheng/chanpin/dftth5_zt_shipinzhandianjiweizhitongji",
		    "url": "/dftt/dftt-pc/video/click-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站广告统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanguanggaotongji",
		    "url": "/dftt/dftt-pc/video/gg"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站今日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhanjinriqudao",
		    "url": "/dftt/dftt-pc/video/today"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站每日数据统计",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanmeirishujutongji",
		    "url": "/dftt/dftt-pc/video/daily-count"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站每日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanmeiriqudaotongji",
		    "url": "/dftt/dftt-pc/video/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站外链点击数据",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhanwailian",
		    "url": "/dftt/dftt-pc/video/links"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站前贴片广告分析",
		    "modelpage": "#songheng/chanpin/dfttapp_zt_shipinzhanqiantiepiangaunggaofenxi",
		    "url": "/dftt/dftt-pc/video/gg-patch"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "视频站",
		    "cname": "视频站页面点击率分析",
		    "modelpage": "#songheng/chanpin/dfttpc_zt_shipinzhandianjilv",
		    "url": "/dftt/dftt-pc/video/click-rate"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站首页栏位实时数据",
		    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweishishi",
		    "url": "/dftt/dftt-pc/military/index-pos-realtime"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站首页栏位每日统计",
		    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweimeiri",
		    "url": "/dftt/dftt-pc/military/index-pos-daily"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站每日点击数据",
		    "modelpage": "#songheng/chanpin/dftttsz_js_meiridianji",
		    "url": "/dftt/dftt-pc/military/daily-click"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站每日位置统计",
		    "modelpage": "#songheng/chanpin/dftttsz_js_meiriweizhi",
		    "url": "/dftt/dftt-pc/military/daily-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站每日数据详情",
		    "modelpage": "#songheng/chanpin/dftttsz_js_meirishujuxiangqing",
		    "url": "/dftt/dftt-pc/military/daily-detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttsz_js_meirishujutongji",
		    "url": "/dftt/dftt-pc/military/daily-data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站终端数据",
		    "modelpage": "#songheng/chanpin/dftttsz_js_zhongduanshuju",
		    "url": "/dftt/dftt-pc/military/terminal"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_js_qudaoyemiandianjitongji",
		    "url": "/dftt/dftt-pc/military/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站首页渠道栏位点击",
		    "modelpage": "#songheng/chanpin/dftttsz_js_shouyelanweidianji",
		    "url": "/dftt/dftt-pc/military/index-qid-click"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "军事站",
		    "cname": "军事站今日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_js_jinriqudao",
		    "url": "/dftt/dftt-pc/military/today-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站点击位置统计",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_dianjiweizhi",
		    "url": "/dftt/dftt-pc/lieqi/click-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站每日数据详情",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_meirishujuxiangqing",
		    "url": "/dftt/dftt-pc/lieqi/daily-detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_meirishujutongji",
		    "url": "/dftt/dftt-pc/lieqi/daily-data"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_meiriqudao",
		    "url": "/dftt/dftt-pc/lieqi/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站终端数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_zhongduan",
		    "url": "/dftt/dftt-pc/lieqi/terminal"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站今日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_jinriqudao",
		    "url": "/dftt/dftt-pc/lieqi/today-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站分页面数据统计",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_fenyemianshujutongji",
		    "url": "/dftt/dftt-pc/lieqi/pages"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "猎奇站",
		    "cname": "猎奇站外链点击数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_wailiandianji",
		    "url": "/dftt/dftt-pc/lieqi/links"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "天气站",
		    "cname": "天气站每日数据",
		    "modelpage": "#songheng/chanpin/dftttsz_tq_meirishuju",
		    "url": "/dftt/dftt-pc/weather/daily"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "SEO",
		    "cname": "360搜索",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_360sousuo",
		    "url": "/dftt/dftt-pc/seo/search-360"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "SEO",
		    "cname": "搜狗搜索",
		    "modelpage": "#songheng/chanpin/dfttpc_qd_sougousousuo",
		    "url": "/dftt/dftt-pc/seo/search-sougou"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "养生站",
		    "cname": "养生站每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_ys_meiriqudao",
		    "url": "/dftt/dftt-pc/health/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "养生站",
		    "cname": "养生站每日位置统计",
		    "modelpage": "#songheng/chanpin/dftttsz_ys_meiriweizhi",
		    "url": "/dftt/dftt-pc/health/daily-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "养生站",
		    "cname": "养生站今日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_ys_jinriqudao",
		    "url": "/dftt/dftt-pc/health/today-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "东方汽车",
		    "cname": "PC每日数据详情",
		    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meirixiangqing",
		    "url": "/dftt/dftt-pc/auto/daily-detail"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "东方汽车",
		    "cname": "PC每日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meiriqudao",
		    "url": "/dftt/dftt-pc/auto/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "东方汽车",
		    "cname": "PC每日栏位统计",
		    "modelpage": "#songheng/chanpin/dfttpc_dfqc_meirilanwei",
		    "url": "/dftt/dftt-pc/auto/daily-pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "图片站",
		    "cname": "每日渠道数据",
		    "modelpage": "#songheng/chanpin/dfttpc_pic_meiriqudao",
		    "url": "/dftt/dftt-pc/imgs/daily-qid"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "图片站",
		    "cname": "栏位数据",
		    "modelpage": "#songheng/chanpin/dfttpc_pic_lanweishuju",
		    "url": "/dftt/dftt-pc/imgs/pos"
		},
		{
		    "name1": "东方头条",
		    "name2": "东方头条PC端",
		    "name3": "图片站",
		    "cname": "外链点击数据",
		    "modelpage": "#songheng/chanpin/dfttpc_pic_wailiandianji",
		    "url": "/dftt/dftt-pc/imgs/links"
		},

		// SDK
		{
		    "name1": "东方头条",
		    "name2": "SDK",
		    "name3": "",
		    "cname": "SDK渠道版本数据",
		    "modelpage": "#songheng/chanpin/sdk/sdk_qudaoshuju",
		    "url": "/dftt/sdk/qid-version"
		},
		{
		    "name1": "东方头条",
		    "name2": "SDK",
		    "name3": "",
		    "cname": "SDK今日渠道数据",
		    "modelpage": "#songheng/chanpin/sdk/sdk_jinriqudao",
		    "url": "/dftt/sdk/today-data"
		},
		{
		    "name1": "东方头条",
		    "name2": "SDK",
		    "name3": "",
		    "cname": "SDK渠道推荐数据",
		    "modelpage": "#songheng/chanpin/sdk/sdk_qudaotuijian",
		    "url": "/dftt/sdk/qid-recommend"
		},
		{
		    "name1": "东方头条",
		    "name2": "SDK",
		    "name3": "",
		    "cname": "SDK今日渠道详情页",
		    "modelpage": "#songheng/chanpin/sdk/sdk_jinrixiangqingye",
		    "url": "/dftt/sdk/today-detail"
		},



		/**
		 * 猫扑
		 */

		// 猫扑主站
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "今日实时数据",
		    "modelpage": "#songheng/chanpin/mp_mpzz_shishitongji",
		    "url": "/mop/mop-master/realtime"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "网站整体数据",
		    "modelpage": "#songheng/chanpin/mp_mpzz_wangzhanzhengti",
		    "url": "/mop/mop-master/whole"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "网站点击位置统计",
		    "modelpage": "#songheng/chanpin/mp_mpzz_dianjiweizhinew",
		    "url": "/mop/mop-master/click-pos"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "每日渠道数据",
		    "modelpage": "#songheng/chanpin/mp_mpzz_meiriqudao",
		    "url": "/mop/mop-master/daily-qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "网站首页信息流点击统计",
		    "modelpage": "#songheng/chanpin/mp_mpzz_shouyexinxiliu",
		    "url": "/mop/mop-master/index-newspool"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "贴贴",
		    "modelpage": "#songheng/chanpin/mp_mpzz_tietie",
		    "url": "/mop/mop-master/tt"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "大杂烩",
		    "modelpage": "#songheng/chanpin/mp_mpzz_dazahui",
		    "url": "/mop/mop-master/dzh"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "猫扑视频",
		    "modelpage": "#songheng/chanpin/mp_mpzz_mopshipin",
		    "url": "/mop/mop-master/videos"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "猫扑首页",
		    "modelpage": "#songheng/chanpin/mp_mpzz_shouye",
		    "url": "/mop/mop-master/index"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑主站",
		    "name3": "",
		    "cname": "猫扑发帖统计",
		    "modelpage": "#songheng/chanpin/mp_mpzz_fatietongji",
		    "url": "/mop/mop-master/post"
		},

		// 猫扑APP
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "APP基础数据",
		    "modelpage": "#songheng/chanpin/mp_mpapp_jichushuju",
		    "url": "/mop/mop-app/basic"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "APP留存率",
		    "modelpage": "#songheng/chanpin/mp_mpapp_liucun",
		    "url": "/mop/mop-app/retention"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "APP时长",
		    "modelpage": "#songheng/chanpin/mp_mpapp_shichang",
		    "url": "/mop/mop-app/duration"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "APP点击位置",
		    "modelpage": "#songheng/chanpin/mp_mpapp_weizhidianji",
		    "url": "/mop/mop-app/click-pos"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "看点视频榜单",
		    "modelpage": "#songheng/chanpin/mp_mpapp_kandianshipin",
		    "url": "/mop/mop-app/kandian-rank"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑APP",
		    "name3": "",
		    "cname": "看点视频信息流",
		    "modelpage": "#songheng/chanpin/mp_mpapp_shipinxinxiliu",
		    "url": "/mop/mop-app/kandian-newspool"
		},

		// 猫扑H5
		{
		    "name1": "猫扑",
		    "name2": "猫扑H5",
		    "name3": "",
		    "cname": "今日实时数据",
		    "modelpage": "#songheng/chanpin/mp_mph5_shishitongji",
		    "url": "/mop/mop-h5/realtime"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑H5",
		    "name3": "",
		    "cname": "猫扑H5视频",
		    "modelpage": "#songheng/chanpin/mp_mph5_shipin",
		    "url": "/mop/mop-h5/videos"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑H5",
		    "name3": "",
		    "cname": "H5每日渠道数据",
		    "modelpage": "#songheng/chanpin/mp_mph5_meiriqudao",
		    "url": "/mop/mop-h5/qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑H5",
		    "name3": "",
		    "cname": "猫扑贴贴H5",
		    "modelpage": "#songheng/chanpin/mp_mph5_tietie",
		    "url": "/mop/mop-h5/tt"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑H5",
		    "name3": "",
		    "cname": "大杂烩H5",
		    "modelpage": "#songheng/chanpin/mp_mph5_dazhahui",
		    "url": "/mop/mop-h5/dzh"
		},

		// 猫扑汽车
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "PC每日数据详情",
		    "modelpage": "#songheng/chanpin/mp_mpqc_pcmeirishujuxiangqing",
		    "url": "/mop/mop-auto/pc-detail"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "PC每日渠道统计(新版)",
		    "modelpage": "#songheng/chanpin/mp_mpqc_pcmeiriqudaotongjinew",
		    "url": "/mop/mop-auto/pc-qid-new"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "PC页面栏位每日统计",
		    "modelpage": "#songheng/chanpin/mp_mpqc_pclanweimeiritongji",
		    "url": "/mop/mop-auto/pc-pos"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "H5每日数据详情",
		    "modelpage": "#songheng/chanpin/mp_mph5_h5meirishujuxiangqing",
		    "url": "/mop/mop-auto/h5-detail"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "H5每日信息流统计",
		    "modelpage": "#songheng/chanpin/mp_mph5_h5meirixinxiliutongji",
		    "url": "/mop/mop-auto/h5-newspool"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "H5渠道数据",
		    "modelpage": "#songheng/chanpin/mp_mpqc_h5qudao",
		    "url": "/mop/mop-auto/h5-qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "PC终端数据统计",
		    "modelpage": "#songheng/chanpin/mp_mpqc_zhongduanshuju",
		    "url": "/mop/mop-auto/pc-terminal"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑汽车",
		    "name3": "",
		    "cname": "汽车迷你页数据",
		    "modelpage": "#songheng/chanpin/mp_mpqc_miniye",
		    "url": "/mop/mop-auto/mini"
		},

		// 猫扑视频APP
		{
		    "name1": "猫扑",
		    "name2": "猫扑视频APP",
		    "name3": "",
		    "cname": "每日渠道版本数据",
		    "modelpage": "#songheng/chanpin/mp_shipin_meiriqudaobanben",
		    "url": "/mop/mop-video-app/qid-version"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑视频APP",
		    "name3": "",
		    "cname": "每日安装活跃数据",
		    "modelpage": "#songheng/chanpin/mp_shipin_meirihuoyue",
		    "url": "/mop/mop-video-app/install-active"
		},

		// 猫扑文学
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学基础数据",
		    "modelpage": "#songheng/chanpin/mp_mpwx_jichu",
		    "url": "/mop/mop-wx/basic"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学页面访问数据",
		    "modelpage": "#songheng/chanpin/mp_mpwx_fangwen",
		    "url": "/mop/mop-wx/page-active"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学PC渠道数据",
		    "modelpage": "#songheng/chanpin/mp_mpwx_pcqudaoshujunew",
		    "url": "/mop/mop-wx/pc-qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学H5渠道数据",
		    "modelpage": "#songheng/chanpin/mp_mpwx_h5qudaoshuju",
		    "url": "/mop/mop-wx/h5-qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学H5基础数据",
		    "modelpage": "#songheng/chanpin/mp_mpwx_h5jichushuju",
		    "url": "/mop/mop-wx/h5-basic"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑文学",
		    "name3": "",
		    "cname": "猫扑文学H5小说排行榜",
		    "modelpage": "#songheng/chanpin/mp_mpwx_h5paihangbang",
		    "url": "/mop/mop-wx/h5-rank"
		},

		// 猫扑小说APP
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "每日基础数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_jichu",
		    "url": "/mop/mop-novel-app/basic"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "充值消费数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_chongzhi",
		    "url": "/mop/mop-novel-app/charge"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "每日安装活跃数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_meirihuoyue",
		    "url": "/mop/mop-novel-app/install-active"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "小说阅读数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_yuedu",
		    "url": "/mop/mop-novel-app/read"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "按钮打点数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_anniudadian",
		    "url": "/mop/mop-novel-app/point"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "小说排行榜",
		    "modelpage": "#songheng/chanpin/mp_mpxs_paihangbang",
		    "url": "/mop/mop-novel-app/rank"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "实时安装数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_shishianzhuang",
		    "url": "/mop/mop-novel-app/install-realtime"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "APP每日任务数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_meirirenwu",
		    "url": "/mop/mop-novel-app/task"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "APP每日签到数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_meiriqiandao",
		    "url": "/mop/mop-novel-app/sign"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "每日分享数据",
		    "modelpage": "#songheng/chanpin/mp_mpxs_meirifenxiang",
		    "url": "/mop/mop-novel-app/share"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫扑小说APP",
		    "name3": "",
		    "cname": "APP推送统计",
		    "modelpage": "#songheng/chanpin/mp_mpxs_tuisong",
		    "url": "/mop/mop-novel-app/push"
		},

		// 猫仔队
		{
		    "name1": "猫扑",
		    "name2": "猫仔队",
		    "name3": "",
		    "cname": "猫仔队PC渠道统计",
		    "modelpage": "#songheng/chanpin/mp_mzd_pcqudaoshuju",
		    "url": "/mop/mz/pc-qid"
		},
		{
		    "name1": "猫扑",
		    "name2": "猫仔队",
		    "name3": "",
		    "cname": "猫仔队H5渠道统计",
		    "modelpage": "#songheng/chanpin/mp_mpcat_qudaotongji",
		    "url": "/mop/mz/h5-qid"
		},



		/**
		 * 软件中心
		 */

		// 输入法
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "基础统计数据",
		    "modelpage": "#songheng/chanpin/srf_zt_banben",
		    "url": "/software/typewriting/whole/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "版本数据统计",
		    "modelpage": "#songheng/chanpin/srf_zt_jichu",
		    "url": "/software/typewriting/whole/version"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "输入法竞品数据",
		    "modelpage": "#songheng/chanpin/srf_zt_shurufajinpin",
		    "url": "/software/typewriting/whole/competitor"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "软件竞品数据",
		    "modelpage": "#songheng/chanpin/srf_zt_ruanjianjinpin",
		    "url": "/software/typewriting/whole/software"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "默认浏览器数据",
		    "modelpage": "#songheng/chanpin/srf_zt_morenliulanqi",
		    "url": "/software/typewriting/whole/index"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "逍遥笔外部接口",
		    "modelpage": "#songheng/chanpin/srf_zt_xiaoyaobiwaibujiekou",
		    "url": "/software/typewriting/whole/xyb"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "捆绑数据",
		    "modelpage": "#songheng/chanpin/srf_zt_kunbang",
		    "url": "/software/typewriting/whole/binding"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "当日捆绑实时数据",
		    "modelpage": "#songheng/chanpin/srf_zt_kunbangshishi",
		    "url": "/software/typewriting/whole/binding-daily"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "捆绑数据展示位",
		    "modelpage": "#songheng/chanpin/srf_zt_kunbangzhanshi",
		    "url": "/software/typewriting/whole/binding-show"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "整体数据",
		    "cname": "捆绑错误码数据",
		    "modelpage": "#songheng/chanpin/srf_zt_kunbangcuowuma",
		    "url": "/software/typewriting/whole/binding-error"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法渠道质量分析",
		    "modelpage": "#songheng/chanpin/srf_qd_qudaozhiliangfenxi",
		    "url": "/software/typewriting/qid/quality"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法所有渠道数据",
		    "modelpage": "#songheng/chanpin/srf_qd_suoyouqudao",
		    "url": "/software/typewriting/qid/all"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法李鑫渠道数据",
		    "modelpage": "#songheng/chanpin/srf_qd_lixinqudao",
		    "url": "/software/typewriting/qid/lixin"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法7654渠道数据",
		    "modelpage": "#songheng/chanpin/srf_qd_7654qudao",
		    "url": "/software/typewriting/qid/qid7654"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "软件竞品渠道数据",
		    "modelpage": "#songheng/chanpin/srf_qd_ruanjianjinpinqudao",
		    "url": "/software/typewriting/qid/competitor"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法渠道版本数据",
		    "modelpage": "#songheng/chanpin/srf_qd_qudaobanbang",
		    "url": "/software/typewriting/qid/version"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法渠道实时数据",
		    "modelpage": "#songheng/chanpin/srf_qd_qudaoshishi",
		    "url": "/software/typewriting/qid/realtime"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "安装卸载操作系统分布",
		    "modelpage": "#songheng/chanpin/srf_qd_xitongfenbu",
		    "url": "/software/typewriting/qid/uninstall-os"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法安装时间分布",
		    "modelpage": "#songheng/chanpin/srf_qd_anzhuangshijianfenbu",
		    "url": "/software/typewriting/qid/install-time"
		},
		{
		    "name1": "软件中心",
		    "name2": "输入法",
		    "name3": "渠道数据",
		    "cname": "输入法被调起程序",
		    "modelpage": "#songheng/chanpin/srf_qd_beidiaoqichengxu",
		    "url": "/software/typewriting/qid/program"
		},

		// 布丁桌面
		{
		    "name1": "软件中心",
		    "name2": "布丁桌面",
		    "name3": "",
		    "cname": "用户行为数据",
		    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_yonghuxingwei",
		    "url": "/software/pudding/user"
		},
		{
		    "name1": "软件中心",
		    "name2": "布丁桌面",
		    "name3": "",
		    "cname": "布丁桌面基础数据",
		    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_jichu",
		    "url": "/software/pudding/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "布丁桌面",
		    "name3": "",
		    "cname": "布丁桌面所有渠道数据",
		    "modelpage": "#songheng/chanpin/bdzm/bdzm_zt_suoyouqudao",
		    "url": "/software/pudding/qid"
		},

		// 迷你页
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "基础数据统计",
		    "modelpage": "#songheng/chanpin/mny_jichu",
		    "url": "/software/mini/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "栏位点击",
		    "modelpage": "#songheng/chanpin/mny_lanweidianji",
		    "url": "/software/mini/click-pos"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "具体位置点击数据",
		    "modelpage": "#songheng/chanpin/mny_jutiweizhidianji",
		    "url": "/software/mini/click-specific"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "URL点击排序",
		    "modelpage": "#songheng/chanpin/mny_urldianjipaixu",
		    "url": "/software/mini/click-url"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "迷你页数据实时监控",
		    "modelpage": "#songheng/chanpin/mny_shishijiankong",
		    "url": "/software/mini/monitor"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "渠道迷你页基础数据",
		    "modelpage": "#songheng/chanpin/mny_jichushuju",
		    "url": "/software/mini/qid-basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "渠道迷你页栏位数据",
		    "modelpage": "#songheng/chanpin/mny_lanweishuju",
		    "url": "/software/mini/qid-pos"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "迷你页渠道标签数据",
		    "modelpage": "#songheng/chanpin/mny_qudaobiaoqian",
		    "url": "/software/mini/qid-tag"
		},
		{
		    "name1": "软件中心",
		    "name2": "迷你页",
		    "name3": "",
		    "cname": "迷你页外链点击统计",
		    "modelpage": "#songheng/chanpin/mny_wailiandianji",
		    "url": "/software/mini/links"
		},

		// 看图王
		{
		    "name1": "软件中心",
		    "name2": "看图王",
		    "name3": "",
		    "cname": "看图王基础数据",
		    "modelpage": "#songheng/chanpin/ktw_zt_jichu",
		    "url": "/software/ktw/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "看图王",
		    "name3": "",
		    "cname": "看图王所有渠道数据",
		    "modelpage": "#songheng/chanpin/ktw_qd_souyouqudao",
		    "url": "/software/ktw/qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "看图王",
		    "name3": "",
		    "cname": "PDF阅读器统计",
		    "modelpage": "#songheng/chanpin/ktw_qd_PDF",
		    "url": "/software/ktw/pdf-read"
		},

		// Clover
		{
		    "name1": "软件中心",
		    "name2": "Clover",
		    "name3": "",
		    "cname": "Clover基础数据",
		    "modelpage": "#songheng/chanpin/clover_zt_jichu",
		    "url": "/software/clover/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "Clover",
		    "name3": "",
		    "cname": "Clover所有渠道数据",
		    "modelpage": "#songheng/chanpin/wnllq_qd_suoyou",
		    "url": "/software/clover/qid"
		},

		// 浏览器
		{
		    "name1": "软件中心",
		    "name2": "浏览器",
		    "name3": "",
		    "cname": "基础数据",
		    "modelpage": "#songheng/chanpin/wnllq_zt_jichu",
		    "url": "/software/browser/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "浏览器",
		    "name3": "",
		    "cname": "浏览器所有渠道数据",
		    "modelpage": "#songheng/chanpin/wnllq_qd_wannengsuoyouqudao",
		    "url": "/software/browser/qid"
		},

		// 人民万年历
		{
		    "name1": "软件中心",
		    "name2": "人民万年历",
		    "name3": "",
		    "cname": "基础数据统计",
		    "modelpage": "#songheng/chanpin/rmwnl_zt_jichu",
		    "url": "/software/rmwnl/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "人民万年历",
		    "name3": "",
		    "cname": "竞品数据",
		    "modelpage": "#songheng/chanpin/rmwnl_zt_jinpin",
		    "url": "/software/rmwnl/competitor"
		},
		{
		    "name1": "软件中心",
		    "name2": "人民万年历",
		    "name3": "",
		    "cname": "日历渠道版本数据",
		    "modelpage": "#songheng/chanpin/rmwnl_qd_riliqudaobanben",
		    "url": "/software/rmwnl/qid-version"
		},
		{
		    "name1": "软件中心",
		    "name2": "人民万年历",
		    "name3": "",
		    "cname": "竞品渠道数据",
		    "modelpage": "#songheng/chanpin/rmwnl_qd_jinpinqudao",
		    "url": "/software/rmwnl/competitor-qid"
		},

		// 东方体育
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "",
		    "cname": "体育站实时汇总",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_shishihuizong",
		    "url": "/software/df-sports/realtime/index"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "",
		    "cname": "体育项目汇总",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_xiangmuhuizong",
		    "url": "/software/df-sports/project/index"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "新闻每日实时数据",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_shishitongji",
		    "url": "/software/df-sports/df-pc/daily-realtime"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "新闻每日数据详情",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_meirishujuxiangqing",
		    "url": "/software/df-sports/df-pc/daily-detail"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "新闻每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_meirishujutongji",
		    "url": "/software/df-sports/df-pc/daily-count"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "新闻每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_meiriqudao",
		    "url": "/software/df-sports/df-pc/daily-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "CMS添加新闻统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_cmstongji",
		    "url": "/software/df-sports/df-pc/cms-add"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "东方号添加新闻统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_dfhtianjiaxinwen",
		    "url": "/software/df-sports/df-pc/dfh-add"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "分页面统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_fenyemiantongji",
		    "url": "/software/df-sports/df-pc/pages"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "新闻点击位置统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_dianjiweizhi",
		    "url": "/software/df-sports/df-pc/click-pos"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "今日渠道数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_jinriqudao",
		    "url": "/software/df-sports/df-pc/today-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "视频广告统计",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_shipinguanggao",
		    "url": "/software/df-sports/df-pc/video-gg"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育PC端",
		    "cname": "首页栏位实时数据",
		    "modelpage": "#songheng/chanpin/dftttyz_xw_shouyelanweishishi",
		    "url": "/software/df-sports/df-pc/index-pos"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育H5端",
		    "cname": "H5新闻每日实时数据",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_shishitongji",
		    "url": "/software/df-sports/df-h5/daily-realtime"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育H5端",
		    "cname": "H5新闻每日数据详情",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meirishujuxiangqing",
		    "url": "/software/df-sports/df-h5/daily-detail"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育H5端",
		    "cname": "H5新闻每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meirishujutongji",
		    "url": "/software/df-sports/df-h5/daily-data"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育H5端",
		    "cname": "H5新闻每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_meiriqudao",
		    "url": "/software/df-sports/df-h5/daily-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育H5端",
		    "cname": "H5功能统计",
		    "modelpage": "#songheng/chanpin/dftttyzh5_xw_gongneng",
		    "url": "/software/df-sports/df-h5/func"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP基础数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_jichu",
		    "url": "/software/df-sports/df-app/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP渠道数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_qudaoshuju",
		    "url": "/software/df-sports/df-app/qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP版本数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_banbenshuju",
		    "url": "/software/df-sports/df-app/version"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP每日活跃数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_meirihuoyue",
		    "url": "/software/df-sports/df-app/active"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP新闻推荐数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_tuijianshuju",
		    "url": "/software/df-sports/df-app/recommend"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "东方体育APP",
		    "cname": "APP按钮点击数据",
		    "modelpage": "#songheng/chanpin/dftttyzapp_xw_anniudianji",
		    "url": "/software/df-sports/df-app/btns"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "五星体育PC端",
		    "cname": "PC新闻每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_wxty_meirishuju",
		    "url": "/software/df-sports/wx-pc/daily-data"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "五星体育PC端",
		    "cname": "PC新闻每日渠道数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_wxty_meiriqudao",
		    "url": "/software/df-sports/wx-pc/daily-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "五星体育H5端",
		    "cname": "H5新闻每日数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_wxty_h5meirishuju",
		    "url": "/software/df-sports/wx-h5/daily-data"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "五星体育H5端",
		    "cname": "H5新闻每日渠道数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_wxty_h5meiriqudao",
		    "url": "/software/df-sports/wx-h5/daily-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "猫扑体育H5端",
		    "cname": "每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttyz_mph5_meirishuju",
		    "url": "/software/df-sports/mop-h5/daily-qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方体育",
		    "name3": "猫扑体育PC端",
		    "cname": "PC新闻每日渠道数据统计",
		    "modelpage": "#songheng/chanpin/dftttyz_mppc_meiriqudaoshuju",
		    "url": "/software/df-sports/mop-pc/daily-qid"
		},

		// 东方影视
		{
		    "name1": "软件中心",
		    "name2": "东方影视",
		    "name3": "",
		    "cname": "东方影视基础数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfys_jichunew",
		    "url": "/software/df-video/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视",
		    "name3": "",
		    "cname": "东方影视渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfys_qudao",
		    "url": "/software/df-video/qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视",
		    "name3": "",
		    "cname": "外部渠道导量数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfys_qudaodaoliang",
		    "url": "/software/df-video/outside"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视",
		    "name3": "",
		    "cname": "网站位置点击数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfys_dianjiweizhi",
		    "url": "/software/df-video/click"
		},

		// 东方影视客户端
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端活跃数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_huoyue",
		    "url": "/software/video-client/active"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端基础数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_jichu",
		    "url": "/software/video-client/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端所有渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_suoyouqudao",
		    "url": "/software/video-client/qid"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端启动数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_qidongshuju",
		    "url": "/software/video-client/auto"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端视频数据",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_shipinshuju",
		    "url": "/software/video-client/video"
		},
		{
		    "name1": "软件中心",
		    "name2": "东方影视客户端",
		    "name3": "",
		    "cname": "客户端用户行为统计",
		    "modelpage": "#songheng/chanpin/dftttsz_dfyskhd_yonghuxingwei",
		    "url": "/software/video-client/user-behavior"
		},

		// 天气
		{
		    "name1": "软件中心",
		    "name2": "天气",
		    "name3": "",
		    "cname": "天气基础数据",
		    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqijichushuju",
		    "url": "/software/weather/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "天气",
		    "name3": "",
		    "cname": "天气打点数据",
		    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqidadianshuju",
		    "url": "/software/weather/point"
		},
		{
		    "name1": "软件中心",
		    "name2": "天气",
		    "name3": "",
		    "cname": "天气快报",
		    "modelpage": "#songheng/chanpin/dftttsz_tq_tianqikuaibao",
		    "url": "/software/weather/report"
		},

		// 地方站
		{
		    "name1": "软件中心",
		    "name2": "地方站",
		    "name3": "扬子头条",
		    "cname": "PC每日数据统计",
		    "modelpage": "#songheng/chanpin/dfz/yztt_pcmeirishuju",
		    "url": "/software/local-site/yztt-pc-daily"
		},
		{
		    "name1": "软件中心",
		    "name2": "地方站",
		    "name3": "",
		    "cname": "东方头条中地方用户数据",
		    "modelpage": "#songheng/chanpin/dfz/dfz_yonghushuju",
		    "url": "/software/local-site/local-user"
		},

		// 猎奇站H5
		{
		    "name1": "软件中心",
		    "name2": "猎奇站H5",
		    "name3": "",
		    "cname": "猎奇H5每日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_h5meriqudao",
		    "url": "/software/lieqi-h5/daily"
		},
		{
		    "name1": "软件中心",
		    "name2": "猎奇站H5",
		    "name3": "",
		    "cname": "猎奇H5今日渠道数据",
		    "modelpage": "#songheng/chanpin/dftttsz_lq_h5jinriqudao",
		    "url": "/software/lieqi-h5/today"
		},

		// 压缩软件
		{
		    "name1": "软件中心",
		    "name2": "压缩软件",
		    "name3": "",
		    "cname": "基础数据",
		    "modelpage": "#songheng/chanpin/yasuo/yasuo_zt_jichu",
		    "url": "/software/zip-software/basic"
		},
		{
		    "name1": "软件中心",
		    "name2": "压缩软件",
		    "name3": "",
		    "cname": "所有渠道数据",
		    "modelpage": "#songheng/chanpin/yasuo/yasuo_qd_suoyouqudao",
		    "url": "/software/zip-software/qid"
		},

		// 51苹果助手
		{
		    "name1": "软件中心",
		    "name2": "51苹果助手",
		    "name3": "",
		    "cname": "H5各渠道汇总数据",
		    "modelpage": "#lepai/chanpin/51pgzs_gequdaohuizong",
		    "url": "/software/51ios/h5-qid"
		},

		// 导航数据



		/**
		 * 广告
		 */

		// {
		//     "name1": "销售",
		//     "name2": "广告",
		//     "name3": "",
		//     "cname": "PC广告收入统计(新)",
		//     "modelpage": "#songheng/shouyi/pcincomenew",
		//     "url": "/songheng/sale/gg/pc"
		// },
		// {
		//     "name1": "销售",
		//     "name2": "广告",
		//     "name3": "",
		//     "cname": "软件收入统计",
		//     "modelpage": "#songheng/xiaoshou/gg_ruanjianshouru",
		//     "url": "/songheng/sale/gg/software"
		// },
		// {
		//     "name1": "销售",
		//     "name2": "广告",
		//     "name3": "",
		//     "cname": "广告销售收益-APP-开屏",
		//     "modelpage": "#songheng/xiaoshou/gg_appkaiping",
		//     "url": "/songheng/sale/gg/app-open"
		// },
		// {
		//     "name1": "销售",
		//     "name2": "广告",
		//     "name3": "",
		//     "cname": "竞价表自动化",
		//     "modelpage": "#songheng/xiaoshou/gg_jingjiabiao",
		//     "url": "/songheng/sale/gg/bidlist"
		// },
		// {
		//     "name1": "销售",
		//     "name2": "广告",
		//     "name3": "",
		//     "cname": "猫扑广告投放统计",
		//     "modelpage": "#songheng/xiaoshou/gg_maoputoufang",
		//     "url": "/songheng/sale/gg/mop"
		// },




		/**
		 * 自媒体
		 */
		

		// 东方号
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "流量监控",
		    "cname": "东方号基础数据统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_jichu",
		    "url": "/self-media/dfh/flow/basic"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "流量监控",
		    "cname": "东方号H5页面统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_h5yemian",
		    "url": "/self-media/dfh/flow/h5"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "流量监控",
		    "cname": "每日订阅数据",
		    "modelpage": "#songheng/chanpin/dftttdfh_meiridingyue",
		    "url": "/self-media/dfh/flow/daily"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "流量监控",
		    "cname": "用户订阅排行榜",
		    "modelpage": "#songheng/chanpin/dftttdfh_dingyuebang",
		    "url": "/self-media/dfh/flow/user"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "流量监控",
		    "cname": "东方号渠道统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_qudao",
		    "url": "/self-media/dfh/flow/qid"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "留存监控",
		    "cname": "东方号用户发文统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_fawentongji",
		    "url": "/self-media/dfh/retain/user"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "留存监控",
		    "cname": "东方号积分指数",
		    "modelpage": "#songheng/chanpin/dftttdfh_jifenzhishu",
		    "url": "/self-media/dfh/retain/integral"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "留存监控",
		    "cname": "东方号留存分析",
		    "modelpage": "#songheng/chanpin/dftttdfh_liucunfenxi",
		    "url": "/self-media/dfh/retain/analysis"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "内容监控",
		    "cname": "东方号优质内容榜",
		    "modelpage": "#songheng/chanpin/dftttdfh_youzhineirong",
		    "url": "/self-media/dfh/content/rank"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "内容监控",
		    "cname": "东方号用户内容统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_yonghuneirongnew",
		    "url": "/self-media/dfh/content/user"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "内容监控",
		    "cname": "东方号运营数据统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_yunyingshuju",
		    "url": "/self-media/dfh/content/operate"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "内容监控",
		    "cname": "东方号编辑数据统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_bianjishuju",
		    "url": "/self-media/dfh/content/edit"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "审核监控",
		    "cname": "东方号审核统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_shenhe",
		    "url": "/self-media/dfh/check/index"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "审核监控",
		    "cname": "东方号入驻审核",
		    "modelpage": "#songheng/chanpin/dftttdfh_ruzhushenhe",
		    "url": "/self-media/dfh/check/enter"
		},
		{
		    "name1": "自媒体",
		    "name2": "东方号",
		    "name3": "分成监控",
		    "cname": "东方号分配金数据统计",
		    "modelpage": "#songheng/chanpin/dftttdfh_fenpeijin",
		    "url": "/self-media/dfh/check/gold"
		},



		// /**
		//  * 上海嵩恒 -- 监控中心
		//  */

		// // 实时看板
		// {
		//     "name1": "监控中心",
		//     "name2": "实时看板",
		//     "name3": "",
		//     "cname": "东方头条实时看板",
		//     "modelpage": "#songheng/jiankong/shishikanban",
		//     "url": "/songheng/monitor/kanban/dftt"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "实时看板",
		//     "name3": "",
		//     "cname": "DB实时监控",
		//     "modelpage": "#songheng/jiankong/dbkanban",
		//     "url": "/songheng/monitor/kanban/db"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "实时看板",
		//     "name3": "",
		//     "cname": "MOP-DB监控",
		//     "modelpage": "#songheng/jiankong/mopdbshishi",
		//     "url": "/songheng/monitor/kanban/db-mop"
		// },

		// // 工具
		// {
		//     "name1": "监控中心",
		//     "name2": "工具",
		//     "name3": "",
		//     "cname": "URL流量查询工具",
		//     "modelpage": "#songheng/jiankong/urlchaxun",
		//     "url": "/songheng/monitor/tool/url"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "工具",
		//     "name3": "",
		//     "cname": "自动邮件配置",
		//     "modelpage": "#songheng/jiankong/youjianpeizhi",
		//     "url": "/songheng/monitor/tool/email"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "工具",
		//     "name3": "",
		//     "cname": "关联信息查询工具",
		//     "modelpage": "#songheng/jiankong/guanlianxinxi",
		//     "url": "/songheng/monitor/tool/relation"
		// },

		// // 任务监控
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "推荐G监控",
		//     "modelpage": "#songheng/jiankong/tuijian_g",
		//     "url": "/songheng/monitor/task/recommend"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "热点新闻发现",
		//     "modelpage": "#songheng/jiankong/redianxinwenfaxian",
		//     "url": "/songheng/monitor/task/hotnews"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "发分监控",
		//     "modelpage": "#songheng/jiankong/fenfajiankong",
		//     "url": "/songheng/monitor/task/distribute"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "DC报表监控",
		//     "modelpage": "#songheng/jiankong/baobiaojiankong",
		//     "url": "/songheng/monitor/task/dc-report"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "DC访问日志监控",
		//     "modelpage": "#gaoxin/jiankong/dcfangwen",
		//     "url": "/gaoxin/monitor/task/dc-active"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "任务监控",
		//     "name3": "",
		//     "cname": "采样点击率",
		//     "modelpage": "#songheng/jiankong/caiyangdianjilv",
		//     "url": "/songheng/monitor/task/click-rate"
		// },

		// // 集群性能监控
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "接口调用监控",
		//     "modelpage": "#gaoxin/jiankong/jiekoudiaoyong",
		//     "url": "/gaoxin/monitor/colony/api"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "东方头条HBaseTable监控",
		//     "modelpage": "#gaoxin/jiankong/HBaseTable",
		//     "url": "/gaoxin/monitor/colony/dftt-hbase-table"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "东方头条HBaseServer监控",
		//     "modelpage": "#gaoxin/jiankong/HBaseServer",
		//     "url": "/gaoxin/monitor/colony/dftt-hbase-server"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "东方头条HBase集群监控",
		//     "modelpage": "#gaoxin/jiankong/hbasejiqun",
		//     "url": "/gaoxin/monitor/colony/dftt-hbase"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "东方头条HDFS集群监控",
		//     "modelpage": "#gaoxin/jiankong/hdfs",
		//     "url": "/gaoxin/monitor/colony/dftt-hdfs"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "东方头条集群LoadAverage监控",
		//     "modelpage": "#gaoxin/jiankong/loadaverage",
		//     "url": "/gaoxin/monitor/colony/dftt-load-average"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "集群性能监控",
		//     "name3": "",
		//     "cname": "YARN_SPARK集群任务监控",
		//     "modelpage": "#gaoxin/jiankong/yarn_spark",
		//     "url": "/gaoxin/monitor/colony/yarn-spark"
		// },

		// // 用户画像
		// {
		//     "name1": "监控中心",
		//     "name2": "用户画像",
		//     "name3": "",
		//     "cname": "用户画像",
		//     "modelpage": "#songheng/jiankong/yonghuhuaxiang",
		//     "url": "/songheng/monitor/user/index"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "用户画像",
		//     "name3": "",
		//     "cname": "注册用户画像",
		//     "modelpage": "#songheng/jiankong/zhuceyonghuhuaxiang",
		//     "url": "/songheng/monitor/user/register"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "用户画像",
		//     "name3": "",
		//     "cname": "标签库",
		//     "modelpage": "#songheng/jiankong/biaoqianku",
		//     "url": "/songheng/monitor/user/tag"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "用户画像",
		//     "name3": "",
		//     "cname": "标签库管理",
		//     "modelpage": "#songheng/jiankong/biaoqiankuguanli",
		//     "url": "/songheng/monitor/user/tag-manage"
		// },

		// // 反作弊监控
		// {
		//     "name1": "监控中心",
		//     "name2": "反作弊监控",
		//     "name3": "",
		//     "cname": "反作弊监控",
		//     "modelpage": "#songheng/chanpin/money/money_appshualiang",
		//     "url": "/songheng/monitor/hlguard/index"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "反作弊监控",
		//     "name3": "",
		//     "cname": "APP异常渠道统计",
		//     "modelpage": "#songheng/chanpin/dfttapp_zt_yichangqudao",
		//     "url": "/songheng/monitor/hlguard/app-qid"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "反作弊监控",
		//     "name3": "",
		//     "cname": "NGINX异常IP监控",
		//     "modelpage": "#songheng/jiankong/yichangip",
		//     "url": "/songheng/monitor/hlguard/nginx"
		// },



		// /**
		//  * 上海高欣 -- 产品
		//  */
		
		// // m021导航
		// {
		//     "name1": "产品",
		//     "name2": "m021导航",
		//     "name3": "",
		//     "cname": "WPS导航数据统计",
		//     "modelpage": "#gaoxin/chanpin/dhm021_dhwpsshuju",
		//     "url": "/gaoxin/product/m021/nav-wps"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "m021导航",
		//     "name3": "",
		//     "cname": "m021导航统计",
		//     "modelpage": "#gaoxin/chanpin/dhm021_dhm021shuju",
		//     "url": "/gaoxin/product/m021/nav-m021"
		// },

		// // 9973导航
		// {
		//     "name1": "产品",
		//     "name2": "9973导航",
		//     "name3": "",
		//     "cname": "9973导航统计",
		//     "modelpage": "#gaoxin/chanpin/dh9973_shuju",
		//     "url": "/gaoxin/product/9973/nav"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "9973导航",
		//     "name3": "",
		//     "cname": "9973点击位置统计",
		//     "modelpage": "#gaoxin/chanpin/dh9973_dianjiweizhi",
		//     "url": "/gaoxin/product/9973/click"
		// },


		// /**
		//  *  上海高欣 -- 监控
		//  */

		// // CMS审核编辑
		// {
		//     "name1": "监控中心",
		//     "name2": "CMS审核编辑",
		//     "name3": "",
		//     "cname": "新闻审核监控",
		//     "modelpage": "#gaoxin/jiankong/xinwenshenhe",
		//     "url": "/gaoxin/monitor/cms/news-check"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "CMS审核编辑",
		//     "name3": "",
		//     "cname": "视频审核监控",
		//     "modelpage": "#gaoxin/jiankong/shipinshenhe",
		//     "url": "/gaoxin/monitor/cms/video-check"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "CMS审核编辑",
		//     "name3": "",
		//     "cname": "新闻编辑监控",
		//     "modelpage": "#gaoxin/jiankong/xinwenbianji",
		//     "url": "/gaoxin/monitor/cms/news-edit"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "CMS审核编辑",
		//     "name3": "",
		//     "cname": "新闻标注监控",
		//     "modelpage": "#gaoxin/jiankong/xinwenbiaozhu",
		//     "url": "/gaoxin/monitor/cms/news-mark"
		// },

		// // 爬虫监控
		// {
		//     "name1": "监控中心",
		//     "name2": "爬虫监控",
		//     "name3": "",
		//     "cname": "爬虫监控统计-新闻",
		//     "modelpage": "#gaoxin/jiankong/pachong",
		//     "url": "/gaoxin/monitor/spider/news"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "爬虫监控",
		//     "name3": "",
		//     "cname": "爬虫监控统计-视频",
		//     "modelpage": "#gaoxin/jiankong/shipin",
		//     "url": "/gaoxin/monitor/spider/video"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "爬虫监控",
		//     "name3": "",
		//     "cname": "爬虫监控统计-图片",
		//     "modelpage": "#gaoxin/jiankong/tupian",
		//     "url": "/gaoxin/monitor/spider/imgs"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "爬虫监控",
		//     "name3": "",
		//     "cname": "爬虫数据考核",
		//     "modelpage": "#gaoxin/jiankong/pachongshujukaohe",
		//     "url": "/gaoxin/monitor/spider/access"
		// },

		// // 推送数据监控
		// {
		//     "name1": "监控中心",
		//     "name2": "推送数据监控",
		//     "name3": "",
		//     "cname": "人工推送效果数据",
		//     "modelpage": "#gaoxin/jiankong/rengongtuisongxiaoguo",
		//     "url": "/gaoxin/monitor/push/man"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "推送数据监控",
		//     "name3": "",
		//     "cname": "渠道推送数据监控",
		//     "modelpage": "#gaoxin/jiankong/qudaotuisong",
		//     "url": "/gaoxin/monitor/push/qid"
		// },

		// // 评论监控
		// {
		//     "name1": "监控中心",
		//     "name2": "评论监控",
		//     "name3": "",
		//     "cname": "评论用户监控",
		//     "modelpage": "#gaoxin/jiankong/pinglunyonghu",
		//     "url": "/gaoxin/monitor/commnet/user"
		// },
		// {
		//     "name1": "监控中心",
		//     "name2": "评论监控",
		//     "name3": "",
		//     "cname": "评论审核监控",
		//     "modelpage": "#gaoxin/jiankong/pinglunshenhe",
		//     "url": "/gaoxin/monitor/commnet/check"
		// },

		// // H5PC实时热点top500
		// {
		//     "name1": "监控中心",
		//     "name2": "",
		//     "name3": "",
		//     "cname": "H5PC实时热点top500",
		//     "modelpage": "#gaoxin/jiankong/h5pcrediantop100",
		//     "url": "/gaoxin/monitor/h5pc/hot-top"
		// },



		// /**
		//  *  上海展盟 -- 产品
		//  */

		// // 导航站统计
		// {
		//     "name1": "产品",
		//     "name2": "导航站统计",
		//     "name3": "",
		//     "cname": "7654留存率",
		//     "modelpage": "#zhanmeng/chanpin/dhztj_dh7654liucunlv",
		//     "url": "/zhanmeng/product/navsite/retention"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "导航站统计",
		//     "name3": "",
		//     "cname": "7654导航统计",
		//     "modelpage": "#zhanmeng/chanpin/dhztj_dh7654shuju",
		//     "url": "/zhanmeng/product/navsite/nav"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "导航站统计",
		//     "name3": "",
		//     "cname": "7654点击位置统计",
		//     "modelpage": "#zhanmeng/chanpin/dhztj_dh7654dianjiweizhi",
		//     "url": "/zhanmeng/product/navsite/click-pos"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "导航站统计",
		//     "name3": "",
		//     "cname": "7654game导航统计",
		//     "modelpage": "#zhanmeng/chanpin/dhztj_dh7654game",
		//     "url": "/zhanmeng/product/navsite/game"
		// },
		// {
		//     "name1": "产品",
		//     "name2": "导航站统计",
		//     "name3": "",
		//     "cname": "7654game点击位置统计",
		//     "modelpage": "#zhanmeng/chanpin/dhztj_dh7654gamedianjiweizhi",
		//     "url": "/zhanmeng/product/navsite/game-click"
		// },


		/**
		 *  dc专用
		 *  dc-special
		 */
		

		/**
		 *  数据看板
		 */
		// {
		//     "name1": "数据看板",
		//     "name2": "",
		//     "name3": "",
		//     "cname": "数据看板",
		//     "modelpage": "#income",
		//     "url": "/dc-special/index"
		// },


		/**
		 * 其他
		 */
		{
		    "name1": "其他",
		    "name2": "",
		    "name3": "",
		    "cname": "登录",
		    "url": "/others/login"
		},
		{
		    "name1": "其他",
		    "name2": "",
		    "name3": "",
		    "cname": "网站地图",
		    "url": "/others/sitemap"
		},
		{
		    "name1": "其他",
		    "name2": "",
		    "name3": "",
		    "cname": "权限配置",
		    "url": "/others/authority"
		},
	],

	/**
	 * redirectRoutes 重定向路由
	 * 如点击嵩恒--产品跳转到东方头条赚钱-赚钱任务总览
	 * @type {Array}
	 */
	redirectRoutes: [
		{
			from: '/',
			to: '/dftt/dftt-zq/task'
		},
		{
			from: '/dftt',
			to: '/dftt/dftt-zq/task'
		},
		{
			from: '/dftt/dftt-zq',
			to: '/dftt/dftt-zq/task'
		},
	]
}
