<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '@vueuse/core'
  import { useElementSize } from '@vueuse/core'
  import sound_en from '../assets/Audio/EN05-Disc3.wav'
  import sound_xh from '../assets/Audio/XH05-Disc3.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

  const screen_text = {
    "en": "If you are concerned about your mental health or feel that you may be struggling with symptoms of depression, please contact your doctor or local clinic..",
    "xh": "Ukuba unenkxalabo ngempilo yengqondo yakho okanye uziva ngathi usokoliswa ziimpawu zokudakumba, nceda uqhagamshelane nogqirha wakho okanye iklinikhi yengingqi."
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
  function gotoDisc2() {
    //console.log("FUNCTION gotoDisc2:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({name: 'disclaimer2', params: { lang: lang.value } });
  }
  function gotoQIntro() {
    //console.log("FUNCTION gotoQIntro:  lang=", lang.value)
    screen_audio[lang.value].pause();
    router.push({  name: 'qintro', params: { lang: lang.value } });
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
          <span class="circleoutlinex"></span> &nbsp;
          <span class="circleoutlinex"></span> &nbsp;
          <span class="dotx"></span> &nbsp; 
        </div>
      </div>
      <!--  Navigation Arros -->
      <div class="d-flex align-items-center justify-content-between footer-text">
        <a @click="gotoDisc2" class="arrowsx"> &#8592 </a>
        <a @click="gotoQIntro" class="arrowsx"> &#8594 </a>
      </div>
    </div> 
  <!-- </div> -->
</template>

<style scoped>
</style>