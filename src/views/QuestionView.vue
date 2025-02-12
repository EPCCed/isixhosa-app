<!--  MAIN QUESTIONNAIRE SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';

const componentKey = ref(0);
const forceRerender = () => {
  componentKey.value += 1;
};

// const methodThatForcesUpdate = () => {
//   // ...
//   const instance = ref();
//   instance.proxy.forceUpdate();
//   // ...
// };

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

const audioQ1_en = new Audio(soundQ1_en)
const audioQ1_xh = new Audio(soundQ1_xh)
const audioQ2_en = new Audio(soundQ2_en)
const audioQ2_xh = new Audio(soundQ2_xh)
const audioQ3_en = new Audio(soundQ3_en)
const audioQ3_xh = new Audio(soundQ3_xh)
const audioQ4_en = new Audio(soundQ4_en)
const audioQ4_xh = new Audio(soundQ4_xh)
const audioQ5_en = new Audio(soundQ5_en)
const audioQ5_xh = new Audio(soundQ5_xh)
const audioQ6_en = new Audio(soundQ6_en)
const audioQ6_xh = new Audio(soundQ6_xh)
const audioQ7_en = new Audio(soundQ7_en)
const audioQ7_xh = new Audio(soundQ7_xh)
const audioQ8_en = new Audio(soundQ8_en)
const audioQ8_xh = new Audio(soundQ8_xh)
const audioQ9_en = new Audio(soundQ9_en)
const audioQ9_xh = new Audio(soundQ9_xh)
const audioXQ_en = new Audio(soundXQ_en)
const audioXQ_xh = new Audio(soundXQ_xh)

const audioA0_en = new Audio(soundA0_en)
const audioA0_xh = new Audio(soundA0_xh)
const audioA1_en = new Audio(soundA1_en)
const audioA1_xh = new Audio(soundA1_xh)
const audioA2_en = new Audio(soundA2_en)
const audioA2_xh = new Audio(soundA2_xh)
const audioA3_en = new Audio(soundA3_en)
const audioA3_xh = new Audio(soundA3_xh)

const audioXA0_en = new Audio(soundXA0_en)
const audioXA0_xh = new Audio(soundXA0_xh)
const audioXA1_en = new Audio(soundXA1_en)
const audioXA1_xh = new Audio(soundXA1_xh)
const audioXA2_en = new Audio(soundXA2_en)
const audioXA2_xh = new Audio(soundXA2_xh)
const audioXA3_en = new Audio(soundXA3_en)
const audioXA3_xh = new Audio(soundXA3_xh)

const audioQ = new Audio(soundA0_xh)
const audionew = new Audio(soundA1_en)
const question = ref (questionDataEn);
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
function not_answered() {
  console.log("start fn not_answered: qnum=", qnum, 'answered=', answered.value);
  alert("Please select an answer before continuing");
}
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
  function back_oneQ(qnum) {
    console.log("start fn back_oneQ: qnum=", qnum)
    //updateData.qtext[qnum-1] = "reset";
    console.log("updateData.qtext=", updateData.qtext );
    qnum = qnum - 1 ;
    qnumnew.value = qnum;
    console.log("end fn back_oneQ: qnum=", qnum)
  }
console.log('qnum=', qnum)
  // if (qnum==1)
  //       {console.log('qn 1');
  //         audio = audioA0_xh;}
  // if (qnum==2)
  //       {audio = audioQ2_en;}

</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<MyComponent :key="componentKey">

  <div class="container">

<!------------------------------------------------------------------------------------------------------>
<!--  DISPLAY HEADER                                                                                  -->
<!------------------------------------------------------------------------------------------------------> 
    <div class = "header">
      <p v-if="$route.params.lang === 'xh'" class="headbox">
        Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo <br> 
        kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?</p>
      <p v-if="$route.params.lang === 'en'" class="headbox">
        Over the last 2 weeks, how often have you been bothered by any of the following problems? <br>
      </p>
      <br><br>
    </div>

