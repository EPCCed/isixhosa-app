<script setup>
//defineProps({
 // msg: {
  //  type: String,
   // required: true
  //},
  //lang: {
   // type: String,
    //required: true
  //},
  //total: {
  //type: Number,
   // required: true
  //}
//})
import { ref } from 'vue'
const qscore = ref(0)
const total = ref(0)
const tot = ref(0)
const ptotal = ref(0)
const x = ref(0)
const lang =ref("L")

console.log("$route.params.lang=", lang.value);
console.log("$route.params.total=", total.value);
 //}} &nbsp $route.params.total= {{ $route.params.total }}</p>

function set_score(event) {
    qscore.value = 1;
    //total.value = total.value + qscore.value;
    //alert(`qscore= ${qscore.value}`);
    total.value = total.value + qscore.value;
    //alert(`total= ${total.value}`);
}
function set_scorex(x) {
    total.value = total.value + 1;
}
function add_score(total, x) {
  console.log("# total=", total, "  x=", x);
  //alert(`x= ${x}  total = ${total}`);
  total = total+x;
  tot.value = total;
  console.log("# total=", total, "  x=", x, "tot.value=", tot.value);

  lang.value="Z";

  //return x;
} 
function add_to_total(x) {
  alert(`x= ${x}  tot = ${tot}`);
  tot.value = tot.value + x.value;
  alert(`tot= ${tot}`);
}
</script>

<template>
  {{console.log("$route.params.lang=", $route.params.lang)}}
  {{console.log("$route.params.total=", $route.params.total)}}
  <div class="greetings">
    <!--<div class="headband"> </div> 
    <p> $route.params.lang = {{ $route.params.lang }} &nbsp $route.params.total= {{ $route.params.total }}</p>
    <p>lang={{ lang }} &nbsp total={{ total }} &nbsp tot = {{ tot }} </p> -->

    <h4 class="headbox">Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayipphi na kwezi ngxaki zilandelayo?</h4>
    <br><br>
    <h2>1</h2>
    <h2>Umdla okanye ubumnandi obuncinci</h2>
    <h2>ekwenzeni izinto</h2>
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <p><br>
                    Andikhange<br>
                    konke konke</p>
                <h3>0</h3>
            </div>
            <div class="col-sm-3" @click="add_score(tot,1)" >
                <p><br>
                  Iintsuku<br>
                  eziliqela</p>
                <h3>1</h3>
            </div>
            <div class="col-sm-3">
                <p>Ngaphezulu<br>
                   wesiqingatha<br>
                   seentsuk</p>
                <h3>2</h3>
            </div>
            <div class="col-sm-3">
                <p>Phantse<br>
                  yonke<br>
                  imihl</p>
                <h3>3</h3>
            </div>
        </div>
    </div>
    <br>

    <div class="footbox">
        <router-link :to="{ name: 'Q2', params: {lang, total:tot} }">Q2</router-link> 
        <!-- <router-link :to="{ name: 'Q3', params: {lang} }">Q3</router-link> -->
    </div>
  </div>
</template>

<style scoped>
/*h1 {
  font-weight: 700;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
*/
h2 {
  font-weight:  500;
  font-size: 1.0rem;
  text-align: center;
}
h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: center;
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