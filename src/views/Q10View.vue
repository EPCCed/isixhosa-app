<!--  EXTRA QUESTION SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->
<script setup>

import { ref } from 'vue';

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
// const route = useRoute()

const selected = ref(null)
const language = ref('en')


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
    "Not difficult at all<br><br><br>",
    "Somewhat<br> difficult<br><br><br>",
    "Very<br> difficult<br><br><br>",
    "Extremely<br> difficult<br><br><br>",
  ],
  'xh': [
    "Akunzima-<br>nga konke<br> konke<br>",
    "Kunzinyana<br> noko<br><br>",
    "Kunzima <br> kakhulu<br><br>",
    "Kube <br>nzima <br> ngokugqi <br>thisileyo"
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
  ]
  }
const alert_msg = {
  "en": "Please choose an answer to continue.",
  "xh": "Ukuthumela iziphumo njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho."
  }

const lang = ref("L")
const current_audio_answer = ref(0)
 

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////
function play_question(lang) {
    stop_audio(); 
    questions_audio[lang].play();
    }
function play_answer(audio, i) {
    stop_audio(); 
    current_audio_answer.value =i;
    audio.play();
    }
function stop_audio() {
  questions_audio[language.value].pause();
  questions_audio[language.value].currentTime = 0;
  answers_audio[language.value][current_audio_answer.value].pause();
  answers_audio[language.value][current_audio_answer.value].currentTime = 0;
  }
function changeSelected(id) {
  selected.value = id
  window.sessionStorage.extrascore = selected.value;
  }
function setSelected()
  {if (window.sessionStorage.extrascore != null)
      {selected.value=window.sessionStorage.extrascore;}
  }
function setLanguage(l) {
  language.value = l;
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
  if (selected.value == 'null')
     {alert(alert_msg[language.value]);
      }
  else
     {questions_audio[language.value].pause();
      router.push({name: 'complete', params: { lang:language.value}});
    }
  }
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

{{ setLanguage($route.params.lang) }}
{{ setSelected () }}

<!------------------------------------------------------------------------------------------------------>
<!--  HEADER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
  <div class = "header">
    <br>
    <h2>{{ header[language] }}</h2>
    <br>
  </div>

  <div class="middle-large"> 
<!------------------------------------------------------------------------------------------------------>
<!--  QUESTION                                                                                        -->
<!------------------------------------------------------------------------------------------------------> 
    <br>
    <div class="question">
      <h3> {{ questions[language] }} </h3>
      <span  @click=play_question(language) >   
              <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
      </span>
    </div>
    <br>
<!------------------------------------------------------------------------------------------------------>
<!--  ANSWERS                                                                                         -->
<!------------------------------------------------------------------------------------------------------> 
    <div class="answers">
      <div v-for="(answer, index) in answers[language]"
        @click="changeSelected(index)"
            :class="[{['active border border-primary border-4']: (selected==index)},
                     {['inactive border border-white border-4']: (selected!=index)}]"
      >
        <h1>{{ index }}</h1>
        <h2 v-html="answer"></h2>
        <br>
      </div>
  
      <div v-for="(answer_audio, index) in answers_audio[language]"
        @click=play_answer(answer_audio,index) >     
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_a" /> 
      </div> 
    </div>
  <br>
</div> <!-- End of middle section -->

<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer-small fixed-bottom">
  {{setlang('E')}} 
  <div class="footer-arrows d-flex align-items-center justify-content-between fixed-bottom">
      <a @click="gotoQ9"> &#8592 </a> 
      <a @click="gotoComplete" style="text-align: right"> &#8594 </a>
  </div>
</div>
<br>

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
  font-size: 0.9rem;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.active {
  color: red;
  width: 22vw;
  height: 110px;
}
.inactive {
  color: black;
  width: 22vw;;
  height: 110px;
}
</style>