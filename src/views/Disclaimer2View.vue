<!-- DISCLAIMER SCREEN (x3) -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { ref } from 'vue'
  import sound from '../assets/AudioTest.m4a'

  const audio = new Audio(sound) 

  const lang = ref("L")
  const lang_qi = ref("I")
  const words = ref("D")
  //const n = ref(1)
  //const nnew = ref(1)

  function setlang(langparam) {
    lang.value =  langparam.value
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
  } 
  //function setpage(n) {
   // console.log("start fn: n=", n);
  //alert(`x= ${x}  total = ${total}`);
    //n = n+1;
    //nnew.value = n;
    //console.log("end fn: n=", n);
  //}
  var myTrack = new Audio('../assets/AudioTest.m4a')
  function send() {
    //alert(`send function`);
    myTrack.play()
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
        Kufuneka UNGAgcwalisi eli phephamibuzo kwimeko apho ungenako ukufikelela kudluliselo 
        lokhathalelo ngezengqondo, njengaxa usekhaya.
      </div>
      <div class="screenbox" v-if="$route.params.lang === 'en'">
            You should NOT complete this questionnaire in a setting where you do not have access 
            to psychological care referrals, such as when you are at home.
      </div>
    </div>

    {{setlang($route.params.lang)}}
    <!-- {{ setpage(n) }} -->

    {{console.log("lang=", lang, "  $route.params.lang=", $route.params.lang)}}
  
    <!-- Footer navigation -->
      <div class = "footer-mt-auto foot-fixed">  
        <div class="d-flex align-items-center justify-content-between">   
          <span @click=audio.play()>     
            <img alt="speaker" src="../assets/speaker-white.png"  class="speaker" /> 
          </span>
          <div>
            <span class="circleoutlinex"></span> &nbsp;
            <span class="dotx"></span> &nbsp; 
            <span class="circleoutlinex"></span> &nbsp;
          </div>
        </div>
        
        <div class="d-flex align-items-center justify-content-between">
          <router-link :to="{ name: 'disclaimer', params: { lang } }" class="arrowsx"> &#8592 </router-link>
          <router-link :to="{ name: 'disclaimer3', params: { lang } }" class="arrowsx"> &#8594 </router-link>
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
            margin-left: 40vw;
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