// Sélectionner les éléments DOM
 const dataElement = document.getElementById('data');
 const loadButton = document.getElementById('loadButton');
 
 // Fonction pour appeler l'API
 async function fetchDataFromAPI() {
     try {
         // Faire une requête à l'API (ici, une API de blagues de papa)
         const response = await fetch('https://icanhazdadjoke.com/', {
             headers: {
                 'Accept': 'application/json' // On veut une réponse en JSON
             }
         });
 
         if (!response.ok) {
             throw new Error('Problème avec la récupération des données');
         }
 
         const data = await response.json(); // Convertir la réponse en JSON
 
         // Mettre à jour le contenu avec la blague obtenue
         dataElement.textContent = data.joke;
     } catch (error) {
         // Gérer les erreurs en cas de problème de connexion ou d'API
         dataElement.textContent = 'Une erreur est survenue. Veuillez réessayer plus tard.';
         console.error('Erreur:', error);
     }
 }
 
 // Ajouter un événement au bouton pour appeler la fonction quand il est cliqué
 loadButton.addEventListener('click', fetchDataFromAPI);
 

yarn add blagues-api


    const BlaguesAPI = require('blagues-api');


    const blagues = new BlaguesAPI('VOTRE_TOKEN_ICI');


    const blague = await blagues.random();


    const blague = await blagues.random({


        disallow: [


          blagues.categories.DARK,


          blagues.categories.LIMIT


        ]


      });


      const blague = await blagues.randomCategorized(


  blagues.categories.DARK


);


const blague = await blagues.fromId(50);


const blague = await blagues.count();

Répondre
