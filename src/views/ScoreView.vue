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

          <!-- {{ console.log('email_body_text=', email_body_text, "display_extrascore=", display_extrascore) }} -->

          <!-- <a href="mailto:l.norris@epcc.ed.ac.uk?Subject=isiXHosa PHQ-9 Results&body=ExtraQuestionScore:&email_body_text">
            Send Email to LN
          </a> -->

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
          <!-- {{ buildMailString() }} -->
          <br><br>
          <h5>
            &nbsp;&nbsp;
            <!-- <a href="mailto:&display_email?Subject=PHQ-9Results&body=ExtraQuestionScore:{{ display_extrascore }}"> -->

          </h5>
        </div>

  <!-- {{ console.log('email_address=',emailData.email_address) }}  -->
  <!-- {{console.log('UpdateData=', UpdateData.qtext) }} -->

  {{setlang($route.params.lang)}}     

  <!--  Navigation Footer  -->

    <div class="footer">
      <h6> Blank footer text for language screen. Blank footer text for language screen. Next line </h6> 
      <div class="d-flex align-items-center justify-content-between fixed-bottom">            
          <router-link :to="{ name: 'complete', params: { lang, total }}" class="leftbutton"> &#8592 </router-link>
          <RouterLink to="/" class="rightbutton" ><h5>Home</h5> </RouterLink> 
       </div>
    </div>

  </div>
<!-- </div> -->
</template>

<style scoped>
.middle-score {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  width: 80vw;
  height: 60vh;
  margin-left: auto !important;
  margin-right: auto !important;
}

h6 {
  color: darkred
}

/* * {height: 20vh;
    width: 50vw;
    margin: 0;
    padding: 0%;
} */
/* .align-items-center {
  display: flex; 
  align-items: center;  /*Aligns vertically center 
  justify-content: center; /*Aligns horizontally center 
} */

  /* .header {
  padding: 5%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 100vw;
  height: 15vh;
} 
/* .centre { */
  padding: 0%;
  background-color: white;
  color: black;
  /* text-align: center; */
  /* margin: auto; 
  width: 50vw;
  height: 40vh;
} */
/* .footer {
  padding: 5%;
  background-color: darkred;
  color: white;
  width: 50vw;
  height: 20vh;
} */


/* .scorebox {
  padding: 25%;
  width: 100%;
  height: 60%;
  text-align: center;
}
h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: center;
  margin: auto;
}

.h4 {
    font-size: 2.0rem;
    color: white;
    margin: auto;
}

.greetings h1,
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