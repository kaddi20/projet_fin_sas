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
    }
}
//Afficher la liste des candidats
function afficherListeCan(){
    let Choix2=5
    do{
        console.log("\n================ MENU ================");
        console.log("1.Trier les candidats par nombre de votes ");
        console.log("2.Filtrer et afficher uniquement les candidats d'un parti politique spécifique");
        console.log("0.Retour au menu principal "); 
        console.log("=========================================");
        Choix2= prompt("Choisissez une option : ");

        switch (Choix2) {
            case '1':
                trierCandidats();
                break;
            case '2':
                conPartipolitique();
                break;
            case '0':
                break;
            default:
                console.log("Option invalide, veuillez réessayer.");
        }
    
    }while(Choix2!=="0");
}
 function trierCandidats(){
    for(let i=0;i<candidats.length;i++){
        for(let j=0;j<candidats.length-1-i;j++){
            if(candidats[j].electeurs.length < candidats[j+1].electeurs.length){
                let a = candidats[j];
                candidats[j] = candidats[j+1];
                candidats[j+1]=a
                    
            }
    
        }
    }
    for(let i=0;i<candidats.length;i++){
        console.log("CIN: "+ candidats[i].cin);
        console.log("Nom: "+ candidats[i].nom );
        console.log("prenom: "+ candidats[i].prenom);
        console.log("PartiPolitique: "+ candidats[i].partiPolitique);
        console.log("Age: "+ candidats[i].age);
        console.log("NombreVote: "+ candidats[i].electeurs.length);
        console.log("===================")    }  
 }
 function conPartipolitique(){
    let partiPolitique = prompt("Entrer le parti politique : ")
    let trouve = false;
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].partiPolitique === partiPolitique){
            trouve = true;  
            console.log("CIN: "+ candidats[i].cin);
            console.log("Nom: "+ candidats[i].nom );
            console.log("prenom: "+ candidats[i].prenom);
            console.log("PartiPolitique: "+ candidats[i].partiPolitique);
            console.log("Age: "+ candidats[i].age);
            console.log("NombreVote: "+ candidats[i].electeurs.length);
            console.log("=============");
        }
    } 
    if(!trouve){
       console.log("Auccun candidats")    
    }
}
 //Voter pour un candidats
 function voterCandidat(){
    let electeurCin = prompt("Saisir le CIN de l'electeur: ")
    let trouve = false;
    for(let i=0;i<candidats.length;i++){
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === electeurCin) {
                trouve = true;
                break;
            }
        }
    }
    if(trouve){
        console.log(" Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.")
    }
    else{
        let candidatCin = prompt("Saisir le CIN de candidat: ")
        for(let i=0;i<candidats.length;i++){
            if(candidats[i].cin ===candidatCin){
                candidats[i].electeurs.push(electeurCin)
                console.log("Votre vote est ajouté");
            }
            
        }
        
    }
 }
 //Modifier les informations d'un candidat
 function modifierInfo(){
  let rechercherCin =prompt("Entrer la CIN du condidat: ");
  let trouve = false;
  for(let i=0;i<candidats.length;i++){
    if(candidats[i].cin===rechercherCin){
      let nvPartiPolitique = prompt("Entrer le nouveau parti politique : ")
      let nvAge = Number(prompt("Entrer un Nouvel Age :"));
      candidats[i].partiPolitique = nvPartiPolitique;
      candidats[i].age = nvAge;
      trouve = true;
      break;
    }
  }
  if(trouve){
    console.log("Les informations ont été modifiées avec succès")
  }
  else{
    console.log("Auccun candidat trouvé avec cette CIN.")
  }
 }
  //Supprimer un candidat

 function supprimerCandidat() {

    let candidatCin = prompt("Saisir le CIN du candidat à supprimer : ");
    let nouveauCandidats = [];
    let trouve = false;

  for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === candidatCin) {
            trouve = true;
            
        } else {
            nouveauCandidats.push(candidats[i]);
        }
    }


  if (trouve) {
    candidats.length = 0;
        for(let i=0;i<nouveauCandidats.length;i++){
          candidats.push(nouveauCandidats[i])
        }
    console.log("Le candidat a été supprimé.");
  }

   else {
        console.log("Candidat introuvable.");
  }
 }
 // Rechercher des candidats
 function rechercherCan(){
    let nomCandidat = prompt("Saisir le nom du candidat : ");
    let trouve = false;
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].nom === nomCandidat) {
            trouve = true;
            console.log("CIN: "+ candidats[i].cin);
            console.log("Nom: "+ candidats[i].nom );
            console.log("prenom: "+ candidats[i].prenom);
            console.log("PartiPolitique: "+ candidats[i].partiPolitique);
            console.log("Age: "+ candidats[i].age);
            console.log("NombreVote: "+ candidats[i].electeurs.length);
        }
    }
    if(!trouve){
      console.log("Candidat introuvable.");
    }
 }
 //Statistiques de l'élection 
function statistiques(){
    let nombreTotalCan = 0;
    for(let i=0;i<candidats.length;i++){
        nombreTotalCan ++;
    }
    console.log("Nombre total de candidats :"+ nombreTotalCan + " Candidat");
    let nombreTotalVotes = 0;
    for(let i=0;i<candidats.length;i++){
        nombreTotalVotes+= candidats[i].electeurs.length;
    }
     console.log("Nombre total de votes :"+ nombreTotalVotes + " vote");
    //Afficher le Top 3 des candidats ayant le plus de votes.
    console.log("====le Top 3 des candidats====" )
    const topCandidat = []
    for(let i =0;i<candidats.length;i++){
        topCandidat.push(candidats[i])
    }
    for(let i=0; i<topCandidat.length-1;i++){
         for(let j=0;j<topCandidat.length-1-i;j++){
            if(topCandidat[j].electeurs.length < topCandidat[j+1].electeurs.length){
                let a = topCandidat[j];
                topCandidat[j] = topCandidat[j+1];
                topCandidat[j+1]=a
            }
        }
       
    }
     for(let i=0;i<3 && i<topCandidat.length;i++){
        console.log(topCandidat[i].nom + " : " + topCandidat[i].electeurs.length + " Vote")
}
    //Afficher le nombre de candidats par parti politique
    console.log("===============")
    const resultat={};
    for(let i=0;i<candidats.length;i++){
        let parti = candidats[i].partiPolitique;
        if(resultat[parti]=== undefined){
            resultat[parti]=1
        }
        else{
            resultat[parti]++;
        }
    }
    for(let cle in resultat){
        console.log(cle + ":"+ resultat[cle])
    }
}

