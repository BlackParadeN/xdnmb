import config from "@/common/config.js"

const request = ({ url = "", method = "GET", header = {}, data = {}, params = {} }) => {
	
	let paramStr;
	// 处理 params
	const _result = []
	for (const key in params) {
		const value = params[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue
		}
		_result.push(`${key}=${value}`)
	}
	paramStr = _result.length ? "?" + _result.join('&') : ''
	let requestUrl = config.baseUrl + url + paramStr
	
	return new Promise((resolve, reject) => {
		uni.request({
			method: method.toUpperCase(),
			url: requestUrl,
			data: data,
			header: header,
			dataType: 'json',
		}).then((response) => {
			resolve(response);
		}).catch(error => {
			console.log("-- err --")
			console.log(error)
			let [err, res] = error;
			reject(err)
		})
	});
}

export default request
