<!--  MAIN QUESTIONNAIRE SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import questionDataXh from '../question-text-xh.json';
import questionDataEn from '../question-text-en.json';
import updateData from '../update.json';

import soundQ1_en from '../assets/Audio/EN07-Q1.wav'
import soundQ1_xh from '../assets/Audio/XH07-Q1.wav'
import soundQ2_en from '../assets/Audio/EN08-Q2.wav'
import soundQ2_xh from '../assets/Audio/XH08-Q2.wav'
import soundA0_en from '../assets/Audio/EN16-A0.wav'
import soundA0_xh from '../assets/Audio/XH16-A0.wav'
import soundA1_en from '../assets/Audio/EN17-A1.wav'
import soundA2_en from '../assets/Audio/EN18-A2.wav'
import soundA3_en from '../assets/Audio/EN19-A3.wav'

const audioQ1_en = new Audio(soundQ1_en)
const audioQ1_xh = new Audio(soundQ1_xh)
const audioQ2_en = new Audio(soundQ2_en)
const audioQ2_xh = new Audio(soundQ2_xh)

const audioA0_en = new Audio(soundA0_en)
const audioA1_en = new Audio(soundA1_en)
const audioA2_en = new Audio(soundA2_en)
const audioA3_en = new Audio(soundA3_en)
const audioA0_xh = new Audio(soundA0_xh)

const audio = new Audio(soundQ1_en)

const question = ref (questionDataEn);

import { ref } from 'vue';

const qscore = ref(0)
const total = ref(0)
const tot = ref(0)
const ptotal = ref(0)
const x = ref(0)
const lang = ref("L")
const lang_q= ref("x")
const qnum = ref(1)
const qnumnew = ref(1)
const error = ref(" ")
const scores = ref([])
const confirmed = ref(0)

//{{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
//, "  $route.params.lang=", $route.params.lang_q}}

console.log('lang=', lang.value, 'total=', total.value, 'qnum=', qnum.value)

//router.push({ path: '/email' })

