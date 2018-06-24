const state = {
    login_email: '',
    login_token: ''
}

const getters = {
    currentUser:state=>{
        return {
            email: state.login_email,
            token: state.login_token,
            //name: state.login_name
        }
    }
}

const mutations = {
    getLocalUser(state){
        state.login_email = localStorage.getItem('email')
        state.login_token = localStorage.getItem('token')
    },
    setUser(state,payload){
        state.login_email = payload.email
        state.login_token = payload.token
    },
    logout(state){
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        state.login_email = ''
        state.login_token = ''
    }
}

const actions = {
    login({commit},payload){
        localStorage.setItem('token', payload.token)
        localStorage.setItem('email', payload.email)
        commit({type:'setUser',email:payload.email,token:payload.token})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
  }