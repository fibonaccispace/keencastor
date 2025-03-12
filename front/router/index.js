import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/App.vue'),
      meta: { main: true }
    },
    { path: '/neuralnetwork', component: () => import('/pages/NeuralNetwork.vue') },
    { path: '/notes', component: () => import('/pages/Notes.vue') },
    { path: '/board', component: () => import('/pages/Board.vue') },
    { path: '/flappy-ai', component: () => import('/pages/FlappyAI.vue') },
    { path: '/maxwell-boltzmann', component: () => import('/pages/MaxwellBoltzmann.vue') },
    { path: '/aurora-borealis', component: () => import('/pages/AuroraBorealis.vue') },
    { path: '/l-system', component: () => import('/pages/LSystem.vue') },
    { path: '/trees', component: () => import('/pages/Trees.vue') },
    { path: '/lamp', component: () => import('/pages/Lamp.vue') },
    { path: '/julia-set', component: () => import('/pages/JuliaSet.vue') },
    { path: '/proceed-2d', component: () => import('/pages/Proceed2D.vue') },
    { path: '/shader', component: () => import('/pages/Shader.vue') },
    { path: '/blind', component: () => import('/pages/Blind.vue') },
    { path: '/rock-papper-scissors', component: () => import('/pages/RPS.vue') },
    { path: '/raycasting', component: () => import('/pages/Raycasting.vue') },
    { path: '/markov-chain', component: () => import('/pages/MarkovChain.vue') },
    { path: '/chladni-patterns', component: () => import('/pages/ChladniPatterns.vue') },
    { path: '/neural-cellular-automaton', component: () => import('/pages/NCA.vue') },
    { path: '/proceed-3d', component: () => import('/pages/Proceed3D.vue') },
    { path: '/nuclear-reaction', component: () => import('/pages/NuclearReaction.vue') },
    { path: '/3d', component: () => import('/pages/Vision3D.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('/pages/NotFound.vue'),
    },
  ],
})

export default router
