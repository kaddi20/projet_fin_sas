const prompt = require('prompt-sync')();
const candidats = [];
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

//Ajouter un nouveau candidat
function ajouterCandidat() {
    let cin = prompt("Donner le CIN :")
    let trouve = false;
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin===cin){
            trouve =true ;
            break;
        }
    }
    if(trouve){
        console.log("ce cin est existe déjà");
    }else{
     let nom = prompt("Donner le Nom :")
     let prenom = prompt("donner le prenom: ")
     let partiPolitique = prompt("Donner le parti politique :")
     if( partiPolitique === ""){
        partiPolitique = "independant"
     }
     let age = Number(prompt("Donner l'âge :"))
     let candidat ={
        cin : cin,
        nom : nom,
        prenom : prenom,
        partiPolitique : partiPolitique,
        age : age,
        electeurs: [] 
    };
    candidats.push(candidat);
    console.log("Candidat ajouté avec succès");   
    }

}
// Ajouter plusieurs candidats
function ajouterPlusiersCan(){
    const plus =Number(prompt("Entrer combien candidats te veux ajouter: "));
    for(let i=0;i<plus;i++){
        ajouterCandidat()
    }3
}

