<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN06-QIntro.wav'
  import sound_xh from '../assets/Audio/XH06-QIntro.wav'
  
  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const screen_text = {
    "en": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    "xh": "wiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
  }
const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
    }

  //const audio_en = new Audio(sound_en)
  //const audio_xh = new Audio(sound_xh) 

  const lang = ref("L")
  //const lang_qi=ref("a")
  //const lang_q = ref("b")
  //const words = ref("D")
  const x = ref("x")
  //lang_q.value = "E"

  function setlang(l) {
    lang.value =  l
    console.log("FUNCTION setlang: lang=", lang.value, " l=", l)
  } 
  function gotoDisc3() {
    console.log("FUNCTION gotoDisc3:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer3', params: { lang: lang.value } });
  }
  function gotoQuestion() {
    console.log("FUNCTION Question:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'question', params: { lang: lang.value, qnumber: 1 }});
  }
</script>

<template>
  {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
  {{setlang($route.params.lang)}}  
  <!-- <div class="container"> -->
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
    <div col-sm-6 col-12>
    
    <!--  Header  -->
      <div class = "header"> 
      </div>

    <!-- Question Intro text-->
      <div class="middle">      
        <br><br><br>
        <h5> {{ screen_text[lang] }} </h5>
        <br>
      </div>

  <!-- Footer navigation -->
  <div class = "footer-mt-auto foot-fixed">  
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoDisc3" class="arrowsx"> &#8592 </a>
        <a @click="gotoQuestion" class="arrowsx"> &#8594 </a>
      </div>
    </div>

  </div>
<!-- </div> -->
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