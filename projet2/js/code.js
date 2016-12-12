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

    initDonnees();
    initVariables();

    afficheConsigne();

    tempsJeu = 0;
}

function afficheBilan() {
    ecranCourant = "bilan";
    $("div#accueil").hide();
    $("div#jeu").hide();
    $("div#bilan").show();

    // Affiche le score
    $("div#bilan div#recap").text("Score: " + score);
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
        tempsJeu++;
    }
}

// Fonction de dessin
function animer() {
    if(tempsJeu > tempsLimite) {
        afficheBilan();
    } else {
        // Efface tout le canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        var nbBalleDessinees = 0;

        // Dessine les balles
        for(var ball_index=0 ; ball_index < listeBalles.length ; ball_index++) {
            if(listeBalles[ball_index][0] == niveauCourant &&     // la balle appartient au niveau courant
               listeBalles[ball_index][6] == 1) {                 // la balle est visible
                dessineBalle(ctx, ball_index);
                nbBalleDessinees++;
            }
        }

        if(nbBalleDessinees == 0) {
            if(niveauCourant == dernierNiveau) {
                afficheBilan();
            } else {
                niveauCourant++;
            }
        }
    }
}

function dessineBalle(ctx, id_balle) {
    // Sauvegarde le contexte
    ctx.save();

    var id_couleur = listeBalles[id_balle][1];
    var id_taille =  listeBalles[id_balle][2];
    var position_x = listeBalles[id_balle][3];
    var vitesse =    listeBalles[id_balle][4];
    var position_y = listeBalles[id_balle][5];
    var visible =    listeBalles[id_balle][6];

    var couleur = listeCouleurs[id_couleur][1];
    var rayon = listeTailles[id_taille][0];

    // Met a jour la position y
    position_y += vitesse;
    listeBalles[id_balle][5] = position_y;

    // Debug
    //console.log("Balle " + id_balle + " position:" + position_x + " rayon:" + rayon + " couleur:" + couleur + " vitesse:" + vitesse);

    // Translation du contexte
    ctx.translate(position_x, position_y);

    // Dessine la balle
    ctx.beginPath();
    ctx.arc(0, 0, rayon, 0, 2 * Math.PI, false);
    ctx.fillStyle = couleur;
    ctx.fill();

    // Restaure le contexte
    ctx.restore();
}


// Handler
function clicCanvas(e) {
    // Position du click sur le document
    var x_sourie_document = e.pageX;
    var y_sourie_document = e.pageY;

    // Position du canvas sur le document
    var x_canvas = canvas.offsetLeft;
    var y_canvas = canvas.offsetTop;

    // Position du click sur le canvas
    var x_sourie_canvas = x_sourie_document - x_canvas;
    var y_sourie_canvas = y_sourie_document - y_canvas;

    // Test si le click est dans un cercle
    for(var ball_index=0 ; ball_index < listeBalles.length ; ball_index++) {
        if(listeBalles[ball_index][0] == niveauCourant) {
            var id_taille =  listeBalles[ball_index][2];
            var position_x = listeBalles[ball_index][3];
            var position_y = listeBalles[ball_index][5];
            var visible =    listeBalles[ball_index][6];
            var rayon = listeTailles[id_taille][0];

            if(visible == 1 &&
               Math.abs(position_x - x_sourie_canvas) < rayon &&
               Math.abs(position_y - y_sourie_canvas) < rayon) {
                // La balle devient invisible
                listeBalles[ball_index][6] = 0;

                // Stoppe la balle (vitesse nulle)
                listeBalles[ball_index][4] = 0;

                // Incrémente le score
                score++;
            }
        }
    }
}


function initVariables() {
    tempsJeu = 0;
    niveauCourant = 0;
    score = 0;           // TODO
}


function initDonnees() {
    // id couleur à sélectionner, id taille à sélectionner
    listeNiveaux = [[0, 0],
                    [1, 2]];

    // id niveau, id couleur, id taille, position x, vitesse, position y, visible
    listeBalles = [[0, 0, 0, 300, 3, 0, 1],
                   [0, 1, 1, 150, 2, 0, 1],
                   [0, 2, 2, 520, 1, 0, 1],
                   [1, 2, 2, 150, 3, 0, 1],
                   [1, 1, 0, 400, 1, 0, 1]];

    // rayon, label
    listeTailles = [[ 5, "petite"],
                    [10, "moyenne"],
                    [20, "grande"]];

    // label, code couleur
    listeCouleurs = [["rouge", "#ff0000"],
                     ["vert",  "#008000"],
                     ["bleu",  "#0000ff"]];
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
    
    initDonnees();
 
    // VARIABLES //////////////////////////////////////////////////////////////

    ecranCourant = "accueil";
    tempsLimite = 100; // en frames
    deltaTemps = 100;  // en ms
    dernierNiveau = 1;

    initVariables();
    
    canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        ctx = canvas.getContext('2d');
    } else {
        alert("Canvas non supporté par ce navigateur");
    }

    // GESTIONNAIRES //////////////////////////////////////////////////////////
    
    canvas.addEventListener("click", clicCanvas, false);
    // les autres sont directement définis dans les éléments "input" (boutons)...

    // RÈGLES /////////////////////////////////////////////////////////////////
    
    setInterval(regles, deltaTemps);  // appel la fonction "regles()" toutes les ...ms
    
    // LANCEMENT //////////////////////////////////////////////////////////////
    
    afficheAccueil();
}