<!------------------------------------------------------------------------------------------------------>
<!--  SET AUDIO VARIABLE FOR CURRENT QUESTION NUMBER & LANGUAGE                                       -->
<!------------------------------------------------------------------------------------------------------> 


  <div v-if="$route.params.lang === 'en'" class="white">
    <span v-if = 'qnum == 1'> {{ audioQ = audioQ1_en}} </span>
    <span v-if = 'qnum == 2'> {{ audioQ = audioQ2_en}} </span>
    <span v-if = 'qnum == 3'> {{ audioQ = audioQ3_en}} </span>
    <span v-if = 'qnum == 4'> {{ audioQ = audioQ4_en}} </span>
    <span v-if = 'qnum == 5'> {{ audioQ = audioQ5_en}} </span>
    <span v-if = 'qnum == 6'> {{ audioQ = audioQ6_en}} </span>
    <span v-if = 'qnum == 7'> {{ audioQ = audioQ7_en}} </span>
    <span v-if = 'qnum == 8'> {{ audioQ = audioQ8_en}} </span>
    <span v-if = 'qnum == 9'> {{ audioQ = audioQ9_en}} </span>
  </div>
  <div v-if="$route.params.lang === 'xh'" class="white">
    <span v-if = 'qnum == 1'> {{ audioQ = audioQ1_xh}} </span>
    <span v-if = 'qnum == 2'> {{ audioQ = audioQ2_xh}} </span>
    <span v-if = 'qnum == 3'> {{ audioQ = audioQ3_xh}} </span>
    <span v-if = 'qnum == 4'> {{ audioQ = audioQ4_xh}} </span>
    <span v-if = 'qnum == 5'> {{ audioQ = audioQ5_xh}} </span>
    <span v-if = 'qnum == 6'> {{ audioQ = audioQ6_xh}} </span>
    <span v-if = 'qnum == 7'> {{ audioQ = audioQ7_xh}} </span>
    <span v-if = 'qnum == 8'> {{ audioQ = audioQ8_xh}} </span>
    <span v-if = 'qnum == 9'> {{ audioQ = audioQ9_xh}} </span>
  </div>
  {{ console.log("audioQ=", audioQ)}}
  <!-- {{ console.log("audioQ1_en=", audioQ1_en) }} -->
  <!-- {{setaudioQ(qnum)}} -->

<!------------------------------------------------------------------------------------------------------>
<!--  QUESTIONS 1-9                                                                                   -->
<!------------------------------------------------------------------------------------------------------> 

<!--   QUESTION TEXT AND AUDIO  -->

<!--   Set question number and hide display -->
<div class = "white">{{qnum=qnumnew}}</div> 
<!-- <div v-if = "qnum == 10">{{ answered=0 }}</div> -->
{{ console.log("Start Template:  qnum=", qnum, 'answered=', answered)}}

<div class = "qsection">
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

    </h1>
  
  <!--  ANSWER OPTIONS (Q 1-9) -->

  <div v-if = "qnum < 10">
    <!-- Layout for non-mobiles -->
    <div class = "d-none d-sm-block">
      <br><br><br>
      {{ console.log("Start Answers:  updateData.qtext[qnum-1]", updateData.qtext[qnum-1])}}
      <div class="row">
          <!-- ANSWER 0 -->
          <div class="col-sm-3 text-center" >
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
               </span><br>
               Not at<br> all<br><br> 
             </h2>
            </div>
          <!-- ANSWER 1 -->
          <div class="col-sm-3 text-center">
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
            </div>
          <!-- ANSWER 2 -->
          <div class="col-sm-3 text-center">
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
          </div>
            <!-- ANSWER 3 -->
            <div class="col-sm-3 text-center">
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
              </div>
        </div> <!-- end of row of answers from questions 1-9-->
        <br><br>
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

