<script setup>
  console.log('script set up: localStorage.email =', localStorage.email);
  import { ref } from 'vue'
  const lang = ref("L")
  const lang_qi = ref("I")
//lang = $route.params.lang.value
  const words = ref("D")
  const x = ref("x")
  const total = ref(0)

  function setlang(langparam) {
    //lang_qi.value="E";
    lang.value =  langparam.value
    total.value=langparam.value;
    //alert(`lang_qi= ${lang_qi.value}`);
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
    } 
</script>

<template>
{{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
<!-- {{ console.log("updateData.qtext=", updateData.qtext ) }} -->

<div class="container row">
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
  <!-- <div col-sm-6 col-12> -->

  <!-- Completion text-->
    <div class = "infoscreen"> 
        <br><br><br>
        <h4 v-if="$route.params.lang === 'xh'">
                Uligqibile ngoku iphephamibuzo. Enkosi.
        </h4>
        <h4 v-if="$route.params.lang === 'en'">
                You have now completed the questionnaire.  Thank you.
        </h4>
    </div>
        
    {{setlang($route.params.lang)}}

    <!-- Footer navigation -->
    <div class="footer">
      <img alt="speaker" src="../assets/speaker-white.png" class="speaker"/>
        <div class="d-flex align-items-center justify-content-between">
          <router-link :to="{ name: 'qintro', params: { lang } }" class="leftbutton"> &#8592 </router-link>      
          <router-link :to="{ name: 'score', params: { lang, total }}" class="rightbutton"> &#8594 </router-link>
        </div>
    </div>
    
</div>
</template>


<style scoped>
  /* .screen {
  padding: 5%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 50vw;
  height: 80vh;
}*/
 /* .infoscreen {
  padding: 3%;

  text-align: center;
  margin: auto;

}  */
/*

.footer {
  padding: 5%;
  background-color: darkred;
  color: white;
  width: 50vw;
  height: 20vh;
} */

.screendef {
  width: 40vw;
  height: 100vh;
  padding: 0%;
}

h4 {
  font-weight: 100;
  font-size: 1.5rem;
  text-align: left;
  margin-left: 6vw;
  margin-right: 6vw;
  color: white;
}

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