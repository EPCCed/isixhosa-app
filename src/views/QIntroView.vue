<!-- QUESTION INTRODUCTION SCREEN -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN06-QIntro.wav'
  import sound_xh from '../assets/Audio/XH06-QIntro.wav'
  
  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  // const route = useRoute()

  const screen_text = {
    "en": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    "xh": "Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
  }
  const screen_audio = {
    'en': new Audio(sound_en),
    'xh': new Audio(sound_xh)
    }

  const lang = ref("L")
  // const x = ref("x")

//-----------//
// Functions //
//-----------//
  function setlang(l) {
    lang.value =  l
  } 
  function gotoDisc3() {
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer3', params: { lang: lang.value } });
  }
  function gotoQuestion() {
    screen_audio[lang.value].pause();
    router.push({name: 'question', params: { lang: lang.value, qnumber: 1 }});
  }
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  {{setlang($route.params.lang)}}  
   
    <!--  Header  -->
    <div class = "header"> 
    </div>

    <!-- Question Intro text-->
    <div class="middle">      
      <br><br>
      <h2 class="screentext centerV"> {{ screen_text[lang] }} </h2>
    </div>

  <!-- Footer navigation -->
  <div class = "footer-mt-auto footer fixed-bottom">  
    <div class="fixed-bottom">
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          &nbsp; <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoDisc3" class="footer-arrows"> &#8592 </a>
        <a @click="gotoQuestion" class="footer-arrows"> &#8594 </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>