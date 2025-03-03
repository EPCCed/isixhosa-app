<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useElementSize } from '@vueuse/core'
  //import sound from '../assets/AudioTest.m4a'
  import sound_en from '../assets/Audio/EN03-Disc1.wav'
  import sound_xh from '../assets/Audio/XH03-Disc1.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const screen_text = {
    "en": "This questionnaire should only be administered by authorised research or clinical professionals.",
    "xh": "Eli phephamibuzo kufuneka lilawulwe kuphela ziingcali zophando okanye zezonyango eziqeqeshiweyo ezigunyazisiweyo."
  }
  const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
  }

  const lang = ref("L")

  function setlang(l) {
    lang.value =  l
    //console.log("setlang: lang=", lang.value, " l=", l)
  } 
  function gotoAudioInfo() {
    //console.log("FUNCTION gotoAudioInfo:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'audioinfo', params: { lang: lang.value } });
  }
  function gotoDisc2() {
    //console.log("FUNCTION gotoDisc2:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer2', params: { lang: lang.value } });
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
      <!-- {{console.log("$route.params.lang=", $route.params.lang, 'lang=', lang)}}
      {{ console.log('screen_text[lang]', screen_text[lang]) }} -->
      <br>
      <div class="screenbox">
        <div class = "centerV">
        {{ screen_text[lang] }}
        </div>
      </div>
    </div>

  <!-- Footer  -->
  <div class = "footer-mt-auto footer fixed-bottom">  
    <!-- {{ console.log("screen_audio[lang]=", screen_audio[lang]) }} -->
      <!--  Speaker and Progress dots -->
      <div class="d-flex align-items-center justify-content-between footer-text">   
        <span @click = screen_audio[lang].play>
          <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
        <div>
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
          <span class="circleoutlinex"></span>
        </div>
      </div>
      <!--  Navigation Arros -->
      <div class="d-flex align-items-center justify-content-between footer-text ">
        <a @click="gotoAudioInfo" class="arrowsx"> &#8592 </a>
        <a @click="gotoDisc2" class="arrowsx"> &#8594 </a>
      </div>
    </div> 
  <!-- </div> -->
</template>

<style scoped>
</style>