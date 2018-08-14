import { Layout, Dropdown, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderLayout = ({
	collapsed,
	firPath,
	secPath,
	sideMenus,
	handleSiderMenu,
	menuSelect,
	firstMenuText
}) => {

	const renderMenu = (item, showIcon) => {

		if(item.children && item.children.length) {
			let ico = (item.icon && item.icon !== 'tongji') ? item.icon: 'bars'
			return (
				<SubMenu 
					key={item.modelpage}
					title={
						<span>
							<Icon type={ico} />
							<span>{item.cname}</span>
						</span>
					}>
					{
						item.children.map(sub => renderMenu(sub, false))
					}
				</SubMenu>
			)
		} else {
			let _ico = (item.icon && item.icon !== 'tongji') ? item.icon : ''
			return <Menu.Item key={item.modelpage} title={item.cname}>
						{_ico && <Icon type={_ico} />}
						<span>{item.cname}</span>
					</Menu.Item>
		}
	}

	const menu = (
		<Menu onClick={menuSelect} className={'dropdown-dark'}>
			<Menu.Item key="all">全部项目</Menu.Item>
			<Menu.Item key="dftt">东方头条</Menu.Item>
		</Menu>
	);

	return (
		<Sider 
			className={"main-sider"}
			trigger={null}
			width={240}
			collapsible
			collapsed={collapsed}>
			<div className="sider-top">
				<div className="header-logo">
					{
						collapsed && <span>DC数据中心</span>
					}
				</div>
				{/* <Dropdown overlay={menu}>
					<div className="header-dropdown">
					    {firstMenuText || '全部项目'}
						<Icon type="down" />
					</div>
				</Dropdown> */}
			</div>
			<div className="sider-scroller scrollbar">
				<Menu
					mode="inline"
					theme="dark"
					defaultOpenKeys={firPath}
					defaultSelectedKeys={secPath}
					onClick={handleSiderMenu}>
					{
						sideMenus.map(item => renderMenu(item, true))
					}
				</Menu>
			</div>
		</Sider>
	);
};


export default SiderLayout;