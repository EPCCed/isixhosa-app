<!--  ABOUT APP SCREEN           -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
    
  <!--  Page title </div> -->
  <div class="header-small"> 
    <br>
    <h4> ABOUT THIS APP </h4>
  </div>

  <!-- Information text -->
  <div class="about-middle">
    <h6> The isiXhosa translation of the nine-item Patient Health Questionnaire (PHQ-9) was developed and validated by a team of 
         researchers at The University of Edinburgh (UK) and Stellenbosch University (South Africa).</h6>
    <br>
    <h6> This app includes audio recordings of the PHQ-9 items to enable people who may be more comfortable with spoken isiXhosa
         to complete the questionnaire. </h6>
    <br>
    <h6> Results from the validation study of the paper-based isiXhosa PHQ-9 can be found at this link:</h6>
    <p><a href="https://doi.org/10.1177/23982128231194452">https://doi.org/10.1177/23982128231194452 </a></p>
    <br>
    <h6> Development of this app was funded by the University of Edinburgh's Big Ideas Accelerator.  Development of the isiXhosa PHQ-9
         was funded by the Wellcome Trust (Grant 218493/Z/19/Z) and the Harold Hyam Wingate Foundation (Medical Research Travel Grant).</h6>    
    <br>
  </div>

  <!--  Navigation Footer  -->
  <div class="mt-auto footer-small fixed-bottom">
    <div class="d-flex align-items-center justify-content-between">
      <RouterLink to="/" class = "leftbutton"> &#8592 </RouterLink>
      <RouterLink to="/acknowl" class = "rightbutton"> &#8594 </RouterLink>
    </div>
  </div> 

</template>

<style scoped>
.about-middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  width: 90vw;
  height: 70vh;
  margin-top: 5vw !important;
  margin-left: 5vw !important;
  margin-right: 0% !important;
}

</style>