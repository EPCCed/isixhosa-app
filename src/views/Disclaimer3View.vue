<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound_en from '../assets/Audio/EN05-Disc3.wav'
  import sound_xh from '../assets/Audio/XH05-Disc3.wav'

  const audio_en = new Audio(sound_en)
  const audio_xh = new Audio(sound_xh) 
  const lang = ref("L")
  const lang_qi = ref("I")
  const words = ref("D")

  function setlang(langparam) {
    lang.value =  langparam.value
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
  } 
</script>


<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
{{console.log("$route.params.lang=", $route.params.lang)}}

<div class="container">

  <!-- Disclaimer text-->
    <div class = "infoscreen"> 
      <br>
      <div class="screenbox" v-if="$route.params.lang === 'xh'">
        Ukuba unenkxalabo ngempilo yengqondo yakho okanye uziva ngathi usokoliswa ziimpawu zokudakumba, nceda uqhagamshelane nogqirha wakho okanye iklinikhi yengingqi.
      </div>
      <div class="screenbox" v-if="$route.params.lang === 'en'">
          If you are concerned about your mental health or feel that you may be struggling with symptoms of depression, please contact your doctor or local clinic.
      </div>
    </div>

    {{setlang($route.params.lang)}}
    <!-- {{ setpage(n) }} -->

    {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
  
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
            <span class="circleoutlinex"></span> &nbsp;
            <span class="circleoutlinex"></span> &nbsp;
            <span class="dotx"></span> &nbsp; 
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <router-link :to="{ name: 'disclaimer2', params: { lang } }" class = "arrowsx"> &#8592 </router-link>
            <router-link :to="{ name: 'qintro', params: { lang } }" class="arrowsx"> &#8594 </router-link>
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
}
.circle1outline {
            width: 15px;
            height: 15px;
            border: 2px solid white;
            border-radius: 50%;
            display: inline-block;
            text-align: right;
            margin-left: 75%;
}
.circle2outline {
            width: 15px;
            height: 15px;
            border: 2px solid white;
            border-radius: 50%;
            display: inline-block;
            text-align: right;
}

.circle.filled {
	background-color: #666666;
}
h5 {
  font-weight: 200;
  font-size: 1rem;
  text-align: left;
  color: white;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>