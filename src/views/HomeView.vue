<!--  HOME SCREEN           -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  import FormInput from '../views/FormInput.vue'
  import { useWindowSize } from '@vueuse/core'

  //const { width, height } = useWindowSize()

  const score_text = [  "one", 
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "total"
]
  window.sessionStorage.reset_scores = 1
  window.sessionStorage.scorearray = JSON.stringify(score_text)
  //console.log(score_text, 'wss.scorearray=', window.sessionStorage.scorearray)
  //console.log('window.sessionStorage.reset_scores=', window.sessionStorage.reset_scores)

useRoute()

const num = ref(0)
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

  <!--  App Logo and Title Headings -->
  <div class="homeheader">
      <img alt="isiXhosa" src="../assets/isiXhosaLogoP700.png" class="img-fluid logo" />
      
      <h2 class="darkred"> IPHEPHA LEMIBUZO<br>
                             LEMPILO YESIGULANE </h2>
      <h3>PATIENT HEALTH QUESTIONNAIRE</h3>
  </div>

  <!-- Title and University Logos -->
  <div class="homemiddle">

      <br>
 
      <div class="d-flex align-items-center justify-content-between logos "> 
        <img alt="EdinburghUni" src="../assets/UoELogo.png" width="180vw" height="45vh" />  
        <img alt="StellenboschUni" src="../assets/StellenboschLogo.png" width="170vw" height="65vh" />
      </div>
      <br><br>
    </div>
   
  <!--  Navigation Footer  -->
  <div class="homefooter fixed-bottom">
    <div class="fixed-bottom">
      <span class="d-flex align-items-center justify-content-between logos">   
        <router-link :to="{ name: 'aboutapp' }" class="btn btn-outline-light btn-m" >ABOUT <br> THIS APP</router-link>
        <router-link :to="{ name: 'email' }"  class="footer-arrows"> &#8594 </router-link> 
      </span>     
      <h6 > &#169 University of Edinburgh </h6>
      <br>
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
  height: 68vh;
}
.homemiddle {
  padding: 0vh;
  text-align: center;
  margin-left: 0%;
  /* width: 100%; */
  height: 15vh; 
}
.homefooter {
  background-color: darkred;
  color: white;
  /*width: 100%; */
  height: 16.5vh;
}
.logo {
  /* display: block;
  margin-left: auto;
  margin-right: auto; */
  max-width: 90%;
  max-height: 90%;
}

h2 {
  font-weight: 700;
  font-size: 200%;
  position: relative;
  top: 0px;
}
h3 {
  font-weight:  800;
  font-size: 120%;
}
h6 {
  font-weight:  500;
  font-size: 70%;
  text-align: left !important;
  margin-left: 2% !important;
}
.copyright {
  font-weight:  500;
  font-size: 60%;
  text-align: left !important;
  margin-left: 2% !important;
}

</style>
