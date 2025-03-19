<!--  LANGUAGE SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
import { ref } from 'vue'
import sound_en from '../assets/Audio/EN01-Lang.wav'
import sound_xh from '../assets/Audio/XH01-Lang.wav'

// to allow use of router.push in functions:
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
// const route = useRoute()
const lang = ref("unset")

const audio_en = new Audio(sound_en);
const audio_xh = new Audio(sound_xh); 

//-----------//
// Functions //
//-----------//
function setlangI(event) {
  lang.value="xh";
  } 
function setlangE(event) {
  lang.value="en";
  } 
function gotoPtID() {
  audio_xh.pause();
  audio_en.pause();
  router.push({name: 'ptid'});
 }
function gotoAudioInfo() {
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
  
  <!--  Header  -->
  <div class = "mt-auto header-large"> 
    <br>
    <h6> Nceda khetha ulwimi ukuqhubeka </h6>
    <h6 @click=audio_xh.play()>
        <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> &nbsp</h6>
    <br>
    <h6> Please choose a language to continue </h6>
    <h6 @click=audio_en.play()>
        <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> &nbsp </h6>
  </div>

  <!--  Language Choices  -->
  <div class="middle-lang">
    <br><br><br>
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

  <!-- Footer - Navigation -->
  <footer class="mt-auto footer fixed-bottom"> 
    <span id="bottom"> 
      <div class="d-flex align-items-center justify-content-between fixed-bottom">
        <a @click="gotoPtID" class="footer-arrows"> &#8592 </a>
        <a @click="gotoAudioInfo" class="footer-arrows"> &#8594 </a>
      </div>
    </span> 
  </footer>  

</template>

<style scoped>
.middle-lang {
  padding: 2%;
  background-color: white;
  color: black;
  text-align: center;
  margin: auto;
  width: 100%; 
  height: 50vh;
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
}
</style>