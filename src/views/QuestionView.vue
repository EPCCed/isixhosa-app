<!--  MAIN QUESTIONNAIRE SCREEN (questions 1-9) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';
import updateData from '../update.json';

import soundQ1_en from '../assets/Audio/EN07-Q1.wav'
import soundQ1_xh from '../assets/Audio/XH07-Q1.wav'
import soundQ2_en from '../assets/Audio/EN08-Q2.wav'
import soundQ2_xh from '../assets/Audio/XH08-Q2.wav'
import soundQ3_en from '../assets/Audio/EN09-Q3.wav'
import soundQ3_xh from '../assets/Audio/XH09-Q3.wav'
import soundQ4_en from '../assets/Audio/EN10-Q4.wav'
import soundQ4_xh from '../assets/Audio/XH10-Q4.wav'
import soundQ5_en from '../assets/Audio/EN11-Q5.wav'
import soundQ5_xh from '../assets/Audio/XH11-Q5.wav'
import soundQ6_en from '../assets/Audio/EN12-Q6.wav'
import soundQ6_xh from '../assets/Audio/XH12-Q6.wav'
import soundQ7_en from '../assets/Audio/EN13-Q7.wav'
import soundQ7_xh from '../assets/Audio/XH13-Q7.wav'
import soundQ8_en from '../assets/Audio/EN14-Q8.wav'
import soundQ8_xh from '../assets/Audio/XH14-Q8.wav'
import soundQ9_en from '../assets/Audio/EN15-Q9.wav'
import soundQ9_xh from '../assets/Audio/XH15-Q9.wav'

import soundA0_en from '../assets/Audio/EN16-A0.wav'
import soundA0_xh from '../assets/Audio/XH16-A0.wav'
import soundA1_en from '../assets/Audio/EN17-A1.wav'
import soundA1_xh from '../assets/Audio/XH17-A1.wav'
import soundA2_en from '../assets/Audio/EN18-A2.wav'
import soundA2_xh from '../assets/Audio/XH18-A2.wav'
import soundA3_en from '../assets/Audio/EN19-A3.wav'
import soundA3_xh from '../assets/Audio/XH19-A3.wav'

// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
// const route = useRoute()

const selected = ref(null)
const language = ref('en')
const question = ref(0)

