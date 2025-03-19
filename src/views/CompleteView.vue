<!-- COMPLETION SCREEN -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN25-Thx.wav'
  import sound_xh from '../assets/Audio/XH25-Thx.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const screen_text = {
    "en": "You have now completed the questionnaire.  Thank you.",
    "xh": "Uligqibile ngoku iphephamibuzo. Enkosi."
    }
  const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
    }

  const lang = ref("L")

///////////////////////////////
//        FUNCTIONS          //
///////////////////////////////
  function setlang(l) {
    lang.value =  l
  } 
  function gotoQ10() {
    screen_audio[lang.value].pause();
    router.push({name: 'extraquestion', params: { lang: lang.value } });
  }
  function gotoScore() {
    screen_audio[lang.value].pause();
    router.push({  name: 'score', params: { lang: lang.value } });
  }

</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  {{setlang($route.params.lang)}}

  <!-- Screen Body (Disclaimer Text)-->
  <div class = "infoscreen"> 
    <br>
    <div class="screenbox">
      <div class = "centerV">
      {{ screen_text[lang] }}
      </div> 
    </div>
  </div>

  <!-- Footer  -->
  <div class = "footer-mt-auto footer fixed-bottom">  
    <div class="fixed-bottom">
      <!--  Speaker icon -->
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          &nbsp; <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
      </div>
      <!--  Navigation Arrows -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoQ10" class="footer-arrows"> &#8592 </a>
        <a @click="gotoScore" class="footer-arrows"> &#8594 </a>
      </div>
    </div> 
  </div>
</template>

<style scoped>
</style>