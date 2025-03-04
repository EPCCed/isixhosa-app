window\.session<!--  EXTRA QUESTION SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->
<script setup>

import { ref } from 'vue';
import questionDataXh from '../question-text-xh.json';
import questionDataEn from '../question-text-en.json';
import updateData from '../update.json';

import soundXQ_en from '../assets/Audio/EN20-XQ.wav'
import soundXQ_xh from '../assets/Audio/XH20-XQ.wav'
import soundXA0_en from '../assets/Audio/EN21-XA0.wav'
import soundXA0_xh from '../assets/Audio/XH21-XA0.wav'
import soundXA1_en from '../assets/Audio/EN22-XA1.wav'
import soundXA1_xh from '../assets/Audio/XH22-XA1.wav'
import soundXA2_en from '../assets/Audio/EN23-XA2.wav'
import soundXA2_xh from '../assets/Audio/XH23-XA2.wav'
import soundXA3_en from '../assets/Audio/EN24-XA3.wav'
import soundXA3_xh from '../assets/Audio/XH24-XA3.wav'

// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const selected = ref(null)
const language = ref('en')
const question = ref(0)

const header = {
  "en": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  "xh": "Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
}
const questions = {
    "en": "If you have chosen a number higher than 0 for any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?", 
    "xh": "Ukuba ngaba ukhethe inani elingaphezulu kwe-0 ngazo naziphi iingxaki ezi ngxaki zenze kwanzima kangakanani kuwe ukuba wenze umsebenzi wakho, ukulungisa izinto ekhaya, okanye ukuvana nabanye abantu?"
}
const answers = {
  'en': [
    "Not difficult at<br> all<br><br>",
    "Somewhat<br> difficult<br><br>",
    "Very<br> difficult<br><br>",
    "Extremely<br> difficult<br><br>",
  ],
  'xh': [
    "Akunzimanga <br> konke konke<br>",
    "Kunzinyana<br> noko<br>",
    "Kunzima <br> kakhulu<br>",
    "Kube nzima <br> ngokugqi <br>thisileyo <br>"
  ]
}

const questions_audio = {
    'en': new Audio(soundXQ_en),
    'xh': new Audio(soundXQ_xh)
    }
const answers_audio = {
  'en': [
    new Audio(soundXA0_en),
    new Audio(soundXA1_en),
    new Audio(soundXA2_en),
    new Audio(soundXA3_en),
  ],
  'xh': [
    new Audio(soundXA0_xh),
    new Audio(soundXA1_xh),
    new Audio(soundXA2_xh),
    new Audio(soundXA3_xh)
  ]}
const alert_msg = {
  "en": "Please choose an answer to continue.",
  "xh": "Ukuthumela iziphumo njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho."
}
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
const answered = ref(0)
const answer_count =ref(0)

//console.log('lang=', lang.value, 'total=', total.value, 'qnum=', qnum.value)
//console.log('score_list=', score_list)
//console.log('window.sessionStorage.scores=', window.sessionStorage.scores)

//window.sessionStorage.extrascore = selected.value
//console.log("window.sessionStorage.extrascore=", window.sessionStorage.extrascore) 

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////


function changeSelected(id) {
  //console.log("start fn changeSelected; id=", id)
  selected.value = id
  window.sessionStorage.extrascore = selected.value;
  //console.log("id=", id, "window.sessionStorage.extrascore=", window.sessionStorage.extrascore)
}

function setSelected()
    {//console.log("FUNCTION setSelected:  window.sessionStorage.extrascore=", window.sessionStorage.extrascore)
    //if (updateData.qtext[n]=='0' || updateData.qtext[n]=='1'|| updateData.qtext[n]=='2'|| updateData.qtext[n]=='3' )
    if (window.sessionStorage.extrascore != null)
        {selected.value=window.sessionStorage.extrascore;}
    //{console.log("FUNCTION setSelected:  selected=", selected.value)}    
    }

function setLanguage(l) {
  // if (l == 'en')
  //     {language.value = 'en'
  //     }
  // if (l == 'xh')
  //     {language.value = 'xh'
  //     }
  language.value = l;
  //console.log("FUNCTION setLanguage: language=", language.value, 'lang=', lang.value, 'l=', l)  
}

function setlang(langparam) {
    lang.value=langparam.value;
  }
