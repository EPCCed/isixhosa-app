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

  const audio = ref(); 
  const audio_en = new Audio(sound_en)
  const audio_xh = new Audio(sound_xh) 
  const { width, height } = useWindowSize()
  const lang = ref("L")
  const lang_qi = ref("I")
  const words = ref("D")
  //const n = ref(1)
  //const nnew = ref(1)

  function setlang(langparam) {
    lang.value =  langparam.value
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
  } 
  // var myTrack = new Audio('../assets/ENDisc1.wav')
  // function send() {
  //   //alert(`send function`);
  //   myTrack.play()
  //   } 
</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>

<div class="container">

  <!-- Disclaimer text-->

    <div class = "infoscreen"> 
      {{console.log("$route.params.lang=", $route.params.lang)}}
      {{ console.log('width=', width, 'height=', height) }}
      <br>
      <div class="screenbox" v-if="$route.params.lang === 'xh'">
        Eli phephamibuzo kufuneka lilawulwe kuphela ziingcali zophando okanye zezonyango eziqeqeshiweyo ezigunyazisiweyo.
      </div>
      <div class="screenbox" v-if="$route.params.lang === 'en'">
          This questionnaire should only be administered by authorised research or clinical professionals.
      </div>
    </div>

    {{setlang($route.params.lang)}}
    <!-- {{ setpage(n) }} -->
<!-- 
    {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
   -->
  <!-- Footer navigation -->

    <div class = "footer-mt-auto foot-fixed">  
      <div class="d-flex align-items-center justify-content-between">   
      
        <div v-if="$route.params.lang === 'xh'">
          <span @click=audio_xh.play() >     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
          </span>
        </div>
        <div v-if="$route.params.lang === 'en'">
          <span @click=audio_en.play() >     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
          </span>
        </div>


        <div>
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
          <span class="circleoutlinex"></span> &nbsp;
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between">
        <router-link :to="{ name: 'audioinfo', params: { lang } }" class="arrowsx"> &#8592 </router-link>
        <router-link :to="{ name: 'disclaimer2', params: { lang } }" class="arrowsx"> &#8594 </router-link>
      </div>
    </div>

  
</div>
</template>


<style scoped>

 .dot {
  height: 15px;
  width: 15px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  text-align: right;
  margin-left: 50%;
} 
/*
.circleoutline {
            width: 15px;
            height: 15px;
            border: 2px solid white;
            border-radius: 50%;
            display: inline-block;
            text-align: right;
        } */
/* .circle.filled {
	background-color: #666666;
} */
/* h5 {
  font-weight: 200;
  font-size: 1rem;
  text-align: left;
  color: white;
} */

/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>