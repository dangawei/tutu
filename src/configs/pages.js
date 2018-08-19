module.exports = {
	/**
	 * routes 生成文件和路由
	 * 尽量保证同一个板块（如dftt-zq东方头条赚钱）下的path层级一样，保持目录结构更整齐
	 * @type {Array}
	 */
	// routes_old: []

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
