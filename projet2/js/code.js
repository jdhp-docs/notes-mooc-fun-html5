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

    tempsJeu = 0;
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

function regles() {
    if(ecranCourant == "jeu") {
        animer();
    }
}

// Fonction de dessin
function animer() {
    var canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');

        tempsJeu++;

        // Efface tout le canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dessine les balles
        dessineBalle(ctx, 0);
        dessineBalle(ctx, 1);
    } else {
        alert("Canvas non supporté par ce navigateur");
    }
}

function dessineBalle(ctx, id_balle) {
    // Sauvegarde le contexte
    ctx.save();

    id_couleur = listeBalles[id_balle][1];
    id_taille =  listeBalles[id_balle][2];
    position_x = listeBalles[id_balle][3];
    vitesse =    listeBalles[id_balle][4];

    couleur = listeCouleurs[id_couleur][1];
    rayon = listeTailles[id_taille][0];

    // Debug
    console.log("Balle " + id_balle + " position:" + position_x + " rayon:" + rayon + " couleur:" + couleur + " vitesse:" + vitesse);

    // Translation du contexte
    ctx.translate(position_x, tempsJeu * vitesse);

    // Dessine la balle
    ctx.beginPath();
    ctx.arc(0, 0, rayon, 0, 2 * Math.PI, false);
    ctx.fillStyle = couleur;
    ctx.fill();

    // Restaure le contexte
    ctx.restore();
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

    // id niveau, id couleur, id taille, position x, vitesse
    listeBalles = [[0, 0, 0, 100, 2],
                   [0, 1, 1,  50, 1],
                   [0, 2, 2,  20, 1],
                   [1, 2, 2, 150, 1],
                   [1, 1, 0, 200, 1]];

    // rayon, label
    listeTailles = [[ 5, "petite"],
                    [10, "moyenne"],
                    [20, "grande"]];

    // label, code couleur
    listeCouleurs = [["rouge", "#ff0000"],
                     ["vert",  "#008000"],
                     ["bleu",  "#0000ff"]];
 
    // VARIABLES //////////////////////////////////////////////////////////////
    
    tempsJeu = 0;
    niveauCourant = 0;
    ecranCourant = "accueil";
    
    // GESTIONNAIRES //////////////////////////////////////////////////////////
    
    // ils sont directement définis dans les éléments "input" (boutons)...

    // RÈGLES /////////////////////////////////////////////////////////////////
    
    setInterval(regles, 100);  // appel la fonction "regles()" toutes les 100ms
    
    // LANCEMENT //////////////////////////////////////////////////////////////
    
    afficheAccueil();
}
