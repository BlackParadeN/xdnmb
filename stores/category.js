/**
 * 分类
 */

import { defineStore } from 'pinia'
import { list as categoryList } from "@/api/category.js"

export const useCategoryStore = defineStore('category', {
  state: () => {
    return {
			loading: true,
      categoryies: [],
			children: []
    }
  },
	actions: {
		// 初始化需要时间，如果在没初始化完成前就打开分类，需要显示加载（或者骨架）
		init() {
			categoryList().then(response => {
				const list = response.data
				this.categoryies = list
				let arr = []
				list.forEach(e => {
					arr = arr.concat(e.forums)
				})
				this.children = arr
				this.loading = false
			})
		},
		renderName(id) {
			const category = this.children.find(e => String(e.id) === String(id))
			return category ? category.name : ""
		}
	}
})