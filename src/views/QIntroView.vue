<script setup>
  import { ref } from 'vue'
  const lang = ref("L")
  const lang_qi=ref("a")
  const lang_q = ref("b")
  const words = ref("D")
  const x = ref("x")
lang_q.value = "E"

  function setlang(langparam) {
    //lang_qi.value="E";
    lang.value=langparam.value;
    
    lang_q.value="aaa";
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
  //alert(`lang_qi= ${lang_qi.value}`);
  //onsole.log("setlang lang_qi =", lang_qi)
  } 

</script>

<template>
    {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}

    <div class="container row">
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
    <div col-sm-6 col-12>
    
    <!--  Header  -->
    <div class="row"  >
      <div class = "header"> 
      </div>
    </div> <!-- end row -->

    <!-- Question Intro text-->
    <div class="row">
      <div class="middle">      
        <br>
        <div v-if="$route.params.lang === 'xh'">
            <h5>Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?</h5>
        </div>
        <div v-if="$route.params.lang === 'en'">
            <h5>Over the last 2 weeks, how often have you been bothered by any of the following problems?</h5>
        </div>
        <br>
      </div>
    </div>
    
    {{setlang('E')}}  

    <!-- Footer navigation -->
    <div class="row">
      <div class="footer foot-fixed"> 
        <br><br>
        <img alt="speaker" src="../assets/speaker-white.png" width="40" height="40" class="speaker"/>
        <div class="d-flex align-items-center justify-content-between">
          <router-link :to="{ name: 'disclaimer3', params: { lang } }" class="arrowsx"> &#8592 </router-link>
          <router-link :to="{ name: 'question', params: { lang, total: 0, qnumber: 1 } }" class="arrowsx"> &#8594 </router-link>
        </div>
      </div>
    </div>
  
  </div>
</div>
</template>


<style scoped>

h5 {
  font-weight: 500;
  font-size: 25px;
  text-align: left;
  color: black;
  margin-left: 5%;
  margin-right: 5%;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>