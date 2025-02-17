<script setup>
import { ref } from 'vue'
const selected = ref(null)
const language = ref('English')
const question = ref(0)

const answers = {
  'English': [
    "Not at<br> all<br><br>",
    "Several<br> days<br><br>",
    "More<br> than<br> half the<br> days<br><br>",
    "Nearly<br> every<br> day<br><br>",
  ],
  'isiXhosa': [
    "Andikhange<br> konke konke<br><br>",
    "lintsuku<br> eziliqela<br><br>",
    "Ngaphezulu<br> kwesiqingatha<br> seentsuku<br><br>",
    "Phantse<br> yonke<br> imihla <br><br>"
  ]
}

const header = {
  "English": "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  "isiXhosa": "Kwiiveki ezi-2 ezidlulileyo, ingaba uhlutshwe rhoqo kangakanani yiyo nayiphi na kwezi ngxaki zilandelayo?"
}

const questions = {
    "English": [
        "Little interest or pleasure in doing things", 
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        "Trouble concentrating on things, such as reading or watching television",
        "Moving or speaking so slowly that other people could have noticed?  Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
        "Thoughts that you would be better off dead or of hurting yourself in some way",
        "question 10 text"
    ],
    'isiXhosa': [
        "Umdla okanye ubumnandi obuncinci ekwenzeni izinto", 
        "Ukuziva unomoya ophantsi, udakumbile, okanye ungenathemba",
        "Ukusokola ukulala, okanye ukulala ngokugqithisileyo",
        "Ukuziva udiniwe okanye ungenamandla kangako",
        "Ukungacaceli ukutya okanye ukutya ngokugqithisileyo",
        "Ukuziva kakubi ngawe - okanye ukuba awuphumeleli okanye udanise wena okanye udanise usapho lwakho",
        "Ingxaki yokuzikisa ingqondo ezintweni, ezifana nokufunda okanye ukubukela umabonakude",
        "Ukuhamba okanye ukuthetha ngokucothayo kangangokuba abanye abantu babe bakuqaphele oko? Okanye okuchaseneyo noko - ukungqunga okanye ukungazinzi kangangokuba uzulazule kakhulu kunokuqhelekileyo",
        "Iingcinga zokuba kungcono ubhubhe okanye ukuzenzakalisa ngandlela ithile",
        "question 10 text"
    ],
}

function toggleLanguage() {
  language.value = (language.value == 'English') ? 'isiXhosa' : 'English'
}

function nextQuestion(diff) {
  if (
    selected.value != null && 
    (question.value+diff >= 0 &&
    (question.value+diff < questions[language.value].length))
  ) {
    question.value += diff
    selected.value = null
  }
}

function changeSelected(id) {
  selected.value = id
}
</script>

<template>
  <div>
    <h2>{{ header[language] }}</h2>
  </div>
  <div class="question">
    <h2>{{ question+1 }}. {{ questions[language][question] }}</h2>
  </div>
  <div class="answers">
    <div v-for="(answer, index) in answers[language]"
        @click="changeSelected(index)"
        :class="[{['active']: (selected==index)}]"
    >
      <h1>{{ index }}</h1>
      <div v-html="answer"></div>
    </div>
  </div>
  <button @click="nextQuestion(-1)">
    &laquo;
  </button>
  <button @click="toggleLanguage">
    {{ language }}
  </button>
  <button @click="nextQuestion(1)">
    &raquo;
  </button>
  <a href="mailto:l.norris@epcc.ed.ac.uk?Subject=SubjectHere&body=ThisIsTheMailtext">
    Send Email
  </a>
</template>

<style scoped>
.question {
  padding: 1rem;  
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 2rem;
}

.active {
  color: red;
}
</style>
