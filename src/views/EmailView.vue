<!--  EMAIL SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import emailData from '../email.json';
console.log('email_address=', emailData.email_address);

//console.log("updateData.qtext=", updateData.qtext );

const { width, height } = useWindowSize()

const name= ref('First Last');
const newName = ref('nN');
const email = ref('')
const newemail = ref('new.net')
const id = ('ID')
const savedemail=getemail(id) 
const inputValue = ref('iv');
const modelValue = defineModel();
const newval = ref('nval')
const newId = ('newID')
const confirmed = ref(0)

{{console.log('savedemail=', savedemail)}}
  console.log('script set up: email=', email.value, 'sessionStorage.email =',sessionStorage.email);

function getemail(e) {
  console.log('fn getemail bef: email=', email.value, 'sessionStorage.email =',sessionStorage.email, 'ls.newval=',sessionStorage.newval);
  //console.log('fn getemail aft: newval=') //, newval.value, 'email=', email.value)
  return newemail.value=sessionStorage.email;
}
function saveemail(string) {
  console.log('fn saveemail bef: string=', string, 'email_address=', emailData.email_address);
  window.sessionStorage.email = emailData.email_address //email.value //modelValue.value;
  localStorage.email = emailData.email_address 
  confirmed.value = 1;
  console.log('fn saveemail aft: wsessionS=',window.sessionStorage.email,'localS=',localStorage.email, 'email_address=', emailData.email_address);
  return email.value = window.sessionStorage.email;
}

</script>

<!-------------------->
<!--  SCREEN SETUP  -->
<!-------------------->
<template>

<!-- <div class="container"> -->
  <div col-sm-6 col-12>
    
  <!--  Header  -->
    <div class = "header-mt-auto header-small"> 
      
      <h5>  FOR OFFICE USE
            <br>
            UKUSETYENZISWA YIOFISI KUPHELA 
      </h5>  
    </div> <!-- end header -->
  
 <!-- CENTRE SECTION  -->  
    <div class="middle-small">
      <br><br>
      <div class="center"> 
      {{ console.log('emailData.email_address=', emailData.email_address) }}
          <h3> Enter email address to export results </h3>
          <h3> Faka idilesi yeimeyile (email address) ukuthumela iziphumo </h3>
          <br>
          
<!-- NB This code allows checking of email format but causes an error on clicking confirm and doesn't save email address
<form>
          <span v-if="confirmed === 0"> 
            <input  v-model="emailData.email_address" class="unselected" type="email">  
          </span> 
          <span v-if="confirmed === 1"> 
            <input  v-model="emailData.email_address" class = "selected" type="email">  
          </span> 
          {{ console.log('emailData.email_address=', emailData.email_address) }}
          <button @click = saveemail(email)> Confirm </button>
          {{ console.log('emailData.email_address=', emailData.email_address) }}
</form> -->
          <span v-if="confirmed === 0"> 
            <input v-model="emailData.email_address" class = "unselected">  
          </span> 
          <span v-if="confirmed === 1"> 
            <input v-model="emailData.email_address" class = "selected">  
          </span> 
          <button @click = saveemail(email)> Confirm </button>
      </div>
    </div>

  <!--FOOTER SECTION -->
    <footer class="mt-auto footer-large">
      <span id="bottom"> 
        
        <div class="footer-text ">
          Researchers or clinicians may enter an email address to which anonymised 
          user responses from the session will be exported. To send the results as 
          an email, you must have an email account on your device.
          <br><br>
          Abaphandi okanye abanyangi bangafaka idilesi yeimeyile apho iimpendulo 
          zomsebenzisi ofihliweyo kule seshini ziza kuthunyelwa khona. Ukuthumela iziphumo 
          njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho.
          
          <!-- Navigation Arrows -->
          <div class="d-flex align-items-center justify-content-between">
            <span><RouterLink to="/" class="arrow" > &#8592 </RouterLink></span>
            <span><RouterLink to="/ptid" class="arrow"> &#8594 </RouterLink></span>
          </div> 
        </div>
      </span> 
    </footer> 
  
  </div> <!-- col-sm col -->
<!-- </div> container row -->
</template>

<style scoped>

h3 {
  font-weight:  500;
  font-size: 1.2rem;
}
/* .email-middle {
  padding: 0%;
  background-color: white;
  color: black;
  text-align: left; 
  /*width: 20vw;*/
  /* width: 100%;
  height: 35vh;
  margin-left: 0vw;
  margin-right: 0vw;
} */
</style> */