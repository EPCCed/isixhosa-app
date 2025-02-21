<!--  MAIN QUESTIONNAIRE SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';

//import questionDataXh from '../question-text-xh.json';
//import questionDataEn from '../question-text-en.json';
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
import soundXQ_en from '../assets/Audio/EN20-XQ.wav'
import soundXQ_xh from '../assets/Audio/XH20-XQ.wav'

import soundA0_en from '../assets/Audio/EN16-A0.wav'
import soundA0_xh from '../assets/Audio/XH16-A0.wav'
import soundA1_en from '../assets/Audio/EN17-A1.wav'
import soundA1_xh from '../assets/Audio/XH17-A1.wav'
import soundA2_en from '../assets/Audio/EN18-A2.wav'
import soundA2_xh from '../assets/Audio/XH18-A2.wav'
import soundA3_en from '../assets/Audio/EN19-A3.wav'
import soundA3_xh from '../assets/Audio/XH19-A3.wav'

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

// const componentKey = ref(0);
// const forceRerender = () => {
//   componentKey.value += 1;
// };
const selected = ref(null)
const language = ref('en')
const question = ref(0)

const score_list = 
    [  "one", 
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
    "More<br> than<br> half the<br> days<br>",
    "Nearly<br> every<br> day<br>",
  ],
  'xh': [
    "Andikhange<br> konke konke<br>",
    "lintsuku<br> eziliqela<br>",
    "Ngaphezulu<br> kwesiqingatha<br> seentsuku<br>",
    "Phantse<br> yonke<br> imihla <br>"
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
  "xh": "Ukuthumela iziphumo njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho."
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
  ]}

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
  ]}

const total = ref(0)
const tot = ref(0)
//const ptotal = ref(0)
const x = ref(0)
const lang = ref("L")
//const lang_q= ref("x")
const qnum = ref(1)
const qnumnew = ref(1)
const confirmed = ref(0)
const answered = ref(0)
const answer_count = ref(0)
const already_reversed = ref(0)
const current_audio_answer = ref(5)

console.log('score_list=', score_list)
score_list.value = updateData.qtext.value
console.log('score_list=', score_list)
//window.sessionStorage.scores = {'one','two','three','four','five','six','seven','eight','nine','total'}
//updateData.qtext = score_list ;
//selected.value=5;
console.log('updateData.qtext=', updateData.qtext, 'window.sessionStorage.scores=', window.sessionStorage.scores)
console.log('selected=', selected.value, 'lang=', lang.value, 'route.params.lang=')
console.log('window.sessionStorage.reset_scores=', window.sessionStorage.reset_scores)

if (window.sessionStorage.reset_scores == 1)
    { updateData.qtext = score_list;
      window.sessionStorage.extrascore = null
      window.sessionStorage.reset_scores = 0
     }
console.log('updateData.qtext=', updateData.qtext, 'window.sessionStorage.scores=', window.sessionStorage.scores, '.extrascore=', window.sessionStorage.extrascore)
console.log('window.sessionStorage.reset_scores=', window.sessionStorage.reset_scores)

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////

function nextQuestion(diff) {
  console.log("FN nextQuestion start: diff=", diff, "selected=", selected.value, "question=", question.value)
  console.log("nextQ: language=",lang.value, 'current_audio_answer', current_audio_answer.value)
  questions_audio[lang.value][question.value].pause();
  questions_audio[lang.value][question.value].currentTime = 0;
  answers_audio[lang.value][0].pause();
  answers_audio[lang.value][0].currentTime = 0;
  answers_audio[lang.value][1].pause();
  answers_audio[lang.value][1].currentTime = 0;
  answers_audio[lang.value][2].pause();
  answers_audio[lang.value][2].currentTime = 0;
  answers_audio[lang.value][3].pause();
  answers_audio[lang.value][3].currentTime = 0;
  console.log("alert_msg[language]=", alert_msg[language], ".value=", alert_msg[language.value])
  if ( (selected.value != null && 
        question.value+diff >= 0 &&
        question.value+diff < questions[language.value].length) )
    { 
      question.value += diff
      selected.value = null
      console.log("diff=", diff, "selected=", selected.value, "question=", question.value)
    }
  else 
    if (selected.value == null &&
        diff == -1)
    {question.value += diff
      console.log("diff=", diff, "selected=", selected.value, "question=", question.value)
    }
  else 
    if (diff==1)
    {alert(alert_msg[language.value]);
  }    
  console.log("diff=", diff, "selected=", selected.value, "question=", question.value)
}

function changeSelected(id) {
  console.log("FN changeSelected:  id=", id, "question=", question.value );
  selected.value = id;
  console.log("marker")
  updateData.qtext[question.value] = id;
  // if (question.value==8)
  //     {saveScores();}
  console.log("FN changeSelected end:  updateData.qtext=", updateData.qtext, "selected=", selected.value);
     }

function setSelected(n)
    {console.log("FUNCTION setSelected:  updateData.qtext=", updateData.qtext, "n=", n, "updateData.qtext[n]=", updateData.qtext[n])
    if (updateData.qtext[n]=='0' || updateData.qtext[n]=='1'|| updateData.qtext[n]=='2'|| updateData.qtext[n]=='3' )
        {selected.value=updateData.qtext[n];}
    {console.log("FUNCTION setSelected:  selected=", selected.value)}    
    }

function setLanguage(l) {
  if (l == 'en')
      {language.value = 'en';
       }
  if (l == 'xh')
      {language.value = 'xh';
       }
  // console.log("language=", language.value)  
}

