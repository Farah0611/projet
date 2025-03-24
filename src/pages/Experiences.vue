<script setup>
import { reactive } from 'vue';

// Utilisation de reactive() pour stocker les expériences professionnelles
const experiences = reactive([
  {
    titre: "Stage en entreprise",
    icon: "fas fa-search",
    entreprise: "CARDIAGS Care Diagnostic Systems, Lyon, France",
    periode: "Mars 2025 - Juin 2025",
    details: [
      "Assistance dans la mise en place d’un système qualité pour un dispositif médical selon l’ISO 13485",
      "Vérification de la conformité du dossier technique d’un dispositif médical selon le règlement européen 2017/745",
      " Vérification de la conformité règlementaire d’un DM",
      "Mémoire de stage et soutenance orale sur le sujet"
    ]
  },
  {
    titre: "Stage en pharmacie",
    icon: "fas fa-pills",
    entreprise: "Pharmacie d’Oloumi, Libreville, Gabon",
    periode: "Mai 2023 - Juin 2023",
    details: [
      "Observation et découverte du métier de pharmacien",
      "Analyse du fonctionnement d’une pharmacie",
      "Mémoire de stage et soutenance orale sur le sujet"
    ]
  },
  {
    titre: "Stage en médecine esthétique",
    icon: "fas fa-user-md",
    entreprise: "Cabinet Dr Rana Dbouk, Lyon, France",
    periode: "Mai 2022 - Juin 2022",
    details: [
      "Observation et analyse de la pratique en médecine esthétique",
      "Apprentissage du fonctionnement des dispositifs médicaux utilisés",
      "Mémoire de stage et soutenance orale sur le sujet"
    ]
  },
  {
    titre: "Stage de recherche",
    icon: "fas fa-search",
    entreprise: "Groupe I2B du laboratoire MATEIS, Lyon, France",
    periode: "Mai 2021 - Juin 2021",
    details: [
      "Recherche bibliographique sur les DM de l’activité physique",
      "Repérage des pathologies ciblées par les DM",
      "Mémoire de stage et soutenance orale sur le sujet"
    ]
  }
]);
</script>

<template>
  <section id="experience" class="experiences">
    <h2><i class="fas fa-briefcase"></i> EXPÉRIENCES PROFESSIONNELLES</h2>

    <div class="experience-grid">
      <!-- Boucle sur les expériences -->
      <div v-for="(exp, index) in experiences" :key="index" class="experience-container">
        <h4><i :class="exp.icon"></i> {{ exp.titre }}</h4>
        <div class="experience-content">
          <p><strong>{{ exp.entreprise }} | {{ exp.periode }}</strong></p>
          <ul>
            <li v-for="(detail, i) in exp.details" :key="i">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <button @click="experiences.push({
  titre: 'Nouvelle expérience',
  icon: 'fas fa-briefcase',
  entreprise: 'Nom de l\'entreprise',
  periode: 'Date de début - Date de fin',
  details: ['Découverte d\'un nouveau domaine', 'Projet de recherche', 'Présentation des résultats']
})">
  Ajouter une expérience
</button>
</template>

<style scoped>
/* Style global pour la section */
.experiences {
  margin-top: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Roboto', sans-serif;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}

/* Titre de la section */
h2 {
  color: #2c3e50;
  font-size: 26px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
}

h2 i {
  margin-right: 10px; /* Espacement entre l'icône et le titre */
  font-size: 28px;
  color: #3498db;
}

/* Grille : une seule colonne pour afficher les expériences */
.experience-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 10px;
}

/* Conteneur de chaque expérience */
.experience-container {
  background: #ffffff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Effet au survol des cartes */
.experience-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Titre des expériences avec icône */
h4 {
  font-size: 18px;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: 600;
}

h4 i {
  margin-right: 8px;
  font-size: 22px;
  color: #3498db;
}

/* Contenu des expériences */
.experience-content {
  text-align: left;
}

/* Informations générales */
p {
  color: #555;
  margin: 3px 0;
  font-size: 15px;
}

/* Liste des tâches */
ul {
  padding-left: 18px;
}

li {
  margin-bottom: 5px;
  line-height: 1.4;
  color: #555;
}

/* Séparateur entre chaque expérience */
.experience-container::after {
  content: '';
  display: block;
  margin-top: 15px;
  height: 1px;
  background-color: #e0e0e0;
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 22px;
  }

  .experience-container {
    padding: 10px;
  }

  p {
    font-size: 13px;
  }

  li {
    font-size: 13px;
  }
}
</style>
