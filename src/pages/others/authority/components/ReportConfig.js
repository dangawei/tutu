import { Component } from 'react';

import { Button, Radio, Checkbox, Modal, Form, Input, Popover, Icon } from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const fieldObj = {
	'表格区': '1',
	'控件栏': '2',
	'功能': '3',
	'图表区': '4',
}

class FieldCheck extends Component {

	render() {
		let { allValues = [], onChange, value = [], configtype } = this.props;
		let allKeys = allValues.map(item => configtype+'-'+item.id+'-'+item.name_chn);

		return (
			<span className="check-group">
				{
					allValues.length > 6 ?
					<Popover
						placement="rightTop"
						content={
							<div className="scrollbar-middle popover-checkbox-group" style={{ width: 160 }}>
								<CheckboxGroup
									className="ant-checkbox-group-vertical" 
									value={value}
									onChange={onChange.bind(null, configtype)}>
									{
										allValues.map(item => 
											<Checkbox value={configtype+'-'+item.id+'-'+item.name_chn} key={item.id}>{item.name_chn}</Checkbox>
										)
									}
								</CheckboxGroup>
							</div>
						}
						title={ <Checkbox indeterminate={!!value.length && (value.length < allValues.length)} onChange={ e => onChange(configtype, e.target.checked ? allKeys : [], true)}>全选</Checkbox> }
						trigger="click">
						<Button type="primary" size="small">显示列</Button>
					</Popover> :
					<CheckboxGroup 
						value={value}
						onChange={onChange.bind(null, configtype)}>
						{
							allValues.map(item => 
								<Checkbox value={configtype+'-'+item.id+'-'+item.name_chn} key={item.id}>{item.name_chn}</Checkbox>
							)
						}
					</CheckboxGroup>
				}
			</span>
		) 
	}
}

