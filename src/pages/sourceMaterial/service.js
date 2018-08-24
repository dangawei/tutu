/**
<<<<<<< HEAD
 * 教材管理模块
=======
 * 素材管理模块
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
 */
import { axios } from '@/configs/request';

export default {
	// 素材列表
	getSource: data => axios.post('/source/list', data),

	// 添加素材
	addSource: data => axios.post('/source/add', data),

	// 删除素材
<<<<<<< HEAD
  deleteSource: data => axios.post('/source/delete'+data, data),
  // 修改素材
  editSource: data => axios.post('/source/update', data),
}
=======
  deleteSource: data => axios.get('/source/delete/'+data.id, data),
  // 修改素材
  editSource: data => axios.post('/source/update', data),
}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
