import PropTypes from 'prop-types';
import { connect } from 'dva';

import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;

const Myupload = ({
    _upload,
    ...props
}) => {
    let { dispatch } = props;
    
    const handleUpload = (file) => {
        console.log('file', file)
    }

	return (
		<div>
			<Dragger onChange={(e) => handleUpload(e)}>
                <p className="ant-upload-drag-icon">
                   <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖动文件到此处，进行上传！</p>
                <p className="ant-upload-hint">支持单个或批量上传。 禁止上传大于50MB的文件！ </p>
            </Dragger>
		</div>
	)
};

Myupload.propTypes = {
	_upload: PropTypes.object,
};

export default connect(({ _upload }) => ({ _upload }))(Myupload);
	