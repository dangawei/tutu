import { Component } from 'react';
import { Timeline, Modal, Form, Input, DatePicker, message } from 'antd';
import { J } from '@/configs/request';
const FormItem = Form.Item;
const { TextArea } = Input;

// 最大显示4条时间轴信息
const MAX_LEN = 4;

/**
 * 时间轴组件
 */
class TimelineLayout extends Component {
	constructor(props) {
        super(props);
		this.state = {
            LIST: [],
            list: [],
            timelineModal: false,
            dt: '',
            timelineInput: ''
		}
    }
    
    // 点击上一个
    prevTimeline = () => {
        let { list, LIST } = this.state
        let i = LIST.indexOf(list[0])
        if (i > 0) {
            list.pop()
            list.unshift(LIST[i - 1])
            this.setState({ list })
        }
    }

    // 点击下一个
    nextTimeline = () => {
        let { list, LIST } = this.state
        let i = LIST.indexOf(list[MAX_LEN - 1])
        if (i < LIST.length - 1) {
        	list.shift()
            list.push(LIST[i + 1])
            this.setState({ list })
        }
    }

    // modal 显隐
    setModalVisible = show => {
        this.setState({ timelineModal: show })
    }
    
    // 选择日期输入
    handleInput = e => {
        this.setState({ 
            timelineInput: e.target.value
        })
    }
    
    // 选择时间
    handleDate = (date, dateString) => {
        let dt = dateString
        let t = this.state.LIST.find(e => e.dt === dt)
        let timelineInput = t ? t.title : ''
        this.setState({ dt, timelineInput })
    }

    // 获取时间轴信息
    getTimeline = () => {
        // url: 'reports/reportaccording'
        J('/reports/reportaccording', {
            rptname: '',
            url: '/xx/rpt1',
            dt: '2018-07-04'
        }).then(res => {
            const d = res.datalist
            this.setState({
                LIST: d,
                list: (d.length > MAX_LEN) ? d.slice(0, MAX_LEN) : d
            })
        })
    }

    // 提交时间轴信息
    submitTimeline = () => {
        let { dt, timelineInput } = this.state
        // url: 'reports/reportssubmitted'
        // let param = new FormData()
        // param.append('rptname', '')
        // param.append('url', '/xx/pt1')
        // param.append('dt', dt)
        // param.append('title', timelineInput)
        // fetch('/datacenter/reports/reportssubmitted', {
        //     method: 'POST',
        //     body: param
        // }).then(res => {
        //     alert('res:::', res)
        // }).catch(e => {
        // 	console.error(e)
        // })
        let _url = `/datacenter/reports/reportssubmitted?rptname=&url=/xx/rpt1&dt=${dt}&title=${timelineInput}`
        fetch(_url, {
            method: 'GET',
            mode: 'cors'
        }).then(res => {
            this.getTimeline()
        })
    }

    componentWillMount() {
        this.getTimeline()
    }

	render() {
        const len = this.state.LIST.length
		return (
			<div className="timeline-wrapper">
                <div className="timeline-title">
                    <b>APP活动时间轴</b>
                    <a className="fr mr15" onClick={() => this.setModalVisible(true)}>编辑</a>

                    <Modal
                        title="编辑时间轴信息"
                        visible={this.state.timelineModal}
                        onOk={() => {
                            this.setModalVisible(false)
                            this.submitTimeline()
                        }}
                        onCancel={() => this.setModalVisible(false)}
                        >
                        <Form>
                            <FormItem style={{ width: '100%' }}>
                                <DatePicker placeholder="请选择时间" onChange={this.handleDate} style={{ width: '100%' }}/>
                            </FormItem>
                            <FormItem>
                                <TextArea 
                                    rows={6}
                                    autosize={true}
                                    value={this.state.timelineInput} 
                                    onChange={(e) => this.handleInput(e)} />
                            </FormItem>
                        </Form>
                    </Modal>
                </div>

                <div className="timeline-content clearfix">
                    {
                        len > MAX_LEN && <a className="prev-timeline" onClick={this.prevTimeline}></a>
                    }

                    <Timeline>                       
                        { 
                            this.state.list.map((e, i) =>
                                <Timeline.Item key={i} color={ e.color && e.color }>
                                    <p>{e.dt}</p>
                                    <p>{e.title}</p>
                                </Timeline.Item>
                            )
                        }
                    </Timeline>

                    {
                        len > MAX_LEN && <a className="next-timeline" onClick={this.nextTimeline}></a>
                    }
                </div>
            </div>
		)
	}
}

export default TimelineLayout;