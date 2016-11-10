Vidéo 1: Javascript
-------------------

- Créé par Netscape en 1995
- Langage orienté objet
- `methodes` (ou `proprietes`) `DOM`: mécanisme qui permet de lire/modifier/supprimer des éléments du document HTML
- JS s'appui sur DOM pour transformer le document HTML
- `Manipulations statiques`: quand toutles les transformations (du document via DOM) sont faites côté client
- `Manipulations dynamiques`: quand les transformations font intervenir un serveur (AJAX, PHP, ...)

Exemple simple
~~~~~~~~~~~~~~

::

    <div id="foo">Bar</div>
    <script>
        document.getElementById("foo").innerHTML = "Baz";
    </script>

où `ìnnerHTML`` est une `propriété`.

Alternative::

    <div id="foo">Bar</div>
    <script src="baz.js"></script>

où le fichier `baz.js` contient::

    /* Un commentaire */
    document.getElementById("foo").innerHTML = "Baz";

Dans tous les cas, ``<script>...</script>`` doit être inscrit **après** ``<div>...</div>``.

Langage Javascript
~~~~~~~~~~~~~~~~~~~

Variables
*********

- les variables sont non typés
- le nom des variables peut contenir le caractère '&'

Exemple::

    <div id="foo"></div>    <!-- conteneur vide -->
    <script>
        var v1 = "foo";
        document.write(v1 + "<br>");

        v1 = 3;
        document.getElementById("foo").innerHTML = v1 + 5;
    </script>


Tableaux
********

Peut stocker des éléments de type différents.

Initialisation::

    // Methode 1

    var t1 = new Array();
    t1[0] = "foo";
    t1[3] = 5;            // il peut y avoir des "trous" dans les indices

    // Methode 2

    var t1 = new Array("foo", 5, "baz");

    // Methode 3

    var t1 = ["foo", 5, "baz"];

Lecture d'un élément::

    ... = t1[0];

Écriture d'un élément::

    t1[0] = ...;

Taille d'un tableau::

    ... = t1.length;

Concaténation des éléments d'un tableau::

    ... = t1.join(';');  // "foo;2;bar"


Fonctions
*********

Sans arguments et sans valeur de retour::

    function foo() {
        v1 = v1 + 3;
        document.getElementById("...").innerHTML = v1;
    }

    var v1 = 5;
    foo();

Arguments::

    function somme(a, b) {
        document.write(a + b);
    }

    somme(2, 3);

Valeur de retour::

    function somme(a, b) {
        var res = a + b;
        return res;
    }

    ... = somme(2, 3);


Portée des variables
********************

::

    var v1 = "bar";

    function foo() {
        var v2 = "bar";  // Déclaration AVEC le préfixe "var" => variable LOCALE
        v3 = "bar";      // Déclaration SANS le préfixe "var" => variable GLOBALE
    }

    document.write(v1);  // OK: v1 est une variable globale
    document.write(v2);  // ERREUR: v2 est une variable locale de foo()
    document.write(v3);  // OK: v3 est une variable globale

Structures conditionnelles
**************************

Boucles for::

    var t1 = ...;

    for(var i=0 ; i < tab.length ; i++) {
        ...
    }

If/then/else::

    if(...) {
        ...
    } else {
        ...
    }

Chaines de caractère
********************

::

    var foo = "...";

    ... = foo.charAt(0);  // Récupère le premier caractère de la chaine
    ... = foo.[0];        // Récupère le premier caractère de la chaine

    ... = foo.length;

Exécuter le code JS **après** que le document HTML soit **entièrement** chargé
******************************************************************************

Souvent nécessaire pour éviter des bugs!

::

    window.onload = function(){
        // code javascript concerné (les fonctions peuvent être définies en-dehors)
        ...
    }


Vidéo 2: Outils de debug
------------------------

Outils intégrés aux navigateurs:
- console d'erreur
- debugger
- inspecteur

Console d'erreur Firefox:
- outils / dev web / console web
- affiche les erreurs, les avertissements et les messages console JS ``console.log("...");``
- permet de filtrer les message en fonction de leur provenance: réseau, CSS, JS, ... (cliquer sur les boutons pour activer/désactiver les sources de message)
- permet d'écrire interactivement du code (en bas) ; il y a aussi l'`ardoise JS` pour ça
  
  - exemple: taper le nom d'une variable dans la barre de commande du bas puis cliquer sur le nom de la variable pour afficher son contenu (contenu détaillé si c'est un objet, ...)

Debugger:
- définir les points d'arrêts
- utiliser les "expressions espionnes" pour voir la valeur des variables, etc. (à droite)
