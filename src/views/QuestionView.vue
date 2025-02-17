<!--  MAIN QUESTIONNAIRE SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';

import questionDataXh from '../question-text-xh.json';
import questionDataEn from '../question-text-en.json';
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

const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
};
const selected = ref(null)
const language = ref('English')
const question = ref(0)

const answers = {
  'English': [
    "Not at<br> all<br><br>",
    "Several<br> days<br><br>",
    "More<br> than<br> half the<br> days<br><br>",
    "Nearly<br> every<br> day<br><br>",
  ],
  'isiXhosa': [
    "Andikhange<br> konke konke<br><br>",
    "lintsuku<br> eziliqela<br><br>",
    "Ngaphezulu<br> kwesiqingatha<br> seentsuku<br><br>",
    "Phantse<br> yonke<br> imihla <br><br>"
  ]
}
const header = {
  "English": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  "isiXhosa": "Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
}
const questions = {
    "English": [
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
    'isiXhosa': [
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
  "English": "Please choose an answer to continue.",
  "isiXhosa": "Ukuthumela iziphumo njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho."
}

const questions_audio = {
  'English': [
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
  'isiXhosa': [
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
  'English': [
    new Audio(soundA0_en),
    new Audio(soundA1_en),
    new Audio(soundA2_en),
    new Audio(soundA3_en),
  ],
  'isiXhosa': [
    new Audio(soundA0_xh),
    new Audio(soundA1_xh),
    new Audio(soundA2_xh),
    new Audio(soundA3_xh)
  ]}

const audioQ = new Audio(soundQ1_en)
const audionew = new Audio(soundA1_en)
// const question = ref (questionDataEn);
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
const answer_count = ref(0)
const already_reversed = ref(0)

console.log('lang=', lang.value, 'route.params.lang=')

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////

function nextQuestion(diff) {
  console.log("FN nextQuestion start: diff=", diff, "selected=", selected.value, "question=", question.value)
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
  updateData.qtext[question.value] = id;
  if (question.value==8)
      {saveScores();}
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
      {language.value = 'English';
       }
  if (l == 'xh')
      {language.value = 'isiXhosa';
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

// function add_score(total, x, qnum) {
//   console.log("start fn add_score: total=", total, "  x=", x, "  qnum=", qnum);
//   total = total + x;
//   tot.value = total;
//   updateData.qtext[qnum-1] = x;
//   qnum = qnum + 1;
//   qnumnew.value = qnum;
//   console.log("end fn add_score: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
//   console.log("updateData.qtext=", updateData.qtext );
// }

// function store_score(x, qnum) {
//   console.log("FN store_score: x=", x, "  qnum=", qnum);
//   updateData.qtext[qnum-1] = x;
//   answered.value = 1;
//   answer_count.value = answer_count.value + 1;
//   console.log("updateData.qtext=", updateData.qtext );
//   console.log("END FN store_score: x=", x, " qnum=", qnum, " answered=", answered.value, " answer_count=", answer_count.value);
// }

// function next_question(qnum) {
//   console.log("FN next_question: qnum=", qnum, 'answered=', answered.value);
//   if (answered.value==0) 
//       {//console.log('if entered');
//         alert("Please select an answer before continuing");}
//   else     
//     {qnum = qnum + 1;
//     qnumnew.value = qnum;
//     answered.value = 0;}
//   console.log("end fn next_question: qnum=", qnum, "  qnumnew.value=", qnumnew.value, 'answered.value=', answered.value);
// }
// function not_answered() {
//   console.log("start fn not_answered: qnum=", qnum, 'answered=', answered.value);
//   alert("Please select an answer before continuing");
// }
function saveScores() {
  console.log('FN saveScores start: updateData.qtext=', updateData.qtext, 'updateData.qtext[1]=',updateData.qtext[1]);
  //updateData.qtext[8] = selected.value;
  updateData.qtext[9] = updateData.qtext[0]+updateData.qtext[1]+updateData.qtext[2]+updateData.qtext[3]+updateData.qtext[4]+updateData.qtext[5]+
                          updateData.qtext[6]+updateData.qtext[7]+updateData.qtext[8];
  window.sessionStorage.scores = updateData.qtext;
  console.log('fn saveScores end: window.sessionStorage.scores=', window.sessionStorage.scores);
}
// function save_scores(total, x) {
//   console.log("start fn save_scores: total=", total, "  x=", x, "  qnum=", qnum);
//   updateData.qtext[9] = x;
//   updateData.qtext[10] = total;
//   window.sessionStorage.total = total; 
//   confirmed.value = 1;
//   console.log("end fn save_scores: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
//   console.log("end fn 2: w.sStorage.total=", window.sessionStorage.total );
//   console.log("updateData.qtext=", updateData.qtext );
// }
function setlang(langparam) {
    lang.value=langparam.value;
    //lang_q.value="aaa";
    //console.log("fn setlang: lang=", lang.value)
  }
//   function back_oneQ(qnum) {
//     console.log("start fn back_oneQ: qnum=", qnum)
//     //updateData.qtext[qnum-1] = "reset";
//     console.log("updateData.qtext=", updateData.qtext );
//     qnum = qnum - 1 ;
//     qnumnew.value = qnum;
//     console.log("end fn back_oneQ: qnum=", qnum)
//   }
// console.log('qnum=', qnum)

</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<!-- <MyComponent :key="componentKey"> -->

<!-- {{ language =  $route.params.lang }} -->
<!--{{ console.log("answers=",answers, "answers[English,1]", answers['English',1]) }}
{{ console.log("answers_audio", answers_audio, "answers_audio[English,1]=", answers_audio['English',1]) }} -->
{{ console.log("$route.params.lang=", $route.params.lang, "$route.params.qnumber", $route.params.qnumber)}} 

{{ setLanguage($route.params.lang) }}
{{ setQnumber($route.params.qnumber) }}
{{ setSelected(question) }}

{{ console.log("$route.params.lang=", $route.params.lang, "language=", language, "question=", question)}}  

<div class="container">

<!------------------------------------------------------------------------------------------------------>
<!--  HEADER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
  <div class = "header">
    <h2>{{ header[language] }}</h2>
    <br><br>
  </div>

  <div class="middle">
<!------------------------------------------------------------------------------------------------------>
<!--  QUESTION                                                                                        -->
<!------------------------------------------------------------------------------------------------------> 
    <div class="question">
<!-- {{ console.log("question=", question, "question_audio=", question_audio) }}
{{ console.log("questions_audio[language[question]=", questions_audio[language][question]) }} -->
      <h1> {{ question+1 }} </h1>
      <h1> {{ questions[language][question] }}</h1>
      <span  @click=questions_audio[language][question].play() >     
            <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
      </span>
    </div>
    <br><br>
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
  </div> <!-- end middle section -->
<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
<div class = "mt-auto footer">
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <div class="d-flex align-items-center justify-content-between">

        <!-- Left arrow navigation, depending on question number -->
        <a v-if="question > 0" @click="nextQuestion(-1)" class="leftbutton"> &#8592 </a>
        <span v-else> <router-link :to="{ name: 'qintro', params: { lang } }" class="leftbutton"> &#8592 </router-link></span>

        <!-- Right arrow navigation, depending on question number-->
        <a v-if="question < 8" @click="nextQuestion(1)" class="rightbutton"> &#8594 </a>
        
        <span v-else> 
          <!-- {{ saveScores() }} -->
          <router-link :to="{ name: 'extraquestion', params: { lang } }" class="leftbutton"> &#8594 </router-link>  
        </span>  
           <!-- <router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link> -->
      </div>
      <router-link :to="{ name: 'extraquestion', params: { lang } }"> q10 </router-link>  
    </div>

<!------------------------------------------------------------------------------------------------------>
<!--  QUESTIONS 1-9                                                                                   -->
<!------------------------------------------------------------------------------------------------------> 

<!--   QUESTION TEXT AND AUDIO  -->

<!--   Set question number and hide display -->
<!-- <div class = "white">{{qnum=qnumnew}}</div> 
<!- <div v-if = "qnum == 10">{{ answered=0 }}</div> -->
<!-- {{ console.log("Start Template:  qnum=", qnum, 'answered=', answered)}} -->

<!-- <div class = "qsection">
    <h1 v-if = "qnum < 10" class="center"> 
      {{qnum}} <br><br> 
      <span  @click=audioQ.play() >     
          <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
      </span>
      <h1 v-if = "$route.params.lang === 'xh' & qnum < 10">
          {{questionDataXh.qtext[qnum-1]}}
          <br>
      </h1>
      <h1 v-if = "$route.params.lang === 'en' & qnum < 10">
           {{questionDataEn.qtext[qnum-1]}} 
           <br>
      </h1>

    </h1> --> 
  
  <!--  ANSWER OPTIONS (Q 1-9) -->

  <!-- <div v-if = "qnum < 10">
     Layout for non-mobiles -->
    <!-- <div class = "d-none d-sm-block">
      <br><br><br>
     {{ console.log("Start Answers:  updateData.qtext[qnum-1]", updateData.qtext[qnum-1])}} -->
      <!-- <div class="row"> -->
          <!-- ANSWER 0 -->
          <!-- <div class="col-sm-3 text-center" >
            <a class="answer" @click="store_score(0,qnum)">
              <span v-if="updateData.qtext[qnum-1]===0" class ="selected"> 0 </span>
              <span v-else class="answer"> 0 </span>
            </a>
            <br><br>
            <h2 v-if = "$route.params.lang === 'xh'">
              <span  @click=audioA0_xh.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
              </span><br>
              Andikhange<br> konke konke<br><br> 
            </h2>
            <h2 v-if = "$route.params.lang === 'en'">
              <span  @click=audioA0_en.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
      {{ console.log('audioA0_en=', audioA0_en) }}
               </span><br>
               Not at<br> all<br><br> 
             </h2>
            </div> --> 
          <!-- ANSWER 1 -->
          <!-- <div class="col-sm-3 text-center">
            <a class="answer" @click="store_score(1,qnum)" >
              <span v-if="updateData.qtext[qnum-1]===1" class="selected"> 1 </span>
              <span v-else class="answer"> 1 </span>
            </a>
            <br><br>
            <h2 v-if = "$route.params.lang === 'xh'"> 
              <span  @click=audioA1_xh.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
              </span><br> 
               lintsuku<br> eziliqela<br><br>
            </h2>
            <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA1_en.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                Several<br> days<br><br> 
            </h2>
            </div> -->
          <!-- ANSWER 2 -->
          <!-- <div class="col-sm-3 text-center">
            <a class="answer" @click="store_score(2,qnum)">
              <span v-if="updateData.qtext[qnum-1]===2" class ="selected"> 2 </span>
              <span v-else class="answer"> 2 </span>
            </a>
            <br><br>
            <h2 v-if = "$route.params.lang === 'xh'">
              <span  @click=audioA2_xh.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
              </span><br>
              Ngaphezulu<br> kwesiqingatha<br> seentsuku<br><br>
            </h2>
            <h2 v-if = "$route.params.lang === 'en'">
              <span  @click=audioA2_en.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
              </span><br>
               More<br> than<br> half the<br> days<br><br> 
            </h2>
          </div> -->
            <!-- ANSWER 3 -->
            <!-- <div class="col-sm-3 text-center">
              <a class="answer" @click="store_score(3,qnum)">
                <span v-if="updateData.qtext[qnum-1]===3" class ="selected"> 3 </span>
                <span v-else class="answer"> 3 </span>
              </a>
              <br><br>
              <h2 v-if = "$route.params.lang === 'xh'"> 
                <span  @click=audioA3_xh.play() >     
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>     
                Phantse<br> yonke<br> imihla <br><br>  
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioA3_en.play() >     
                    <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                Nearly<br> every<br> day<br><br> 
              </h2>
              </div> -->
        <!-- </div> end of row of answers from questions 1-9-->
        <!-- <br><br> -->
    <!-- </div> end of answers for non-mobile layout --> 
    
    <!-- Layout for mobiles -->
    <!-- <div class = "d-block d-sm-none">
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

            </a> -->
        <!-- </div> end of row of answers from questions 1-9 -->
    <!-- </div> end of answers for mobile layout -->
  <!-- </div> end of v-if qnum < 10 -->
          <!-- </div>
          <div class="col text-center"> -->
  <!-- <br>
  </div> end of middle section -->
  {{setlang('E')}} 
  <!-- {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}} -->
  <!-- {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }} -->

<!------------------------------------------------------------------------------------------------------>
<!--  FOOTER                                                                                          -->
<!------------------------------------------------------------------------------------------------------> 
    <!-- <div class = "mt-auto footer"> -->
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <!-- <div class="d-flex align-items-center justify-content-between">
        <a v-if="qnum > 1" @click="back_oneQ(qnum)" class="leftbutton"> &#8592 </a>
        <span v-else> <router-link :to="{ name: 'qintro', params: { lang } }" class="leftbutton"> &#8592 </router-link></span>
        <a v-if="qnum < 10" @click="next_question(qnum)" class="rightbutton"> &#8594 </a>
        <span v-if="qnum==10">
          <span v-if="answered==0" @click="not_answered()" class="rightbutton"> &#8594 </span> 
          <span v-if="answered==1">      
           <router-link :to="{ name: 'complete', params: { lang, total:0} }" class="rightbutton" style="text-align: right"> &#8594 </router-link>
          </span>
        </span>
      </div>
    </div> -->

    <!-- {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }} -->
</div> <!-- end of container -->

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