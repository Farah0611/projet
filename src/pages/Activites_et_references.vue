<template>
  <div class="cv-container">
    <!-- Section Activités & Intérêts -->
    <section id="Activites" class="Activites">
      <h2><i class="fas fa-heart"></i> ACTIVITÉS ET INTÉRÊTS</h2>
      <div class="activites-container">
        <div class="activity-card">
          <i class="fas fa-users"></i>
          <p>Membre actif de l’association Sci’Santé-Lyon</p>
        </div>
        <div class="activity-card">
          <i class="fas fa-dumbbell"></i>
          <p>Pratique régulière en salle de sport</p>
        </div>
        <div class="activity-card">
          <i class="fas fa-globe"></i>
          <p>Découverte de plus de 15 pays</p>
        </div>
        <div class="activity-card">
          <i class="fas fa-book"></i>
          <p>Passionnée de littérature contemporaine</p>
        </div>
      </div>
    </section>

    <!-- Section Références -->
    <section id="References" class="References">
      <h2><i class="fas fa-address-book"></i> RÉFÉRENCES</h2>
      <div class="reference-container">
        <div class="reference-item">
          <div class="reference-text">
            <h3>Dr Rana DBOUK</h3>
            <p>Médecin généraliste, Cabinet médical</p>
            <p>Téléphone : +33 6 23 45 67 89</p>
            <p>Email : <a href="mailto:rana.dbouk@gmail.com">rana.dbouk@gmail.com</a></p>
          </div>
        </div>

        <div class="reference-item">
          <div class="reference-text">
            <h3>Claire GAILLARD</h3>
            <p>Maître de conférence, MATEIS</p>
            <p>Téléphone : +33 6 98 76 54 32</p>
            <p>Email : <a href="mailto:claire.gaillard@gmail.com">claire.gaillard@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Aucun changement dans la partie script
</script>

<style scoped>
/* Conteneur principal */
.cv-container {
  max-width: 800px; /* Largeur du CV */
  margin: auto;
  font-family: 'Roboto', sans-serif;
  padding: 25px;
  background: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Section générale */
h2 {
  color: #2c3e50;
  font-size: 30px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 i {
  margin-right: 10px;
  font-size: 28px;
  color: #007bff;
}

/* Section Activités & Intérêts */
.activites-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes côte à côte */
  gap: 25px;
  justify-items: center; /* Centrer les éléments horizontalement */
  max-width: 800px; /* Limiter la largeur de la section */
  margin: auto; /* Centrer la grille */
  margin-top: 20px;
}

.activity-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center; /* Centrer le contenu horizontalement et verticalement */
  width: 100%; /* Largeur maximale pour chaque carte */
  min-width: 280px; /* Largeur minimale pour chaque carte */
  max-width: 320px; /* Largeur maximale pour chaque carte */
  text-align: center; /* Aligner le texte au centre */
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.activity-card i {
  margin-right: 15px; /* Espacement entre l'icône et le texte */
  margin-bottom: 15px; /* Espacement en bas de l'icône */
  font-size: 32px; /* Taille plus grande de l'icône */
  color: #007bff;
}

.activity-card p {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 10px;
  text-align: center; /* Aligner le texte au centre */
}

/* Section Références */
.References {
  margin-top: 40px;
}

.reference-container {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.reference-item {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.reference-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.reference-text {
  display: flex;
  flex-direction: column;
}

.reference-item h3 {
  font-size: 20px;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: 500;
}

.reference-item p {
  color: #7f8c8d;
  margin: 5px 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .activites-container {
    grid-template-columns: repeat(2, 1fr); /* Toujours 2 colonnes même sur petits écrans */
  }

  h2 {
    font-size: 26px;
  }

  .activity-card p {
    font-size: 14px;
  }

  .reference-container {
    flex-direction: column;
  }

  .reference-item {
    margin-bottom: 20px;
  }
}
</style>
