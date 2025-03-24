<template>
  <div class="cv-container">
    <section id="compétences" class="competences">
      <h2><i class="fas fa-cogs title-icon"></i> Compétences</h2>

      <!-- Grille pour compétences professionnelles et techniques -->
      <div class="competences-grid">
        <div>
          <h3 @click="toggleSection('pro')" class="clickable">
            <i class="fas fa-briefcase"></i> Compétences professionnelles
            <i :class="['fas', isProOpen ? 'fa-chevron-up' : 'fa-chevron-down']" class="toggle-icon"></i>
          </h3>
          <div v-show="isProOpen">
            <p>• Règlementation UE 2017/745</p>
            <p>• ISO 13485 des DM</p>
            <p>• Revue du dossier technique</p>
            <p>• Maîtrise des outils analytiques</p>
          </div>
        </div>

        <div>
          <h3 @click="toggleSection('tech')" class="clickable">
            <i class="fas fa-laptop-code"></i> Compétences techniques
            <i :class="['fas', isTechOpen ? 'fa-chevron-up' : 'fa-chevron-down']" class="toggle-icon"></i>
          </h3>
          <div v-show="isTechOpen">
            <p>• Logiciels : Pack Adobe | Pack Office</p>
            <p>• Langages : MySQL | HTML | CSS</p>
            <p>• Certification PIX</p>
          </div>
        </div>
      </div>

      <!-- Grille pour Soft Skills et Langues -->
      <div class="skills-languages-grid">
        <div>
          <h3 @click="toggleSection('soft')" class="clickable">
            <i class="fas fa-users"></i> Soft skills
            <i :class="['fas', isSoftOpen ? 'fa-chevron-up' : 'fa-chevron-down']" class="toggle-icon"></i>
          </h3>
          <div v-show="isSoftOpen">
            <p>• Analyse de données</p>
            <p>• Gestion de projet et de risque</p>
            <p>• Organisation | Travail d'équipe | Réactivité</p>
            <p>• Autonomie | Adaptabilité | Communication</p>
          </div>
        </div>

        <div>
          <h3 @click="toggleSection('lang')" class="clickable">
            <i class="fas fa-language"></i> Langues
            <i :class="['fas', isLangOpen ? 'fa-chevron-up' : 'fa-chevron-down']" class="toggle-icon"></i>
          </h3>
          <div v-show="isLangOpen">
            <p>• Français : Langue maternelle</p>
            <p>• Arabe : Langue maternelle</p>
            <p>• Anglais : Niveau B1</p>
            <p>• Espagnol : Niveau A2</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isProOpen: false,
      isTechOpen: false,
      isSoftOpen: false,
      isLangOpen: false,
    };
  },
  methods: {
    toggleSection(section) {
      this[`is${section.charAt(0).toUpperCase() + section.slice(1)}Open`] = !this[`is${section.charAt(0).toUpperCase() + section.slice(1)}Open`];
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.cv-container {
  max-width: 800px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* Sections */
.competences {
  margin-top: 15px;
}

/* Grille pour les compétences */
.competences-grid, .skills-languages-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
}

.competences-grid div, .skills-languages-grid div {
  text-align: left;
  background-color: #f4f7fb;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.competences-grid div:hover, .skills-languages-grid div:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

/* Texte des compétences */
p {
  margin: 5px 0;
  font-size: 0.95em;
  line-height: 1.4;
  color: #555;
}

/* Titre principal */
h2 {
  color: #2c3e50;
  font-size: 1.6em;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Icône du titre */
h2 .title-icon {
  margin-right: 8px;
  font-size: 1.4em;
  color: #007bff;
}

/* Sous-titres */
h3 {
  color: #2c3e50;
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Pour aligner le texte et l'icône */
  cursor: pointer;
}

/* Icônes dans les sous-titres */
i {
  margin-right: 8px;
  font-size: 1.2em;
  color: #007bff;
}

/* Icône de dépliage */
.toggle-icon {
  margin-left: auto; /* Pour pousser l'icône à droite */
}

/* Effet clickable */
.clickable {
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .competences-grid, .skills-languages-grid {
    grid-template-columns: 1fr;
  }
  h2 {
    font-size: 1.4em;
  }
}
</style>
