<template>
	<view>
		<view class="card" v-for="(item,index) in thread.list" :key="item.id">
			<view class="head">
				<view class="text-left">{{ item.user_hash }}</view>
				<view class="text-right">{{ categoryStore.renderName(item.fid) }}</view>
			</view>
			<view class="body">
				<view class="body-container" v-if="item.img" @click="handlePreview(item.img + item.ext)">
					<img class="body-img" :src="renderThumb(item.img + item.ext)" />
				</view>
				<view class="body-content" v-html="item.content"></view>
			</view>
			<view class="footer">
				<view>
					{{ fromNow(item.now) }}
				</view>
				<view>
					<i class="fa fa-commenting-o m-r-10"></i>{{ item.ReplyCount }}
				</view>
			</view>
		</view>
		<view class="more" v-if="!thread.more"> ----- 别刷了，一滴都不剩了 -----</view>
	</view>
</template>

<script setup>
	import { ref, reactive } from 'vue'
	import { onReachBottom, onShow, onLoad, onReady } from '@dcloudio/uni-app'
	
	import { timeLine } from "@/api/thread.js"
	import { fromNow, renderThumb, handlePreview, addViews, addView, clearViews, hasView } from "@/common/index.js"
	
	import { useCategoryStore } from "@/stores/category.js"
	const categoryStore = useCategoryStore()
	
	onReady(() => {
		uni.setNavigationBarTitle({
			title: "时间线"
		})
	})
	
	const thread = reactive({
		page: 1,
		list: [],
		more: true
	})
	onLoad(() => {
		timeLine({page: thread.page}).then(response => {
			thread.list = response.data
			addViews(response.data)
		})
	})
	
	onReachBottom(() => {
		loadMore()
	}) 
	
	/**
	 * 到达页面底部加载数据
	 * 好像时间线就是一直倒序取值，当有新串的时候，就会发生重复的情况，所以进行了去重
	 */
	function loadMore() {
		thread.page++
		timeLine({page: thread.page}).then(response => {
			// 没有更多了。ps：不清楚判断方式是否正确
			if (!response.data || response.data.length === 0) {
				thread.more = false
				return
			}
			let count = 0
			response.data.forEach(e => {
				if (!hasView(e.id)) {
					thread.list.push(e)
					addView(e.id)
					count++
				} else {
					console.log("gotcha: %o", e)
				}
			})
			// 如果发串量太多了，数据可能都是重复的，这个时候就再加载一次
			if (count === 0) {
				loadMore()
			}
		})
	}
	
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
	
	.head {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15rpx;
		color: $uni-text-color-grey;
		font-size: 22px;
	}
	
	.body {
		overflow-y: auto;
		
		&-container {
			float: left;
			margin-right: 40rpx;
			margin-bottom: 10rpx;
		}
		
		&-img {
			max-width: 350rpx;
			max-height: 250rpx;
		}
		
		&-content {
		}
		
	}
	
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15rpx;
		color: $uni-text-color-grey;
		font-size: 20px;
	}
	
	.more {
		font-size: 18px;
		color: $uni-text-color-grey;
		text-align: center;
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	
</style>
