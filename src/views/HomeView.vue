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

  // import VueAudio from '../assets/AudioTest.m4a'
  // var myTrack = new Audio('../assets/AudioTest.m4a')
  function send() {
    alert(`send function`);
    myTrack.play()
    } 

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

<div class="container">
  <!-- Adjust width depending on small or larger screen size, by total columns used -->
  <div col-sm-6 col-12>
  
    <!--  App Logo and Title Headings -->
    <div class="homeheader ">
      <br>
        <img alt="isiXhosa" src="../assets/isiXhosaLogo.png" class="logo img-fluid"  />
    </div>
    <div class="set-width">
      <br>
    </div>

    <!-- Title and University Logos -->
    <div class="homemiddle">
         <h2 class="darkred"> IPHEPHA LEMIBUZO <br>
                            LEMPILO YESIGULANE </h2>
         <h3>PATIENT HEALTH QUESTIONNAIRE</h3>
         <br>
    </div>
   
    <div class="d-flex align-items-center justify-content-between"> 
        <img alt="EdinburghUni" src="../assets/UoELogo.png" width="140vw" height="35vh" />            
        <img alt="StellenboschUni" src="../assets/StellenboschLogo.png" width="120vw" height="45vh" />
    </div>
    
    <br>     
   
  <!--  Navigation Footer  -->
  <div class="homefooter">
    <div class="d-flex align-items-center justify-content-between">   
        <router-link :to="{ name: 'aboutapp' }" class="btn btn-outline-light btn-sm" style="margin-bottom:2%; margin-left:2%">ABOUT <br> THIS APP</router-link>
        <router-link :to="{ name: 'email' }" class="arrowsx"> &#8594 </router-link> 
    </div>
  </div>

  </div>
</div>
</template>

<style scoped>
h9 {
  color: darkred;
}
.homeheader {
  padding: 0vh;
  width: 100%;
  height: 58vh;
}
.homemiddle {
  padding: 0vh;
  text-align: center;
  margin-left: 0%;
  width: 100%;
  height: 18vh; 
}
.homefooter {
  padding: 2%;
  background-color: darkred;
  color: white;
  /*width: 100%; */
  height: 15vh;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
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
/*.aboutbutton {
  /* display: flex;
  flex-wrap: wrap; 
  color: white;
  text-decoration: none;
  margin-left: 100px;
  margin-right: 500px;
  border: 1px solid white;
} */

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
