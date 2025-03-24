<template>
    <div class="heure-container">
      <h1>Heure actuelle</h1>
      <p v-if="loading">Chargement de l'heure...</p>
      <p v-else>Heure à Paris : {{ currentTime }}</p>
  
      <!-- Bouton pour revenir à la page principale -->
      <router-link to="/">Retour à l'accueil</router-link>
      <boutonRetour textBouton="Revenir à l'accueil" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: "",
        loading: true,
        apiKey: "PS3PLEEQSBEF", // Ta clé API ici
      };
    },
    methods: {
      // Fonction pour récupérer l'heure via l'API
      async fetchCurrentTime() {
        try {
          const response = await fetch( //fetch() envoie une rêquete HTTP GET à l'API + réponse await pour attendre la réponse de l'API 
            `http://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_APIKEY}&format=json&by=zone&zone=Europe/Paris`
          );
  
          if (!response.ok) {
            throw new Error("Erreur lors de la récupération de l'heure");
          }
  
          const data = await response.json(); //quand réponse reçue on vérifie si elle est correcte et on la convertis en format JSON
          
          // Formatage de l'heure
          this.currentTime = new Date(data.formatted).toLocaleTimeString(); //pour obtenir un format lisible
          this.loading = false; 
        } catch (error) {
          console.error("Erreur API :", error);
          this.currentTime = "Erreur de récupération de l'heure."; //en cas d'échec de l'API ou de la récupération de données, on affiche une erreur
          this.loading = false;
        }
      },
    },
    mounted() {
      // Appeler l'API régulièrement quand le composant est monté
      this.fetchCurrentTime();
  
      // Mettre à jour l'heure toutes les secondes
      this.timer = setInterval(this.fetchCurrentTime, 1000);
    },
    beforeDestroy() { //pour arrêter l'intervalle
      clearInterval(this.timer); // Nettoyer l'intervalle lors de la destruction du composant
    },
  };
  </script>
  
  <style scoped>
  .heure-container {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 32px;
    color: #333;
  }
  
  p {
    font-size: 24px;
    color: #555;
  }
  </style>