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


  /*@media (min-width: 1024px) {
 header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
