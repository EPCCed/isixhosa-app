<!--  LANGUAGE SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  console.log('script set up: localStorage.email =', localStorage.email);
import { ref } from 'vue'
const name = ref('Lucy')
const lang = ref("unset")

  import sound_en from '../assets/EN01-Lang.wav'
  import sound_xh from '../assets/XH01-Lang.wav'
const audio = ref(); 
const audio_en = new Audio(sound_en);
const audio_xh = new Audio(sound_xh); 

function setlangI(event) {
  //alert(`lang= ${lang.value}`);
  lang.value="xh";
  
  //count.value="V"
  //alert(`lang= ${lang.value}`);
  } 
function setlangE(event) {
  lang.value="en";
  } 
</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
  {{console.log("start template: lang=", lang)}}
  <div class="container row">
    <!-- Adjust width depending on small or larger screen size, by total columns used -->

    <div col-sm-6 col-12>
    
    <!--  Header  -->
    <div class="d-none d-lg-block">
    <div class = "position-absolute top-0 start-50 translate-middle"> 
      <div class = "mt-auto head-fixed">

        <br><br><br><br>
        <h6 @click=audio_en.play()>
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
            &nbsp; &nbsp;
            Please choose a language to continue </h6>

        <h6 @click=audio_xh.play()>
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
            &nbsp; &nbsp;
            Nceda khetha ulwimi ukuqhubeka </h6>
            <br>
            </div>
      </div>
      </div>


    <!--  Language Choices  -->
      <div class="middle position-absolute top-50 start-50 translate-middle">
 
        <a class="inputbox" @click="setlangI">
          <div v-if="lang === 'unset'"> <div class="unselected"> ixiXhosa </div> </div>  
          <div v-if="lang === 'xh'"> <div class="selected"> ixiXhosa </div> </div>  
          <div v-if="lang === 'en'"> <div class="unselected"> ixiXhosa </div> </div>  
        </a>

        <br>
        <a class="inputbox" @click="setlangE">
          <div v-if="lang === 'unset'"> <div class="unselected"> English </div> </div> 
          <div v-if="lang === 'en'"> <div class="selected"> English </div> </div>  
          <div v-if="lang === 'xh'"> <div class="unselected"> English </div> </div>  
        </a>
      </div>

      {{ console.log('lang=', lang) }}
  
 
    <footer class="mt-auto footer position-absolute bottom-0 start-50 translate-middle">
        <span id="bottom"> 
          <!--  Speaker -->
          <!-- <br>
          <h9> Blank footer text for language screen. Blank footer text for language screen. Next line </h9>  -->

          <div class="d-flex align-items-center justify-content-between">   

          </div>
          <!--  Navigation Arrows -->
          <div class="footer-text ">
            <div class="d-flex align-items-center justify-content-between">
              <span><RouterLink to="/ptid" class = "arrowsx"> &#8592 </RouterLink></span>
              <span><router-link :to="{ name: 'disclaimer', params: { lang } }" class="arrowsx"> &#8594 </router-link></span>
            </div>
          </div>
        </span> 
      </footer> 

  </div>
</div>
</template>

<style scoped>
.head-fixed {
  padding: 5%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 30vw; 
  height: 25vh; 
}
.middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  /*width: 20vw;*/
  width: 30vw;
  height: 50vh;
  margin-left: 0vw;
  margin-right: 0vw;
}
.footer {
  padding: 2%;
  background-color: darkred;
  color: white;
  width: 30vw;
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
h9 {
  color: darkred
}
/* a:hover{
  color: green;
  background-color: white; 
  font-size: 22px;
  font-weight: 700;
} */
/* a:link{
  color: blue;
}   */

/* h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: center;
}

.h4 {
    font-size: 0.5rem;
    color: white;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>