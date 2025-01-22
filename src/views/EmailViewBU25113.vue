<!--  EMAIL SCREEN          -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
//defineProps({
 // msg: {
  //  type: String,
   // required: true
  //}
//})
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const name= ref('first.sur@net');
const newName = ref('nN');
const email = ref('')
const newemail = ref('new.net')
const id = ('ID')
const savedemail=getemail(id) 
const inputValue = ref('iv');
const modelValue = defineModel();
const newval = ref('nval')
const newId = ('newID')

//const email = testemail 
// defineProps(['modelValue']);

defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const updateValue = (e) => {
      const value = e.target.value;
      emit('update:modelValue', value);
    }; 


{{console.log('savedemail=', savedemail)}}

 //watch(() => route.params.id, (newId, id) => {
 //   console.log('id, newId= ', id, newId)
 // })

  console.log('script set up: email=', email.value, 'localStorage.email =', localStorage.email);

//const model = defineModel()
function update() {
  model.value++
}
function getemail(e) {
  console.log('fn getemail bef: email=', email.value, 'localStorage.email =', localStorage.email, 'ls.newval=', localStorage.newval);
  console.log('fn getemail aft: newval=') //, newval.value, 'email=', email.value)
  return newemail.value= localStorage.email;
}
function saveemail(string) {
  console.log('fn saveemail bef: string=', string);
  localStorage.email = email.value //modelValue.value;
  email.value = localStorage.email;
  console.log('fn saveemail mid: email=', email.value, 'localStorage.email =', localStorage.email);
  //savedemail.value = localStorage.email;
  console.log('fn saveemail aft: email=', email.value, 'localStorage.email =', localStorage.email);
  window.location.reload();
  //return email.value= localStorage.email;
}
function savevalue(string) {
  console.log('fn savevalue bef: string=', string);
  localStorage.newval = email //modelValue.value;
  //newval.value = localStorage.newval;
  console.log('fn savevalue aft: newval=', newval.value, 'localStorage.newval =', localStorage.newval);
  return localStorage.newval; //newval.value //= localStorage.newval;
}

if (localStorage.name) {
      this.name = localStorage.name;
    }

console.log("# name=", name.value );
//console.log("# this.name=", $this.name.value);
//watch: {
  //  name(newName); 
    //  localStorage.name = newName;
  //}

</script>

<!-------------------->
<!--  SCREEN SETUP  -->
<!-------------------->
<template>

<div class="container">
    
  <!--  Header  -->
  <div class="row"  >
    <div class = "header"> 
      <br>
      <h5>  FOR OFFICE USE
            <br>
            UKUSETYENZISWA YIOFISI KUPHELA 
      </h5>  
    </div> <!-- end col -->
  </div> <!-- end row -->
  
 <!-- CENTRE SECTION  -->  
  <div class="row">
    <div class=" middle">
      <br><br>
      <div class="center"> 
          <h3>  Enter email address to export results </h3>
          <h3> Nceda khetha ulwimi ukuqhubeka </h3>
          <br>
          <input v-model = "email"> 
          <button @click = saveemail(email)>Confirm</button> 
          <br><br>
          Saved address: <input v-model= savedemail> 
      </div>
    </div>
  </div>
    
<!--  FOOTER SECTION -->
  <div class="row">
    <div class="footer mt-auto">
        <span id="bottom"> 
          <br>
          <div class="footer-text ">
            Researchers or clinicians may enter an email address to which anonymised 
            user responses from the session will be exported. 
            <br><br>
            Abaphandi okanye abanyangi bangafaka idilesi yeimeyile apho iimpendulo 
            zomsebenzisi ofihliweyo kule seshini ziza kuthunyelwa khona.
            <div class="d-flex align-items-center justify-content-between">
              <span><RouterLink to="/" class="arrow" > &#8592 </RouterLink></span>
              <span><RouterLink to="/ptid" class="arrow"> &#8594 </RouterLink></span>
            </div>
          </div>
        </span> 
    </div> 
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