<!--  FINAL SCREEN - confirm details and send scores -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { computed,ref } from 'vue'

const lang = ref("L")
const total = ref(0)
const display_total = ref(0)
const display_email = ref('')
const display_ptID = ref('')
const display_scores = ref(0)
const display_extrascore = ref(0)
const mailto = computed(() => {
    return `mailto:${display_email.value}?Subject=${display_ptID.value} PHQ-9&body= Scores for Patient ID:  ${display_ptID.value} %0D%0A%0D%0A PHQ-9 scores (questions 1-9 and total):  ${display_scores.value} %0D%0A%0D%0A Extra Score:  ${display_extrascore.value}`
})

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////
function settotal(t) {
  display_total.value = window.sessionStorage.total;
  display_email.value = window.sessionStorage.email;
  display_ptID.value = window.sessionStorage.ptID;
}
function setScores() {
  display_scores.value = window.sessionStorage.scores;
  display_extrascore.value = window.sessionStorage.extrascore;
}
function setlang(langparam) {
    lang.value =  langparam.value
    total.value=langparam.value;
    } 

</script>

<template>
    
  <!--  Header  -->
    <div class = "header">
      <br> 
    </div> 

  <!--  Middle --> 
    <div class="middle middle-score">
      <br>
      {{ setScores() }}
      {{settotal($route.params.total)}}
      <br><br> 
      <h3>Scores for Pt ID: &nbsp&nbsp&nbsp&nbsp <span class="darkred"> {{  display_ptID }} </span> 
        <br><br>
        &nbsp; will be emailed to: &nbsp <span class="darkred"> {{ display_email }} </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a :href="mailto">
            <button>Send Email</button>
          </a>
      </h3>
      <br><br>
    </div>

    {{setlang($route.params.lang)}}     

  <!--  Navigation Footer  -->
    <div class="footer">
      <h6> Blank footer text for language screen. Blank footer text for language screen. Next line </h6> 
      <div class="d-flex align-items-center justify-content-between fixed-bottom">            
          <router-link :to="{ name: 'complete', params: { lang, total }}" class="footer-arrows"> &#8592 </router-link>
          <RouterLink to="/" class="footer-arrows" ><h5>Home</h5> </RouterLink> 
       </div>
    </div>

</template>

<style scoped>
.middle-score {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  width: 80vw;
  height: 64vh;
  margin-left: auto !important;
  margin-right: auto !important;
}
h6 {
  color: darkred
}
</style>