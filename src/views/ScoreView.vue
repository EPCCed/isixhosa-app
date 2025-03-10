<script setup>
console.log('wsessionS.email=', window.sessionStorage.email, '.ptID=', window.sessionStorage.ptID,'.total=', window.sessionStorage.total);


import { computed,ref } from 'vue'
const name = ref('Lucy')
const lang = ref("L")
const score = ref(0)
const total = ref(0)
const display_total = ref(0)
const display_email = ref('')
const display_ptID = ref('')
const display_scores = ref(0)
const display_extrascore = ref(0)
const email_body_text = ref('')
const mail_string = ref('')


const email = ref('')

const mailto = computed(() => {
  // return `mailto:${email.value}?Subject=isiXHosaPHQ-9Results&body=Score:${score.value}`
    return `mailto:${display_email.value}?Subject=${display_ptID.value} PHQ-9&body= Scores for Patient ID:  ${display_ptID.value} %0D%0A%0D%0A PHQ-9 scores (questions 1-9 and total):  ${display_scores.value} %0D%0A%0D%0A Extra Score:  ${display_extrascore.value}`
})

//console.log('total=', total)

function settotal(t) {
  display_total.value = window.sessionStorage.total;
  display_email.value = window.sessionStorage.email;
  display_ptID.value = window.sessionStorage.ptID;
}
function setScores() {
  //console.log("window.sessionStorage.scores=", window.sessionStorage.scores);
  display_scores.value = window.sessionStorage.scores;
  display_extrascore.value = window.sessionStorage.extrascore;
  //console.log('FN setScores:  display_total=', display_total.value);
}

function setlang(langparam) {
    lang.value =  langparam.value
    total.value=langparam.value;
    //console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
    } 

</script>

<template>
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
    <div col-sm-6 col-12>
    
      <!--  Header  -->
        <div class = "header">
          <br> 
        </div> 

        <div class="middle middle-score">
          <br>
          {{ setScores() }}

      <!--  Middle --> 
          {{settotal($route.params.total)}}
          <!-- display_total= {{ display_total }} -->

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
          <h5>
            &nbsp;&nbsp;
          </h5>
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