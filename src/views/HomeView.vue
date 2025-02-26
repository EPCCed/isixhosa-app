<!--  HOME SCREEN           -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  // import sound from '../assets/AudioTest.m4a'
  import FormInput from '../views/FormInput.vue'
  import { useWindowSize } from '@vueuse/core'

  const { width, height } = useWindowSize()

  console.log('useWindowSize=', useWindowSize())
  //console.log('useRoute=', useRoute)
  console.log('width=', width.value, ' height=', height.value)

  window.sessionStorage.reset_scores = 1
  console.log('window.sessionStorage.reset_scores=', window.sessionStorage.reset_scores)

  // function send() {
  //   alert(`send function`);
  //   myTrack.play()
  //   } 

const route = useRoute()
const userData = ref()
const clickcount = ref(0)
const inputvar = ref('writehere')
// const audio = new Audio(sound) 
const num = ref(0)
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<!-- <div class="container"> -->
  <!-- Adjust width depending on small or larger screen size, by total columns used -->
  <!-- <div col-sm-6 col-12> -->
  
    <!--  App Logo and Title Headings -->
    <div class="homeheader">
          <img alt="isiXhosa" src="../assets/isiXhosaLogoP700.png" class="img-fluid logo" />
          <br><br>
    </div>
    <br>

    <!-- <div class="homeheader ">
        <br>
        <img alt="isiXhosa" src="../assets/isiXhosaLogoP600.png" class="img-fluid"  />
    </div> -->

    <!-- Title and University Logos -->
    <div class="homemiddle">

      <!-- <div class="d-none d-sm-block">
        <br><br>
      </div> -->

        <h2 class="darkred"> IPHEPHA LEMIBUZO<br>
                             LEMPILO YESIGULANE </h2>
        <h3>PATIENT HEALTH QUESTIONNAIRE</h3>
        <br><br>
 
        <div class="d-flex align-items-center justify-content-between logos "> 
          <img alt="EdinburghUni" src="../assets/UoELogo.png" width="180vw" height="45vh" />  
          <img alt="StellenboschUni" src="../assets/StellenboschLogo.png" width="170vw" height="55vh" />
        </div>
        <br><br>
      </div>
   
  <!--  Navigation Footer  -->
  <div class="homefooter fixed-bottom">
    <div class="d-flex align-items-center justify-content-between logos ">   
        <router-link :to="{ name: 'aboutapp' }" class="btn btn-outline-light btn-m" style="margin-bottom:2%; margin-left:2%">ABOUT <br> THIS APP</router-link>
        <router-link :to="{ name: 'email' }" class="arrow"> &#8594 </router-link> 
    </div>
  </div>

</template>

<style scoped>
h9 {
  color: darkred;
}
.homeheader {
  padding: 0vh;
  width: 100vw;;
  height: 55vh;
}
.homemiddle {
  padding: 0vh;
  text-align: center;
  margin-left: 0%;
  /* width: 100%; */
  height: 15vh; 
}
.homefooter {
  padding: 0 !important;
  background-color: darkred;
  color: white;
  /*width: 100%; */
  height: 12vh;
}
.logo {
  /* display: block;
  margin-left: auto;
  margin-right: auto; */
  max-width: 100%;
  max-height: 100%;
}

h2 {
  font-weight: 700;
  font-size: 180%;
  position: relative;
  top: 0px;
}
h3 {
  font-weight:  800;
  font-size: 100%;
}

/* .greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
