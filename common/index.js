import config from "@/common/config.js"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh'

/**
 * 计算多久之前
 * @param {dayjs|String} date 时间参数
 */
export function fromNow(date) {
	dayjs.extend(relativeTime)
	dayjs.locale('zh')
	return dayjs(date).fromNow()
}

/**
 * 拼接图片缩略图url
 */
export function renderThumb(imgUrl) {
	return config.imgThumbUrl + imgUrl
}

/**
 * 处理图片预览
 */
export function handlePreview(imgUrl) {
	uni.previewImage({
		urls: [config.imgUrl + imgUrl]
	})
}
