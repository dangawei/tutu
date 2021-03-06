/**
 * 教材管理模块
 */
import { axios } from '@/configs/request';

export default {
	// 年级列表
	getGrade: data => axios.post('grade/list', data),

	// 添加年级
	addGrade: data => axios.post('grade/add', data),

	// 修改年级
    updateGrade: data => axios.post('grade/update', data),

    // 教材列表
    getBook: data => axios.post('book/list', data),
    
    // 添加教材
	addBook: data => axios.post('book/add', data),

	// 删除教材
	deleteBook: data => axios.post('book/delete', data)
}
