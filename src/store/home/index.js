import { reqCategoryList } from '@/api'
// home模块的小仓库
const state = {
  categoryList: [],
}
const mutations = {
  CREATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
}
const actions = {
  async categoryList({ commit }) {
    let res = await reqCategoryList()
    if (res.code == 200) {
      commit('CREATEGORYLIST', res.data)
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
