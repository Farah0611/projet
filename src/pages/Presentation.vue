<template>
  <div class="cv-container">
    <!-- Section Présentation -->
    <section id="presentation" class="about">
      <h2 class="small-title">À propos de moi</h2>
      <p> Actuellement en troisième année de Licence Sciences pour la Santé, j’ai suivi de nombreux enseignements sur les dispositifs médicaux, ce qui a fait naître mon envie d’intégrer un master en Ingénierie de la Santé, en Génie Biomédical ou une école d'ingénieurs.</p>

      <p>Les stages que j’ai réalisés au cours des années précédentes m’ont permis de renforcer mon projet professionnel et de me familiariser avec le monde du travail, tout en acquérant des compétences, notamment en ce qui concerne le système qualité et la règlementation des dispositifs médicaux.</p>
    </section>

    <!-- Section Informations personnelles -->
    <section id="information" class="informations">
      <h2 class="small-title">
        <span class="title-icon">📄</span> Informations personnelles
      </h2>
      <div class="info-columns">
        <!-- Colonne 1 -->
        <div class="info-item">
          <p><span class="icon">📍</span> Lyon, France</p>
          <p><span class="icon">🗺️</span> Libanaise</p>
          <p><span class="icon">📅</span> 06/11/2002 à Libreville, GABON</p>
          <p><span class="icon">🚗</span> Permis de conduire : Catégorie B</p>
        </div>

        <!-- Colonne 2 -->
        <div class="info-item">
          <p><span class="icon">📞</span> +33 6 24 13 53 59</p>
          <p>
            <span class="icon">📧</span>
            <a href="mailto:farah.awada@yahoo.com">farah.awada@yahoo.com</a>
          </p>
          <p>
            <span class="icon">📧</span>
            <a href="mailto:farah.awada@etu.univ-lyon1.fr">farah.awada@etu.univ-lyon1.fr</a>
          </p>
          <!-- Lien LinkedIn ajusté -->
          <p class="linkedin">
            <span class="icon">🔗</span>
            <a href="https://linkedin.com/in/farah-awada-800170209/" target="_blank">
              linkedin.com/in/farah-awada-800170209/
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Conteneur principal */
.cv-container {
  max-width: 800px; /* Taille réduite */
  margin: auto;
  font-family: 'Roboto', sans-serif;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Sections */
.about, .informations {
  margin-top: 30px;
}

/* Titres réduits avec icônes */
.small-title {
  font-size: 1.6em; /* Taille réduite */
  display: flex;
  align-items: center; /* Alignement vertical */
  justify-content: center; /* Centrage horizontal */
}

/* Icône des titres */
.title-icon {
  margin-right: 10px; /* Espace entre l'icône et le texte */
}

/* Informations personnelles : disposition en 2 colonnes */
.info-columns {
  display: flex; /* Utilise Flexbox pour aligner les colonnes */
  justify-content: space-between; /* Répartit l'espace */
  gap: 20px; /* Espacement entre les colonnes */
  margin-top: 20px;
}

/* Chaque colonne d'informations */
.info-item {
  flex: 1; /* Chaque colonne prend la même largeur */
  background: linear-gradient(145deg, #f3f4f6, #ffffff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

/* Texte des informations */
.info-item p {
  margin: 8px 0;
  font-size: 1.1em;
  color: #555;
  display: flex; /* Assure l'alignement des icônes avec le texte */
  align-items: center;
  line-height: 1.5;
}

/* Icônes */
.icon {
  font-size: 1.3em;
  margin-right: 10px; /* Uniformise l'espacement */
}

/* Ajustement spécifique pour le lien LinkedIn */
.linkedin {
  display: flex; 
  align-items: center; /* Alignement vertical parfait */
}

/* Liens */
a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  text-decoration: underline;
  color: #0056b3;
}

/* Texte général */
p {
  color: #555;
  font-size: 1.1em;
  margin: 8px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Passe en une seule colonne sur les petits écrans */
  .info-columns {
    flex-direction: column; /* Empile les colonnes verticalement */
    gap: 20px; /* Ajuste l'espacement */
  }

  .small-title {
    font-size: 1.4em; /* Réduction supplémentaire */
  }

  .info-item {
    padding: 15px;
  }
}
</style>
