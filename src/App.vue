<template>
  <AppHeader @open-login-modal="isLoginOpen = true"></AppHeader>
  <div class="w-full flex">
      <router-view></router-view>
  </div>
  <teleport to='body'>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"></LoginModal>
  </teleport>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import LoginModal from './components/LoginModal.vue';
  import firebase from './utilities/firebase'
  export default {
    data(){
    return{
      isLoginOpen: false,
    }
  },
    components: { AppHeader,  LoginModal },
    mounted(){
      firebase.auth().onAuthStateChanged(user=>{
    if (user) {      
      this.$store.commit('setIsLoggedIn')
      this.$store.commit('setAuthUser', user)
    } else {
      this.isLoggedIn = false
      this.authUser = {}
    }
  });
    }
  };
</script>