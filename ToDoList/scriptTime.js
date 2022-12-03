//Gestion de la date et l'heure

//Affichage de la date
function showDate() {
    //Récupération de la date
    const date = new Date();
    //Mise en forme de la date
    const optionsDate = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }

    //Créatio de la chaine à afficher au format français
    const dateFormate = new Intl.DateTimeFormat("fr-FR", optionsDate).format(date);

    //Récupération de l'élément cible
    const affichageDate = document.getElementById("date");
    //Modifiaction du contenu de l'élément avec la date
    affichageDate.textContent = dateFormate;
}
showDate();

//Affichage de l'heure
function showHour() {
    //Récupération de l'heure
    const heure = new Date();
    //Mise en forme de l'heure avec 2 chiffres
    const optionsHeure = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }

    //Création de la chaine à afficher avec les options des 2 chiffres et au format Français
    const heureFormate = new Intl.DateTimeFormat("fr-FR", optionsHeure).format(heure);
    //Récupération de l'élément cible
    const affichageHeure = document.getElementById("heure");
    //Modifiaction du contenu de l'élément avec l'heure'
    affichageHeure.textContent = heureFormate;

    //Si l'heure passe à minuit, on appelle la fonction showDate() pour mettre à jour la date
    if (heure === "00-00-00") {
        showDate();
    }
}
showHour();
//Mise à jour de l'affichage de l'heure toutes les secondes
const heure = setInterval(showHour, 1000);