body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(to right, #6a11cb, #2575fc); /* Dégradé coloré */
    color: #fff;
}

/* Conteneur principal */
.container {
    text-align: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    transition: transform 0.3s ease;
}

.container:hover {
    transform: translateY(-10px); /* Effet de déplacement au survol */
}

/* Titre principal */
h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Le bouton générer */
button {
    padding: 15px 30px;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #2575fc;
    color: #fff;
    border: none;
    border-radius: 25px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    width: 60%;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #6a11cb;
    transform: scale(1.1);
}

/* Style du paragraphe pour afficher la blague */
p {
    font-size: 1.5em;
    color: #333;
    margin-top: 20px;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

/* Animation pour faire apparaître la blague */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive : s'assurer que l'interface soit agréable sur mobile */
@media (max-width: 600px) {
    h1 {
        font-size: 2em;
    }

    button {
        width: 80%; /* Le bouton prend plus de place sur mobile */
    }

    .container {
        padding: 20px;
    }
}

