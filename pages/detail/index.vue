<template>
	<view>
		<view class="card" v-for="(item,index) in thread.list" :key="item.id">
			<view class="head">
				<view class="text-left">{{ item.user_hash }}</view>
				<view class="text-left">No.{{ item.id }}</view>
				<view class="text-right">{{ categoryStore.renderName(item.fid) }}</view>
			</view>
			<view class="body">
				<view class="body-container" v-if="item.img" @click="handlePreview(item.img + item.ext)">
					<img class="body-img" :src="renderThumb(item.img + item.ext)" />
				</view>
				<view class="body-content" v-html="item.content"></view>
			</view>
		</view>
		<!-- <view class="more" v-if="!thread.more"> ----- 别刷了，一滴都不剩了 -----</view> -->
	</view>
</template>

<script setup>
	import { ref, reactive } from 'vue'
	import { onLoad, onReady, onShow, onReachBottom, onNavigationBarButtonTap } from '@dcloudio/uni-app'
	
	import { detail } from "@/api/thread.js"
	import { renderThumb, handlePreview } from "@/common/index.js"
	
	import { useCategoryStore } from "@/stores/category.js"
	const categoryStore = useCategoryStore()
	
	onReady(() => {
		uni.setNavigationBarTitle({
			title: `No.${thread.id}`
		})
	})
	
	const thread = reactive({
		id: "",
		page: 1,
		list: [],
		more: true
	})
	onLoad((option) => {
		thread.id = option.id
		detail({page: thread.page, id: option.id}).then(response => {
			let arr = []
			const { Replies, ...topic } = response.data
			arr.push(topic)
			arr = arr.concat(Replies)
			thread.list = arr
		})
	})
	
	onReachBottom(() => {
		loadMore()
	}) 
	
	function loadMore() {
		console.log("loading")
		thread.page++
		detail({page: thread.page, id: thread.id}).then(response => {
			const { Replies, ...topic } = response.data
			thread.list = thread.list.concat(Replies)
		})
	}
	
	onNavigationBarButtonTap((e) => {
		if (e.index === 0) { // 更多
			console.log("more")
		} else if (e.index === 1) { // 回复
			console.log("reply")
		}
	})
	
</script>
	
<style lang="scss">
	page {
		background-color: $page-background-color;
	}
	
	.card {
		background-color: #fff;
		padding: 20rpx;
		border-bottom: 1px solid #dbdbdb;
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
