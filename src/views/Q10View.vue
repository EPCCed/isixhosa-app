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

console.log('lang=', lang.value, 'total=', total.value, 'qnum=', qnum.value)

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////

function nextQuestion(diff) {
  if (
    selected.value != null && 
    (question.value+diff >= 0 &&
    (question.value+diff < questions[language.value].length))
  ) {
    question.value += diff
    selected.value = null
  }
  else 
    {alert("Please choose an answer to continue");
  }    
}
function changeSelected(id) {
  console.log("start fn changeSelected; id=", id)
  selected.value = id
  window.sessionStorage.extrascore = selected.value;
  console.log("id=", id, "window.sessionStorage.extrascore=", window.sessionStorage.extrascore)
}

function setSelected()
    {console.log("FUNCTION setSelected:  window.sessionStorage.extrascore=", window.sessionStorage.extrascore)
    //if (updateData.qtext[n]=='0' || updateData.qtext[n]=='1'|| updateData.qtext[n]=='2'|| updateData.qtext[n]=='3' )
    if (window.sessionStorage.extrascore != null)
        {selected.value=window.sessionStorage.extrascore;}
    //{console.log("FUNCTION setSelected:  selected=", selected.value)}    
    }

function setLanguage(l) {
  //lang.value=l;
  if (l == 'en')
      {language.value = 'en'
      }
  if (l == 'xh')
      {language.value = 'xh'
      }
  console.log("FUNCTION setLanguage: language=", language.value, 'lang=', lang.value, 'l=', l)  
}
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
function store_score(x, qnum) {
  console.log("start fn store_score: x=", x, "  qnum=", qnum);
  updateData.qtext[qnum-1] = x;
  answered.value = 1;
  answer_count.value = answer_count.value + 1;
  console.log("updateData.qtext=", updateData.qtext );
  console.log("end fn store_score: x=", x, " qnum=", qnum, " answered=", answered.value, " answer_count=", answer_count.value);
  forceRerender();
}
function next_question(qnum) {
  console.log("start fn next_question: qnum=", qnum, 'answered=', answered.value);
  if (answered.value==0) 
      {//console.log('if entered');
        alert("Please select an answer before continuing");}
  else     
    {qnum = qnum + 1;
    qnumnew.value = qnum;
    answered.value = 0;}
  console.log("end fn next_question: qnum=", qnum, "  qnumnew.value=", qnumnew.value, 'answered.value=', answered.value);
}
// function not_answered() {
//   console.log("start fn not_answered: qnum=", qnum, 'answered=', answered.value);
//   alert("Please select an answer before continuing");
// }
function save_scores(total, x) {
  console.log("start fn save_scores: total=", total, "  x=", x, "  qnum=", qnum);
  updateData.qtext[9] = x;
  updateData.qtext[10] = total;
  window.sessionStorage.total = total; 
  confirmed.value = 1;
  console.log("end fn save_scores: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
  console.log("end fn 2: w.sStorage.total=", window.sessionStorage.total );
  console.log("updateData.qtext=", updateData.qtext );
}
function setlang(langparam) {
    lang.value=langparam.value;
    //lang_q.value="aaa";
    //console.log("fn setlang: lang=", lang.value)
  }
  // function back_oneQ(qnum) {
  //   console.log("start fn back_oneQ: qnum=", qnum)
  //   //updateData.qtext[qnum-1] = "reset";
  //   console.log("updateData.qtext=", updateData.qtext );
  //   qnum = qnum - 1 ;
  //   qnumnew.value = qnum;
  //   console.log("end fn back_oneQ: qnum=", qnum)
  // }
  function gotoQ9() {
    console.log("FUNCTION gotoQ9:  language=", language.value)
    router.push({name: 'question', params: { lang:language.value, qnumber: 9}});
    //to="{ name: 'complete', params: { lang, total:0}"
    //<router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link>
  }
  function gotoComplete() {
    console.log("FUNCTION gotoComplete:  selected=", selected.value)
    if (selected.value == null)
      {alert(alert_msg[language.value]);
    }
    else
      router.push({name: 'complete', params: { lang:'en'}});
    //to="{ name: 'complete', params: { lang, total:0}"
    //<router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link>
  }
console.log('qnum=', qnum)
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<!-- {{ console.log("$route.params.lang=", $route.params.lang, "language=", language)}} -->
<!-- {{ console.log("answers=",answers, "answers[en,1]", answers['en',1]) }}
{{ console.log("answers_audio", answers_audio, "answers_audio[en,1]=", answers_audio['en',1]) }} -->
{{ setLanguage($route.params.lang) }}
{{ setSelected () }}
  
<div class="container">

<!------------------------------------------------------------------------------------------------------>
<!--  HEADER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
    <div class = "header">
      <h2>{{ header[language] }}</h2>
      <br><br>
    </div>

<!------------------------------------------------------------------------------------------------------>
<!--  QUESTION                                                                                        -->
<!------------------------------------------------------------------------------------------------------> 
<div class="middle"> 
  <br>
  <div class="question">
    {{ console.log("QUESTION: language=", language, "selected=", selected) }} 
    {{ console.log("questions_audio[language]=", questions_audio[language]) }} 
    <h1> {{ questions[language] }} </h1>
    <span  @click=questions_audio[language].play() >     
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
        :class="[{['active']: (selected==index)}]"
     >
<!-- {{ console.log("answer=", answer, 'index=', index, 'answers_audio[language,index]=', answers_audio[language,index]) }} -->
      <h1>{{ index }}</h1>
      <h2 v-html="answer"></h2>
    </div>
    <div v-for="(answer_audio, index) in answers_audio[language]"
        @click=answer_audio.play() >     
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
          <!-- {{ console.log('answer_audio=', answer_audio) }} -->
        </div>    
  </div>
  <br><br>
</div>
<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer">
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <div class="d-flex align-items-center justify-content-between">
        <!-- <router-link :to="{ name: 'question', params: { lang } }" class="leftbutton"> &#8592 </router-link>  -->
        <!-- <router-link :to="{ name: 'question', params: { lang, total: 0, qnumber: 1 } }" class="arrowsx"> &#8592 </router-link>     -->
        <a @click="gotoQ9" class="arrowsx"> &#8592 </a> 
        <!-- <router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link> -->
        <a @click="gotoComplete" class="rightbutton" style="text-align: right"> &#8594 </a>
      </div>
</div>

  <!-- </div> end of v-else ie qnum is not < 10 ie qnum = 10 -->
  <br>
  </div> <!-- end of middle section -->
  {{setlang('E')}} 
  <!-- {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}} -->
  {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }}
<!-- </div> end of container -->

<!-- </MyComponent> -->
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
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
}
a.answer:hover{
  font-size: 1.6rem;
  font-weight: 600;
  color:blue;
  background-color: lightgrey; 
  padding: 10px;
}
.selected {
  color: red;
  background-color: lightgrey;
  padding: 10px;
}
.backQ {
  color: white;
  font-weight:  200;
  font-size: 1.5rem;
  text-align: left;
  text-decoration: none;
}
.forwardQ {
  color: white;
  font-weight:  200;
  font-size: 1.5rem;
  text-align: right;
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

/* h9 {
  font-weight:  100;
  font-size: 3.5rem;
  text-align: right;
} */
.question {
  padding: 1rem;  
  text-align: center;
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 2rem;
}

.active {
  color: red;
}
</style>