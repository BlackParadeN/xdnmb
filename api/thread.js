/**
 * 浏览相关 api
 */
import request from '@/common/request.js'

export function timeLine(params) {
	return request({
		url: "/Api/timeline",
		method: "get",
		params: params
	})
}
