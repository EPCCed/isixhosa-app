<script setup>
  console.log('script set up: localStorage.email =', localStorage.email);
  console.log('wsessionS.email=', window.sessionStorage.email, '.ptID=', window.sessionStorage.ptID,'.total=', window.sessionStorage.total);


import { ref } from 'vue'
const name = ref('Lucy')
const lang = ref("L")
const score = ref(0)
const total = ref(0)
const display_total = ref(0)
const display_email = ref('')
const display_ptID = ref('')

console.log('total=', total)

function settotal(t) {
  display_total.value = window.sessionStorage.total;
  display_email.value = window.sessionStorage.email;
  display_ptID.value = window.sessionStorage.ptID;
}

function setlang(langparam) {
    lang.value =  langparam.value
    total.value=langparam.value;
    console.log("setlang: lang=", lang.value, " langparam=", langparam.value)
    } 

</script>

<template>
<!-- {{console.log("lang=", lang, "$route.params.lang=", $route.params.lang)}}
{{console.log("total=", total, "$route.params.total=", $route.params.total)}} -->
<!-- <div class="screendef"> -->

  <div class="container row">
    <!-- Adjust width depending on small or larger screen size, by total columns used -->
    <div col-sm-6 col-12>
    
      <!--  Header  -->
        <div class = "header">
          <br> 
          <h4 v-if="$route.params.lang === 'xh'"> UKUFAKWA IKHOWUDI YIOFISI </h4>
          <h4 v-if="$route.params.lang === 'en'"> CODING BY THE OFFICE </h4>
        </div> 

    <!--  Score --> 
    {{settotal($route.params.total)}}
    <!-- display_total= {{ display_total }} -->

    <div class="middle middle-score">
        <br><br>
        <h4 v-if="$route.params.lang === 'xh'">
          AmaNqaku eWonke   &nbsp&nbsp&nbsp&nbsp   {{ display_total }}
        </h4>
        <h4 v-if="$route.params.lang === 'en'">
          Total Score &nbsp&nbsp&nbsp&nbsp {{ display_total }}
        </h4>
        <br><br>
        <h6>Scores for Patient ID: &nbsp {{  display_ptID }}</h6>
        <h6>will be emailed to: &nbsp&nbsp&nbsp {{ display_email }}
        &nbsp&nbsp&nbsp&nbsp <button @click = send_email(ptID)> Send Email </button>    </h6>
        <!-- <button @click="mailto:name@one.net" method="post" enctype="text/plain"></button> -->
      </div>

  <!-- {{ console.log('email_address=',emailData.email_address) }}  -->
  <!-- {{console.log('UpdateData=', UpdateData.qtext) }} -->

  {{setlang($route.params.lang)}}     

  <!--  Navigation Footer  -->

    <div class="footer">
      <h9> Blank footer text for language screen. Blank footer text for language screen. Next line </h9> 
      <div class="d-flex align-items-center justify-content-between">            
          <router-link :to="{ name: 'complete', params: { lang, total }}" class="leftbutton"> &#8592 </router-link>
          <RouterLink to="/" class="rightbutton" ><h5>Home</h5> </RouterLink> 
       </div>
    </div>

  </div>
</div>
</template>

<style scoped>
.middle-score {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  /*width: 20vw;*/
  width: 100%;
  height: 45vh;
  margin-left: 5vw;
  margin-right: 0vw;
}

h9 {
  color: darkred
}

/* * {height: 20vh;
    width: 50vw;
    margin: 0;
    padding: 0%;
} */
/* .align-items-center {
  display: flex; 
  align-items: center;  /*Aligns vertically center 
  justify-content: center; /*Aligns horizontally center 
} */

  /* .header {
  padding: 5%;
  background-color: darkred;
  color: white;
  text-align: center;
  margin: auto;
  width: 100vw;
  height: 15vh;
} 
/* .centre { */
  padding: 0%;
  background-color: white;
  color: black;
  /* text-align: center; */
  /* margin: auto; 
  width: 50vw;
  height: 40vh;
} */
/* .footer {
  padding: 5%;
  background-color: darkred;
  color: white;
  width: 50vw;
  height: 20vh;
} */


/* .scorebox {
  padding: 25%;
  width: 100%;
  height: 60%;
  text-align: center;
}
h3 {
  font-weight:  500;
  font-size: 1.2rem;
  text-align: center;
  margin: auto;
}

.h4 {
    font-size: 2.0rem;
    color: white;
    margin: auto;
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