<script setup>
// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>

<template>
<div class="container">
  <!-- Adjust width depending on small or larger screen size, by total columns used -->
  <div col-sm-6 col-12>
    
    <!--  Page title </div> -->
    <div class="header"> 
      <br>
      <h4> ABOUT THIS APP </h4>
    </div>
    <div class="set-width">
      <br>
    </div>

      <!--Main text -->
    <div class="about-middle">
      <br><br>
      <h6> The isiXhosa translation of the nine-item Patient Health Questionnaire (PHQ-9) was developed and validated by a team of 
           researchers at The University of Edinburgh (UK) and Stellenbosch University (South Africa).</h6>
      <br>
      <h6> This app includes audio recordings of the PHQ-9 items to enable people who may be more comfortable with spoken isiXhosa
           to complete the questionnaire. </h6>
      <br>
      <h6> Results from the validation study of the paper-based isiXhosa PHQ-9 can be found at this link:</h6>
  
      <p><a href="https://doi.org/10.1177/23982128231194452">https://doi.org/10.1177/23982128231194452 </a></p>

      <h6> Development of this app was funded by the University of Edinburgh's Big Ideas Accelerator.  Development of the isiXhosa PHQ-9
           was funded by the Wellcome Trust (Grant 218493/Z/19/Z) and the Harold Hyam Wingate Foundation (Medical Research Travel Grant).</h6>    
      <br>
    </div>

    <!--  Navigation Footer  -->
    <div class="mt-auto foot-fixed">
      <div class="d-flex align-items-center justify-content-between">
        <RouterLink to="/" class = "leftbutton"> &#8592 </RouterLink>
        <RouterLink to="/acknowl" class = "rightbutton"> &#8594 </RouterLink>
      </div>
    </div> 

   </div> <!-- col-sm col -->
</div> <!-- container row -->

</template>

<style scoped>
.about-middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  /*width: 20vw;*/
  width: 100%;
  height: 55vh;
  margin-left: 0vw;
  margin-right: 0vw;
}
h5 {
  font-weight: 200;
  font-size: 1rem;
  text-align: left;
  color: white;
}

</style>