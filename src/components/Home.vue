<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
  
})
var myTrack =new Audio("../assets/AudioTest.m4a")
function play(event) {
  //alert(`lang= ${lang.value}`);
  myTrack.play()
  //count.value="V"
  //alert(`lang= ${lang.value}`);
  } 
</script>

<template>

  <div class="greetings">
    <img alt="isiXhosa" class="logo" src="../assets/isiXhosaLogo.png" width="400" height="400"/>
    <h1 class="darkred">IPHEPHA LEMIBUZO</h1>
    <h1 class="darkred">LEMPILO YESIGUME</h1>
    <h3>PATIENT HEALTH QUESTIONNAIRE</h3>
    <br><br><br>
   <img alt="isiXhosa" src="../assets/UoELogo.png" width="120" height="30" />            
   <img alt="isiXhosa" src="../assets/StellenboschLogo.png" width="120" height="30" />

  </div>
</template>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-weight:  500;
  font-size: 1.2rem;
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
}
</style>
