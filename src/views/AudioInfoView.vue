<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useElementSize } from '@vueuse/core'
  import sound_en from '../assets/Audio/EN02-AudioInfo.wav'
  import sound_xh from '../assets/Audio/XH02-AudioInfo.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const audio = ref(); 
  const lang = ref("L")

  const screen_text = {
    "en": "If you would like to listen to the instructions or questions, please press the speaker button in the lower left corner.",
    "xh": "Ukuba ungathanda ukumamela imiyalelo okanye imibuzo, nceda cofa iqhosha lesipikha kwikona engezantsi yasekhohlo (left)."
  }

const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
    }

  function setlang(l) {
    lang.value =  l
    //console.log("FUNCTION setlang: lang=", lang.value, " l=", l)
  } 
  function gotoLanguage() {
    //console.log("FUNCTION gotoLang:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'language'});
  }
  function gotoDisc1() {
    //console.log("FUNCTION gotoDisc1:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer', params: { lang: lang.value } });
  }

  </script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

  <!-- Screen Body (Audio Info text) -->
    <div class = "infoscreen">

      {{setlang($route.params.lang)}}
      <!-- {{console.log("$route.params.lang=", $route.params.lang, "lang=", lang)}} -->
      <br>

      <div class="screenbox">
        <div class = "centerV">
        {{ screen_text[lang] }}
        </div>
      </div>
    </div>

  <!-- Footer navigation -->
    <div class = "footer-mt-auto footer fixed-bottom">  
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play class="footer-text">
          <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
      </div>
      <div class="d-flex align-items-center justify-content-between footer-text ">
        <a @click="gotoLanguage" class="arrow"> &#8592 </a>
        <a @click="gotoDisc1" class="arrow"> &#8594 </a>
      </div>
    </div>

</template>

<style scoped>
</style>