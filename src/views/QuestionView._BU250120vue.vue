<!--  MAIN QUESTIONNAIRE SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import questionDataXh from '../question-text-xh.json';
import questionDataEn from '../question-text-en.json';
import updateData from '../update.json';

const question = ref (questionDataEn);

import { ref } from 'vue';

const qscore = ref(0)
const total = ref(0)
const tot = ref(0)
const ptotal = ref(0)
const x = ref(0)
const lang =ref("L")
const lang_q=ref("x")
const qnum = ref(1)
const qnumnew = ref(1)
const error = ref(" ")
const scores =ref([])

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
  console.log("end fn save_scores: total=", total, "  x=", x, "   qnum=", qnum, "  qnumnew.value=", qnumnew.value);
  console.log("end fn 2: w.sStorage.total=", window.sessionStorage.total );
}
function setlang(langparam) {
    lang.value=langparam.value;
    //lang_q.value="aaa";
    console.log("fn setlang: lang=", lang.value)
  }

</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  <div class="container">

  <!--  Display Header -->

    <div class = "head-fixed">
      <p v-if="$route.params.lang === 'xh'" class="headbox">
        Kwiiveki ezi-2 ezidlulileyo, ingaba <br>
        uhlutshwe rhoqo kangakanani yiyo <br>
        nayipphi na kwezi ngxaki zilandelayo?</p>
      <p v-if="$route.params.lang === 'en'" class="headbox">
        Over the last 2 weeks, how often have you been bothered by any of the following problems? <br>
      </p>
      <br><br>
    </div>

  <!--  Display Question 
  {{console.log("qnum=", qnum)}} -->
  <br><br><br>

    <div>
      <h2 v-if = "qnum < 10"> {{qnum = qnumnew}}</h2>
      <h2 v-if = "$route.params.lang === 'xh' & qnum < 10">{{questionDataXh.qtext[qnum-1]}}</h2>
      <h2 v-if = "$route.params.lang === 'en' & qnum < 10">{{questionDataEn.qtext[qnum-1]}}</h2>
      <!-- <h2 v-if = "qnum= 1 "> <br> </h2> -->
      <br><br>
    </div>


  <!--  Display Answer Options for Questions 1-9 -->
  <div v-if = "qnum < 10">
        <div class="row">
            <a class="col-sm-3 text-center answer" @click="add_score(tot,0,qnum)">
               <h2 v-if = "$route.params.lang === 'xh'">
                  <br><br>
                  Andikhange<br>
                  konke konke<br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  <br><br>
                  Not at<br>
                  all<br>
                </h2>
                 0
              </a>
            <a class="col-sm-3 text-center answer" @click="add_score(tot,1,qnum)" >
              <h2 v-if = "$route.params.lang === 'xh'">
                  <br><br>
                  lintsuku<br>
                  eziliqela<br>
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  <br><br>
                  Several<br>
                  days<br>
              </h2>
              <p> 1 </p>
            </a>
            <a class="col-sm-3 text-center answer" @click="add_score(tot,2,qnum)">
              <h2 v-if = "$route.params.lang === 'xh'"><br>
                  Ngaphezulu<br>
                  kwesiqingatha<br>
                  seentsuk<br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  More<br>
                  than<br>
                  half the<br>
                  days<br>
                </h2>
                <p> 2 </p>
              </a>
            <a class="col-sm-3 text-center answer" @click="add_score(tot,3,qnum)">
              <h2 v-if = "$route.params.lang === 'xh'">
                  <br>
                  Phantse<br>
                  yonke<br>
                  imihl
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  <br>
                  Nearly<br>
                  every<br>
                  day<br>
              </h2>
              <p> 3 </p>
            </a>
        </div> <!-- end of row -->
        <br><br>

  </div> <!-- end of screen container -->

<!-- Display Extra Question -->

  <div v-else>
    <h2 v-if = "$route.params.lang === 'xh' ">  Ukuba ngaba ukhethe inani elingaphezulu kwe-0 ngazo
                    naziphi lingxaki ezi ngxaki zenze kwanzima kangakanani kuwe ukuba wenze umsebenzi
                    wakho, ukulungisa izinto ekhaya, okanye ukuvana nabanye abantu? </h2>
    <h2 v-if = "$route.params.lang === 'en'"> If you have chosen a number higher than 0 for any problems,
                    how difficult have these problems made it for you to do your work, take care of things
                    at home, or get along with other people?
    </h2>
    <!--  Display Extra Q Answer Options -->
    <div class="container">
      <br><br><br>
        <div class="row">
            <a class="col-sm-3 text-center answer" @click="save_scores(tot,0)">
               <h2 v-if = "$route.params.lang === 'xh'">
                  Akunzimanga konke<br>
                  konke<br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  Not difficult <br>
                  at all<br>
                </h2>
              </a>
            <a class="col-sm-3 text-center answer" @click="save_scores(tot,1)" >
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kunzinyana<br>
                  noko<br>
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Somewhat <br>
                  difficult <br>
              </h2>
            </a>
            <a class="col-sm-3 text-center answer" @click="save_scores(tot,2)">
                <h2 v-if = "$route.params.lang === 'xh'">
                    Kunzima <br>
                    kakulu <br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                    Very <br>
                    difficult <br>
                </h2>
            </a>

            <a class="col-sm-3 text-center answer" @click="save_scores(tot,3)">
              <h2 v-if = "$route.params.lang === 'xh'">
                  Kube nzima <br>
                  ngokugqithisileyo <br>
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  Extremely <br>
                  difficult <br>
              </h2>
            </a>
            
          <br><br>
        </div>
    </div>

    </div>
  <br>
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


</div>
</template>

<style scoped>
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
h6 {
  font-weight:  500;
  font-size: 2.0rem;
  text-align: right;
}
h2 {
  font-weight:  500;
  font-size: 1.0rem;
  text-align: center;
}
h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: left;
  text-decoration: none;
}
h4 {
  font-weight:  500;
  font-size: 1.5rem;
  text-align: center;
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