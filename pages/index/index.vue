<template>
	<view>
		<view class="card" v-for="(item,index) in state.dataList" :key="item.id">
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
	</view>
</template>

<script setup>
	import { ref, reactive } from 'vue'
	import { onReachBottom, onShow, onLoad, onReady } from '@dcloudio/uni-app'
	
	import { timeLine } from "@/api/thread.js"
	import { fromNow, renderThumb, handlePreview } from "@/common/index.js"
	
	import { useCategoryStore } from "@/stores/category.js"
	const categoryStore = useCategoryStore()
	
	onReady(() => {
		uni.setNavigationBarTitle({
			title: "时间线"
		})
	})
	
	const page = ref(1)
	const state = reactive({
		dataList: []
	})
	onLoad(() => {
		timeLine({page: page.value}).then(response => {
			state.dataList = response.data
		})
	})
	
	onReachBottom(() => {
		// uni.showNavigationBarLoading()
		console.log("loading...")
		page.value++
		console.log(page.value)
		timeLine({page: page.value}).then(response => {
			console.log(response.data)
			response.data.forEach(e => {
				state.dataList.push(e)
			})
			console.log("------")
			console.log(state.dataList)
			// dataList.value = dataList.value.concat(response.data)
			// console.log(dataList.value)
			console.log("finished.")
		})
	}) 
	
	// const count = ref(0)
	// function test() {
	// 	count.value++
	// 	let title = "时间线" + count.value
	// 	uni.setNavigationBarTitle({
	// 		title: title
	// 	})
	// }
	
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
	}
	
</style>
