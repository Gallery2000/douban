<template>
    <div class="movie-view has-header">
        <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
        <scroller title="免费在线观影" type="hasCover" :items="newMovies"></scroller>
        <scroller title="新片速递" type="hasCover" :items="topMovies"></scroller>
        <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
        <types></types>
        <download-app></download-app>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Scroller from 'components/scroller'
import Types from 'components/types'
import DownloadApp from 'components/download-app'
export default {
    computed:{
        ...mapState({
            hotMovies:state=>state.movie.hotMovies,
            newMovies:state=>state.movie.newMovies,
            topMovies:state=>state.movie.topMovies,
            movieTags:state=>state.movie.movieTags
        })
    },
    created(){
       this.getMovie() 
    },
    methods:{
        getMovie(){
            this.$store.dispatch('getMovie') //调用actions
        }
    },
    components:{
        Scroller,
        Types,
        DownloadApp
    }
    
}
</script>

<style>

</style>
