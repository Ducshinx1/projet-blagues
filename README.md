# projet-blagues

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9; /* Fond clair pour un look moderne */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Occupe toute la hauteur de la page */
    color: #333; /* Texte sombre pour la lisibilité */
    transition: background-color 0.5s ease; /* Transition douce lors des changements */
}

.container {
    text-align: center;
    background-color: #ffffff; /* Fond blanc pour la boîte de contenu */
    padding: 30px;
    border-radius: 15px; /* Coins arrondis */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Ombre subtile */
    width: 100%;
    max-width: 600px; /* Limiter la largeur à 600px */
    animation: fadeIn 1.5s ease-in-out; /* Animation d'apparition */
}

/* Animation d'apparition du conteneur */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

h1 {
    color: #4CAF50; /* Titre en vert */
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: bold;
    animation: slideIn 1s ease-out; /* Animation du titre */
}

/* Animation du titre */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.resultat {
    font-size: 1.5em;
    margin: 20px 0;
    color: #555; /* Couleur de texte gris clair */
    padding: 15px;
    border-radius: 10px;
    background-color: #f9f9f9; /* Fond clair pour la zone de texte */
    border: 1px solid #ddd; /* Bordure fine autour de la zone */
    min-height: 100px;
    opacity: 0;
    animation: fadeInResult 1s ease forwards; /* Animation pour l'affichage du texte */
}

/* Animation du texte de résultat */
@keyframes fadeInResult {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

button {
    padding: 15px 30px;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #4CAF50; /* Vert */
    color: white;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Transition fluide */
    width: 100%;
    max-width: 250px; /* Largeur du bouton limité à 250px */
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1);
}

button:hover {
    background-color: #45a049; /* Couleur plus foncée au survol */
    transform: scale(1.1); /* Agrandissement léger du bouton au survol */
}

button:active {
    transform: scale(1); /* Réduit l'agrandissement au clic */
}

/* Responsivité - Pour les petits écrans */
@media (max-width: 600px) {
    h1 {
        font-size: 2em; /* Réduit la taille du titre */
    }

    .container {
        padding: 20px; /* Réduit le padding pour les petits écrans */
        width: 90%; /* La largeur devient 90% de l'écran */
        max-width: 100%;
    }

    button {
        max-width: 100%; /* Le bouton prend toute la largeur disponible */
    }
}

/* styles.css */

/* Importation de la police "Poppins" depuis Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif; /* Nouvelle police */
    background-color: #e0f7fa; /* Fond bleu clair */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Occupe toute la hauteur de la page */
    color: #333; /* Texte sombre pour la lisibilité */
    transition: background-color 0.5s ease; /* Transition douce lors des changements */
}

.container {
    text-align: center;
    background-color: #ffffff; /* Fond blanc pour la boîte de contenu */
    padding: 30px;
    border-radius: 15px; /* Coins arrondis */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Ombre subtile */
    width: 100%;
    max-width: 600px; /* Limiter la largeur à 600px */
    animation: fadeIn 1.5s ease-in-out; /* Animation d'apparition */
}

/* Animation d'apparition du conteneur */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

h1 {
    color: #00695c; /* Titre en vert foncé */
    font-size: 2.5em;
    margin-bottom: 20px;
    font-weight: 600; /* Poids de la police plus épais */
    animation: slideIn 1s ease-out; /* Animation du titre */
}

/* Animation du titre */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.resultat {
    font-size: 1.5em;
    margin: 20px 0;
    color: #00796b; /* Texte de résultat en vert moyen */
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff; /* Fond blanc pour la zone de texte */
    border: 1px solid #004d40; /* Bordure vert foncé */
    min-height: 100px;
    opacity: 0;
    animation: fadeInResult 1s ease forwards; /* Animation pour l'affichage du texte */
}

/* Animation du texte de résultat */
@keyframes fadeInResult {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

button {
    padding: 15px 30px;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #00796b; /* Bouton en vert */
    color: white;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Transition fluide */
    width: 100%;
    max-width: 250px; /* Largeur du bouton limité à 250px */
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1);
}

button:hover {
    background-color: #004d40; /* Couleur plus foncée au survol */
    transform: scale(1.1); /* Agrandissement léger du bouton au survol */
}





JSSSSSSS
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


