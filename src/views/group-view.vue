<template>
    <div class="group-view has-header">
        <user-bar></user-bar>
        <group title="租房找室友" :items="group_a">
            <a class="list-link" href="#" slot="more">更多相关小组</a>
        </group>
        <group title="来聊五块钱" :items="group_b">
            <a class="list-link" href="#" slot="more">来聊五块钱</a>
        </group>
        <group title="买买买" :items="group_c">
            <a class="list-link" href="#" slot="more">更多相关小组</a>
        </group>
        <download-app></download-app>
    </div>
</template>

<script>
import UserBar from 'components/user-bar'
import Group from 'components/group'
import {mapState} from 'vuex'
import DownloadApp from 'components/download-app'
export default {
    created(){
        this.$store.dispatch('getGroup')
    },
    computed:{
        ...mapState({
            group_a : state=>state.group.group_a,
            group_b : state=>state.group.group_b,
            group_c : state=>state.group.group_c
        })
    },
    components:{
        UserBar,
        Group,
        DownloadApp
    }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 3rem;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}

.user-bar {
  margin-bottom: 1.5rem;
}
</style>
