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

defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const updateValue = (e) => {
      const value = e.target.value;
      emit('update:modelValue', value);
    }; 

{{console.log('savedemail=', savedemail)}}
  console.log('script set up: email=', email.value, 'sessionStorage.email =',sessionStorage.email);

function update() {
  model.value++
}
function getemail(e) {
  console.log('fn getemail bef: email=', email.value, 'sessionStorage.email =',sessionStorage.email, 'ls.newval=',sessionStorage.newval);
  //console.log('fn getemail aft: newval=') //, newval.value, 'email=', email.value)
  return newemail.value=sessionStorage.email;
}
function saveemail(string) {
  console.log('fn saveemail bef: string=', string, 'email_address=', emailData.email_address);
  window.sessionStorage.email = emailData.email_address //email.value //modelValue.value;
  localStorage.email = emailData.email_address 
  //email.value =sessionStorage.email;
  //console.log('fn saveemail mid: email=', email.value, 'sessionStorage.email =',sessionStorage.email);
  //email.value =sessionStorage.email;
  confirmed.value = 1;
  console.log('fn saveemail aft: wsessionS=',window.sessionStorage.email,'localS=',localStorage.email, 'email_address=', emailData.email_address);
  //window.location.reload();
  return email.value = window.sessionStorage.email;
}
// function savevalue(string) {
//   console.log('fn savevalue bef: string=', string);
//  sessionStorage.newval = email //modelValue.value;
//   //newval.value =sessionStorage.newval;
//   console.log('fn savevalue aft: newval=', newval.value, 'sessionStorage.newval =',sessionStorage.newval);
//   returnsessionStorage.newval; //newval.value //=sessionStorage.newval;
// }

// if (localStorage.name) {
//       this.name = sessionStorage.name;
//     }

//console.log("# name=", name.value );

</script>

<!-------------------->
<!--  SCREEN SETUP  -->
<!-------------------->
<template>

<div class="container row">
  <div col-sm-6 col-12>
    
  <!--  Header  -->
    <div class = "header-mt-auto head-fixed"> 
      <br>
      <h5>  FOR OFFICE USE
            <br>
            UKUSETYENZISWA YIOFISI KUPHELA 
      </h5>  
    </div> <!-- end col -->
  
 <!-- CENTRE SECTION  -->  
    <div class=" middle">
      <br><br>
      <div class="center"> 
          <h3> Enter email address to export results </h3>
          <h3> Faka idilesi yeimeyile ukuthumela iziphumo </h3>
          <br>
          <span v-if="confirmed === 0"> 
            <input v-model="emailData.email_address" class = "unselected">  
          </span> 
          <span v-if="confirmed === 1"> 
            <input v-model="emailData.email_address" class = "selected">  
          </span> 
          <button @click = saveemail(email)> Confirm </button>
          <!-- Saved address: <input v-model= savedemail>  -->
      </div>
    </div>
 <!--{{ console.log( 'sessionStorage.email=',sessionStorage.email) }} 
 {{ sessionStorage.getItem('sessionStorage.email') }}-->
 <!-- <div id="app">

  My name is <input v-model="name">

{{ console.log( 'localStorage.name=', newName) }}
</div>  -->

  <!--FOOTER SECTION -->
    <footer class="mt-auto footer">
      <span id="bottom"> 
        <br>
        <div class="footer-text ">
          Researchers or clinicians may enter an email address to which anonymised 
          user responses from the session will be exported. 
          <br><br>
          Abaphandi okanye abanyangi bangafaka idilesi yeimeyile apho iimpendulo 
          zomsebenzisi ofihliweyo kule seshini ziza kuthunyelwa khona.
          
          <!-- Navigation Arrows -->
          <div class="d-flex align-items-center justify-content-between">
            <span><RouterLink to="/" class="arrow" > &#8592 </RouterLink></span>
            <span><RouterLink to="/ptid" class="arrow"> &#8594 </RouterLink></span>
          </div> 
        
        </div>
      </span> 
    </footer> 
  
  </div>
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

/* .greetings h1,

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