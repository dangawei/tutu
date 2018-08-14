import { J, POST } from '@/configs/request';

export default {
	// 页面权限控制表
	getAuthConfig: data => J('/reportexplainationdata/getconfig', data),
	
	// 页面配置信息
	tableconfig: data => POST('/reportexplainationdata/tableconfig', data),
	
	// 汇总列表
	getQualityTotal: data => J('/appmakemoneymasterqualitydata/masterqualitytotal', data),

	// 明细列表
	getQualityByuser: data => J('/appmakemoneymasterqualitydata/masterqualitybyuser', data),

	// 按负责人
	getQualityByplayer: data => J('/appmakemoneymasterqualitydata/masterqualitybyplayer', data),

	// 周报汇总列表
	getQualityByweekTotal: data => J('/appmakemoneymasterqualitydata/masterqualitybyweektotal', data),

	// 周报明细列表
	getQualityByweekByuser: data => J('/appmakemoneymasterqualitydata/masterqualitybyweek', data),

	// 月报汇总列表
	getQualityBymonthTotal: data => J('/appmakemoneymasterqualitydata/masterqualitybymonthtotal', data),

	// 月报明细列表
	getQualityBymonthByuser: data => J('/appmakemoneymasterqualitydata/masterqualitybymonth', data),

	// 负责人邀请码
	getPlayercodeList: data => J('/appmakemoneymasterqualitydata/getplayercodeidlist', data),

	// 师父ID
	getQidList: data => J('/masterqualityqidgroupdata/getqidlist', data),
	
	// 所有师父ID
	getQidGroupList: data => J('/masterqualityqidgroupdata/searchqidlist', data),

	// 软件名称列表
	getApptypeidList: data => J('/appmakemoneymasterqualitydata/getapptypeid', data),

	// 负责人列表
	getPlayerList: data => J('/appmakemoneymasterqualitydata/getplayer', data),

	// 等级列表
	getUlevelList: data => J('/appmakemoneymasterqualitydata/getulevel', data),

	// 徒弟状态列表
	getUsertagList: data => J('/appmakemoneymasterqualitydata/getusertag', data),

	// 师父组列表
	getAccList: data => J('/appmakemoneymasterqualitydata/getmastergroup', data),

	// 周数列表
	getWeekList: data => J('/appmakemoneymasterqualitydata/getweek', data),

	// 修改备注
	modMark: data => J('/appmakemoneymasterqualitydata/modmark', data),

	// 修改师父级别
	modUlevel: data => J('/appmakemoneymasterqualitydata/modulevel', data),
};
