import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/email',
      name: 'email',
      component: () => import('../views/EmailView.vue')
    },
    {
      path: '/ptid',
      name: 'ptid',
      component: () => import('../views/PtIDView.vue')
    },
    {
      path: '/language',
      name: 'language',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LanguageView.vue')
    },
    {
      path: '/audioinfo/:lang',
      name: 'audioinfo',
      component: () => import('../views/AudioInfoView.vue')
    },
    {
      path: '/disclaimer/:lang',
      name: 'disclaimer',
      component: () => import('../views/DisclaimerView.vue')
    },
    {
      path: '/disclaimer2/:lang',
      name: 'disclaimer2',
      component: () => import('../views/Disclaimer2View.vue')
    },
    {
      path: '/disclaimer3/:lang',
      name: 'disclaimer3',
      component: () => import('../views/Disclaimer3View.vue')
    },
    {
      path: '/qintro/:lang',
      name: 'qintro',
      component: () => import('../views/QIntroView.vue')
    },
    {
      path: '/question/:lang/:qnumber',
      name: 'question',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/extraquestion/:lang',
      name: 'extraquestion',
      component: () => import('../views/Q10View.vue')
    },
    {
      path: '/complete/:lang',
      name: 'complete',
      component: () => import('../views/CompleteView.vue')
    },
    {
      path: '/score/:lang',
      name: 'score',
      component: () => import('../views/ScoreView.vue')
    },
    // {
    //   path: '/Q1/:lang/:total',
    //   name: 'Q1',
    //   component: () => import('../views/Q1View.vue')
    // },
    // {
    //   path: '/Q2/:lang/:total',
    //   name: 'Q2',
    //   component: () => import('../views/Q2View.vue')
    // },
    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: () => import('../views/AboutAppView.vue')
    },
    {
      path: '/acknowl',
      name: 'acknowl',
      component: () => import('../views/AcknowlView.vue')
    },
    // {
    //   path: '/about/:lang',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/forminput',
    //   name: 'forminput',
    //   component: () => import('../views/FormInput.vue')
    // },
  ]
})

export default router
