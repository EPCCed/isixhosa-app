<script setup>

//import testData from '../test.json';
//const test = ref (testData);
//console.log("# testData =", testData.qtext)

import questionData from '../question-text.json';
import updateData from '../update.json';

const question = ref (questionData);
//console.log("Line 9: questionData 1 =", questionData.qtext[0])

import { ref } from 'vue'
const qscore = ref(0)
const total = ref(0)
const tot = ref(0)
const ptotal = ref(0)
const x = ref(0)
const lang =ref("L")
const qnum = ref(1)
const qnumnew = ref(1)
const error = ref(" ")
const scores =ref([])
//const langparam = ref("P")

function setlang(langparam) {
    //lang_qi.value="E";
    lang.value=langparam.value;
    total.value=langparam.value;
    console.log("fn: lang=", lang.value, " langparam=", langparam.value)
  //alert(`lang_qi= ${lang_qi.value}`);
  //onsole.log("setlang lang_qi =", lang_qi)
  } 


</script>

<template>
    
    {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
    {{console.log("total=", total, "  $route.params.total=", $route.params.total)}}


<div class="greetings">

    <!--  Display Question -->
    <p v-if="$route.params.lang === 'xh'" class="headbox"> 
        Kwiiveki ezi-2 ezidlulileyo, ingaba <br> 
        uhlutshwe rhoqo kangakanani yiyo <br>
        nayipphi na kwezi ngxaki zilandelayo?</p>
      <p v-if="$route.params.lang === 'en'" class="headbox"> 
        Over the last 2 weeks, how often have you been bothered by any of the following problems? <br> 
      </p>
      <br><br>

    <h2 v-if = "$route.params.lang === 'xh' ">  Ukuba ngaba ukhethe inani elingaphezulu kwe-0 ngazo
                    naziphi lingxaki ezi ngxaki zenze kwanzima kangakanani kuwe ukuba wenze umsebenzi
                    wakho, ukulungisa izinto ekhaya, okanye ukuvana nabanye abantu? </h2>
    <h2 v-if = "$route.params.lang === 'en'"> If you have chosen a number higher than 0 for any problems, 
                    how difficult have these problems made it for you to do your work, take care of things
                    at home, or get along with other people?
    </h2>
    <br><br>

    <!--  Display Answer Options -->
    <div class="container">
        <div class="row">
            <div class="col-sm-3 text-center" @click="add_score(tot,0,qnum)">
               <h2 v-if = "$route.params.lang === 'xh'">
                  <br><br>
                  Akunzimanga konke<br>
                  konke<br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                  <br><br>
                  Not difficult <br>
                  at all<br>
                </h2>
            </div>
            <div class="col-sm-3 text-center" @click="add_score(tot,1,qnum)" >
              <h2 v-if = "$route.params.lang === 'xh'">
                  <br><br>
                  Kunzinyana<br>
                  noko<br>
              </h2>          
              <h2 v-if = "$route.params.lang === 'en'">
                  <br><br>
                  Somewhat <br>
                  difficult <br>
              </h2>

            </div>
            <div class="col-sm-3 text-center" @click="add_score(tot,2,qnum)">
                <h2 v-if = "$route.params.lang === 'xh'">
                    <br><br>
                    Kunzima <br>
                    kakulu <br>
                </h2>
                <h2 v-if = "$route.params.lang === 'en'">
                    <br><br>
                    Very <br>
                    difficult <br>
                </h2>
            </div>

            <div class="col-sm-3 text-center" @click="add_score(tot,3,qnum)">
              <h2 v-if = "$route.params.lang === 'xh'">
                  <br><br>
                  Kube nzima <br>
                  ngokugqithisileyo <br>
              </h2>
              <h2 v-if = "$route.params.lang === 'en'">
                  <br><br>
                  Extremely <br>
                  difficult <br>
                </h2>
            </div>
        </div>
    </div>

    <br>
    
    {{setlang('P')}}  

    {{ console.log('lang=', lang, '$route.params.lang=', $route.params.lang) }}
    {{console.log("total=", total, "  $route.params.total=", $route.params.total)}}

    <!-- Display Footer -->
    <div class="arrowbox">
      <router-link :to="{ name: 'question', params: { lang, total: 0, qnumber: 1 } }" class="leftbutton"> &#8592 </router-link>
      <!-- <router-link :to="{ name: 'question', params: {lang, total:tot, qnumber: qnumnew} }" class="leftbutton"> &#8592 </router-link>  -->
      <router-link :to="{ name: 'complete', params: { lang, total} }" class="rightbutton"> &#8594 </router-link>
     </div>
</div>
</template>

<style scoped>

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