import request from '@/common/request.js'

export function list() {
	return request({
		url: "/Api/getForumList",
		method: "get"
	})
}