function add_score(total, x, qnum) {
  console.log("start fn add_score: total=", total, "  x=", x, "  qnum=", qnum);
  total = total + x;
  tot.value = total;
  updateData.qtext[qnum-1] = x;
  qnum = qnum + 1;
  qnumnew.value = qnum;
  console.log("end fn add_score: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
  console.log("updateData.qtext=", updateData.qtext );
}
function save_scores(total, x) {
  console.log("start fn save_scores: total=", total, "  x=", x, "  qnum=", qnum);
  updateData.qtext[9] = x;
  updateData.qtext[10] = total;
  window.sessionStorage.total = total; 
  confirmed.value = 1;
  console.log("end fn save_scores: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
  console.log("end fn 2: w.sStorage.total=", window.sessionStorage.total );
}
function setlang(langparam) {
    lang.value=langparam.value;
    //lang_q.value="aaa";
    console.log("fn setlang: lang=", lang.value)
  }
  function setaudioQ(qnum) {
    if (qnum=1)
      {audio.value = new Audio(soundQ1_en).value;}
    if (qnum=2)
      {audio.value = new Audio(soundQ2_en).value;}
    console.log("fn setaudioQ: qnum=", qnum, "audio=", audio)
  }

</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  <div class="container">

  <!--  Display Header -->
    <div class = "header">
      <p v-if="$route.params.lang === 'xh'" class="headbox">
        Kwiiveki ezi-2 ezidlulileyo, ingaba <br>
        uhlutshwe rhoqo kangakanani yiyo <br>
        nayipphi na kwezi ngxaki zilandelayo?</p>
      <p v-if="$route.params.lang === 'en'" class="headbox">
        Over the last 2 weeks, how often have you been bothered by any of the following problems? <br>
      </p>
      <br><br>
    </div>

  <!--  Display Questions 1-9 --> 

  {{setaudioQ(qnum)}}
  {{console.log("qnum=", qnum), "audio=", audio}}

  <span  @click=audio.play() >     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
  </span>
aaaa
    <div class = "qsection">
    <br><br><br>
    <div>
      <h1 v-if = "qnum < 10"> {{qnum = qnumnew}}</h1>
    
      <h1 v-if = "$route.params.lang === 'xh' & qnum < 10">
          {{questionDataXh.qtext[qnum-1]}}
          <br><br>
          <span @click=audioQ1_xh.play() >     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> &nbsp;&nbsp;
          </span>
      </h1>
      <h1 v-if = "$route.params.lang === 'en' & qnum < 10">
          {{questionDataEn.qtext[qnum-1]}} 
          <br><br>xx
<!--          <span  @click=audioQ1_en.play() >     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
          </span> -->
      </h1>
      <!-- <h2 v-if = "qnum= 1 "> <br> </h2> -->
    </div>

  <!--  Display Answer Options for Questions 1-9 -->
  <div v-if = "qnum < 10">
    <!-- Layout for non-mobiles -->
    <div class = "d-none d-sm-block">
      <br><br><br>
      <div class="row">
          <a class="col-sm-3 text-center answer" @click="add_score(tot,0,qnum)">
            0 
            <br><br>
            <h2 v-if = "$route.params.lang === 'xh'">
              Andikhange<br> konke konke<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA0_en.play() >     
                  <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
                </span><br>
                Not at<br> all<br> 
              </h2>
          </a>
          <a class="col-sm-3 text-center answer" @click="add_score(tot,1,qnum)" >
              1
              <br><br>
              <h2 v-if = "$route.params.lang === 'xh'">   
                lintsuku<br> eziliqela<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA1_en.play() >     
                  <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
                </span><br>
                Several<br> days<br> </h2>
          </a>
          <a class="col-sm-3 text-center answer" @click="add_score(tot,2,qnum)">
              2 
              <br><br>
              <h2 v-if = "$route.params.lang === 'xh'">
                 Ngaphezulu<br> kwesiqingatha<br> seentsuk<br> </h2>
               <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA2_en.play() >     
                  <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
                </span><br>
                 More<br> than<br> half the<br> days<br> </h2>
          </a>
          <a class="col-sm-3 text-center answer" @click="add_score(tot,3,qnum)">
              3 
              <br><br>
              <h2 v-if = "$route.params.lang === 'xh'">          
                 Phantse<br> yonke<br> imihl </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA3_en.play() >     
                  <img alt="speaker" src="../assets/speaker-white.png"  class="speaker_q" /> 
                </span><br>
                  Nearly<br> every<br> day<br> </h2>

            </a>
        </div> <!-- end of row of answers from questions 1-9-->
        <br><br><br>
    </div> <!-- end of answers for non-mobile layout -->
    
    <!-- Layout for mobiles -->
    <div class = "d-block d-sm-none">
      <br>
      <div class="row">
          <a class="col text-center answer" @click="add_score(tot,0,qnum)">
            0 <br>
             <h2 v-if = "$route.params.lang === 'xh'">
                  Andikhange<br> konke konke<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Not at<br> all<br> </h2>
            </a>
          <a class="col text-center answer" @click="add_score(tot,1,qnum)" >
            1 <br>
              <h2 v-if = "$route.params.lang === 'xh'">
                
                lintsuku<br> eziliqela<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  
                  Several<br> days<br> </h2>
          </a>
      </div>
      <br>
      <div class="row">
          <a class="col text-center answer" @click="add_score(tot,2,qnum)">
              2 <br>
               <h2 v-if = "$route.params.lang === 'xh'"><br>
                  Ngaphezulu<br> kwesiqingatha<br> seentsuk<br> </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  More<br> than<br> half the<br> days<br> </h2>

          </a>
          <a class="col text-center answer" @click="add_score(tot,3,qnum)">
              3 <br> 
            <h2 v-if = "$route.params.lang === 'xh'">
                  Phantse<br> yonke<br> imihl </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Nearly<br> every<br> day<br> </h2>

            </a>
        </div> <!-- end of row of answers from questions 1-9-->
    </div> <!-- end of answers for mobile layout -->


  </div> <!-- end of v-if qnum < 10 -->

<!-- Display Extra Question -->
  <div v-else>
    <h3 v-if = "$route.params.lang === 'xh' ">  Ukuba ngaba ukhethe inani elingaphezulu kwe-0 ngazo
                    naziphi iingxaki ezi ngxaki zenze kwanzima kangakanani kuwe ukuba wenze umsebenzi
                    wakho, ukulungisa izinto ekhaya, okanye ukuvana nabanye abantu? </h3>
    <h3 v-if = "$route.params.lang === 'en'"> If you have chosen a number higher than 0 for any problems,
                    how difficult have these problems made it for you to do your work, take care of things
                    at home, or get along with other people? </h3>
    <!--  Display Extra Q Answer Options -->
    <!-- Layout for non-mobiles -->
    <div class = "d-none d-sm-block">
      <br><br><br>
        <div class="row">
            <a class="col text-center answer" @click="save_scores(tot,0)">
               <h2 v-if = "$route.params.lang === 'xh'">
                  Akunzimanga konke<br> konke<br> </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  Not difficult <br> at all<br> </h2>
              </a>
            <a class="col text-center answer" @click="save_scores(tot,1)" >
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kunzinyana<br> noko<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Somewhat <br> difficult <br> </h2>
            </a>
            <a class="col text-center answer" @click="save_scores(tot,2)">
                <h2 v-if = "$route.params.lang === 'xh'">
                    Kunzima <br> kakhulu <br> </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                    Very <br> difficult <br> </h2>
            </a>
            <a class="col text-center answer" @click="save_scores(tot,3)">
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kube nzima <br> ngokugqithisileyo <br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Extremely <br> difficult <br> </h2>
            </a>
          <br><br><br><br><br><br>
        </div> <!-- end of q10 answers -->
    </div> <!-- end of non-mobile section -->

    <!-- Layout for mobiles for q 10 -->
    <div class = "d-block d-sm-none">
      <br><br>
      <div class="row">
            <a class="col text-center answer" @click="save_scores(tot,0)">
               <h2 v-if = "$route.params.lang === 'xh'">
                  Akunzimanga konke<br> konke<br> </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  Not difficult <br> at all<br> </h2>
            </a>
            <a class="col text-center answer" @click="save_scores(tot,1)" >
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kunzinyana<br> noko<br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Somewhat <br> difficult <br> </h2>
            </a>
      </div> <!-- end of 1st row of answers -->
      <br>
      <div class="row">
            <a class="col text-center answer" @click="save_scores(tot,2)">
                <h2 v-if = "$route.params.lang === 'xh'">
                    Kunzima <br> kakhulu <br> </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                    Very <br> difficult <br> </h2>
            </a>
            <a class="col text-center answer" @click="save_scores(tot,3)">
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kube nzima <br> ngokugqithisileyo <br> </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Extremely <br> difficult <br> </h2>
            </a>
          <br><br><br>
        </div> <!-- end of 2nd row of answers -->
    </div> <!-- end of mobile layout section for q10 answers  -->
  </div> <!-- end of v-else ie qnum is not < 10 ie qnum = 10 -->
  <br>
  </div> <!-- end of middle section -->
  {{setlang('E')}}
  {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
  {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew) }}

  <!-- Display Footer -->
    <div class = "mt-auto footer">
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <!-- add speaker here -->

      <div class="d-flex align-items-center justify-content-between">
        <router-link :to="{ name: 'qintro', params: { lang } }" class="leftbutton"> &#8592 </router-link>
        <router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link>
      </div>
    </div>

</div> <!-- end of container -->
</template>

<style scoped>
.q-section {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  /*width: 20vw;*/
  width: 100vw;
  height: 40vh;
  margin-left: 0vw;
  margin-right: 0vw;
}

a.answer {
  color: black;
  font-weight:  500;
  font-size: 1.0rem;
  text-align: center;
  text-decoration: none;
}
a.answer:hover{
  color:blue;
  background-color: lightgrey; 
}
h1 {
  font-weight:  600;
  font-size: 1.5rem;
  text-align: center;
}
h2 {
  font-weight:  500;
  font-size: 1.0rem;
  text-align: center;
}
h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
}
h4 {
  font-weight:  500;
  font-size: 1.5rem;
  text-align: center;
}
h6 {
  font-weight:  500;
  font-size: 2.0rem;
  text-align: right;
}
h8 {
  font-weight:  100;
  font-size: 1.5rem;
  text-align: right;
  color: darkred
}
h9 {
  font-weight:  100;
  font-size: 3.5rem;
  text-align: right;

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
}
</style>