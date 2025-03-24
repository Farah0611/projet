import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' //Importation de pinia
import './style.css'
import { useFormationsStore } from './stores/formationsStore.js'

import { createMemoryHistory, createRouter } from 'vue-router'
import Heure from './pages/Heure.vue'; 
import Presentation from './pages/Presentation.vue'
import Competences from './pages/Competences.vue'
import Formations from './pages/Formations.vue'
import Experiences from './pages/Experiences.vue'
import Activites_et_references from './pages/Activites_et_references.vue'

//Création de l'instance Pinia
const pinia = createPinia()

//Définition des routes (différentes pages)
const routes = [
  { path: '/heure', component: Heure },
  { path: '/', component: Presentation },
  { path: '/competences', component: Competences },
  { path: '/formations', component: Formations },
  { path: '/experience', component: Experiences},
  { path: '/activites-et-references', component: Activites_et_references},
];

//Création du router 
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

// Création de l'application Vue et utilisation de Pinia et du router
createApp(App)
.use(pinia) // Utilisation de Pinia
.use(router) // Utilisation du router 
.mount('#app')



