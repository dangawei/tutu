/**
 * 上传模块
 */
import { axios } from '@/configs/request';

export default {
	// 用户列表
	upload: data => axios.post('file/upload', data)
}