const score_list = 
  [ "one", 
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
const answers = {
  'en': [
    "Not at<br> all<br>",
    "Several<br> days<br>",
    "More than<br> half the<br> days<br>",
    "Nearly<br> every<br> day<br>",
  ],
  'xh': [
    "Andikhange<br> konke konke",
    "lintsuku<br> eziliqela",
    "Ngaphezulu<br> kwesiqinga-<br>tha seentsuku",
    "Phantse<br> yonke<br> imihla"
  ]
}
const header = {
  "en": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  "xh": "Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
  }
const questions = {
    "en": [
        "Little interest or pleasure in doing things", 
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        "Trouble concentrating on things, such as reading or watching television",
        "Moving or speaking so slowly that other people could have noticed?  Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
        "Thoughts that you would be better off dead or of hurting yourself in some way",
        "question 10 text"
    ],
    'xh': [
        "Umdla okanye ubumnandi obuncinci ekwenzeni izinto", 
        "Ukuziva unomoya ophantsi, udakumbile, okanye ungenathemba",
        "Ukusokola ukulala, okanye ukulala ngokugqithisileyo",
        "Ukuziva udiniwe okanye ungenamandla kangako",
        "Ukungacaceli ukutya okanye ukutya ngokugqithisileyo",
        "Ukuziva kakubi ngawe - okanye ukuba awuphumeleli okanye udanise wena okanye udanise usapho lwakho",
        "Ingxaki yokuzikisa ingqondo ezintweni, ezifana nokufunda okanye ukubukela umabonakude",
        "Ukuhamba okanye ukuthetha ngokucothayo kangangokuba abanye abantu babe bakuqaphele oko? Okanye okuchaseneyo noko - ukungqunga okanye ukungazinzi kangangokuba uzulazule kakhulu kunokuqhelekileyo",
        "Iingcinga zokuba kungcono ubhubhe okanye ukuzenzakalisa ngandlela ithile",
        "question 10 text"
    ],
  }
const alert_msg = {
  "en": "Please choose an answer to continue.",
  "xh": "Nceda khetha impendulo ukuqhubeka."
  }
const questions_audio = {
  'en': [
    new Audio(soundQ1_en),
    new Audio(soundQ2_en),
    new Audio(soundQ3_en),
    new Audio(soundQ4_en),
    new Audio(soundQ5_en),
    new Audio(soundQ6_en),
    new Audio(soundQ7_en),
    new Audio(soundQ8_en),
    new Audio(soundQ9_en),
  ],
  'xh': [
    new Audio(soundQ1_xh),
    new Audio(soundQ2_xh),
    new Audio(soundQ3_xh),
    new Audio(soundQ4_xh),
    new Audio(soundQ5_xh),
    new Audio(soundQ6_xh),
    new Audio(soundQ7_xh),
    new Audio(soundQ8_xh),
    new Audio(soundQ9_xh)
  ]
  }
const answers_audio = {
  'en': [
    new Audio(soundA0_en),
    new Audio(soundA1_en),
    new Audio(soundA2_en),
    new Audio(soundA3_en),
  ],
  'xh': [
    new Audio(soundA0_xh),
    new Audio(soundA1_xh),
    new Audio(soundA2_xh),
    new Audio(soundA3_xh)
  ]
  }

const lang = ref("L")
const already_reversed = ref(0)
const current_audio_answer = ref(0)

updateData.qtext = JSON.parse(window.sessionStorage.scorearray)
score_list.value = updateData.qtext.value
updateData.qtext.value = window.sessionStorage.scores;

if (window.sessionStorage.reset_scores == 1)
    { updateData.qtext = score_list;
      window.sessionStorage.extrascore = null
      window.sessionStorage.reset_scores = 0
     }

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////

function play_question(lang, question) {
  stop_audio(); 
  questions_audio[lang][question].play();
  }
function play_answer(audio, i) {
  stop_audio(); 
  current_audio_answer.value =i;
  audio.play();
  }
function stop_audio() {
  questions_audio[lang.value][question.value].pause();
  questions_audio[lang.value][question.value].currentTime = 0;
  answers_audio[lang.value][current_audio_answer.value].pause();
  answers_audio[lang.value][current_audio_answer.value].currentTime = 0;
  }
function nextQuestion(diff) {
  stop_audio();  
  if ( (selected.value != null && 
        question.value+diff >= 0 &&
        question.value+diff < questions[language.value].length) )
    { 
      question.value += diff
      selected.value = null
    }
  else 
    if (selected.value == null &&
        diff == -1)
    {question.value += diff
    }
  else 
    if (diff==1)
    {alert(alert_msg[lang.value]);
  }    
  }
function changeSelected(id) {
  selected.value = id;
  updateData.qtext[question.value] = id;
  window.sessionStorage.scorearray = JSON.stringify(updateData.qtext)
  }
function setSelected(n) {
  if (updateData.qtext[n]=='0' || updateData.qtext[n]=='1'|| updateData.qtext[n]=='2'|| updateData.qtext[n]=='3' )
      {selected.value=updateData.qtext[n];}
  }
function setQnumber(n) {
  if ( n == 9 & already_reversed.value==0)
      {already_reversed.value = 1
        question.value =8
       }
  }
function saveScores() {
  updateData.qtext[9] = updateData.qtext[0]+updateData.qtext[1]+updateData.qtext[2]+updateData.qtext[3]+updateData.qtext[4]+updateData.qtext[5]+
                          updateData.qtext[6]+updateData.qtext[7]+updateData.qtext[8];
  window.sessionStorage.scores = updateData.qtext;
  window.sessionStorage.scorearray = JSON.stringify(updateData.qtext)
  }
function setlang(l) {
  lang.value =  l
  }  
function gotoQIntro() {
  stop_audio();
  router.push({name: 'qintro', params: { lang: lang.value}});
  }
function gotoQ10() {
  stop_audio();
  if (selected.value == null)
     { alert(alert_msg[language.value]);}
  else {saveScores();
        questions_audio[lang.value][question.value].pause();
        router.push({name: 'extraquestion', params: { lang: lang.value}});
       } 
  }
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

  {{ setlang($route.params.lang) }}
  {{ setQnumber($route.params.qnumber) }}
  {{ setSelected(question) }}

  <!------------------------------------------------------------------------------------------------------>
  <!--  HEADER                                                                                          -->
  <!------------------------------------------------------------------------------------------------------> 
  <div class = "header">
    <br>
    <h2>{{ header[lang] }}</h2>
  </div>

  <div class="middle">
  <!------------------------------------------------------------------------------------------------------>
  <!--  QUESTION                                                                                        -->
  <!------------------------------------------------------------------------------------------------------> 
    <div class="question">
      <h1> {{ question+1 }} </h1>
      <h1> {{ questions[lang][question] }}</h1>
        <span  @click=play_question(lang,question) >   
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
        </span>
      <br>
    </div>
      
<!------------------------------------------------------------------------------------------------------>
<!--  ANSWERS                                                                                         -->
<!------------------------------------------------------------------------------------------------------> 
      <div class="answers">
        <div v-for="(answer, index) in answers[lang]"
            @click="changeSelected(index)"
            :class="[{['active border border-primary border-3']: (selected==index)},
                     {['inactive border border-white border-3']: (selected!=index)}]"
            >
            <h1> {{ index }} </h1>
            <h2 v-html="answer"></h2>
        </div>
        
        <span v-for="(answer_audio, index) in answers_audio[lang]"
            @click=play_answer(answer_audio,index) >  
            <img alt="speaker" src="../assets/speaker.png"  class="speaker_a" /> 
        </span>    
      </div>
    
  </div> <!-- end middle section -->

<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer">
  <div class="footer-arrows d-flex align-items-center justify-content-between footer-text fixed-bottom">
    <!-- Left arrow navigation, depending on question number -->
    <a v-if="question > 0" @click="nextQuestion(-1)"> &#8592 </a>
    <a v-else @click="gotoQIntro()"> &#8592 </a>

<!-- temporary link for testing -->
<!-- <router-link :to="{ name: 'extraquestion', params: { lang } }" class="darkred"> q10 </router-link>   -->

    <!-- Right arrow navigation, depending on question number-->
    <a v-if="question < 8" @click="nextQuestion(1)"> &#8594 </a>
    <a v-else @click="gotoQ10()"> &#8594</a>
  </div>

</div> 
</template>

<style scoped>
.darkred {
  color: darkred;
}
h1 {
  font-weight:  600;
  font-size: 1.2rem;
  text-align: center;
}
h2 {
  font-weight:  500;
  font-size: 0.9rem;
  text-align: center;
}
.question {
  padding: 1rem !important;
  margin-left: 4vw !important;
  margin-right: 4vw !important;  
  text-align: center;
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 1vw !important;
  margin-right: 1vw !important;
}
</style>