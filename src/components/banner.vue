<template>
    <div class="banner">
        <template v-if="adImg">
            <div class="banner-bg ad">
                <img :src="adImg">
                <span>广告</span>
            </div>
        </template>
        <template v-else>
            <div class="banner-bg">
                <img src="../assets/promotion_bg.jpg">
            </div>
            <div class="content">
                <span class="title">{{title}}</span>
                <div class="button-wrapper">
                    <span class="download">极速下载</span>
                    <span class="open">打开</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:false,
            default:'打开APP,浏览更多'
        },
        adImg:{
            type:String,
            required:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner {
        position: relative;
        height: 8rem;
        img {
            max-width: 100%;
        }
    }
    .banner-bg {
        position: absolute;
    }
    .ad {
        span {
            position: absolute;
            right: 0;
            bottom: .2rem;
            padding: .4rem;
            font-size: 1.2rem;
            color: #fff;
            background-color: rgba(0, 0, 0, .3);
        }
    }
    .content {
        position: absolute;
        right: 1rem;
        left: 1.8rem;
        display: flex;
        height: 8rem;
        justify-content: space-between;
        align-items: center;
        .title {
            padding-left: 1.8rem;
            font-size: 1.4rem;
            font-weight: normal;
            line-height: 2.2rem;
            color: #2ca532;
        }
        .download,.open {
            display: inline-block;
            width: auto;
            padding: 0 1.4rem;
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 2;
            border: 0.1rem solid #42bd56;
            border-radius: .3rem;
        }
        .download {
            color: #fff;
            background: #42bd56;
        }
        .open {
            color:#42bd56;
        }
    }
</style>
