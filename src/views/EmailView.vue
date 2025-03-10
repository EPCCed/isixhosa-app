<!--  EMAIL SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>

import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import emailData from '../email.json';
//console.log('email_address=', emailData.email_address);

//const { width, height } = useWindowSize()

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

function getemail(e) {
  return newemail.value=sessionStorage.email;
}
function saveemail(string) {
  window.sessionStorage.email = emailData.email_address 
  localStorage.email = emailData.email_address 
  confirmed.value = 1;
  return email.value = window.sessionStorage.email;
}

</script>

<!-------------------->
<!--  SCREEN SETUP  -->
<!-------------------->
<template>

<!-- <div class="container"> -->
  <!-- <div col-sm-6 col-12> -->
    
  <!--  Header  -->
    <div class = "header-mt-auto header-large"> 
      <br><br><br>
      <h5>  FOR OFFICE USE
            <br>
            UKUSETYENZISWA YIOFISI KUPHELA 
      </h5>  
    </div> <!-- end header -->
  
  <!-- CENTRE SECTION  -->  
 <div class="middle">
      <br><br><br>
      <div class="center">
        <h3> Enter email address to export results </h3>
        <h3> Faka idilesi yeimeyile (email address) ukuthumela iziphumo </h3>
        <br><br>  
        
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
      <!-- </div> -->
    </div>

</div>

  <!--FOOTER SECTION -->
  <!-- Non mobile devices -->
  <div class="d-none d-sm-block">
    <div class="mt-auto footer-large fixed-bottom">
      <span id="bottom"> 
        <br>
        <div class="footer-text">
          Researchers or clinicians may enter an email address to which anonymised 
          user responses from the session will be exported. To send the results as 
          an email, you must have an email account on your device.
          <br><br>
          Abaphandi okanye abanyangi bangafaka idilesi yeimeyile apho iimpendulo 
          zomsebenzisi ofihliweyo kule seshini ziza kuthunyelwa khona. Ukuthumela iziphumo 
          njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho.
        </div>  
        <!-- Navigation Arrows -->
          <div class="d-flex align-items-center justify-content-between fixed-bottom">
              <span><RouterLink to="/" class="footer-arrows"> &#8592 </RouterLink></span>
              <span><RouterLink to="/ptid" class="footer-arrows"> &#8594 </RouterLink></span>
          </div>    
      </span> 
    </div> 
  </div>

  <!-- Mobile devices -->
   <div class ="d-block d-sm-none">  
    <footer class="mt-auto footer-xlarge fixed-bottom">
      <span id="bottom"> 
        <div class="footer-text">
          <br>
          <h4>Researchers or clinicians may enter an email address to which anonymised 
          user responses from the session will be exported. To send the results as 
          an email, you must have an email account on your device.
          <br><br>
          Abaphandi okanye abanyangi bangafaka idilesi yeimeyile apho iimpendulo 
          zomsebenzisi ofihliweyo kule seshini ziza kuthunyelwa khona. Ukuthumela iziphumo 
          njenge imeyile, kufuneka ube ne akhawunti ye imeyile kwisixhobo sakho.
          </h4>
        </div>

        <!-- Navigation Arrows -->
        <div class="d-flex align-items-center justify-content-between fixed-bottom">
          <span><RouterLink to="/" class="footer-arrows"> &#8592 </RouterLink></span>
          <span><RouterLink to="/ptid" class="footer-arrows"> &#8594 </RouterLink></span>
        </div> 

      </span> 

    </footer> 
  </div>
  
  <!--</div>  col-sm col -->
<!-- </div> container row -->
</template>

<style scoped>

h3 {
  font-weight:  500;
  font-size: 1.2rem;
}
h4 {
  font-weight:  300;
  font-size: 0.9rem;
}


</style> */