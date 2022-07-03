<template>
	<view>
		<view class="card" v-for="(item,index) in dataList" :index="index" :key="index">
			<view class="flex m-b-10">
				<view class="flex-4 text-left">{{ item.user_hash }}</view>
				<view class="flex-4 text-center">{{ categoryStore.renderName(item.fid) }}</view>
				<view class="flex-4 text-right">{{ fromNow(item.now) }}</view>
			</view>
			<view class="body" @click="test()">
				<view v-html="item.content"></view>
			</view>
			<view class="footer"></view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onBeforeMount } from 'vue'
	import { onReachBottom, onShow, onLoad, onReady } from '@dcloudio/uni-app'
	
	import { timeLine } from "@/api/thread.js"
	import { fromNow } from "@/common/index.js"
	
	import { useCategoryStore } from "@/stores/category.js"
	const categoryStore = useCategoryStore()
	
	onLoad(() => {
	})
	
	onReady(() => {
		uni.setNavigationBarTitle({
			title: "时间线"
		})
	})
	
	const count = ref(0)
	function test() {
		console.log("1")
		count.value++
		let title = "时间线" + count.value
		console.log(title)
		uni.setNavigationBarTitle({
			title: title
		})
		
		// timeLine({page: 1}).then(response => {
		// 	console.log("resp")
		// 	console.log(response)
		// })
	}
	
	const dataList = [
						 {
						        "id": 50000002,
						        "fid": 4,
						        "ReplyCount": 258,
						        "img": "2022-06-18/62acedc59ef24",
						        "ext": ".png",
						        "now": "2022-06-18(六)05:10:29",
						        "user_hash": "Admin",
						        "name": "无名氏",
						        "title": "无标题",
						        "content": "&bull; 好久不见<br />\r\n&bull; 灾后重建有序进行中，由于目前人手不足，部分板块暂停开放；旧串三酱会开发相关功后能陆续恢复<br />\r\n&bull; 使用逻辑与旧岛相同，但版规理论上只禁止任何广义上法律不允许的内容。除此之外禁晒妹及恶臭现充话题<br />\r\n&bull; 本串为QA串，如对本岛未来发展/人员构成/先前事件 持有疑问请在本串留言，我们会积攒进行回应<br />\r\n&bull; 回应长文包含了大部分问题的解释，如对本岛及先前事件好奇请耐心阅读<br />\r\n&bull; 特殊事项请携缘由联系邮箱：<a href=mailtohelp@nmbxd.com>help@nmbxd.com</a><br />\r\n&bull;  原有数据会伴随新系统上线进行恢复，恢复前啥也没有，稍安勿躁<br />\r\n&bull; 特殊时期，冷却时间/板块分布/处理响应时间 均为特殊情况，会慢慢恢复<br />\r\n&bull; 如暂时无原需要板块，请将串发至综一或者讨论内容意思相近板块<br />\r\n&bull; 客户端下载地址：<a href=\"https://app.nmbxd.com\" target=\"_blank\">https://app.nmbxd.com</a><br />\r\n&bull; <span style=\" font-weight: bold \"><font color=\"#CC0000\">不论是敌是友，久等了，欢迎回来。</font><span></h1>",
						        "sage": 1,
						        "admin": 1,
						        "Hide": 0,
						        "Replies": [
						            {
						                "id": 50038591,
						                "fid": 4,
						                "ReplyCount": 0,
						                "img": "",
						                "ext": "",
						                "now": "2022-06-21(二)06:46:25",
						                "user_hash": "7MkRYuP",
						                "name": "无名氏",
						                "title": "无标题",
						                "content": "好耶，回来了(*´∀`)",
						                "sage": 0,
						                "admin": 0,
						                "Hide": 0
						            },
						            {
						                "id": 50038797,
						                "fid": 4,
						                "ReplyCount": 0,
						                "img": "",
						                "ext": "",
						                "now": "2022-06-21(二)07:26:49",
						                "user_hash": "UpavNYE",
						                "name": "无名氏",
						                "title": "无标题",
						                "content": "回来了<br />\n这里才是家",
						                "sage": 0,
						                "admin": 0,
						                "Hide": 0
						            },
						            {
						                "id": 50038848,
						                "fid": 4,
						                "ReplyCount": 0,
						                "img": "",
						                "ext": "",
						                "now": "2022-06-21(二)07:35:53",
						                "user_hash": "stmXJfk",
						                "name": "无名氏",
						                "title": "无标题",
						                "content": "回家力！",
						                "sage": 0,
						                "admin": 0,
						                "Hide": 0
						            },
						            {
						                "id": 50039112,
						                "fid": 4,
						                "ReplyCount": 0,
						                "img": "",
						                "ext": "",
						                "now": "2022-06-21(二)08:06:58",
						                "user_hash": "JzeObtU",
						                "name": "无名氏",
						                "title": "无标题",
						                "content": "( ´∀`)回家啦",
						                "sage": 0,
						                "admin": 0,
						                "Hide": 0
						            },
						            {
						                "id": 50043122,
						                "fid": 4,
						                "ReplyCount": 0,
						                "img": "",
						                "ext": "",
						                "now": "2022-06-21(二)12:02:03",
						                "user_hash": "RcX2OX4",
						                "name": "无名氏",
						                "title": "无标题",
						                "content": "三酱你做的好啊ﾟ ∀ﾟ)ノ",
						                "sage": 0,
						                "admin": 0,
						                "Hide": 0
						            }
						        ],
						        "RemainReplies": 253
						    },
						    {
									"id": 50251353,
									"fid": 11,
									"ReplyCount": 93,
									"img": "",
									"ext": "",
									"now": "2022-07-01(五)13:08:13",
									"user_hash": "k7dr3cN",
									"name": "⑥",
									"title": "海龟汤系列，来！",
									"content": "7人被困在一座古堡里，每人一个独立的房间，他们相互不认识也无法交流，并且他们要完成逃脱。<br />\n规则如下：在接下来一周时间，每天固定的某个时刻可以选择开门逃走，但每天只能限制一个人开门，如果多人一起开门，则会一起死掉。<br />\n最终，7人无一逃脱，全员死亡。",
									"sage": 0,
									"admin": 0,
									"Hide": 0,
									"Replies": [
											{
													"id": 50253402,
													"fid": 11,
													"ReplyCount": 0,
													"img": "",
													"ext": "",
													"now": "2022-07-01(五)15:15:06",
													"user_hash": "k7dr3cN",
													"name": "无名氏",
													"title": "无标题",
													"content": "<font color=\"#789922\">&gt;&gt;No.50253344</font><br />\n凶手没有1v6( `д´)<br />\n那六人是同时开门所以死掉的( `_っ´)",
													"sage": 0,
													"admin": 0,
													"Hide": 0
											},
											{
													"id": 50253410,
													"fid": 11,
													"ReplyCount": 0,
													"img": "",
													"ext": "",
													"now": "2022-07-01(五)15:15:32",
													"user_hash": "7C4GHpF",
													"name": "无名氏",
													"title": "无标题",
													"content": "多人开门会导致触发机关，?",
													"sage": 0,
													"admin": 0,
													"Hide": 0
											},
											{
													"id": 50253417,
													"fid": 11,
													"ReplyCount": 0,
													"img": "",
													"ext": "",
													"now": "2022-07-01(五)15:15:56",
													"user_hash": "k7dr3cN",
													"name": "无名氏",
													"title": "无标题",
													"content": "<font color=\"#789922\">&gt;&gt;No.50253393</font><br />\n否<br />\n但方向是对的",
													"sage": 0,
													"admin": 0,
													"Hide": 0
											},
											{
													"id": 50253430,
													"fid": 11,
													"ReplyCount": 0,
													"img": "",
													"ext": "",
													"now": "2022-07-01(五)15:16:43",
													"user_hash": "k7dr3cN",
													"name": "无名氏",
													"title": "无标题",
													"content": "<font color=\"#789922\">&gt;&gt;No.50253410</font><br />\n是的，被规则杀死(　ﾟ 3ﾟ)",
													"sage": 0,
													"admin": 0,
													"Hide": 0
											},
											{
													"id": 50253433,
													"fid": 11,
													"ReplyCount": 0,
													"img": "",
													"ext": "",
													"now": "2022-07-01(五)15:16:52",
													"user_hash": "kICZYcF",
													"name": "无名氏",
													"title": "无标题",
													"content": "第八个人在2-5天与剩下六个人有过接触吗",
													"sage": 0,
													"admin": 0,
													"Hide": 0
											}
									],
									"RemainReplies": 88
							},
					]
	
</script>

<style lang="scss">
	page {
		background-color: $page-background-color;
	}
	
	.card {
		background-color: #fff;
		margin: 10rpx 0;
		padding: 20rpx;
		border: 1px solid #dbdbdb;
	}
</style>
