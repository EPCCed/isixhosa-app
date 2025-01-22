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
 // function setpage(n) {
   // console.log("start fn: n=", n);
  //alert(`x= ${x}  total = ${total}`);
    //n = n+1;
    //nnew.value = n;
    //console.log("end fn: n=", n);
  //}

  // function setup() {
  //   const el = ref(null);
  //   const { width, height } = useElementSize(el);
  //   return {
  //     el,
  //     width,
  //     height,
  //   };
  // }
  //var myTrack = new Audio('../assets/AudioTest.m4a')
  var myTrack = new Audio('../assets/ENDisc1.wav')
  function send() {
    //alert(`send function`);
    myTrack.play()
    } 
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
        Ukuba ungathanda ukumamela imiyalelo okanye imibuzo, nceda cofa iqhosha lesipikha kwikona engezantsi yasekhohlo.
      </div>
      <div class="screenbox" v-if="$route.params.lang === 'en'">
        If you would like to listen to the instructions or questions, please press the speaker button in the lower left corner.
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

<!-- 
        <div>
          <span class="dotx"></span> &nbsp; 
          <span class="circleoutlinex"></span> &nbsp;
          <span class="circleoutlinex"></span> &nbsp;
        </div> -->
      </div>

      <div class="d-flex align-items-center justify-content-between">
        <RouterLink to="/language" class="arrowsx"> &#8592 </RouterLink>
        <router-link :to="{ name: 'disclaimer', params: { lang } }" class="arrowsx"> &#8594 </router-link>
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

</style>