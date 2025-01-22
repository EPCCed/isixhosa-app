<script setup>
defineProps(
 // {
 // don't think this is needed:
  // setlang: {
 //   type: String,
 //   required: true
 // }
)
import { ref } from 'vue'
const lang = ref("L")
const words = ref("D")
//let words = text()
const x = ref("x")

function convert(x) {
  //alert(`x= ${x}`);
  if (x="I") {
    //alert(`x= I branch`);
    return "Le khweshine kufuneka ilawulwe kuphela";
    } 
  else {
    //alert(`x= else branch`);
    return "This questionnaire should only be administered by authorised research or clinical professionals.";
    }
}

</script>

<template>
  <div v-bind:style="{ backgroundColor: 'darkred' }">
    <div>
      <!-- <h5>Language parameter passed down: {{ $route.params.lang }}</h5>
              <h5>Text: {{ convert($route.params.lang) }}</h5> -->
    </div>
      <br><br>
    <h5 v-if="$route.params.lang === 'I'">
        Le khweshine kufuneka ilawulwe kuphela ngophando olugunyazisweyo okanye iingcali zonyanogo.
    </h5>
    <h5 v-if="$route.params.lang === 'E'">
        This questionnaire should only be administered by authorised research or clinical professionals.
    </h5>
    <br><br>    
    <img alt="speaker" src="../assets/speaker.png" width="40" height="40"/>

  </div>

</template>


<style scoped>

h5 {
  font-weight: 200;
  font-size: 1rem;
  text-align: left;
  color: white;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>