export default class ReportConfig extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			cfgname: '',
			valueRadio: 1,
			valueSheet: null,
			oldConfigData: {},
			configData: {},
		}
	}

	componentWillMount() {
		let { configSheet, configData } = this.props;
		if(configSheet && configSheet.length) {
			this.setState({
				valueSheet: configSheet[0].id
			})
			this.props.onSheetChange(configSheet[0].id);
		}
		if(configData) {
			this.setState({
				oldConfigData: configData,
				configData
			})
		}
	}

	handleShowModal = action => {
		let { showModal, cfgname } = this.state;
		this.setState({ showModal: !showModal })
		if(action === 'ok') {
			this.props.handleAddConfig(cfgname)
		}
	}

	/**
	 * 配置项切换
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	handleRadioChange = e => {
		this.setState({ valueRadio: e.target.value })
	}

	/**
	 * tab标签切换
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	onSheetChange = e => {
		this.setState({ valueSheet: e.target.value })
		this.props.onSheetChange(e.target.value);
	}

	/**
	 * 字段选择
	 * @param  {[type]} e    [description]
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	onFieldChange = (type, v, isall = false) => {
		let { valueSheet, configData } = this.state;

		// 如果是全选数据追加去重, 空选过滤
		if(isall) {
			v = v.length ? [...new Set(v.concat(configData[valueSheet] || []))] : configData[valueSheet].filter(item => !item.startsWith(type));
		}
		this.setState({
			configData: {
				[valueSheet] : v
			}
		})
	} 

	/**
	 * 保存或取消
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	handleReportChange = type => {
		let { configData, oldConfigData, valueSheet, valueRadio } = this.state;
		if(type === 'ok') {
			let r = this.arrToObj(configData[valueSheet]);
			console.log(r);
			let configtype = Object.keys(r).join('_'),
				vs = Object.values(r),
				itemid = [],
				itemname = [];
			vs.map(item => {
				itemid.push(item.map(l => l.split('-')[0]).join(','))
				itemname.push(item.map(l => l.split('-')[1]).join(','))
			})
			this.props.handleConfigChange(valueRadio, valueSheet, configtype, itemid.join('_'), itemname.join('_'));
		} else {
			this.props.handleCancelReportConfig();
		}
	}

	arrToObj = data => {
		let keys = [], result = {};
		data.length && data.forEach(item => {
			var l = item.split('-');
			if(keys.indexOf(l[0]) === -1) {
				keys.push(l[0]);
				result[l[0]] = [];
			}
			result[l[0]].push(l[1]+'-'+l[2])
		})
		return result;
	}

	render() {
		let { configlist = [], configSheet = [], configField, oldConfigData, handleDelConfig } = this.props;
		let { showModal, cfgname, valueRadio, valueSheet, configData} = this.state;

		// 所有表单字段
		let allFeilds = [];
		for ( let k in configField ) {
			allFeilds = allFeilds.concat([...configField[k].map(item => fieldObj[k]+ '-' + item.id + '-' + item.name_chn)])
		}

		return (
			<div className="config-panel config-panel-check">
				<div className="config-title">报表配置修改</div>
				<div className="config-header">
					<div className="config-header-left">
						{
							configlist.length ?
							<Radio.Group
								className="config-radio-group"
								value={valueRadio}
								onChange={this.handleRadioChange}>
								{
									configlist.map(item => 
										<Radio.Button value={item.id} key={item.id}>
											{item.cfgname}
											<Icon
												type="close"
												onClick={handleDelConfig.bind(null, item.id)}/>
										</Radio.Button>
									)
								}
							</Radio.Group> : null
						}
					</div>
					<div className="config-header-right">
						<a href="javascript:;" onClick={this.handleShowModal}>添加配置</a>
					</div>
				</div>
				<div className="config-content">
					<div className="config-body scrollbar-middle">
						<div className="check-groups">
							<div className="check-all">
								<Checkbox 
									indeterminate={configData[valueSheet] && configData[valueSheet].length && (configData[valueSheet].length < allFeilds.length)}
									 onChange={ e => this.onFieldChange('0', e.target.checked ? allFeilds : [])}>全部选择</Checkbox>
							</div>
							<div className="check-list">
								<div className="check-item">
									<span className="check-label">标签栏：</span>
									<span className="check-group">
										{
											configSheet.length ?
											<RadioGroup
												value={valueSheet}
												onChange={this.onSheetChange}>
												{
													configSheet.map(item => 
														<Radio value={item.id} key={item.id}>{item.sheetname}</Radio>
													)
												}
											</RadioGroup> : null
										}
									</span>
								</div>
								{
									configField['控件栏'] && configField['控件栏'].length && 
									<div className="check-item">
										<span className="check-label">控件栏：</span>
										<FieldCheck
											value={configData[valueSheet]}
											onChange={this.onFieldChange}
											allValues={configField['控件栏']}
											configtype={'2'} />
									</div>
								}
								{
									configField['功能'] && configField['功能'].length && 
									<div className="check-item">
										<span className="check-label">功能：</span>
										<FieldCheck
											value={configData[valueSheet]}
											onChange={this.onFieldChange}
											allValues={configField['功能']}
											configtype={'3'} />
									</div>
								}
								{
									configField['表格区'] && configField['表格区'].length && 
									<div className="check-item">
										<span className="check-label">表格区：</span>
										<FieldCheck
											value={configData[valueSheet]}
											onChange={this.onFieldChange}
											allValues={configField['表格区']}
											configtype={'1'} />
									</div>
								}
								{
									configField['图表区'] && configField['图表区'].length &&
									<div className="check-item">
										<span className="check-label">图表区：</span>
										<FieldCheck
											value={configData[valueSheet]}
											onChange={this.onFieldChange}
											allValues={configField['图表区']}
											configtype={'4'} />
									</div>
								}
								{/*<div className="check-item">
									<span className="check-label">控件栏：</span>
									<span className="check-group">
										<CheckboxGroup value={['1', '2', '3']}>
											{
												['1', '2', '3', '4', '5'].map(item => 
													<Checkbox value={item} key={item}>{item}</Checkbox>
												)
											}
										</CheckboxGroup>
									</span>
								</div>*/}

							</div>
						</div>
					</div>
				</div>
				<div className="config-btns">
					<Button onClick={this.handleReportChange.bind(null, 'cancel')}>取消</Button>
					<Button type="primary" onClick={this.handleReportChange.bind(null, 'ok')}>保存</Button>
				</div>

				<Modal
					visible={showModal}
					onCancel={this.handleShowModal}
					onOk={this.handleShowModal.bind(null, 'ok')}
					title="新增组"
					okText="提交"
					cancelText="取消">
					<Form>
						<FormItem labelCol={{span: 4}} wrapperCol={{ span: 18 }} required label="配置名">
							<Input
								value={cfgname}
								onChange={e => this.setState({ cfgname: e.target.value })}
								placeholder="请输入配置名称" />
						</FormItem>
					</Form>
				</Modal>
			</div>
		)
	}
}