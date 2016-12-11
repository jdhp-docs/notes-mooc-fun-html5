$(function() {
    init();
});

function afficheAccueil() {
    ecranCourant = "accueil";
    $("div#accueil").show();
    $("div#jeu").hide();
    $("div#bilan").hide();
}

function afficheJeu() {
    ecranCourant = "jeu";
    $("div#accueil").hide();
    $("div#jeu").show();
    $("div#bilan").hide();

    afficheConsigne();
}

function afficheBilan() {
    ecranCourant = "bilan";
    $("div#accueil").hide();
    $("div#jeu").hide();
    $("div#bilan").show();
}

function afficheConsigne() {
    var id_couleur = listeNiveaux[niveauCourant][0];
    var id_taille = listeNiveaux[niveauCourant][1];

    var couleur = listeCouleurs[id_couleur][0];
    var taille = listeTailles[id_taille][1];

    $("div#jeu div#consigne").text("Cliquer sur les balles de couleur " + couleur + " et de taille " + taille);
}

function init() {
    
    // STRUCTURE //////////////////////////////////////////////////////////////
    
    // Écran d'accueil
    $("div#accueil div#titre").text("Clic sur les balles");
    $("div#accueil div#image").html('<img src="./images/image.png" alt="Image du jeu">');
    $("div#accueil div#texte").text("Dans chacun des niveaux de jeu, cliquer sur les balles correspondant à la consigne affichée avant qu'elles touchent les bas du cadre !");
    $("div#accueil div#conteneurBoutonJeu").html('<input type="submit" name="boutonJeu" id="boutonJeu" value="Jouer" onclick="afficheJeu()" />');
    
    // Écran de jeu
    $("div#jeu div#consigne").text("");
    $("div#jeu div#animation").html('<canvas id="canvas" width="640" height="480"></canvas>');
    $("div#jeu div#conteneurBoutonQuitter").html('<input type="submit" name="boutonQuitter" id="boutonQuitter" value="Quitter" onclick="afficheAccueil()" />');
    
    // Écran de bilan
    $("div#bilan div#recap").text("");
    $("div#bilan div#conteneurBoutonAccueil").html('<input type="submit" name="boutonAccueil" id="boutonAccueil" value="Accueil" onclick="afficheAccueil()" />');
    $("div#bilan div#conteneurBoutonRejouer").html('<input type="submit" name="boutonRejouer" id="boutonRejouer" value="Rejouer" onclick="afficheJeu()" />');
    
    // Pied de page
    $("footer").text("Mooc HTML5 - 12/2016");
    
    // DONNÉES ////////////////////////////////////////////////////////////////
    
    // id couleur à sélectionner, id taille à sélectionner
    listeNiveaux = [[0, 0],
                    [1, 0],
                    [1, 2]];

    // id niveau, id couleur, id taille
    listeBalles = [[0, 0, 0],
                   [0, 1, 1],
                   [0, 2, 2],
                   [1, 2, 2],
                   [1, 1, 0]];

    // rayon, label
    listeTailles = [[ 5, "petite"],
                    [10, "moyenne"],
                    [20, "grande"]];

    // label, code couleur
    listeCouleurs = [["rouge", "#ff0000"],
                     ["vert",  "#008000"],
                     ["bleu",  "#0000ff"]];
 
    // VARIABLES //////////////////////////////////////////////////////////////
    
    tempsJeu = 10;
    niveauCourant = 0;
    ecranCourant = "accueil";
    
    // GESTIONNAIRES //////////////////////////////////////////////////////////

    // RÈGLES /////////////////////////////////////////////////////////////////
    
    // LANCEMENT //////////////////////////////////////////////////////////////
    
    afficheAccueil();
}
