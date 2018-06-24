import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import movie from './modules/movie'
import book from './modules/book'
import user from './modules/user'
import group from './modules/group'
import search from './modules/search'
import subject from './modules/subject'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        activities,
        movie,
        book,
        user,
        group,
        search,
        subject
    }
})