function setQnumber(n) {
  console.log("FUNCTION setQnumber start: n=", n)
  //  If page was arrived by coming back from Question 10, set the current question to 9 (but not if this has already been done)
  if ( n == 9 & already_reversed.value==0)
      {already_reversed.value = 1
        question.value =8
       }
      console.log("FUNCTION setQnumber end: n=", n)
}

function saveScores() {
  console.log('FN saveScores start: updateData.qtext=', updateData.qtext, 'updateData.qtext[1]=',updateData.qtext[1]);
  //updateData.qtext[8] = selected.value;
  updateData.qtext[9] = updateData.qtext[0]+updateData.qtext[1]+updateData.qtext[2]+updateData.qtext[3]+updateData.qtext[4]+updateData.qtext[5]+
                          updateData.qtext[6]+updateData.qtext[7]+updateData.qtext[8];
  window.sessionStorage.scores = updateData.qtext;
  console.log('fn saveScores end: window.sessionStorage.scores=', window.sessionStorage.scores);
}
  function setlang(l) {
    lang.value =  l
    console.log("FUNCTION setlang: lang=", lang.value, " l=", l)
  }  
  function gotoQIntro() {
    console.log("FUNCTION gotoQIntro:  lang=", lang.value)
    questions_audio[lang.value][question.value].pause();
    router.push({name: 'qintro', params: { lang: lang.value}});
  }
  function gotoQ10() {
    console.log("FUNCTION gotoQ10:  lang=", lang.value)
    saveScores();
    //console.log("FN gotoQ10:")
    questions_audio[lang.value][question.value].pause();
    router.push({name: 'extraquestion', params: { lang: lang.value}});
  }
</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
<!-- {{ language =  $route.params.lang }} -->
<!--{{ console.log("answers=",answers, "answers[en,1]", answers['en',1]) }}
{{ console.log("answers_audio", answers_audio, "answers_audio[en,1]=", answers_audio['en',1]) }} -->
{{ console.log("$route.params.lang=", $route.params.lang, "$route.params.qnumber", $route.params.qnumber)}} 

<!-- {{ setLanguage($route.params.lang) }} -->

  {{ setlang($route.params.lang) }}
  {{ setQnumber($route.params.qnumber) }}
  {{ setSelected(question) }}

{{ console.log("$route.params.lang=", $route.params.lang, "language=", language, "question=", question)}}  

  <div class="container">

    <!------------------------------------------------------------------------------------------------------>
    <!--  HEADER                                                                                          -->
    <!------------------------------------------------------------------------------------------------------> 
    <div class = "header">
      <h2>{{ header[lang] }}</h2>
    </div>

    <div class="middle">
    <!------------------------------------------------------------------------------------------------------>
    <!--  QUESTION                                                                                        -->
    <!------------------------------------------------------------------------------------------------------> 
      <div class="question">
        <h1> {{ question+1 }} </h1>
        <h1> {{ questions[lang][question] }}</h1>
        <span  @click=questions_audio[lang][question].play() >     
            <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
        </span>
      </div>
      <br>
<!------------------------------------------------------------------------------------------------------>
<!--  ANSWERS                                                                                         -->
<!------------------------------------------------------------------------------------------------------> 
      <div class="answers">
        <div v-for="(answer, index) in answers[lang]"
            @click="changeSelected(index)"
            :class="[{['active border border-primary border-3']: (selected==index)}]"
        >
<!-- {{ console.log("answer=", answer, 'index=', index, 'answers_audio[language,index]=', answers_audio[language,index]) }} -->
            <h1> {{ index }} </h1>
            <h2 v-html="answer"></h2>
        </div>

        <span v-for="(answer_audio, index) in answers_audio[lang]"
            @click=answer_audio.play() >     
            <img alt="speaker" src="../assets/speaker.png"  class="speaker_a" /> 
            <!-- {{ current_audio_answer = index }}  -->
            <!--{{ console.log('current_audio_answer=', current_audio_answer) }} -->

        </span>    

      </div>
    
  </div> <!-- end middle section -->

<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer">
  {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang, "language=",language)}}
  <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <div class="d-flex align-items-center justify-content-between">

        <!-- Left arrow navigation, depending on question number -->
        <a v-if="question > 0" @click="nextQuestion(-1)" class="leftbutton"> &#8592 </a>
        <a v-else @click="gotoQIntro()" class="leftbutton"> &#8592 </a>
        <!-- <span v-else> <router-link :to="{ name: 'qintro', params: { lang } }" class="leftbutton"> &#8592 </router-link></span> -->
        <router-link :to="{ name: 'extraquestion', params: { lang } }"> q10 </router-link>  

        <!-- Right arrow navigation, depending on question number-->
        <a v-if="question < 8" @click="nextQuestion(1)" class="rightbutton"> &#8594 </a>
        

          <!-- {{ saveScores() }} -->
            <a v-else @click="gotoQ10()" class="rightbutton"> &#8594</a>
          <!-- <router-link :to="{ name: 'extraquestion', params: { lang } }" class="leftbutton"> &#8594 </router-link>   -->
          

           <!-- <router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link> -->
      </div>
    </div>

</div> <!-- end of container -->

</template>

<style scoped>

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

.question {
  padding: 1rem;  
  text-align: center;
  height: 30vh;
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2 rem;
  height: 20vh;
  border-width: 1px;
}

/*.speaker_q:hover {
  width: 10px;
  background-color: blue;
  padding: 5px;
} */
</style>