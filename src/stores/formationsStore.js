// stores/formationsStore.js
import { defineStore } from 'pinia'; //Pour définir un store

export const useFormationsStore = defineStore('formations', {
  state: () => ({ //State permet de définir les données du store
    formations: [
      {
        id: 1,
        annees: '2021 - 2025',
        titre: 'Licence Sciences pour la Santé, e-Santé',
        etablissement: 'Université Claude Bernard Lyon 1, Lyon France',
        details: ['Parcours : Objets connectés']
      },
      {
        id: 2,
        annees: '2018 - 2020',
        titre: 'Baccalauréat Scientifique Spécialité SPH',
        etablissement: 'Lycée Blaise Pascal, Libreville Gabon',
        details: ['Spécialisation : Physique-Chimie | Mention Bien']
      }
    ]
  }),

  getters: { //Getters permet d'accéder à la liste des formations de manière réactive
    getAllFormations: (state) => state.formations
  }
});
