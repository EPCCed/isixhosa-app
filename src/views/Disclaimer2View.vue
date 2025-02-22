<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useElementSize } from '@vueuse/core'
  //import sound from '../assets/AudioTest.m4a'
  import sound_en from '../assets/Audio/EN04-Disc2.wav'
  import sound_xh from '../assets/Audio/XH04-Disc2.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const screen_text = {
    "en": "You should NOT complete this questionnaire in a setting where you do not have access to psychological care referrals, such as when you are at home.",
    "xh": "Kufuneka UNGAgcwalisi eli phephamibuzo kwimeko apho ungenako ukufikelela kudluliselo lokhathalelo ngezengqondo, njengaxa usekhaya."
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
  function gotoDisc1() {
    console.log("FUNCTION gotoDisc1:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'disclaimer', params: { lang: lang.value } });
  }
  function gotoDisc3() {
    console.log("FUNCTION gotoDisc3:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer3', params: { lang: lang.value } });
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
        <div>
          <span class="circleoutlinex"></span> &nbsp;
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
        </div>
      </div>
      <!--  Navigation Arros -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoDisc1" class="arrowsx"> &#8592 </a>
        <a @click="gotoDisc3" class="arrowsx"> &#8594 </a>
      </div>
    </div> 
  <!-- </div> -->
</template>

<style scoped>
</style>