<script setup>
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
	import { useCategoryStore } from "@/stores/category.js"
	const categoryStore = useCategoryStore()
	
	onLaunch(() => {
		console.log('App Launch')
		categoryStore.init()
	})
	
	onShow(() => {
		console.log('App Show')
	})
	
	onHide(() => {
		console.log('App Hide')
	})
	
</script>

<style lang='scss'>
	@import url("./static/font-awesome.min.css");
	/*每个页面公共css */
	
	.flex {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	@for $i from 0 through 12 {
		.flex-#{$i} {
			flex: $i;
		}
	}
	
	/* 文字左对齐 */
	.text-left {
		text-align: left;
	}
	
	/* 文字居中对齐 */
	.text-center {
		text-align: center;
	}
	
	/* 文字右对齐 */
	.text-right {
		text-align: right;
	}
	
	/* 定义内外边距，历遍1-100 */
	@for $i from 0 through 100 {
		// 只要双数和能被5除尽的数
		@if $i % 2 == 0 or $i % 5 == 0 {
			// 得出：margin-30或者m-30
			.margin-#{$i}, .m-#{$i} {
				margin: $i + rpx!important;
			}
			
			// 得出：padding-30或者p-30
			.padding-#{$i}, .p-#{$i} {
				padding: $i + rpx!important;
			}
			
			@each $short, $long in l left, t top, r right, b bottom {
				// 缩写版，结果如： m-l-30
				// 定义外边距
				.m-#{$short}-#{$i} {
					margin-#{$long}: $i + rpx!important;
				}
				
				// 定义内边距
				.p-#{$short}-#{$i} {
					padding-#{$long}: $i + rpx!important;
				}
				
				// 完整版，结果如：margin-left-30
				// 定义外边距
				.margin-#{$long}-#{$i} {
					margin-#{$long}: $i + rpx!important;
				}
				
				// 定义内边距
				.padding-#{$long}-#{$i} {
					padding-#{$long}: $i + rpx!important;
				}
			}
		}
	}
	
</style>
