<!-- DISCLAIMER SCREEN 1/3 -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN03-Disc1.wav'
  import sound_xh from '../assets/Audio/XH03-Disc1.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  // const route = useRoute()

  const screen_text = {
    "en": "This questionnaire should only be administered by authorised research or clinical professionals.",
    "xh": "Eli phephamibuzo kufuneka lilawulwe kuphela ziingcali zophando okanye zezonyango eziqeqeshiweyo ezigunyazisiweyo."
  }
  const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
  }
  const lang = ref("L")

//-----------//
// Functions //
//-----------//
  function setlang(l) {
    lang.value =  l
  } 
  function gotoAudioInfo() {
    screen_audio[lang.value].pause();
    router.push({name: 'audioinfo', params: { lang: lang.value } });
  }
  function gotoDisc2() {
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer2', params: { lang: lang.value } });
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
      <!--  Speaker and Progress dots -->
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          &nbsp; <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
        <div>
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
          <span class="circleoutlinex"></span> &nbsp;
        </div>
      </div>
      <!--  Navigation Arros -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoAudioInfo" class="footer-arrows"> &#8592 </a>
        <a @click="gotoDisc2" class="footer-arrows"> &#8594 </a>
      </div>
    </div> 
  </div>
</template>

<style scoped>
</style>