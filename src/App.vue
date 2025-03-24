<script setup>
import { RouterView } from 'vue-router'; 
import Nom_prenom from './components/Nom_prenom.vue'; //Importation des composants réutilisables
import Entete from './components/Entete.vue';
import boutonRetour from './components/boutonRetour.vue';

</script>

<template>
  <div class="app-container">
    <Entete/>
    <Nom_prenom> 
      <!-- Contenu dynamique à l'intérieur du slot -->
      <p style="font-style: italic; color: #777;">Passionnée par les DM et les nouvelles technologies</p>
    </Nom_prenom> 
    <boutonRetour/>
    <main>
      <RouterView /> <!-- permet d'avoir une navigation fluide -->
    </main>
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Arial', sans-serif;
  color: #333;
}

main {
  flex: 1;
  padding: 20px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms ease-in-out;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #0b15dbaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


