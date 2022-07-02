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
