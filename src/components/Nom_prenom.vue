<template>
  <div class="header">
    <div class="header-content">
      <div class="text-content">
        <h1>{{ nom }}</h1>
        <h2>{{ diplome }}</h2>
        <h2>{{ parcours }}</h2>

        <!-- Slot pour du contenu dynamique -->
        <slot></slot>
      </div>
      <img 
        src="file:///C:/Users/farah/Downloads/photo%20cv.jpg" 
        alt="Photo de Farah" 
        class="profile-image" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Définition des données réactives
const nom = ref("FARAH AWADA");
const diplome = ref("Licence Sciences pour la Santé");
const parcours = ref("Parcours objets connectés");

// Utilisation de computed pour une présentation dynamique
const presentation = computed(() => `${nom.value} - ${diplome.value}`);
</script>


<style scoped>
/* Centrage global */
.header {
  display: flex;
  justify-content: center; /* Centre horizontalement */
  margin: 40px 0;
}

/* Structure du contenu */
.header-content {
  display: flex;
  align-items: center; /* Aligne verticalement texte et image */
  gap: 100px; /* Augmentation de l'espace entre le texte et l'image */
}

/* Texte aligné à gauche */
.text-content {
  text-align: left;
  display: flex;
  flex-direction: column; /* Organise le texte en colonne */
  justify-content: center; /* Centre verticalement le texte */
}

/* Styles des titres */
h1 {
  font-size: 40px;
  color: #333;
  margin: 0;
  margin-bottom: 5px; /* Réduction de l'écart entre le nom et le poste */
}

h2 {
  font-size: 20px;
  color: #555;
  margin: 0; /* Supprime la marge supérieure */
}

/* Image de profil */
.profile-image {
  border-radius: 15px; /* Coins arrondis */
  width: 190px;
  height: 190px;
  object-fit: cover;
}
</style>
