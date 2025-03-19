<!-- DISCLAIMER SCREEN 2/3 -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN04-Disc2.wav'
  import sound_xh from '../assets/Audio/XH04-Disc2.wav'

  // to allow use of router.push in functions:
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  // const route = useRoute()

  const screen_text = {
    "en": "You should NOT complete this questionnaire in a setting where you do not have access to psychological care referrals, such as when you are at home.",
    "xh": "Kufuneka UNGAgcwalisi eli phephamibuzo kwimeko apho ungenako ukufikelela kudluliselo lokhathalelo ngezengqondo, njengaxa usekhaya."
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
  function gotoDisc1() {
    screen_audio[lang.value].pause();
    router.push({name: 'disclaimer', params: { lang: lang.value } });
  }
  function gotoDisc3() {
    screen_audio[lang.value].pause();
    router.push({  name: 'disclaimer3', params: { lang: lang.value } });
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
      <div class="d-flex align-items-center justify-content-between">   
        <span @click = screen_audio[lang].play>
          &nbsp; <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
        </span>
        <div>
          <span class="circleoutlinex"></span> &nbsp;
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
        </div>
      </div>
      <!--  Navigation Arrows -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoDisc1" class="footer-arrows"> &#8592 </a>
        <a @click="gotoDisc3" class="footer-arrows"> &#8594 </a>
      </div>
    </div> 
  </div>
</template>

<style scoped>
</style>