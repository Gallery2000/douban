<template>
    <div class="status-view has-header">
        <banner></banner>
        <user-bar></user-bar>
        <div class="content-list">
            <card mold="quote" v-for="item in items" :key="item"></card>
            <a href="#" class="list-link">显示更多广播</a>
        </div>
        <download-app></download-app>
    </div>
</template>

<script>
import Banner from 'components/banner'
import UserBar from 'components/user-bar'
import Card from 'components/card'
import DownloadApp from 'components/download-app'
export default {
    data(){
        return {
            items: new Array(10)
        }
    },
    components:{
        Banner,
        UserBar,
        Card,
        DownloadApp
    }
}
</script>

<style lang="scss" scoped>
    .list-link {
        display: block;
        padding: 1.5rem 0;
        font-size: 1.6rem;
        line-height: 1.8rem;
        text-align: center;
        color: #42bd56;
    }
</style>
