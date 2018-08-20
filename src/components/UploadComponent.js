import { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, message, Button } from 'antd';

/**
 * 上传文件组件
 */
class MyUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    handleChange = (info) => {
        let fileList = info.fileList;
        fileList = fileList.slice(-2);

        fileList = fileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });
        fileList = fileList.filter((file) => {
            if (file.response) {
                return message.success('上传成功！');
            }
            return true;
        });

        this.setState({ fileList });
    }

    render() {
        const props = {
            action: '//api.admin.chengxuyuantoutiao.com/file/upload',
            onChange: this.handleChange,
            multiple: false,  // 批量上传
        };
        return (
            <Upload {...props} fileList={this.state.fileList}>
                <Button>
                   <Icon type="upload"/> 上传文件
                </Button>
            </Upload>
        );
    }
}

export default MyUpload;