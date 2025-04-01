// Sélectionner les éléments DOM
const dataElement = document.getElementById('resultat');
const generateButton = document.getElementById('generateButton');

// Fonction pour appeler l'API de blagues en français
async function fetchJoke() {
    try {
        const response = await fetch('https://api.blablagues.net/?lang=fr');
        if (!response.ok) {
            throw new Error('Problème avec la récupération des blagues');
        }

        const data = await response.json();
        const joke = data.joke.text; // La blague récupérée

        // Afficher la blague dans l'élément #resultat
        dataElement.innerHTML = `<strong>Blague :</strong> ${joke}`;
    } catch (error) {
        dataElement.textContent = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        console.error('Erreur:', error);
    }
}

// Fonction pour appeler l'API de citations en français
async function fetchQuote() {
    try {
        // API de citations en français
        const response = await fetch('https://api.hypo-api.vercel.app/quote/random');
        
        if (!response.ok) {
            throw new Error('Problème avec la récupération des citations');
        }

        const data = await response.json();
        const quote = data.quote; // Citation récupérée

        // Afficher la citation dans l'élément #resultat
        dataElement.innerHTML = `<strong>Citation :</strong> ${quote}`;
    } catch (error) {
        dataElement.textContent = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        console.error('Erreur:', error);
    }
}

// Ajouter un événement au bouton pour générer une blague ou une citation
generateButton.addEventListener('click', () => {
    const randomChoice = Math.random() > 0.5 ? fetchJoke() : fetchQuote(); // Choisir aléatoirement une blague ou une citation
});
