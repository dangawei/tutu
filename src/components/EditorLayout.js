import { Component } from 'react';
import LzEditor from 'react-lz-editor';
import {  message } from 'antd';
import { J } from '@/configs/request';

/**
 * 报表说明
 */
class EditorLayout extends Component {
	constructor(props) {
        super(props);
		this.state = {
            editorShow: false,
            content: ''
		}
    }

    showEditor = show => {
        this.setState({ editorShow: show })
    }

    // 获取说明内容
    getContent = () => {
        J('/reports/reporttimecheck', {
            rptname: '',
            url: '/xx/rpt1',
            dt: '2018-07-04'
        }).then(res => {
            const d = res.datalist
            const content = (d[0] && d[0].content) ? decodeURI(d[0].content) : ''
            this.setState({ content })
        })
    }

    // 提交说明内容
    submitContent = () => {
        let { content } = this.state
        let _url = `/datacenter/reports/reportssubmitted?rptname=&url=/xx/rpt1&content=${encodeURI(content)}`
        fetch(_url, {
            method: 'GET',
            mode: 'cors'
        }).then(res => {
        	this.getContent()
        })
    }

    // 保存内容
    cbReceiver = (content) => {
        this.setState({ content })
    }

    componentWillMount() {
        this.getContent()
    }

	render() {
        let { editorShow, content } = this.state
		return (
			<div className="timeline-wrapper" style={{ minHeight: 480, overflow: 'auto' }}>
                <div className="timeline-title">
                    <b>说明信息</b>
                    {
                        !editorShow && <a className="fr mr15" onClick={() => this.showEditor(true)}>编辑</a>
                    }
                    {
                        editorShow && 
                            <span>
                                <a className="fr mr15 mt5" onClick={() => this.showEditor(false)}>取消</a>
                                <a type="primary" className="fr mr15 mt5" onClick={() => {
                                    this.showEditor(false)
                                    this.submitContent()
                                }}>提交修改</a>
                            </span>
                    }
                </div>

                <div>
                    {
                        editorShow && <LzEditor
                        importContent={content}
                        cbReceiver={this.cbReceiver}
                        convertFormat={'html'}
                        autoSave={false}
                        image={false}
                        color={false}
                        video={false}
                        audio={false} />
                    }
                    {
                        !editorShow && <div dangerouslySetInnerHTML={{__html: content}} />
                    }
                </div>
            </div>
		)
	}
}

export default EditorLayout;