function gotoQ9() {
    console.log("FUNCTION gotoQ9:  language=", language.value)
    questions_audio[language.value].pause();
    router.push({name: 'question', params: { lang:language.value, qnumber: 9}});
  }
function gotoComplete() {
    //console.log("FUNCTION gotoComplete:  selected=", selected.value);
    //{{console.log("lang=", lang.value, "language=",language.value)}};
    if (selected.value == 'null')

      { //console.log('alert=', alert_msg[language.value]);
        alert(alert_msg[language.value]);
    }
    else
      {//console.log("selected=", selected.value);
      questions_audio[language.value].pause();
      router.push({name: 'complete', params: { lang:language.value}});
    }
  }
//console.log('qnum=', qnum.value)
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<!-- {{ console.log("$route.params.lang=", $route.params.lang, "language=", language)}} -->
<!-- {{ console.log("answers=",answers, "answers[en,1]", answers['en',1]) }}
{{ console.log("answers_audio", answers_audio, "answers_audio[en,1]=", answers_audio['en',1]) }} -->
<!-- {{console.log('START TEMPLATE: selected=', selected, 'window.sessionStorage.extrascore=', window.sessionStorage.extrascore) }} -->


{{ setLanguage($route.params.lang) }}
{{ setSelected () }}
<!-- {{console.log('selected=', selected) }} -->
<!-- {{ console.log("TEMPLATE:  window.sessionStorage.extrascore=", window.sessionStorage.extrascore) }} -->
  
<!-- <div class="container"> -->

<!------------------------------------------------------------------------------------------------------>
<!--  HEADER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
    <div class = "header">
      <br>
      <h2>{{ header[language] }}</h2>
      <br>
    </div>

<!------------------------------------------------------------------------------------------------------>
<!--  QUESTION                                                                                        -->
<!------------------------------------------------------------------------------------------------------> 
<div class="middle-large"> 
  <br>
  <div class="question">
    <!-- {{ console.log("QUESTION: language=", language, "selected=", selected) }} 
    {{ console.log("questions_audio[language]=", questions_audio[language]) }}  -->
    <h3> {{ questions[language] }} </h3>
    <span  @click=questions_audio[language].play() >     
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
    </span> 
  </div>
  <br><br><br>
<!------------------------------------------------------------------------------------------------------>
<!--  ANSWERS                                                                                         -->
<!------------------------------------------------------------------------------------------------------> 
  <div class="answers">
    <div v-for="(answer, index) in answers[language]"
        @click="changeSelected(index)"
        :class="[{['active border border-primary border-3']: (selected==index)}]"
     >
<!-- {{ console.log("answer=", answer, 'index=', index, 'answers_audio[language,index]=', answers_audio[language,index]) }} -->
      <h1>{{ index }}</h1>
      <h2 v-html="answer"></h2>
    </div>
    <div v-for="(answer_audio, index) in answers_audio[language]"
        @click=answer_audio.play() >     
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_a" /> 
          <!-- {{ console.log('answer_audio=', answer_audio) }} -->
        </div>    
  </div>
  <br>
</div>
<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer-small fixed-bottom">
  {{setlang('E')}} 
  <!-- {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang, "language=",language)}} -->
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <div class="d-flex align-items-center justify-content-between footer-text fixed-bottom">
        <a @click="gotoQ9" class="arrowsx"> &#8592 </a> 
         <a @click="gotoComplete" class="rightbutton" style="text-align: right"> &#8594 </a>
      </div>
</div>
<!-- {{ console.log("language=", language, "selected=", selected) }} -->


  <br>
  <!-- </div> end of middle section -->

  <!-- {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}} -->
  <!-- {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }} -->
<!-- </div> end of container -->

<!-- </MyComponent> -->
</template>

<style scoped>

a.answer {
  color: black;
  font-weight:  500;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
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
.question {
  padding: 1rem !important;
  margin-left: 8vw !important;
  margin-right: 8vw !important;  
  text-align: center;
}
.answers {
  display: grid;
  /* grid-template-columns: 25vw 25vw 25vw 25vw; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* padding: 0 2rem; */
}
.middle-large {
  background-color: white;
  color: black;
  text-align: left; 
  width: 100vw;
  height: 70vh;
  margin-left: 5vw;
  margin-right: 0vw;
}

</style>