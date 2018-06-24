<template>
    <div class="sub-nav">
        <div class="nav-bottom" v-if="mold==='navBottom'">
            <div class="nav-item">
                <router-link :to="{name: 'RegisterView'}">注册豆瓣</router-link>
                <template v-if="loginStatus">
                    <a href="#"  @click="logout">退出登录</a>
                </template>
                <template v-else>
                    <router-link :to="{name: 'LoginView'}">登陆豆瓣</router-link>
                </template>
            </div>
            <div class="nav-item">
                <a href="https://movie.douban.com/">使用桌面版</a>
                <a href="#">使用豆瓣APP</a>
            </div>
        </div>
        <div class="quickNav"  v-if="mold==='quickNav'">
            <ul class="quick-nav">
                <li>
                    <router-link :to="{name: 'HomeView'}">影院热映</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'MovieView'}">欧美新碟榜</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'StatusView'}">最新动态</router-link>
                </li>
                <li>
                    <template v-if="loginStatus">
                        <a href="#" @click="logout">退出登录</a>
                    </template>
                    <template v-else>
                        <router-link :to="{name: 'LoginView'}">登录豆瓣</router-link>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        mold:{
            type:String,
            default:'quickNav'
        },
        loginStatus:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        logout(){
            this.$store.commit('logout')
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-bottom{
        width: 100%;
        border-bottom: .1rem solid #f3f3f3;
        .nav-item {
            border-top: .1rem solid #f3f3f3;
            padding: 1.3rem 0;
            text-align: center;
            font-size: 0;
        }
        a {
            width: 50%;
            display: inline-block;
            margin: 0 auto;
            box-sizing: border-box;
            font-size: 1.5rem;
            color: #42bd56;
            &:first-child {
                border-right: 0.1rem solid #f3f3f3;
            }
        }
    }

    .quickNav{
        ul {
            overflow: hidden;
            margin: 1rem 0 0 0;
            padding-top: 0.6rem;
            li {
                float: left;
                width: 50%;
                padding: 0.3rem;
                box-sizing: border-box;
                font-size: 1.5rem;
            }
            a {
                display: block;
                max-width: 100%;
                padding: 1.2rem 0;
                line-height: 2rem;
                text-align: center;
                background-color: #f6f6f6;
                color: #494949;
                border-radius: 0.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;

            }
        }
    }
</style>
