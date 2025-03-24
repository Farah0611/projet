<template>
    <section id="formation" class="experiences">
      <h2><i class="fas fa-graduation-cap"></i> Formations</h2>
  
      <!-- Grille des formations -->
      <div class="formation-grid">
        <div 
          class="formation-card" 
          v-for="formation in formations" 
          :key="formation.id"
          :class="{'licence-style': formation.titre === 'Licence Sciences pour la Santé'}"
        >
          <!-- Titre de la formation -->
          <div
            class="formation-header"
            :class="{ 'baccalaureat-style': formation.titre === 'Baccalauréat Scientifique' }"
          >
            <h4>
              <i class="fas fa-graduation-cap"></i>
              <span>{{ formation.annees }}</span> : <span>{{ formation.titre }}</span>
            </h4>
          </div>
  
          <!-- Contenu de la formation -->
          <div class="formation-content">
            <p class="etablissement">
              <i class="fas fa-university"></i> <strong>{{ formation.etablissement }}</strong>
            </p>
  
            <!-- Liste des détails -->
            <ul class="details-list">
              <li v-for="detail in formation.details" :key="detail">
                <span class="icon">🎓</span> {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useFormationsStore } from '../stores/formationsStore';
  import { storeToRefs } from 'pinia';
  
  export default {
    setup() {
      const formationStore = useFormationsStore();
      const { formations } = storeToRefs(formationStore);
      return { formations };
    }
  };
  </script>
  
  <style scoped>
  /* --- Section globale --- */
  .experiences {
    margin-top: 5px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    background: linear-gradient(135deg, #f3f4f6, #ffffff);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* --- Titre principal --- */
  h2 {
    color: #2c3e50;
    font-size: 30px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  
  h2 i {
    margin-right: 10px;
    font-size: 28px;
    color: #4a90e2;
  }
  
  /* --- Grille des formations --- */
  .formation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 25px;
  }
  
  /* --- Carte de chaque formation --- */
  .formation-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .formation-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* --- En-tête de la formation --- */
  .formation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  /* --- Style spécifique pour le Baccalauréat Scientifique --- */
  .baccalaureat-style {
    justify-content: flex-start;
    gap: 10px; /* Réduction de l'espacement */
  }
  
  /* --- Style spécifique pour Licence Sciences pour la Santé --- */
  .licence-style .formation-content .etablissement {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  /* --- Titre de la formation --- */
  h4 {
    font-size: 20px;
    color: #34495e;
    font-weight: 600;
  }
  
  h4 i {
    margin-right: 8px;
    font-size: 24px;
    color: #4a90e2;
  }
  
  /* --- Contenu de la formation --- */
  .formation-content p {
    color: #555;
    font-size: 16px;
    margin: 5px 0 15px;
  }
  
  /* --- Icône d'établissement --- */
  .etablissement i {
    margin-right: 8px;
    color: #2c3e50;
    font-size: 18px;
  }
  
  /* --- Liste des détails --- */
  .details-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .details-list li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #555;
    font-size: 15px;
  }
  
  .details-list .icon {
    margin-right: 8px;
    font-size: 18px;
  }
  
  /* --- Responsive Design --- */
  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  
    .formation-card {
      padding: 15px;
    }
  
    .formation-header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    h4 {
      font-size: 18px;
    }
  
    .formation-content p,
    .details-list li {
      font-size: 14px;
    }
  }
  </style>
  