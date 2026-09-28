const prompt = require('prompt-sync')();
let Choix= 0
do{
console.log("\n================ MENU PRINCIPAL ================");
        console.log("1.Ajouter un nouveau candidat");
        console.log("2.Ajouter plusieurs candidats à la fois ");
        console.log("3.Afficher la liste des candidats");
        console.log("4.Voter pour un candidat");
        console.log("5.Modifier les informations d'un candidat ");
        console.log("6.Supprimer un candidat");
        console.log("7.Rechercher des candidats ");
        console.log("8.Statistiques de l'élection ")
        console.log("0.Quitter");
        console.log("=========================================");

        Choix = prompt("Choisissez une option : ");

        switch (Choix) {
            case '1':
                ajouterCandidat();
                break;
            case '2':
                ajouterPlusiersCan();
                break;
            case '3':
                afficherListeCan();
                break;
            case '4':
                voterCandidat();
                break;
            case '5':
                modifierInfo();
                break;
            case '6':
                supprimerCandidat();
                break;
            case '7':
               rechercherCan();
                break;
            case '8':
                statistiques();
                break;
            case '0':
                console.log("Au revoir !");
                break;
            default:
                console.log("Option invalide, veuillez réessayer.");
        }
}while(Choix!=="0")