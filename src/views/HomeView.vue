<!--  HOME SCREEN           -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->
<script setup>
  import { useRoute } from 'vue-router'
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
  useRoute()
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

  <!--  App Logo and Title Headings -->
  <div class="homeheader">
      <img alt="isiXhosa" src="../assets/isiXhosaLogoP700.png" class="img-fluid logo" />

      <h2> IPHEPHA LEMIBUZO<br>
                             LEMPILO YESIGULANE </h2>
      <h3>PATIENT HEALTH QUESTIONNAIRE</h3>
  </div>

  <!-- University Logos -->
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
.homeheader {
  padding: 0vh;
  width: 100vw;;
  height: 68vh;
}
.homemiddle {
  padding: 0vh;
  text-align: center;
  margin-left: 0%;
  height: 15vh;
}
.homefooter {
  background-color: darkred;
  color: white;
  height: 16.5vh;
}
.logo {
  max-width: 90%;
  max-height: 90%;
}

h2 {
  font-weight: 700;
  font-size: 200%;
  color: darkred;
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

</style>
