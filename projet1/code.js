// Jeu des pays

// Code Javascript executé après le chargement du document HTML (pour éviter les incohérences HTML/JS)
window.onload = function() {
    // Ecriture du titre
    document.getElementById("titre").innerHTML = '<p>Jeu des pays-stan</p>';

    // Tableau des pays
    tableauPays = new Array();
    tableauPays[1] = 'Azerbaïdjan';
    tableauPays[2] = 'Turkménistan';
    tableauPays[3] = 'Ouzbékistan';
    tableauPays[4] = 'Afganistan';
    tableauPays[5] = 'Pakistan';
    tableauPays[6] = 'Tadjikistan';
    tableauPays[7] = 'Kirghizistan';

    // Crée dynamiquement les listes de pays dans le docuement HTML
    for(var indexListe=1 ; indexListe<=tableauPays.length - 1 ; indexListe++) {
        codeListe  = "    <!-- Liste n°" + indexListe + " -->";
        codeListe += "    <span id=\"numero" + indexListe + "\">" + indexListe + "</span> - ";
        codeListe += "    <select name=\"liste" + indexListe + "\">";
        codeListe += "        <option value=\"\">Choisir...</option>";
        codeListe += "        <option value=\"Afganistan\">Afganistan</option>";
        codeListe += "        <option value=\"Azerbaïdjan\">Azerbaïdjan</option>";
        codeListe += "        <option value=\"Kirghizistan\">Kirghizistan</option>";
        codeListe += "        <option value=\"Pakistan\">Pakistan</option>";
        codeListe += "        <option value=\"Tadjikistan\">Tadjikistan</option>";
        codeListe += "        <option value=\"Turkménistan\">Turkménistan</option>";
        codeListe += "        <option value=\"Ouzbékistan\">Ouzbékistan</option>";
        codeListe += "    </select>";
        codeListe += "    <br>";

        document.forms["listes"].innerHTML += codeListe;
    }
}

// Fonction valider
function fonctionValider() {
    // boucle sur les listes
    for(var i=1 ; i<=7 ; i++) {
        // Récupération de l'index, puis de la valeur choisie
        var indexChoisi = document.forms["listes"].elements["liste"+i].selectedIndex;
        var paysChoisi = document.forms["listes"].elements["liste"+i].options[indexChoisi].value;

        // Teste si la liste i affiche le bon pays
        if(paysChoisi == tableauPays[i]) {
            // Changement de style de l'élement numero i
            //document.getElementById("numero"+i).style.backgroundColor='#0066CC';
            document.getElementById("numero"+i).className='OK';
        } else {
            //document.getElementById("numero"+i).style.backgroundColor='#FFFFFF';
            document.getElementById("numero"+i).className='NOK';
        }
    }
}

// Fonction reset
function fonctionReset() {
    // Boucle sur les listes
    for(var i=1 ; i<=7 ; i++) {
        // Affichage de la première valeur
        document.forms["listes"].elements["liste"+i].selectedIndex = 0;
        //document.getElementById("numero"+i).style.backgroundColor='#FFFFFF';
        document.getElementById("numero"+i).className='';
    }
}
