import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter, routerRedux } from 'dva/router';
// import pathToRegexp from 'path-to-regexp';
import layoutConfig from './configs/layout';

import './scss/layout.scss';

import { Layout, Menu } from 'antd';
import Loader from './components/Loader';

import HeaderLayout from './components/HeaderLayout';
import SiderLayout from './components/SiderLayout';
import HistoryNavsLayout from './components/HistoryNavsLayout';

const { SubMenu } = Menu;
const { Content } = Layout;

const App = ({
	children,
	dispatch,
	loading,
	location,
	app
}) => {
	const { pathname } = location;
	const { singleView, hideLeftView } = layoutConfig;
	let { collapsed, datalist, siderList, breadCrumd, historyList, firstMenuText } = app;


	// 用户未登录跳转到登录页面
	if (!localStorage.getItem('USER_NAME') && pathname !== '/login') {
		dispatch({ type: 'app/redirect' })
	}

	// 选中菜单
	let firPath, secPath;
	if(pathname && pathname.indexOf('/') > -1) {
		let prePath = pathname.split('/').slice(0,-1).join('/')
		firPath = [prePath];
		secPath = [pathname];
		let lastPath = pathname.split('/').slice(-1)[0];
		if(lastPath.indexOf('-') > -1 && pathname.split('/').length >= 4) {
			firPath.push(prePath + '/' + lastPath.split('-')[0])
		}
	}

	// 一级菜单切换
	// const changeTopMenu = e => {
	// 	let { dataindex, datasubindex } = e.item.props;
	// 	dispatch({
	// 		type: 'app/change',
	// 		payload: {
	// 			dataIndex: dataindex,
	// 			dataSubindex: datasubindex
	// 		}
	// 	})
	// }

	// 展开收缩菜单
	const handleCollapse = () => {
		dispatch({ type: 'app/collapse' })
	}

	// 退出登录
	const handleUser = ({key, selectedKeys}) => {

		switch(key) {
			case 'logout':
				dispatch({ type: 'app/loginout' })
				break;
			case 'setting':
			    window.location.href = 'http://123.59.85.60/dc3.0-auth/#/login'
				// if(pathname !== '/authority') {
				// 	window.location.href = 'http://123.59.85.60/dc3.0-auth/#/login'
				// }
				// dispatch({
				// 	type: 'app/historyNavsAdd',
				// 	payload: {
				// 		tab: '权限配置',
				// 		key: '/authority'
				// 	}
				// })
				break;
		}
	}


	// 页面加载添加一个默认tab
	if(!historyList.length && breadCrumd.cname) {
		dispatch({
			type: 'app/historyNavsAdd',
			payload: {
				tab: breadCrumd.cname,
				key: pathname
			}
		})
	}


	// 左侧导航路由切换, 添加历史记录
	const changeSiderMenu = e => {
		if(pathname !== e.key) {
			dispatch(routerRedux.push(e.key))
			dispatch({
				type: 'app/historyNavsAdd',
				payload: {
					tab: e.item.props.title,
					key: e.key
				}
			})
		}
	}

	// 删除历史导航 只剩一个不能关闭
	const tabEdit = (targetKey, action) => {
		if (action === 'remove' && targetKey && historyList.length > 1) {
			// 如果关闭当前则跳转到剩余第一个
			if(targetKey === pathname) {
				dispatch(routerRedux.push(historyList[0].key === pathname ? historyList[1].key : historyList[0].key))
			}
			dispatch({
				type: 'app/historyNavsRemove',
				payload: {
					targetKey
				}
			})
		}
	}

	// 打开单独视图页面
	if(singleView && singleView.includes(pathname)) {
		return <div>{children}</div>;
	}

	// 移动端展开收起菜单
	const handleToggle = () => dispatch({ type: 'app/toggle' })

	// 历史导航点击
	const tabChange = (key) => {
		if (key && key !== pathname) {
			dispatch(routerRedux.push(key))
		}
	}

	// 筛选项目(改变一级分类)
	const menuSelect = (key) => {
        dispatch({
			type: 'app/firstMenuChange',
			payload: key
		})
	}

	return (
		<Layout className={app.showSider ? "show-menu main-layout" : "main-layout"}>
			<Loader fullScreen spinning={loading.effects['app/fetch']} tip="加载中..." />
	    	<div className="main-shadow" onClick={handleToggle}></div>
			{
	    		/*hideLeftView && hideLeftView.includes(pathname) ? null :*/
				<SiderLayout
					sideMenus={siderList}
					firPath={firPath}
					secPath={secPath}
					collapsed={collapsed}
					handleSiderMenu={changeSiderMenu}
					menuSelect={menuSelect}
					firstMenuText={firstMenuText} />
	    	}
		    <Layout className={"main-content"}>
				<HeaderLayout
					collapsed={collapsed}
					handleToggle={handleToggle}
					handleCollapse={handleCollapse}
					handleUser={handleUser}
					breadCrumd={breadCrumd}
					pathname={pathname} />
				<HistoryNavsLayout
				    historyList={historyList}
					tabEdit={tabEdit}
					tabChange={tabChange} />
				<Layout className="main-panel scrollbar-primary">
					<Content className="content-panel">
						{ children }
					</Content>
				</Layout>
		    </Layout>
		</Layout>
	);
}

App.propTypes = {
	children: PropTypes.element,
	location: PropTypes.object,
	dispatch: PropTypes.func,
	app: PropTypes.object,
	loading: PropTypes.object,
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));
