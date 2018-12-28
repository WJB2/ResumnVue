import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PartOne = () => import('./../components/PartOne.vue');
const PartTwo = () => import('./../components/PartTwo.vue');
const PartThree = () => import('./../components/PartThree.vue');
const PartFour = () => import('./../components/PartFour.vue');
const PartFive = () => import('./../components/PartFive.vue');
const PartSix = () => import('./../components/PartSix.vue');
const PartSeven = () => import('./../components/PartSeven.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        PartOne: PartOne,
        PartTwo: PartTwo,
        PartThree: PartThree,
        PartFour: PartFour,
        PartFive: PartFive,
        PartSix: PartSix,
        PartSeven: PartSeven
      }
    },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
    {
      path: '/PartTwo',
      name: 'PartTwo',
      component: PartTwo
    },
    {
      path: '/PartThree',
      name: 'PartThree',
      component: PartThree
    },
    {
      path: '/PartFour',
      name: 'PartFour',
      component: PartFour
    },
    {
      path: '/PartFive',
      name: 'PartFive',
      component: PartFive
    },
    {
      path: '/PartSix',
      name: 'PartSix',
      component: PartSix
    },
    {
      path: '/PartSeven',
      name: 'PartSeven',
      component: PartSeven
    } 
  ]
})