// react dva
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { thousandBit, flatten, getField } from '@/utils/tools';

// global components
import TablePopoverLayout from '@/components/TablePopoverLayout';

// page components
import FormLayout from './components/FormLayout';
import DetailPanel from './components/DetailPanel';
import PlayerPanel from './components/PlayerPanel';
import WeekPanel from './components/WeekPanel';
import MonthPanel from './components/MonthPanel';
import PlayConfigPanel from './components/PlayConfigPanel';
import MasterConfigPanel from './components/MasterConfigPanel';
import ReportDescPanel from './components/ReportDescPanel';

// antd-design components
import { Table, Button, Tabs, Icon, message } from 'antd';
const TabPane = Tabs.TabPane;

/**
 * 师徒质量监控
 * @param  {[type]}    options.apprenticeQuality [description]
 * @param  {...[type]} options.props             [description]
 * @return {[type]}                              [description]
 */
const ApprenticeQuality = ({
	apprenticeQuality,
	...props
}) => {
	let { dispatch, location } = props;
	let {
		common: {
			playerOptions,
			accOptions,
			ulevelOptions,
			showDetail,
			activeKey,
			pageConfigs,
			form: { accid }
		},
		detail,
		player,
		week,
		month,
		playerConfig,
		masterConfig,
		report
	} = apprenticeQuality;
	
	/**
	 * 按师父ID查询列表
	 * @param  {[type]} accid [description]
	 * @return {[type]}       [description]
	 */
	const handleDetailByAccid = accid => {
		dispatch(routerRedux.push({
			search: `showDetail=${true}&accid=${accid}&activeKey=${activeKey}`,
		}))
		dispatch({
			type: 'apprenticeQuality/save',
			payload: {
				common: {
					showDetail: true,
					form: {
						...apprenticeQuality.common.form,
						accid,
					}
				}
			}
		})
		dispatch({type: 'apprenticeQuality/changeTab'})
	}

	/**
	 * 按负责人查询列表
	 * @param  {[type]} player [description]
	 * @return {[type]}        [description]
	 */
	const handleDetailByPlayer = player => {
		dispatch(routerRedux.push({
			search: `showDetail=${true}&player=${player}&activeKey=${activeKey}`,
		}))
		dispatch({
			type: 'apprenticeQuality/save',
			payload: {
				common: {
					showDetail: true,
					form: {
						...apprenticeQuality.common.form,
						player,
					}
				}
			}
		})
		dispatch({type: 'apprenticeQuality/changeTab'})
	}

	/**
	 * 后退返回
	 * @return {[type]} [description]
	 */
	const goBack = () => {
	    dispatch(routerRedux.goBack(-1))
		dispatch({
			type: 'apprenticeQuality/save',
			payload: {
				common: {
					showDetail: false,
					form: {
						...apprenticeQuality.common.form,
						accid: '',
						player: '',
					}
				}
			}
		})
		dispatch({type: 'apprenticeQuality/changeTab'})
	}


	// 本地自定义所有列
	const columns = [
		{
			title: '日期',
			dataIndex: 'dt',
			sorter: true,
			//fixed: 'left',
			width: 120,
		},
		{
			title: '师父ID',
			dataIndex: 'accid',
			render: (text, record) => showDetail ? text : <a onClick={handleDetailByAccid.bind(null, record.accid)}>{text}</a>,
			sorter: true,
			//fixed: 'left',
			width: 120,
		},
		{
			title: '软件名称',
			dataIndex: 'apptypeid',
			render: text => <span>{text || '汇总'}</span>,
			sorter: true,
	        width: 120,
		},
		{
			title: '师父手机号',
			dataIndex: 'mobile',
			render: text => <span>{text || 'null'}</span>,
			sorter: true,
	        width: 120,
		},
		{
			title: '师父邀请码',
			dataIndex: 'invite_code',
			sorter: true,
	        width: 120,
		},
		{
			title: '备注信息',
			dataIndex: 'mark',
			render: (text, record) => 
				<TablePopoverLayout
					title={'添加备注信息'}
					valueData={text || '无'}
					defaultValue={text || '无'}
					onOk={v => 
						dispatch({
							type: 'apprenticeQuality/modMark',
							payload: {
								accid: record.accid,
								mark: v
							}
						})
						.then(res => {
							if(res.code === '200' && res.entity && res.entity.info === '0') {
								message.success(res.entity.comment_info)
								return new Promise((resolve, reject) => resolve((v || '无')))
							}
						})
					}/>,
			sorter: true,
	        width: 140,
		},
		{
			title: '负责人',
			dataIndex: 'player',
			render: text => <span>{text || 'null'}</span>,
			sorter: true,
	        width: 120,
		},
		{
			title: '师父等级',
			dataIndex: 'ulevel',
			render: (text, record) =>
				<TablePopoverLayout
					title={'修改师父等级'}
					valueData={ulevelOptions}
					focusSelect={() => dispatch({type: 'apprenticeQuality/fetchUlevel'})}
					optionKey={'ulevel'}
					optionItem={'ulevel'}
					defaultValue={text || '0'}
					onOk={v => 
						dispatch({
							type: 'apprenticeQuality/modUlevel',
							payload: {
								startDate: record.dt,
								accid: record.accid,
								ulevel: v
							}
						})
						.then(res => {
							// if(res.code === '200' && res.entity && res.entity.info === '0') {
							// 	message.success(res.entity.comment_info)
							// 	return new Promise((resolve, reject) => resolve((v)))
							// }
						})
					}/>,
			sorter: true,
	        width: 110,
		},
		{
			title: '徒弟状态',
			dataIndex: 'usertag',
			sorter: true,
	        width: 120,
		},
		{
			title: '师父状态',
			children: [
				{
					title: '加黑状态',
					dataIndex: 'playertype',
					sorter: true,
			        width: 120,
				},
				{
					title: '当日提现金额',
					dataIndex: 'dailycash',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '已提现金额',
					dataIndex: 'usedmoney',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '审核中金额',
					dataIndex: 'lockmoney',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '当前余额',
					dataIndex: 'balance',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '当日获得零钱',
					dataIndex: 'monycnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '当日消耗零钱',
					dataIndex: 'costmoney',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
			],
		},
		{
			title: '累计下家人数',
			children: [
				{
					title: '累计总下家',
					dataIndex: 'total_cnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '徒弟',
					dataIndex: 'total_1stcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '徒孙',
					dataIndex: 'total_2ndcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '曾孙',
					dataIndex: 'total_3thcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
			],
		},
		{
			title: '当日新增下家人数',
			children: [
				{
					title: '新增总下家',
					dataIndex: 'new_cnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '徒弟',
					dataIndex: 'new_1stcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '徒孙',
					dataIndex: 'new_2ndcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
				{
					title: '曾孙',
					dataIndex: 'new_3thcnt',
					sorter: true,
					className: 'tr',
					render: text => <span>{ thousandBit(text) }</span>,
			        width: 120,
				},
			],
		}, 
		{
			title: '当日下家活跃情况',
			children: [
				{
					title: 'PV',
					dataIndex: 'pv',
					sorter: true,
			        width: 120,
				},
				{
					title: 'UV',
					dataIndex: 'uv',
					sorter: true,
			        width: 120,
				},
				{
					title: 'P/U',
					dataIndex: 'pu_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '人均在线时长(APP)',
					dataIndex: 'app_avgtime',
					sorter: true,
			        width: 144,
				},
				{
					title: '人均在线时长(阅读)',
					dataIndex: 'read_avgtime',
					sorter: true,
			        width: 144,
				},
				{
					title: '人均获得积分',
					dataIndex: 'avg_bonus',
					sorter: true,
			        width: 120,
				},
			],
		},
		{
			title: '新增徒弟留存情况',
			children: [
				{
					title: '2日外活',
					dataIndex: 'day2_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '2日内活',
					dataIndex: 'day2_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '3日外活',
					dataIndex: 'day3_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '3日内活',
					dataIndex: 'day3_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '4日外活',
					dataIndex: 'day4_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '4日内活',
					dataIndex: 'day4_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '5日外活',
					dataIndex: 'day5_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '5日内活',
					dataIndex: 'day5_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '6日外活',
					dataIndex: 'day6_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '6日内活',
					dataIndex: 'day6_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '7日外活',
					dataIndex: 'day7_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '7日内活',
					dataIndex: 'day7_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '15日外活',
					dataIndex: 'day15_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '15日内活',
					dataIndex: 'day15_read_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '30日外活',
					dataIndex: 'day30_online_rate',
					sorter: true,
			        width: 120,
				},
				{
					title: '30日内活',
					dataIndex: 'day30_read_rate',
					sorter: true,
			        width: 120,
				},
			],
		}, 
	];

	const columns_player = [
		{
			title: '日期',
			dataIndex: 'dt',
			fixed: 'left',
	        width: 120,
		},
		{
			title: '负责人',
			dataIndex: 'player',
			render: (text, record) => showDetail ? text : <a onClick={handleDetailByPlayer.bind(null, record.player)}>{text}</a>,
			//fixed: 'left',
	        width: 120,
		},
		{
			title: '负责人师父数',
			dataIndex: 'mastercnt',
	        width: 120,
		},
		{
			title: '累计下家人数',
			children: [
				{
					title: '累计总下家',
					dataIndex: 'total_cnt',
			        width: 120,
				},
				{
					title: '徒弟',
					dataIndex: 'total_1stcnt',
			        width: 120,
				},
				{
					title: '徒孙',
					dataIndex: 'total_2ndcnt',
			        width: 120,
				},
				{
					title: '曾孙',
					dataIndex: 'total_3thcnt',
			        width: 120,
				},
			],
		},
		{
			title: '当日新增下家人数',
			children: [
				{
					title: '新增总下家',
					dataIndex: 'new_cnt',
			        width: 120,
				},
				{
					title: '徒弟',
					dataIndex: 'new_1stcnt',
			        width: 120,
				},
				{
					title: '徒孙',
					dataIndex: 'new_2ndcnt',
			        width: 120,
				},
				{
					title: '曾孙',
					dataIndex: 'new_3thcnt',
			        width: 120,
				},
			],
		},
		{
			title: '当日徒弟活跃情况',
			children: [
				{
					title: 'PV',
					dataIndex: 'pv',
			        width: 120,
				},
				{
					title: 'UV',
					dataIndex: 'uv',
			        width: 120,
				},
				{
					title: 'P/U',
					dataIndex: 'pu_rate',
			        width: 120,
				},
				{
					title: '人均在线时长(APP)',
					dataIndex: 'app_avgtime',
			        width: 120,
				},
				{
					title: '人均在线时长(阅读)',
					dataIndex: 'read_avgtime',
			        width: 120,
				},
				{
					title: '人均获得积分',
					dataIndex: 'avg_bonus',
			        width: 120,
				},
				{
					title: '2日外活',
					dataIndex: 'day2_online_rate',
			        width: 120,
				},
				{
					title: '2日内活',
					dataIndex: 'day2_read_rate',
			        width: 120,
				},
				{
					title: '3日外活',
					dataIndex: 'day3_online_rate',
			        width: 120,
				},
				{
					title: '3日内活',
					dataIndex: 'day3_read_rate',
			        width: 120,
				},
				{
					title: '4日外活',
					dataIndex: 'day4_online_rate',
			        width: 120,
				},
				{
					title: '4日内活',
					dataIndex: 'day4_read_rate',
			        width: 120,
				},
				{
					title: '5日外活',
					dataIndex: 'day5_online_rate',
			        width: 120,
				},
				{
					title: '5日内活',
					dataIndex: 'day5_read_rate',
					width: 120,
				},
				{
					title: '6日外活',
					dataIndex: 'day6_online_rate',
					width: 120,
				},
				{
					title: '6日内活',
					dataIndex: 'day6_read_rate',
					width: 120,
				},
			],
		},
		{
			title: '新增徒弟留存情况',
			children: [
				{
					title: '7日外活',
					dataIndex: 'day7_online_rate',
					width: 120,
				},
				{
					title: '7日内活',
					dataIndex: 'day7_read_rate',
					width: 120,
				},
				{
					title: '15日外活',
					dataIndex: 'day15_online_rate',
					width: 120,
				},
				{
					title: '15日内活',
					dataIndex: 'day15_read_rate',
					width: 120,
				},
				{
					title: '30日外活',
					dataIndex: 'day30_online_rate',
					width: 120,
				},
				{
					title: '30日内活',
					dataIndex: 'day30_read_rate',
					width: 120,
				},
			],
		}, 
	];


	/**
	 * tab选项卡切换
	 * @param  {[type]} k [description]
	 * @return {[type]}   [description]
	 */
	const handleTabChange = (key = '1') => {
		let cols = key === '2' ? columns_player : columns
		let tabArr = ['明细', '按负责人', '周报', '月报']
		let params = {}
		switch (key) {
			case '1':
				params = {
					apptypeid: '软件名称',
					player: '负责人',
					ulevel: '等级',
					usertag: '徒弟状态',
					mastergroup: '师父组',
					accid: '师父ID',
					mobile: '师父手机号',
					code: '师父邀请码'
				}
				break;
			case '2':
				params = {
					player: '负责人'
				}
				break;
			case '3':
				params = {
					week: '周数',
					player: '负责人',
					ulevel: '等级',
					accid: '师父ID',
					mobile: '师父手机号',
					code: '师父邀请码'
				}
				break;
			case '4':
				params = {
					player: '负责人',
					ulevel: '等级',
					accid: '师父ID',
					mobile: '师父手机号',
					code: '师父邀请码'
				}
				break;
			default:
				params = {}
		}
		dispatch({
			type: 'apprenticeQuality/changeTab',
			payload: { key }
		})
		
		// 页面配置信息
		dispatch({
			type: 'apprenticeQuality/uploadPageConfig',
			payload: {
			   category: '师徒质量监控',
			   url: '/dftt/dftt-zq/apprentice-quality',
			   sheet: tabArr[key - 1],
			   column_en: flatten(getField(cols, 'dataIndex')),
			   column_chn: flatten(getField(cols, 'title')),
			   para_en: Object.keys(params).join(','),
			   para_chn: Object.values(params).join(','),
			   func: ['负责人配置', '师父分组配置', '报表信息说明'].join(',')
			}
		})
	}

	// 四个tab公共属性
	let detailProps = { showDetail, accid, activeKey }
	let authSheet = pageConfigs.map(e => e.sheet)
	const getAuthForm = (arr, sheet) => {
		let idx = authSheet.indexOf(sheet)
		return idx > -1 ? arr[idx].param_name : []
	}
	
	return (
		<div style={{ position: 'relative'}}>
			{
				showDetail && <Button type="primary" onClick={goBack} style={{ position: 'absolute', top: 5, right: 20, zIndex: 1 }}>后退</Button>
			}

			<Tabs 
				// className={showDetail ? "hide-tabs-bar" : ""}
				defaultActiveKey={activeKey}
				animated={false}
				onChange={handleTabChange}>
				{
					authSheet.includes('明细') && <TabPane tab="明细" key="1">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '明细')}
							{...props} />
						<DetailPanel
							detailProps={detailProps}
							columns={columns}
							detail={detail}
							{...props}/>
					</TabPane>
				}
                
				{
					authSheet.includes('按负责人') && <TabPane tab="按负责人" key="2">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '按负责人')}
							{...props} />
						<PlayerPanel
							detailProps={detailProps}
							columns={columns_player}
							player={player}
							{...props}/>
					</TabPane>
				}
				
				{/* {
					authSheet.includes('周报') && <TabPane tab="周报" key="3">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '周报')}
							{...props} />
						<WeekPanel
							detailProps={detailProps}
							columns={columns}
							week={week}
							{...props}/>
					</TabPane>
				} */}

				<TabPane tab="周报" key="3">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '周报')}
							{...props} />
						<WeekPanel
							detailProps={detailProps}
							columns={columns}
							week={week}
							{...props}/>
					</TabPane>
                
				{/* {
					authSheet.includes('月报') && <TabPane tab="月报" key="4">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '月报')}
							{...props} />
						<MonthPanel
							detailProps={detailProps}
							columns={columns}
							month={month}
							{...props}/>
					</TabPane>
				} */}

				<TabPane tab="月报" key="4">
						<FormLayout 
							common={apprenticeQuality.common}
							activeKey={activeKey}
							authForm={getAuthForm(pageConfigs, '月报')}
							{...props} />
						<MonthPanel
							detailProps={detailProps}
							columns={columns}
							month={month}
							{...props}/>
					</TabPane>
				
				{
					authSheet.includes('负责人配置') && <TabPane tab="负责人配置" key="5">
						<PlayConfigPanel 
							playerConfig={playerConfig}
							playerOptions={playerOptions}
							{...props}/>
					</TabPane>
				}
                
				{
					authSheet.includes('师父分组配置') && <TabPane tab="师父分组配置" key="6">
						<MasterConfigPanel 
							masterConfig={masterConfig}
							accOptions={accOptions}
							{...props}/>
					</TabPane>
				}
                
				{
					authSheet.includes('报表信息说明') && <TabPane tab="报表信息说明" key="7">
						<ReportDescPanel
							report={report}
							{...props}/>
					</TabPane>
				}

			</Tabs>
		</div>
	)
};

ApprenticeQuality.propTypes = {
	apprenticeQuality: PropTypes.object
};

export default connect(({ apprenticeQuality }) => ({ apprenticeQuality }))(ApprenticeQuality);
	