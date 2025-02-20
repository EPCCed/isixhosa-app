<!--  PATIENT ID SCREEN     -->

<!---------------------------->
<!--  SCRIPT SETUP SECTION  -->
<!---------------------------->

<script setup>
  import { useWindowSize } from '@vueuse/core';
  import ptIDData from '../email.json';
  import { ref } from 'vue'
  
  const { width, height } = useWindowSize()
  const confirmed =ref(0)
  //const id= ref('PtID');
  const ptID = ref('')
  const newName = ref('nN');

if (localStorage.name) {
      this.name = localStorage.name;
    }

console.log("# name=", name.value );
//console.log("# this.name=", $this.name.value);
console.log('wsessionS=',window.sessionStorage.ptID);

function save_ptID(string) {
  console.log('fn save_ptID bef: string=', string, 'ptID=', ptIDData.ptID, 'confirmed=', confirmed.value);
  window.sessionStorage.ptID = ptIDData.ptID;
  localStorage.ptID = ptIDData.ptID; 
  confirmed.value = 1;
  console.log('fn save_ptID aft: wsessionS=',window.sessionStorage.ptID,'localS=',localStorage.ptID, 'ptID=', 
              ptIDData.ptID,'confirmed=', confirmed.value);
  return ptID.value = window.sessionStorage.ptID;
}
//watch: {
  //  name(newName); 
    //  localStorage.name = newName;
  //}
</script>

<!---------------------------->
<!--  SCREEN SETUP SECTION  -->
<!---------------------------->
<template>
<div class="container">
  <div col-sm-6 col-12> 

    <!--  Header  -->
    <div class = "header-mt-auto header-small"> 
      <h5>  FOR OFFICE USE
            <br>
            UKUSETYENZISWA YIOFISI KUPHELA  
      </h5>
    </div>
  
    <!--  CENTRE SECTION  -->
    <div class="middle-small">
      <br>
      <div class="center"> 
        <h3>  Enter Participant ID or Patient Code </h3>
        <h3>  Faka i-ID yoMthabathinxaxheba okanye iKhowudi yesiGulane </h3>
        
        <span v-if="confirmed === 0"> 
          <input v-model="ptIDData.ptID" class = "unselected">  
        </span> 
        <span v-if="confirmed === 1"> 
          <input v-model="ptIDData.ptID" class = "selected">  
        </span> 
        <button @click = save_ptID(ptID)> Confirm </button>         
        
      </div>
    </div>

  
  <!--  FOOTER SECTION  -->
    <div class="footer-mt-auto footer-large"> 
      
        <div class="footer-text">
          Exported user response from this session will be labelled using this provided identifier.
          <br><br>
          Impendulo yomsebenzisi ethunyelweyo kule seshini iza ku-labelled kusetyenziswa 
          esi sichongi sinikiweyo.
          <div class="arrows">
            <span><RouterLink to="/email" class = "arrows"> &#8592 </RouterLink> </span>
            <span><RouterLink to="/language" class = "arrows"> &#8594 </RouterLink> </span>
          </div>
        </div>
    </div>

  </div> <!-- col-sm col -->
</div> <!-- container row -->

</template>

<style scoped>
h3 {
  font-weight:  500;
  font-size: 1.2rem;
}
</style>