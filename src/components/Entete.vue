<template>
    <nav class="menu">
      <ul>
        <li><router-link to="/">Présentation</router-link></li>
        <li><router-link to="/competences">Compétences</router-link></li>
        <li><router-link to="/formations">Formations</router-link></li>
        <li><router-link to="/experience">Expériences</router-link></li>
        <li><router-link to="/activites-et-references">Activités & Références</router-link></li>
        <li><router-link to="/heure">Heure actuelle</router-link></li>
      </ul>
    </nav>
</template>

  <style scoped>
  .menu {
    background-color: #007bff;
    padding: 15px;
    text-align: center;
    border-radius: 10px 10px 0 0;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  
  .menu li {
    display: inline;
    margin-inline: 20px;
  }
  
  .menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
  
  .menu a:hover {
    text-decoration: underline;
  }
  </style>
  