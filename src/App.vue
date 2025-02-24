<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const score = ref(0)
const lang = ref("L")
const newName = ref(' ')

function increment() {
  inc.value++
}
</script>

<template>
  <!--
  <header>
    <div class="wrapper">   
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/email">Email</RouterLink>  
        <RouterLink to="/ptid">PtID</RouterLink> 
        <router-link :to="{ name: 'language', params: { lang: 'En' }}"> Lang </router-link>
        <router-link :to="{ name: 'question', params: { lang: 'En', total: 0, qnumber: 1 } }"> Question </router-link>
        <router-link :to="{ name: 'extraquestion', params: { lang: 'En', total: 100} }"> Q10 </router-link>
        <router-link :to="{ name: 'score', params: { lang: 'En', total: 0} }"> Score </router-link>
        <router-link :to="{ name: 'aboutapp' }"> About </router-link>
       </nav>
    </div>
      <br><br>
  </header>
-->
  
<div class="appbox">
    <RouterView />
</div>

</template>

<style scoped>

.appbox {
  width: 100vw;
  height: 100vh;
  border: 0px;
  background-color: white;
  display: block;
  text-align: center;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

</style>
