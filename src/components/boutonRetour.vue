<template>
    <div v-if="route.name !== 'home'" class="content">
      <!-- Bouton de retour -->
      <button class="back-button" @click="goBack">{{ textBouton || '🔙 Retour à la présentation' }}</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  
  const props = defineProps({
    textBouton: {
      type: String,
      default: '🔙 Retour à la présentation'
  
    }
  });
  
  const goBack = () => {
    router.push('/'); // Redirection vers la page d'accueil
  };
  </script>
  
  <style scoped>
  .back-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  </style>