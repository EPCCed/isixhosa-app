<!--  LANGUAGE SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  console.log('script set up: localStorage.email =', localStorage.email);
import { ref } from 'vue'
import sound_en from '../assets/Audio/EN01-Lang.wav'
import sound_xh from '../assets/Audio/XH01-Lang.wav'

// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const name = ref('Lucy')
const lang = ref("unset")
const audio = ref(); 
const audio_en = new Audio(sound_en);
const audio_xh = new Audio(sound_xh); 

function setlangI(event) {
  lang.value="xh";
  } 
function setlangE(event) {
  lang.value="en";
  } 
function gotoPtID() {
    console.log("FUNCTION gotoPtID:  lang=", lang.value)
    audio_xh.pause();
    audio_en.pause();
    router.push({name: 'ptid'});
   }
  function gotoAudioInfo() {
    console.log("FUNCTION gotoAudioInfo:  lang=", lang.value)
    audio_xh.pause();
    audio_en.pause();
    if (lang.value=="unset")
        {setlangE()}
    router.push({  name: 'audioinfo', params: { lang: lang.value } });
  }

</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  {{console.log("start template: lang=", lang)}}
  <div class="container">
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
    <div col-sm-6 col-12>
    
      <!--  Header  -->
      <div class = "mt-auto head-lang"> 
        <h6> Nceda khetha ulwimi ukuqhubeka </h6>
        <h6 @click=audio_xh.play()>
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> &nbsp</h6>
        <br>
        <h6> Please choose a language to continue </h6>
        <h6 @click=audio_en.play()>
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> &nbsp </h6>
      </div>

      <!--  Language Choices  -->
      <div class="middle">
        <br><br>
         <a class="inputbox" @click="setlangI">
          <div v-if="lang === 'unset'"> <div class="unselected"> isiXhosa </div> </div>  
          <div v-if="lang === 'xh'"> <div class="selected"> isiXhosa </div> </div>  
          <div v-if="lang === 'en'"> <div class="unselected"> isiXhosa </div> </div>  
        </a>
        <br><br>
        <a class="inputbox" @click="setlangE">
          <div v-if="lang === 'unset'"> <div class="unselected"> English </div> </div> 
          <div v-if="lang === 'en'"> <div class="selected"> English </div> </div>  
          <div v-if="lang === 'xh'"> <div class="unselected"> English </div> </div>  
        </a>
        <br><br><br><br>
      </div>

      {{ console.log('lang=', lang) }}

  <!-- Footer - Navigation -->
    <footer class="mt-auto footer"> 
      <span id="bottom"> 
        <h5> Blank footer text for language screen. Blank footer text for language screen. Next line </h5>   
        <!-- <div class = "footer-mt-auto foot-fixed">   -->
      <div class="d-flex align-items-center justify-content-between">
        <a @click="gotoPtID" class="arrowsx"> &#8592 </a>
        <a @click="gotoAudioInfo" class="arrowsx"> &#8594 </a>
      </div>
          <!-- </div> -->
      </span> 

    </footer>  
  </div>
</div>
</template>

<style scoped>
.head-lang {
  padding: 2%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 100%; 
  height: 20vh;
}
.selected {
  color: red;
  background-color: lightgrey;
  font-weight: 700;
}
.unselected {
  color: black;
  font-weight: 700;
}
.unselected:hover{
  color: blue;
  /* background-color: lightgrey;  */
}
.lang-middle {
  height: 100%;
}
.blank-footer {
  width: 35vw;
}
h5 {
  color: darkred
}
</style>