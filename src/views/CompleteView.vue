<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useElementSize } from '@vueuse/core'
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

  function setlang(l) {
    lang.value =  l
    console.log("setlang: lang=", lang.value, " l=", l)
  } 
  function gotoQ10() {
    console.log("FUNCTION gotoQ10:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'extraquestion', params: { lang: lang.value } });
  }
  function gotoScore() {
    console.log("FUNCTION gotoScore:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'score', params: { lang: lang.value } });
  }

</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  <!-- <div class="container"> -->
    {{setlang($route.params.lang)}}

    <!-- Screen Body (Disclaimer Text)-->
    <div class = "infoscreen"> 
      {{console.log("$route.params.lang=", $route.params.lang, 'lang=', lang)}}
      {{ console.log('screen_text[lang]', screen_text[lang]) }}
      <br>
      <div class="screenbox">
        {{ screen_text[lang] }} 
      </div>
    </div>

  <!-- Footer  -->
  <div class = "footer-mt-auto foot-fixed">  
    {{ console.log("screen_audio[lang]=", screen_audio[lang]) }}
      <!--  Speaker and Progress dots -->
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
      </div>
      <!--  Navigation Arros -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoQ10" class="arrowsx"> &#8592 </a>
        <a @click="gotoScore" class="arrowsx"> &#8594 </a>
      </div>
    </div> 
  <!-- </div> -->
</template>

<style scoped>
</style>