<!------------------------------------------------------------------------------------------------------>
<!--  EXTRA QUESTION (Question 10)                                                                                  -->
<!------------------------------------------------------------------------------------------------------> 
<div v-else>  
    <h3 v-if = "$route.params.lang === 'xh' ">  
            <span  @click=audioXQ_xh.play() >     
              <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
            </span> <br>
            Ukuba ngaba ukhethe inani elingaphezulu kwe-0 ngazo
            naziphi iingxaki ezi ngxaki zenze kwanzima kangakanani kuwe ukuba wenze umsebenzi
            wakho, ukulungisa izinto ekhaya, okanye ukuvana nabanye abantu? <br><br>

    </h3>
    <h3 v-if = "$route.params.lang === 'en'"> 
            <span  @click=audioXQ_en.play() >     
              <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
            </span> <br>
            If you have chosen a number higher than 0 for any problems,
            how difficult have these problems made it for you to do your work, take care of things
            at home, or get along with other people? <br><br>

    </h3>

    <!--  Display Extra Q Answer Options -->
    <!-- Layout for non-mobiles -->
    <div class = "d-none d-sm-block">
      <br><br><br>
        <div class="row">
          <div class="col text-center">
              <h2 v-if = "$route.params.lang === 'xh'">
                <span  @click=audioXA0_xh.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                <a class="answer" @click="store_score(0,qnum)">
                  Akunzimanga konke<br> konke<br> 
                </a> <br>
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioXA0_en.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                <a class="answer" @click="store_score(0,qnum)">
                  Not difficult <br> at all<br>
                </a><br><br>
              </h2>
          </div>
          <div class="col text-center">
              <h2 v-if = "$route.params.lang === 'xh'">
                <span  @click=audioXA1_xh.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br> 
                <a class="answer" @click="store_score(1,qnum)">
                  Kunzinyana<br> noko<br>
                </a><br>
               </h2>      
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioXA1_en.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                <a class="answer" @click="store_score(1,qnum)">
                  Somewhat <br> difficult <br> 
                </a><br><br>

              </h2>
          </div>
          <div class="col text-center">
            <h2 v-if = "$route.params.lang === 'xh'">
              <span  @click=audioXA2_xh.play() > 
                <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
              </span><br>
              <a class="answer" @click="store_score(2,qnum)">
                Kunzima <br> kakhulu 
              </a><br><br>
            </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  <span  @click=audioXA2_en.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                  <a class="answer" @click="store_score(2,qnum)">
                    Very <br> difficult <br>
                  </a><br><br>
                </h2>
              </div>
            <div class="col text-center">
              <h2 v-if = "$route.params.lang === 'xh'">
                <span  @click=audioXA3_xh.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                <a class="answer" @click="store_score(3,qnum)">
                  Kube nzima <br> ngokugqithisileyo <br> 
                </a><br>

              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                <span  @click=audioXA3_en.play() > 
                  <img alt="speaker" src="../assets/speaker.png"  class="speaker_q" /> 
                </span><br>
                <a class="answer" @click="store_score(3,qnum)">
                  Extremely <br> difficult <br>
                </a><br><br>

              </h2>
            </div>
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
          <br><br>
        </div> <!-- end of 2nd row of answers -->
    </div> <!-- end of mobile layout section for q10 answers  -->
  </div> <!-- end of v-else ie qnum is not < 10 ie qnum = 10 -->
  <br>
  </div> <!-- end of middle section -->
  {{setlang('E')}} 
  <!-- {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}} -->
  {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }}

  <!-- Display Footer -->
    <div class = "mt-auto footer">
      <!-- <h8> Blank footer text for language screen. Blank footer text for language screen. Next line </h8>  -->
      <div class="d-flex align-items-center justify-content-between">
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
    </div>

    {{ console.log('tot=', tot, 'qnum=', qnum, 'qnumnew=', qnumnew, 'answered=', answered) }}
</div> <!-- end of container -->

</MyComponent>
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
/* h8 {
  font-weight:  100;
  font-size: 1.5rem;
  text-align: right;
  color: darkred
} */
h9 {
  font-weight:  100;
  font-size: 3.5rem;
  text-align: right;
}
/* .greetings h1,
.greetings h3 {
  text-align: center;
  } */

/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>