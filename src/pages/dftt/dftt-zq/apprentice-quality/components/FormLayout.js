/**
 * 公共表单
 * @param  {[type]}    options.common     [description]
 * @param  {...[type]} options.props      [description]
 * @return {[type]}                       [description]
 */

import FormInlineLayout from '@/components/FormInlineLayout';
import moment from 'moment';
import { Form, DatePicker, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker, MonthPicker } = DatePicker;

const FormLayout = ({
	common,
	authForm,
	...props
}) => {
	let {
		form,
		weekDate,
		monthDate,
		dateInterval,
		weekOptions,
		apptypeidOptions,
		playerOptions,
		ulevelOptions,
		usertagOptions,
		accOptions,
		showDetail,
		activeKey,
	} = common;

	let { dispatch } = props;
	// let authForm = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  
	/**
	 * 表单输入
	 * @param  {[type]} payload    state更新数据
	 * @param  {[type]} fetchData: true          是否请求接口
	 * @return {[type]}            [description]
	 */
	const changeForm = (payload, formType='form', fetchData=true) => {
		dispatch({
			type: 'apprenticeQuality/changeForm',
			payload,
			formType,
			fetchData
		})
	}

	/**
	 * 显示隐藏表单
	 * @param  {[type]} key tabs当前显示key
	 * @return {[type]}     [description]
	 */
	const showFormItem = key => {
		switch(key) {
			case 'date':
				return activeKey < '3' && !showDetail
				break;
			case 'week':
				return activeKey === '3'
				break;
			case 'month':
				return activeKey === '4'
				break;
			case 'range':
				return activeKey < '3' && showDetail
				break;
			case 'all':
				return activeKey < '5'
				break;
			default:
				return true
		}
	}

	return (
		<FormInlineLayout showFoldBtn={authForm.length > 3} mobileLayout className={ showFormItem('all') ? "" : "hide"}>
			<Form layout="inline">
				<FormItem label="时间" className={ showFormItem('date') ? "" : "hide"} span={8}>
					<DatePicker
						allowClear={false} 
						defaultValue={moment(form.endDate, 'YYYYMMDD')}
						onChange={(M, date) => changeForm({
							startDate: date.split('-').join(''),
							endDate: date.split('-').join(''),
						})} />
				</FormItem>

				{/* 周报 */}
				<FormItem label="月份" className={ showFormItem('week') ? "" : "hide"}>
					<MonthPicker 
						allowClear={false}
						defaultValue={moment(weekDate.startDate, 'YYYYMM')}
						onChange={(M, date) => changeForm({
							startDate: date.split('-').join(''),
						}, 'weekDate')} />
				</FormItem>
				<FormItem label="周数" className={ showFormItem('week') ? "" : "hide"}>
					<Select
						value={weekDate.endDate}
						onFocus={() => dispatch({type: 'apprenticeQuality/fetchWeek'})}
						onChange={v => changeForm({endDate: v}, 'weekDate')}>
						<Option value="">汇总</Option>
						{
							weekOptions.map(item => 
								<Option key={item.dt} value={item.dt}>{item.dt}</Option>
							)
						}
					</Select>
				</FormItem>

				{/*月报*/}
				<FormItem label="月份" className={ showFormItem('month') ? "" : "hide"}>
					<MonthPicker
						allowClear={false}
						defaultValue={moment(monthDate.endDate, 'YYYYMM')}
						onChange={(M, date) => changeForm({
							startDate: date.split('-').join(''),
							endDate: date.split('-').join(''),
						}, 'monthDate')} />
				</FormItem>

				{/*日期区间*/}
				{
					authForm.includes('1') && <FormItem label="时间" className={ showFormItem('range') ? "" : "hide"}>
						<RangePicker
							allowClear={false}
							defaultValue={[moment(dateInterval.startDate, 'YYYYMMDD'), moment(dateInterval.endDate, 'YYYYMMDD')]}
							onChange={(M, date) => changeForm({
								startDate: date[0].split('-').join(''),
								endDate: date[1].split('-').join(''),
							}, 'dateInterval')} />
					</FormItem>
				}
                
				{
					authForm.includes('2') && <FormItem label = "软件名称">
						<Select
							value={form.apptypeid}
							onFocus={() => dispatch({type: 'apprenticeQuality/fetchApptypeid'})}
							onChange={v => changeForm({apptypeid: v})}>
							<Option value="">汇总</Option>
							{
								apptypeidOptions.map(item => 
									<Option key={item.apptypeid} value={item.apptypeid}>{item.apptypeid}</Option>
								)
							}
						</Select>
					</FormItem>
				}
                
				{
					authForm.includes('3') && <FormItem label="负责人">
						<Select
							showSearch
							value={form.player}
							onFocus={() => dispatch({type: 'apprenticeQuality/fetchPlayer'})}
							onChange={v => changeForm({player: v})}>
							<Option value="">汇总</Option>
							{
								playerOptions.map(item => 
									<Option key={item.playerid} value={item.playerid}>{item.player}</Option>
								)
							}
						</Select>
					</FormItem>
				}
                
				{
					authForm.includes('4') && <FormItem label="等级">
						<Select
							showSearch
							value={form.ulevel}
							onFocus={() => dispatch({type: 'apprenticeQuality/fetchUlevel'})}
							onChange={v => changeForm({ulevel: v})}>
							<Option value="">汇总</Option>
							{
								ulevelOptions.map(item => 
									<Option key={item.ulevel} value={item.ulevel}>{item.ulevel}</Option>
								)
							}
						</Select>
					</FormItem>
				}
                
				{
					authForm.includes('5') && <FormItem label="徒弟状态">
						<Select
							showSearch
							value={form.usertag}
							onFocus={() => dispatch({type: 'apprenticeQuality/fetchUsertag'})}
							onChange={v => changeForm({usertag: v})}>
							<Option value="">汇总</Option>
							{
								usertagOptions.map(item => 
									<Option key={item.usertag} value={item.usertag}>{item.usertag}</Option>
								)
							}
						</Select>
					</FormItem>
				}
                
				{
					authForm.includes('6') && <FormItem label="师父组">
						<Select
							showSearch
							value={form.mastergroup}
							onFocus={() => dispatch({type: 'apprenticeQuality/fetchAcc'})}
							onChange={v => changeForm({mastergroup: v})}>
							<Option value="">汇总</Option>
							{
								accOptions.map(item => 
									<Option key={item.master_groupid} value={item.master_groupid}>{item.master_groupname}</Option>
								)
							}
						</Select>
					</FormItem>
				}
                
				{
					authForm.includes('7') && <FormItem label = "师父ID">
						<Input 
							value={form.accid}
							onChange={e => changeForm({accid: e.target.value}, 'form', false)}
							onPressEnter={e => changeForm({accid: e.target.value})}
							placeholder="输入师父ID" />
					</FormItem>
				}
                
				{
					authForm.includes('8') && <FormItem label="师父手机号">
						<Input 
							value={form.mobile}
							onChange={e => changeForm({mobile: e.target.value}, 'form', false)}
							onPressEnter={e => changeForm({mobile: e.target.value})}
							placeholder="输入手机号" />
					</FormItem>
				}
                
				{
					authForm.includes('9') && <FormItem label="师父邀请码">
						<Input 
							value={form.code}
							onChange={e => changeForm({code: e.target.value}, 'form', false)}
							onPressEnter={e => changeForm({code: e.target.value})}
							placeholder="输入邀请码" />
					</FormItem>
				}
			</Form>
		</FormInlineLayout>
	)
}

export default FormLayout;