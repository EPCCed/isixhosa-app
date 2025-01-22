<script setup>

import { useRoute } from 'vue-router'
import { ref } from 'vue'


const id = ('ID')
const newId = ('newID')

const route = useRoute()
const userData = ref()
const clickcount = ref(0)
const inputvar = ref('writehere')
const email = ref('email.net')
const newemail = ref('new.net')
//const testemail = ref('t')
//localStorage.email = ref('lse.net')
const num = ref(0)

const testemail=getemail(id) 
const inputValue = ref('iv');
//const email = testemail 


</script>

<template>

  <input type= "text" />

</template>

