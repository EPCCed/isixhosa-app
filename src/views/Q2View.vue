<script setup>
/* defineProps({
  msg: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  total: {
  type: Number,
    required: true
  }
})*/
import { ref } from 'vue'
const qscore = ref(0)
const tot = ref(0)
const total = ref(0)
//total.value = 0
const x = ref("0")
const lang =ref("Q2")

function set_score(event) {
    qscore.value = 1;
    //total.value = total.value + qscore.value;
    //alert(`qscore= ${qscore.value}`);
    total.value = total.value + qscore.value;
    //alert(`total= ${total.value}`);
}

function add_score(total, x) {
  console.log("# total=", total, "  x=", x);
  //alert(`x= ${x}  total = ${total}`);
  total = total+x;
  tot.value = total;
  console.log("# total=", total, "  x=", x, "tot.value=", tot.value);
} 
</script>

<template>
  <div class="greetings">
    {{console.log("$route.params.lang=", $route.params.lang)}}
    {{console.log("$route.params.total=", $route.params.total)}}
    <h4 class="headbox">Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayipphi na kwezi ngxaki zilandelayo?</h4>
    <br><br>
    <h2>2</h2>
    <h2>Ukuziva unomoya ophantsi, udakumbile, okanye ungenathemba</h2>
    <h2>ekwenzeni izinto</h2>
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <p>&nbsp</p>
                <p>Andikhange</p>
                <p>konke konke</p>
                <h3>0</h3>
            </div>
            <div class="col-sm-3" @click="add_score(ptotal,1)" >
                <p>&NonBreakingSpace;</p>
                <p>Iintsuku</p>
                <p>eziliqela</p>
                <h3>1</h3>
            </div>
            <div class="col-sm-3">
                <p>Ngaphezulu</p>
                <p>Kwesiqingatha</p>
                <p>seentsuk</p>
                <h3>2</h3>
            </div>
            <div class="col-sm-3">
                <p>Phantse</p>
                <p>yonke</p>
                <p>imihl</p>
                <h3>3</h3>
            </div>
        </div>
    </div>
    <br>

    <div class="footbox">
      <router-link :to="{ name: 'Q1', params: {lang, total:tot} }">Q1</router-link>
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