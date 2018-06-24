<template>
    <div class="home-view has-header">
        <sub-nav mold="quickNav" :loginStatus="loginStatus"></sub-nav>
        <list :items="events" mold="thumbnail"></list>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <loading  slot="spinner"></loading>
        </infinite-loading>
    </div>
</template>

<script>
import SubNav from 'components/sub-nav'
import List from 'components/list'
import InfiniteLoading from 'vue-infinite-loading'
import Loading from 'components/loading'
import { mapState, mapActions } from 'vuex'
export default {
    computed:{
        loginStatus(){
            return this.email ? true : false
        },
        ...mapState({
            events:state=>state.activities.events,
            email:state=>state.user.login_email
        })
    },
    methods:{
        onInfinite(){
            setTimeout(()=>{
                this.loadMore()
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            },1000)
        },
        ...mapActions([
            'loadMore'
        ])
    },
    components:{
        SubNav,
        List,
        InfiniteLoading,
        Loading
    }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
