import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => ({
    count: 10
  }),
  actions: {
    setCount(count) {
      this.count = count
    }
  },
  persist: true
})