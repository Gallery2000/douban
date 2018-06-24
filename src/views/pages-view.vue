<template>
    <div class="page-view">
        <header-bar @showTalion="open"></header-bar>
        <router-view></router-view>
        <talion-view @closeTalion="close" v-show="talion"></talion-view>
    </div>
</template>

<script>
import HeaderBar from 'components/header-bar'
import TalionView from 'views/talion-view'
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            talion:''
        }
    },
    methods:{
        open(){
            this.talion = 'open'
        },
        close(){
            this.talion = ''
        }
    },
    components:{
        HeaderBar,
        TalionView
    }
}
</script>

<style>

</style>
